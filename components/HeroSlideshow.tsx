"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/hero";

const AUTOPLAY_INTERVAL = 5000;

const effects = [
  "animate-hero-fade",
  "animate-hero-slide-right",
  "animate-hero-slide-up",
  "animate-hero-zoom",
  "animate-hero-blur",
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [sequence, setSequence] = useState(0);
  const [paused, setPaused] = useState(false);

  const effect = effects[sequence % effects.length];

  const advance = (target: number) => {
    setIndex(target);
    setSequence((value) => value + 1);
  };

  const next = () => advance((index + 1) % heroSlides.length);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
      setSequence((value) => value + 1);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, index]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        onClick={next}
        aria-label={`Show next photo (${index + 1} of ${heroSlides.length})`}
        className="relative block aspect-[6/7] w-full"
      >
        {heroSlides.map((slide, i) => {
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
              className={`object-cover transition-opacity duration-500 ${
                active ? `opacity-100 ${effect}` : "opacity-0"
              }`}
            />
          );
        })}
      </button>

      <div className="absolute bottom-5 right-5 flex gap-2">
        {heroSlides.map((slide, i) => (
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
