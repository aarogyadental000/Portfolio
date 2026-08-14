"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";
import { galleryImagesByBranch } from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useBranch } from "./BranchProvider";

const PER_PAGE_DESKTOP = 9;
const PER_PAGE_MOBILE = 6;

export default function Gallery() {
  const { branch } = useBranch();
  const galleryImages = galleryImagesByBranch[branch.slug] ?? [];

  return (
    <section id="gallery" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Clinic"
            title="A Look Inside"
            description="A calm, clean and modern space designed with your comfort in mind."
          />
        </Reveal>

        <GalleryGrid
          key={branch.slug}
          images={galleryImages}
          branchName={branch.shortName}
        />
      </div>
    </section>
  );
}

function GalleryGrid({
  images,
  branchName,
}: {
  images: GalleryImage[];
  branchName: string;
}) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(PER_PAGE_DESKTOP);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setPerPage(media.matches ? PER_PAGE_DESKTOP : PER_PAGE_MOBILE);
      setPage(0);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const pageCount = Math.ceil(images.length / perPage);
  const start = page * perPage;
  const pageImages = images.slice(start, start + perPage);

  const goTo = (target: number) => {
    setPage(target);
    document
      .getElementById("gallery-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        id="gallery-grid"
        className="mt-14 grid scroll-mt-24 grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[13rem]"
      >
        {pageImages.length === 0 && (
          <div className="col-span-2 flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-16 text-center md:col-span-3">
            <p className="font-semibold text-foreground">Gallery coming soon</p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Photos for the {branchName} branch are being added.
            </p>
          </div>
        )}
        {pageImages.map((image, index) => {
          const layoutClass =
            index === 0
              ? "md:col-span-2 md:row-span-2"
              : index === 1 || index === 2
                ? "md:col-start-3"
                : "";

          return (
            <Reveal
              key={image.src}
              delay={(index % 3) * 80}
              className={layoutClass}
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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
                  {image.alt}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>

      {pageCount > 1 && (
        <nav
          aria-label="Gallery pages"
          className="mt-10 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
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
              aria-current={i === page ? "page" : undefined}
              aria-label={`Go to page ${i + 1}`}
              className={`h-10 w-10 rounded-full text-sm font-medium transition-all ${
                i === page
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:border-accent hover:text-accent hover:shadow-sm"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount - 1}
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
