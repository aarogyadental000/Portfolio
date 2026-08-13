import { CallButton, WhatsAppButton } from "./Buttons";
import { ToothMark } from "./Logo";
import Reveal from "./Reveal";

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
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Take Care of Your Smile?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
            Schedule a consultation with our dental team. We are here to help:
            simply call or message us on WhatsApp.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton size="lg" variant="light" label="Call the Clinic" />
            <WhatsAppButton size="lg" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-brand-200">
            Dental emergency? Call or message us right away. We explain all
            treatment options and costs clearly. No hidden fees, ever.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
