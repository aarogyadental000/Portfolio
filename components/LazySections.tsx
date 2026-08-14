"use client";

import dynamic from "next/dynamic";

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted ${className}`} aria-hidden="true" />
  );
}

function SectionHeadingSkeleton() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Skeleton className="mx-auto h-3 w-24 rounded-full" />
      <Skeleton className="mx-auto mt-4 h-8 w-48 rounded-full" />
      <Skeleton className="mx-auto mt-3 h-4 w-64 rounded-full" />
    </div>
  );
}

export const DoctorCarousel = dynamic(() => import("./DoctorCarousel"), {
  loading: () => (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingSkeleton />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
              <Skeleton className="mt-4 h-5 w-2/3 rounded-full" />
              <Skeleton className="mt-2 h-4 w-1/3 rounded-full" />
              <Skeleton className="mt-4 h-10 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

export const Gallery = dynamic(() => import("./Gallery"), {
  loading: () => (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingSkeleton />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[13rem]">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className={`w-full rounded-2xl ${
                i === 0
                  ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto"
                  : "aspect-[4/3] md:aspect-auto"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  ),
});
