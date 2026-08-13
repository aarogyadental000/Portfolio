import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";
import { ButtonLink, CallButton, WhatsAppButton } from "@/components/Buttons";
import ServicePhotoCard from "@/components/ServicePhotoCard";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the complete range of dental treatments we offer in Gokarneshwor, Kathmandu, from routine checkups and cleanings to root canals, crowns and orthodontics.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary pb-16 pt-28 lg:pb-20 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-400/10"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Services
            </Link>

            <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
              Our Services
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Comprehensive dental care, all in one place
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From routine checkups and cleanings to root canals, crowns and
              orthodontics, we provide complete care for your oral health in a
              calm, comfortable environment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 2) * 100}>
                <ServicePhotoCard service={service} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-secondary/60 p-8 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-semibold text-foreground">
                    Not sure which treatment you need?
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us what is bothering you and we will guide you to the
                    right care.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#contact">Book a Consultation</ButtonLink>
                <CallButton label="Call Now" />
                <WhatsAppButton />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
