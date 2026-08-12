import { Quote, Star } from "lucide-react";
import { testimonials, showTestimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
                <Quote className="h-8 w-8 text-brand-200 dark:text-brand-400/40" aria-hidden="true" />
                <div
                  className="mt-4 flex gap-1 text-amber-400"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  {testimonial.treatment && (
                    <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
