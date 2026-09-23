"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ButtonLink } from "./Buttons";
import { useBranch } from "./BranchProvider";

const PER_PAGE_DESKTOP = 9;
const PER_PAGE_MOBILE = 6;
const HOME_PREVIEW_LIMIT = 6;

type GalleryProps = {
  imagesByBranch: Record<string, GalleryImage[]>;
};

export default function Gallery({ imagesByBranch }: GalleryProps) {
  const { branch } = useBranch();
  const galleryImages = imagesByBranch[branch.slug] ?? [];

  return (
    <section id="gallery" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Clinic"
            title="Our Work, Our Space"
            description="A calm, modern clinic paired with real results from our patients."
          />
        </Reveal>

        <HomePreview
          key={branch.slug}
          images={galleryImages}
          branchName={branch.shortName}
        />
      </div>
    </section>
  );
}

export function FullGallery({ imagesByBranch }: GalleryProps) {
  const { branch } = useBranch();
  const galleryImages = imagesByBranch[branch.slug] ?? [];

  return (
    <>
      <section className="relative overflow-hidden bg-secondary pb-16 pt-28 lg:pb-20 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-400/10"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/#gallery"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Gallery
            </Link>

            <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
              Our Clinic
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Our work, our space — {branch.shortName}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {galleryImages.length > 0
                ? `Browse through ${galleryImages.length} photos showcasing our ${branch.shortName} clinic and patient results.`
                : `Photos of our ${branch.shortName} clinic and patient results are being added.`}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid
            key={branch.slug}
            images={galleryImages}
            branchName={branch.shortName}
          />
        </div>
      </section>
    </>
  );
}

function subscribeToBreakpoint(onChange: () => void) {
  const media = window.matchMedia("(min-width: 768px)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePerPage() {
  return useSyncExternalStore(
    subscribeToBreakpoint,
    () =>
      window.matchMedia("(min-width: 768px)").matches
        ? PER_PAGE_DESKTOP
        : PER_PAGE_MOBILE,
    () => PER_PAGE_DESKTOP,
  );
}

function HomePreview({
  images,
  branchName,
}: {
  images: GalleryImage[];
  branchName: string;
}) {
  const preview = images.slice(0, HOME_PREVIEW_LIMIT);
  const hasMore = images.length > preview.length;

  return (
    <>
      <div
        id="gallery-grid"
        className="mt-14 grid scroll-mt-24 grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[13rem]"
      >
        {preview.length === 0 && <EmptyGallery branchName={branchName} />}
        {preview.map((image, index) => (
          <GalleryItem key={image.src} image={image} index={index} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/gallery" size="lg">
            View Full Gallery
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      )}
    </>
  );
}

function GalleryGrid({
  images,
  branchName,
}: {
  images: GalleryImage[];
  branchName: string;
}) {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(images.length / perPage));
  const current = Math.min(page, pageCount - 1);
  const start = current * perPage;
  const pageImages = images.slice(start, start + perPage);

  const goTo = (target: number) => {
    const next = Math.min(Math.max(target, 0), pageCount - 1);
    setPage(next);
    document
      .getElementById("gallery-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        id="gallery-grid"
        className="mt-6 grid scroll-mt-24 grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[13rem]"
      >
        {pageImages.length === 0 && <EmptyGallery branchName={branchName} />}
        {pageImages.map((image, index) => (
          <GalleryItem key={image.src} image={image} index={index} />
        ))}
      </div>

      {pageCount > 1 && (
        <nav
          aria-label="Gallery pages"
          className="mt-10 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-current={i === current ? "page" : undefined}
              aria-label={`Go to page ${i + 1}`}
              className={`h-10 w-10 rounded-full text-sm font-medium transition-all ${
                i === current
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:border-accent hover:text-accent hover:shadow-sm"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === pageCount - 1}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      )}
    </>
  );
}

function GalleryItem({
  image,
  index,
}: {
  image: GalleryImage;
  index: number;
}) {
  const fileName = image.src.split("/").pop() ?? image.src;
  const layoutClass =
    index === 0
      ? "md:col-span-2 md:row-span-2"
      : index === 1 || index === 2
        ? "md:col-start-3"
        : "";

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${layoutClass}`}
    >
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${image.alt}`}
        className="absolute inset-0 z-10"
      />
      <div className="relative aspect-[4/3] md:absolute md:inset-0 md:aspect-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            index === 0
              ? "(min-width: 1024px) 66vw, (min-width: 768px) 33vw, 50vw"
              : "(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 50vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <figcaption className="absolute inset-x-4 bottom-4 translate-y-1 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {fileName}
      </figcaption>
    </div>
  );
}

function EmptyGallery({ branchName }: { branchName: string }) {
  return (
    <div className="col-span-2 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-16 text-center md:col-span-3">
      <p className="font-semibold text-foreground">Gallery coming soon</p>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Photos of our {branchName} clinic and patient results are being added.
      </p>
    </div>
  );
}