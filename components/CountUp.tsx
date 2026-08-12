"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1200;

function parseValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: value };
  }
  const target = Number(match[1].replace(/,/g, ""));
  return { target: Number.isFinite(target) ? target : 0, suffix: match[2] };
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const { target, suffix } = parseValue(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const run = () => {
      if (reducedMotion) {
        setDisplay(target);
        return;
      }

      let start: number | undefined;

      const tick = (timestamp: number) => {
        if (start === undefined) start = timestamp;
        const progress = Math.min((timestamp - start) / DURATION, 1);
        setDisplay(Math.round(target * easeOutCubic(progress)));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
