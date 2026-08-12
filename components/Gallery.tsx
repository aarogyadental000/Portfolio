"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const PER_PAGE = 6;

export default function Gallery() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(galleryImages.length / PER_PAGE);
  const start = page * PER_PAGE;
  const pageImages = galleryImages.slice(start, start + PER_PAGE);

  const goTo = (target: number) => {
    setPage(target);
    document
      .getElementById("gallery-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

        <div
          id="gallery-grid"
          className="mt-14 grid scroll-mt-24 grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[13rem]"
        >
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
                <figure className="group relative h-full overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] md:absolute md:inset-0 md:aspect-auto">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 66vw, 100vw"
                          : "(min-width: 1024px) 33vw, 100vw"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
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
                className={`h-10 w-10 rounded-full text-sm font-medium transition-colors ${
                  i === page
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:border-accent hover:text-accent"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
