import { faqs } from "@/data/faq";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common Questions"
            description="Answers to the questions we hear most often. If yours isn't here, just ask us."
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 3) * 60}>
              <details className="group rounded-2xl border border-border bg-secondary/60 transition-colors hover:border-primary/40 open:bg-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card text-accent shadow-sm transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
