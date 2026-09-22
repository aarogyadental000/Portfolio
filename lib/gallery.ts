import fs from "node:fs/promises";
import path from "node:path";
import { branches } from "./clinic";

export type GalleryImage = {
  src: string;
  alt: string;
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const fileNameCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

const galleryFolderName = (branchSlug: string) =>
  path.join(process.cwd(), "public", "images", "gallery", branchSlug);

function altFromFileName(fileName: string): string {
  const base = fileName.replace(/\.[^.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

export async function readBranchGallery(
  branchSlug: string,
): Promise<GalleryImage[]> {
  let files: string[];
  try {
    files = await fs.readdir(galleryFolderName(branchSlug));
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => fileNameCollator.compare(a, b))
    .map((file) => ({
      src: `/images/gallery/${branchSlug}/${file}`,
      alt: altFromFileName(file),
    }));
}

export async function readBranchGalleryMap(): Promise<
  Record<string, GalleryImage[]>
> {
  const entries = await Promise.all(
    branches.map(async (branch) => [
      branch.slug,
      await readBranchGallery(branch.slug),
    ]),
  );
  return Object.fromEntries(entries);
}