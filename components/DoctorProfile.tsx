import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { doctorInfo } from "@/data/doctor";
import { BookButton, CallButton } from "./Buttons";
import Reveal from "./Reveal";

export default function DoctorProfile() {
  return (
    <section id="doctor" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand-100/70 dark:bg-primary/15"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10">
              <Image
                src={doctorInfo.photoUrl}
                alt={doctorInfo.photoAlt}
                width={640}
                height={800}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
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
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
              Meet Your Dentist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Dr. {doctorInfo.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-accent">
              {doctorInfo.qualification}
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {doctorInfo.specialization}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {doctorInfo.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every treatment begins with listening — understanding your
              concerns, explaining your options clearly, and building a plan
              around what feels right for you.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {doctorInfo.credentials.map((credential) => (
                <div
                  key={credential}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {credential.includes("QUALIFICATION")
                      ? "Qualification"
                      : credential.includes("SPECIALIZATION")
                        ? "Specialization"
                        : "Experience"}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-foreground">
                    {credential}
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
    </section>
  );
}
