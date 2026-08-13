"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  UserRound,
  X,
} from "lucide-react";
import type { Doctor } from "@/data/doctor";
import { BookButton } from "./Buttons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
  const [showBio, setShowBio] = useState(false);
  const bioDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = hoursDialogRef.current;
    if (!dialog) return;
    if (showHours && !dialog.open) dialog.showModal();
    else if (!showHours && dialog.open) dialog.close();
  }, [showHours]);

  useEffect(() => {
    const dialog = bioDialogRef.current;
    if (!dialog) return;
    if (showBio && !dialog.open) dialog.showModal();
    else if (!showBio && dialog.open) dialog.close();
  }, [showBio]);

  useEffect(() => {
    document.body.style.overflow = showHours || showBio ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHours, showBio]);

  const next = () => setIndex((current) => (current + 1) % doctors.length);
  const prev = () =>
    setIndex((current) => (current - 1 + doctors.length) % doctors.length);

  useEffect(() => {
    if (paused || showHours || showBio || doctors.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % doctors.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, showHours, showBio, index, doctors.length]);

  return (
    <section id="doctor" className="relative bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <Reveal>
            <SectionHeading
              eyebrow="Meet Your Dentist"
              title="Our Doctors"
              description="Tap a doctor to read their bio, or tap View Working Hours for their schedule."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {doctors.map((item, i) => (
              <Reveal key={item.photoUrl} delay={(i % 2) * 80} className="h-full">
                <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm shadow-ink-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => {
                      setIndex(i);
                      setShowBio(true);
                    }}
                    aria-label={`View ${item.name}'s bio`}
                    className="relative block aspect-[4/3] w-full overflow-hidden"
                  >
                    <Image
                      src={item.photoUrl}
                      alt={item.photoAlt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center bg-ink-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
                        <UserRound className="h-4 w-4" aria-hidden="true" />
                        View Bio
                      </span>
                    </div>
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      Dr. {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {item.specialization}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.qualification}
                    </p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.experience}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIndex(i);
                        setShowHours(true);
                      }}
                      aria-label={`View ${item.name}'s working hours`}
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors group-hover:border-accent group-hover:text-accent"
                    >
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      View Working Hours
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-14 lg:grid lg:grid-cols-[5fr_6fr] lg:gap-16">
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
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background hover:text-accent lg:flex"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next doctor"
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background hover:text-accent lg:flex"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <dialog
        ref={bioDialogRef}
        onClose={() => setShowBio(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setShowBio(false);
        }}
        aria-labelledby="doctor-bio-title"
        className="m-auto w-full max-w-md rounded-3xl border border-border bg-card p-6 text-foreground shadow-xl sm:p-8 backdrop:bg-ink-950/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
              <UserRound className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="doctor-bio-title"
                className="font-semibold tracking-tight text-foreground"
              >
                Dr. {doctor.name}
              </h2>
              <p className="text-sm text-muted-foreground">{doctor.specialization}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowBio(false)}
            aria-label="Close doctor bio"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {doctor.bio}
        </p>

        <dl className="mt-6 divide-y divide-border border-y border-border">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-sm font-medium text-foreground">Qualification</dt>
            <dd className="text-sm text-muted-foreground">{doctor.qualification}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-sm font-medium text-foreground">Experience</dt>
            <dd className="text-sm text-muted-foreground">{doctor.experience}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <BookButton className="w-full" onClick={() => setShowBio(false)} />
        </div>
      </dialog>

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
          <BookButton className="w-full" onClick={() => setShowHours(false)} />
        </div>
      </dialog>
    </section>
  );
}
