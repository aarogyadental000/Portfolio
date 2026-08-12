import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function Services() {
  const visibleServices = services.filter((service) => service.featured !== false);

  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Dental Care"
            description="From routine checkups to advanced dental treatments, we provide care for your complete oral health."
          />
        </Reveal>

        <div
          id="services-grid"
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          {visibleServices.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 80}
              className="h-full w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <ServiceCard title={service.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
