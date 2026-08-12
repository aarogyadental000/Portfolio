import {
  Award,
  HeartHandshake,
  MessageSquareText,
  Sparkles,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-secondary/60 p-6 transition-colors duration-300 hover:border-primary/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-card text-accent shadow-sm">
                  <reason.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={160}>
            <a
              href="#contact"
              className="group flex h-full flex-col justify-between rounded-2xl bg-brand-700 p-6 text-white transition-colors duration-300 hover:bg-brand-600"
            >
              <div>
                <h3 className="font-semibold">Not sure what you need?</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">
                  Ask us. We will gladly guide you toward the right treatment
                  for your smile.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                Talk to us
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
