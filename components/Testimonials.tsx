import { ExternalLink, Quote, Star } from "lucide-react";
import { testimonials, showTestimonials } from "@/data/testimonials";
import { clinicInfo } from "@/lib/clinic";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export default function Testimonials() {
  if (!showTestimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Stories"
            title="What Patients Say"
            description="Genuine experiences from people we are proud to care for."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <Quote
                    className="h-8 w-8 text-brand-200 dark:text-brand-400/40"
                    aria-hidden="true"
                  />
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    <GoogleG className="h-3.5 w-3.5" />
                    Posted on Google
                  </span>
                </div>

                <div
                  className="mt-4 flex gap-1 text-amber-400"
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

                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 border-t border-border pt-4">
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
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                  )}
                  {testimonial.relativeTime && (
                    <p className="text-sm text-muted-foreground">
                      {testimonial.relativeTime}
                    </p>
                  )}
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
