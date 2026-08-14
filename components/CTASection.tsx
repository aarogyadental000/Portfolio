import { CallButton, WhatsAppButton } from "./Buttons";
import { ToothMark } from "./Logo";
import Reveal from "./Reveal";
import ShinyText from "./ShinyText";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-brand-900 py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 opacity-[0.07]"
      >
        <ToothMark className="h-80 w-80 text-white" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />

      <Reveal>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <ShinyText
              text="Take the First Step Toward Better Oral Health"
              color="#e0f2fe"
              shineColor="#ffffff"
              speed={5}
            />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
            Whether you need a routine checkup, dental implants, or maxillofacial
            surgery, we are here to help. Book a free consultation and we will
            guide you through every option - from general dentistry to specialist
            oral surgery.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton size="lg" />
            <CallButton size="lg" variant="light" label="Call the Clinic" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-brand-200">
            Free consultation • No hidden fees • We answer within a few hours
          </p>
        </div>
      </Reveal>
    </section>
  );
}
