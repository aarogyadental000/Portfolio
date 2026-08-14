import Image from "next/image";
import Link from "next/link";
import {
  Award,
  HeartHandshake,
  MessageSquareText,
  MessagesSquare,
  Sparkles,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { stats } from "@/data/stats";

const reasons = [
  {
    icon: Award,
    title: "Experienced Care",
    text: "Professional dental care focused on individual patient needs.",
  },
  {
    icon: Sparkles,
    title: "Modern Approach",
    text: "Contemporary dental techniques and equipment used where appropriate.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Comfort",
    text: "A calm and welcoming environment designed to make visits more comfortable.",
  },
  {
    icon: UserCheck,
    title: "Personalized Treatment",
    text: "Treatment recommendations based on each patient's individual needs.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent Communication",
    text: "We clearly explain treatment options and answer your questions.",
  },
];

const FEATURE_INDEX = 2;

const pad = (value: number) => String(value + 1).padStart(2, "0");

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Clinic That Puts You First"
            description="Every decision in our clinic starts with one question: what is best for the patient?"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group relative flex items-center gap-3 px-4 py-8 transition-colors hover:bg-mist-50 dark:hover:bg-white/5 sm:px-6 ${
                    index >= 2 ? "border-t border-border lg:border-t-0" : ""
                  } ${index > 0 ? "border-l border-border" : ""}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon
                      className="h-5 w-5 group-hover:animate-icon-bounce"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex flex-col text-left">
                    <p className="text-3xl font-semibold leading-none tracking-tight text-brand-700 transition-colors group-hover:text-accent">
                      <CountUp value={stat.value} />
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-2 h-0.5 w-8 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {reasons.map((reason, index) => {
            const isFeature = index === FEATURE_INDEX;
            const Icon = reason.icon;

            if (isFeature) {
              return (
                <Reveal
                  key={reason.title}
                  className="sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1"
                >
                  <article className="group relative flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                    <Image
                      src="/images/clinic-bright.webp"
                      alt="Bright and clean dental clinic room"
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/35 to-ink-950/10"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-sm font-semibold text-foreground shadow-lg backdrop-blur"
                    >
                      {pad(index)}
                    </span>

                    <div className="relative p-6 sm:p-7">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                        {reason.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                        {reason.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            }

            return (
              <Reveal key={reason.title} delay={(index % 3) * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-secondary/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-3 text-4xl font-semibold leading-none text-brand-900/5 dark:text-white/5"
                  >
                    {pad(index)}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shadow-brand-900/10">
                    <Icon
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            );
          })}

          <Reveal
            delay={160}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link
              href="/#contact"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-brand-700 p-6 text-white transition-colors duration-300 hover:bg-brand-600"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 text-brand-500/30"
              >
                <MessagesSquare className="h-24 w-24" />
              </span>
              <div className="relative">
                <h3 className="font-semibold">Not sure what you need?</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">
                  Ask us. We will gladly guide you toward the right treatment
                  for your smile.
                </p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                Talk to us
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
