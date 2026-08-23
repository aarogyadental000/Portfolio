import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  CircleDollarSign,
} from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { clinicInfo, siteUrl } from "@/lib/clinic";
import { ButtonLink, CallButton, WhatsAppButton } from "@/components/Buttons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicePhotoCard from "@/components/ServicePhotoCard";
import ShinyText from "@/components/ShinyText";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${siteUrl}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${clinicInfo.shortName}`,
      description: service.description,
      url,
      siteName: clinicInfo.name,
      images: [
        {
          url: service.image,
          width: 1800,
          height: 1350,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary pb-16 pt-28 lg:pb-20 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-400/10"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Services
            </Link>

            <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
              Our Services
            </p>

            <div className="mt-4 flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm shadow-brand-900/10">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-mist-100 dark:bg-muted"
              />
              <div className="group relative overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-ink-950/10">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={880}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 shadow-lg shadow-ink-950/10 backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-foreground">
                  At {clinicInfo.shortName}, care comes first
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                About this treatment
              </h2>
              <div className="mt-6 space-y-5">
                {service.longDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-foreground">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-accent"
                  >
                    <span className="text-sm font-semibold">1</span>
                  </span>
                  What to expect
                </h2>
                <ol className="mt-6 space-y-4">
                  {service.whatToExpect.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-accent"
                      >
                        {index + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-foreground">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-accent"
                  >
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  Who it is for & benefits
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-accent"
                      >
                        <Check
                          className="h-3 w-3"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="mt-6 flex items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                <CircleDollarSign className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-semibold text-foreground">
                  Clear pricing, no surprises
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {service.pricingNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-brand-900 px-7 py-12 text-center shadow-xl shadow-brand-900/20 sm:px-10 lg:py-16">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                <ShinyText
                  text={`Ready to book ${service.title.toLowerCase()}?`}
                  color="#e0f2fe"
                  shineColor="#ffffff"
                  speed={5}
                />
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-brand-100">
                Tell us a little about what you need and we will get back to
                you to confirm your visit.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href={`/?service=${service.slug}#contact`}
                  size="lg"
                >
                  Book this service
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <CallButton
                  size="lg"
                  variant="light"
                  label="Call the Clinic"
                />
                <WhatsAppButton size="lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="More Treatments"
              title="Explore other services"
              description="Complete dental and maxillofacial care under one roof."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {otherServices.map((item, index) => {
              const isMaxillo = item.slug === "oral-surgery" || item.slug === "dental-prosthesis";
              return (
                <Reveal key={item.slug} delay={(index % 3) * 80}>
                  <div className="relative">
                    {isMaxillo && (
                      <span className="absolute -top-2 -right-2 z-10 rounded-full bg-brand-700 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                        Maxillofacial
                      </span>
                    )}
                    <ServicePhotoCard service={item} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
