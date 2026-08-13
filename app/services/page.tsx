import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";
import { ButtonLink, CallButton, WhatsAppButton } from "@/components/Buttons";

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
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(index % 2) * 100}>
                  <a
                    href={`/services/${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md md:flex-row"
                  >
                    <div className="relative h-56 shrink-0 overflow-hidden md:h-auto md:w-56 lg:w-64">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 768px) 256px, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="text-lg font-semibold tracking-tight text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
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
