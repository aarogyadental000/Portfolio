"use client";

import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import {
  branchFullAddress,
  branchPhoneHref,
  branchWhatsappHref,
} from "@/lib/clinic";
import GoogleMap from "./GoogleMap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { useBranch } from "./BranchProvider";

export default function ContactSection() {
  const { branch } = useBranch();

  const contactItems = [
    {
      icon: MapPin,
      label: "Clinic Address",
      value: branchFullAddress(branch),
      href: undefined as string | undefined,
    },
    {
      icon: Phone,
      label: "Phone",
      value: branch.phone,
      href: branchPhoneHref(branch),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: branch.whatsapp,
      href: branchWhatsappHref(branch),
    },
    {
      icon: Mail,
      label: "Email",
      value: branch.email,
      href: `mailto:${branch.email}`,
    },
  ];

  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Contact & Location"
              title={`Start Your Visit at ${branch.shortName}`}
              description={`Reach out in whatever way feels easiest. We will confirm your appointment and answer any questions before you come in.`}
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Contact Details</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:border-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
                    {branch.shortName} Branch
                  </span>
                </div>
                <ul className="space-y-6">
                    {contactItems.map((item) => {
                      const Icon = item.icon;
                      const content = (
                        <>
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                              {item.label}
                            </span>
                            <span className="mt-0.5 font-semibold text-foreground">
                              {item.value}
                            </span>
                          </span>
                        </>
                      );

                       if (item.href) {
                        return (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              target={
                                item.label === "WhatsApp" ? "_blank" : undefined
                              }
                              rel={
                                item.label === "WhatsApp"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="flex items-start gap-4 rounded-xl transition-all hover:bg-muted"
                            >
                              {content}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li key={item.label} className="flex items-start gap-4">
                          {content}
                        </li>
                      );
                    })}

                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Opening Hours
                      </span>
                      <span className="mt-2 grid grid-cols-2 gap-4">
                        <span>
                          <span className="block font-semibold text-foreground">
                            {branch.openingHours.note}
                          </span>
                          <span className="mt-0.5 block text-sm text-muted-foreground">
                            {branch.openingHours.weekdays}
                          </span>
                        </span>
                        <span>
                          <span className="block font-semibold text-foreground">
                            Saturday
                          </span>
                          <span className="mt-0.5 block text-sm text-muted-foreground">
                            {branch.openingHours.saturday}
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>

              <div className="mt-auto flex flex-col items-center gap-3 pt-8">
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm shadow-brand-900/10 transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 lg:order-2">
              <ContactForm />
            </Reveal>

            <Reveal delay={80} className="order-3 lg:col-span-2">
              <GoogleMap className="h-80 w-full lg:h-96" />
            </Reveal>
          </div>
      </div>
    </section>
  );
}
