"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Clock, X } from "lucide-react";
import type { Doctor } from "@/data/doctor";
import { BookButton } from "./Buttons";
import Reveal from "./Reveal";

const AUTOPLAY_INTERVAL = 5000;

const credentials: { label: string; value: (doctor: Doctor) => string }[] = [
  { label: "Qualification", value: (doctor) => doctor.qualification },
  { label: "Specialization", value: (doctor) => doctor.specialization },
  { label: "Experience", value: (doctor) => doctor.experience },
];

export default function DoctorCarousel({ doctors }: { doctors: Doctor[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const doctor = doctors[index];
  const [showHours, setShowHours] = useState(false);
  const hoursDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = hoursDialogRef.current;
    if (!dialog) return;
    if (showHours && !dialog.open) dialog.showModal();
    else if (!showHours && dialog.open) dialog.close();
  }, [showHours]);

  useEffect(() => {
    document.body.style.overflow = showHours ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHours]);

  const next = () => setIndex((current) => (current + 1) % doctors.length);
  const prev = () =>
    setIndex((current) => (current - 1 + doctors.length) % doctors.length);

  useEffect(() => {
    if (paused || doctors.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % doctors.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, index, doctors.length]);

  return (
    <section id="doctor" className="relative bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <Reveal>
            <div
              className="relative mx-auto max-w-sm lg:max-w-none"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand-100/70 dark:bg-primary/15"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10">
                <button
                  type="button"
                  onClick={next}
                  aria-label={`Show next doctor (${index + 1} of ${doctors.length})`}
                  className="group relative block aspect-[4/5] w-full"
                >
                  {doctors.map((item, i) => (
                    <Image
                      key={item.photoUrl}
                      src={item.photoUrl}
                      alt={item.photoAlt}
                      fill
                      priority={i === 0}
                      loading={i === 0 ? undefined : "lazy"}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      aria-hidden={i !== index}
                      inert={i !== index || undefined}
                      className={`object-cover transition duration-700 ${
                        i === index
                          ? "opacity-100 group-hover:scale-105"
                          : "opacity-0"
                      }`}
                    />
                  ))}
                </button>
              </div>

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 shadow-lg shadow-ink-950/10 backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-foreground">
                  Your Dentist
                </span>
              </div>

              {doctors.length > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-2 rounded-full bg-background/80 p-1.5 shadow-lg shadow-ink-950/10 backdrop-blur">
                  {doctors.map((item, i) => (
                    <button
                      key={item.photoUrl}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Go to doctor ${i + 1}`}
                      aria-current={i === index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-5 bg-accent"
                          : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div aria-live="polite">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
                Meet Your Dentist
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Dr. {doctor.name}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {doctor.bio}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every treatment begins with listening: understanding your
                concerns, explaining your options clearly, and building a plan
                around what feels right for you.
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {credentials.map((credential) => (
                  <div
                    key={credential.label}
                    className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
                  >
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {credential.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-foreground">
                      {credential.value(doctor)}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookButton size="lg" />
                <button
                  type="button"
                  onClick={() => setShowHours(true)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-base font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Working Hours
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous doctor"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background hover:text-accent"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next doctor"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background hover:text-accent"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <dialog
        ref={hoursDialogRef}
        onClose={() => setShowHours(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setShowHours(false);
        }}
        aria-labelledby="working-hours-title"
        className="m-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 text-foreground shadow-xl sm:p-8 backdrop:bg-ink-950/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="working-hours-title"
                className="font-semibold tracking-tight text-foreground"
              >
                Working Hours
              </h2>
              <p className="text-sm text-muted-foreground">Dr. {doctor.name}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowHours(false)}
            aria-label="Close working hours"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <dl className="mt-6 divide-y divide-border border-y border-border">
          {doctor.hours.map((entry) => (
            <div
              key={entry.days}
              className="flex items-center justify-between gap-4 py-3"
            >
              <dt className="text-sm font-medium text-foreground">
                {entry.days}
              </dt>
              <dd className="text-sm text-muted-foreground">{entry.time}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <BookButton className="w-full" />
        </div>
      </dialog>
    </section>
  );
}
