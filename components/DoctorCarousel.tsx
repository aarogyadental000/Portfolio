"use client";

import Image from "next/image";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import type { Doctor } from "@/data/doctor";
import { BookButton, CallButton } from "./Buttons";
import Reveal from "./Reveal";

const credentials: { label: string; value: (doctor: Doctor) => string }[] = [
  { label: "Qualification", value: (doctor) => doctor.qualification },
  { label: "Specialization", value: (doctor) => doctor.specialization },
  { label: "Experience", value: (doctor) => doctor.experience },
];

export default function DoctorCarousel({ doctors }: { doctors: Doctor[] }) {
  const [index, setIndex] = useState(0);
  const doctor = doctors[index];
  const next = () => setIndex((current) => (current + 1) % doctors.length);

  return (
    <div className="grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-16">
      <Reveal>
        <div className="relative mx-auto max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand-100/70 dark:bg-primary/15"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10">
            <button
              type="button"
              onClick={next}
              aria-label={`Show next doctor (${index + 1} of ${doctors.length})`}
              className="relative block aspect-[4/5] w-full"
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
                  className={`object-cover transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
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
          <p className="mt-2 text-lg font-medium text-accent">
            {doctor.qualification}
          </p>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {doctor.specialization}
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {doctor.bio}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every treatment begins with listening — understanding your
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
            <CallButton size="lg" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
