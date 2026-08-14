import Image from "next/image";
import { ExternalLink, Quote, Star } from "lucide-react";
import { testimonials, showTestimonials } from "@/data/testimonials";
import { clinicInfo } from "@/lib/clinic";
import Reveal from "./Reveal";

function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export default function Testimonials() {
  if (!showTestimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-7 bg-brand-600 dark:bg-brand-400" />
              Testimonials
              <span aria-hidden="true" className="h-px w-7 bg-brand-600 dark:bg-brand-400" />
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              What Our Patients Say
            </h2>
            <p className="mt-5 text-base leading-loose text-muted-foreground sm:text-lg">
              Don&apos;t just take our word for it — hear from our satisfied patients who
              trust us with their smiles.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <figure className="flex h-full min-h-80 flex-col rounded-2xl border border-border bg-card p-8 shadow-[0_4px_18px_rgba(23,41,58,0.07)] dark:shadow-black/20 sm:p-9">
                <Quote
                  className="h-9 w-9 fill-brand-200 text-brand-200 dark:fill-brand-400/40 dark:text-brand-400/40"
                  aria-hidden="true"
                />

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground italic sm:text-[1.02rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3">
                  {testimonial.photo ? (
                    <Image
                      src={testimonial.photo}
                      alt={`${testimonial.name}'s profile photo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white dark:bg-brand-400 dark:text-brand-950"
                      aria-hidden="true"
                    >
                      {getInitial(testimonial.name)}
                    </span>
                  )}
                  <div>
                    {testimonial.url ? (
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground transition-colors hover:text-accent"
                      >
                        {testimonial.name}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                    )}
                    <div
                      className="mt-1 flex gap-0.5 text-amber-500"
                      role="img"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-current"
                              : "fill-none stroke-current opacity-40"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {clinicInfo.reviewsUrl && (
          <Reveal>
            <div className="mt-10 text-center">
              <a
                href={clinicInfo.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Read our Google reviews
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
