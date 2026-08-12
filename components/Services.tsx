"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

const MOBILE_INITIAL_COUNT = 3;

export default function Services() {
  const [expanded, setExpanded] = useState(false);
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
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleServices.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 80}
              className={
                index >= MOBILE_INITIAL_COUNT
                  ? expanded
                    ? ""
                    : "hidden sm:block"
                  : ""
              }
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {visibleServices.length > MOBILE_INITIAL_COUNT && (
          <div className="mt-8 text-center sm:hidden">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls="services-grid"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {expanded ? "Show less" : "Show all services"}
              {expanded ? (
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
