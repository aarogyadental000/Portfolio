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
            title="Visit Our Clinic"
            description={`We would love to welcome you to our ${branch.shortName} branch. Reach out any way that suits you: call, message or drop by.`}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
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
                            className="flex items-start gap-4 rounded-xl transition-colors hover:bg-muted"
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
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Opening Hours
                    </span>
                    <span className="mt-0.5 font-semibold text-foreground">
                      {branch.openingHours.note}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {branch.openingHours.weekdays}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Saturday: {branch.openingHours.saturday}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit mx-auto items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>

          <Reveal delay={80} className="lg:col-span-2">
            <GoogleMap className="h-80 w-full lg:h-96" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
