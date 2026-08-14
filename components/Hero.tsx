"use client";

import { ArrowRight, Check, Phone } from "lucide-react";
import { ButtonLink, CallButton } from "./Buttons";
import HeroSlideshow from "./HeroSlideshow";
import { ToothMark } from "./Logo";
import Reveal from "./Reveal";
import ShinyText from "./ShinyText";

const trustPoints = [
  "Maxillofacial & Implant Surgery",
  "Full-Service General Dentistry",
  "10+ Years of Clinical Excellence",
  "Transparent, Honest Guidance",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex justify-end pr-8 pt-10 opacity-[0.06]"
      >
        <ToothMark className="h-[28rem] w-[28rem] text-brand-900" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-400/10"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-40">
        <Reveal>
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent shadow-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Maxillofacial Care & General Dentistry
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Surgical Precision.{" "}
              <ShinyText
                text="Compassionate Dentistry."
                color="#0284c7"
                shineColor="#7dd3fc"
                speed={4}
              />
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We&apos;re not just another dental clinic. Aarogya Maxillofacial & Dental
              Care brings the full depth of oral and maxillofacial surgery
              implants, extractions, jaw procedures together with warm,
              patient-first general dentistry. One location, one team, no
              referral runarounds.
            </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="relative">
                  <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-primary/30 animate-pulse-ring" />
                  <ButtonLink href="/#contact" size="lg">
                    Book a Consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </span>
                <span className="hidden md:inline-flex">
                  <CallButton size="lg" />
                </span>
                <ButtonLink
                  href="/#services"
                  size="lg"
                  variant="outline"
                  className="md:hidden"
                >
                  Our Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>

              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                Free consultation • No hidden fees • Same-day appointments available
              </p>

             <ul className="mt-10 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
               {trustPoints.map((point) => (
                 <li key={point} className="flex items-start gap-2.5">
                   <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-accent">
                     <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                   </span>
                   <span className="text-sm font-medium text-muted-foreground">
                     {point}
                   </span>
                 </li>
               ))}
             </ul>

          </div>
        </Reveal>

        <Reveal delay={120} className="hidden md:block">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-brand-100/70 dark:bg-primary/15"
            />
            <HeroSlideshow />

            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg shadow-ink-950/5 sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Book by phone
                </p>
                <p className="text-sm font-semibold text-foreground">Call the clinic today</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
