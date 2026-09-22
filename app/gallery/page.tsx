import type { Metadata } from "next";
import { FullGallery } from "@/components/Gallery";
import { readBranchGalleryMap } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of our modern, clean and comfortable dental clinic in Kathmandu, Nepal.",
};

export default async function GalleryPage() {
  const imagesByBranch = await readBranchGalleryMap();
  return <FullGallery imagesByBranch={imagesByBranch} />;
}