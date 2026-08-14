"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { ButtonLink } from "./Buttons";
import { useBranch } from "./BranchProvider";

const highlights = [
  {
    icon: HeartHandshake,
    title: "In-house maxillofacial care",
    text: "Implants, extractions, and jaw surgery performed by our own surgical team no outside referrals.",
  },
  {
    icon: Sparkles,
    title: "Complete general dentistry",
    text: "Cleanings, root canals, orthodontics, and cosmetic work from clinicians who know your full history.",
  },
  {
    icon: BadgeCheck,
    title: "Honest, transparent guidance",
    text: "We explain every option, cost, and timeline before treatment begins — no hidden fees, no pressure.",
  },
];

export default function AboutClinic() {
  const { branch } = useBranch();
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-mist-100 dark:bg-muted"
            />
            <div className="group relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10">
              <Image
                src="/images/clinic-room.webp"
                alt="Modern, well-equipped dental clinic treatment room"
                width={760}
                height={620}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-brand-700 px-5 py-4 text-white shadow-lg shadow-brand-900/20 sm:right-8">
              <p className="text-2xl font-semibold leading-none">Your Smile</p>
              <p className="mt-1 text-sm text-brand-100">Our Priority</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
              About Our Clinic
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Maxillofacial Expertise, Complete Dental Care
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our {branch.shortName} clinic is different from most practices in
              Kathmandu. While many dental offices refer complex cases elsewhere,
              Aarogya Maxillofacial & Dental Care handles everything from routine
              cleanings and orthodontics to oral surgery and jaw procedures
              under one roof, with one consistent team.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              That means no awkward referrals, no repeating your history to a new
              surgeon, and no gap between your general dentist and your
              specialist. Every treatment plan is coordinated, transparent, and
              designed around your comfort.
            </p>

            <ul className="mt-8 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <ButtonLink href="/#doctor" variant="outline" className="group">
                Meet Your Dentist
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
