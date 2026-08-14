"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/data/hero";
import { heroSlidesByBranch } from "@/data/hero";
import { useBranch } from "./BranchProvider";

const AUTOPLAY_INTERVAL = 2000;

export default function HeroSlideshow() {
  const { branch } = useBranch();
  const heroSlides = heroSlidesByBranch[branch.slug] ?? [];

  if (heroSlides.length === 0) return null;

  return <Slideshow key={branch.slug} slides={heroSlides} />;
}

function Slideshow({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = (target: number) => {
    setIndex(target);
  };

  const next = () => advance((index + 1) % slides.length);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, index, slides.length]);

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        onClick={next}
        aria-label={`Show next photo (${index + 1} of ${slides.length})`}
        className="relative block aspect-[6/7] w-full"
      >
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              sizes="(min-width: 1024px) 42vw, 100vw"
              aria-hidden={!active}
              inert={!active || undefined}
              className={`object-cover transition duration-700 ${
                active
                  ? "opacity-100 animate-hero-fade group-hover:scale-105"
                  : "opacity-0"
              }`}
            />
          );
        })}
      </button>

      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => advance(i)}
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
