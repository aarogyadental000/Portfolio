"use client";

import Image from "next/image";
import { useState } from "react";
import { heroSlides } from "@/data/hero";

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((current) => (current + 1) % heroSlides.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10">
      <button
        type="button"
        onClick={next}
        aria-label={`Show next photo (${index + 1} of ${heroSlides.length})`}
        className="relative block aspect-[6/7] w-full"
      >
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : "lazy"}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className={`object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </button>

      <div className="absolute bottom-5 right-5 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
