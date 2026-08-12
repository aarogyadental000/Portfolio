import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinicInfo, fullAddress, phoneHref, whatsappHref } from "@/lib/clinic";
import GoogleMap from "./GoogleMap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const contactItems = [
  {
    icon: MapPin,
    label: "Clinic Address",
    value: fullAddress,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: clinicInfo.phone,
    href: phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: clinicInfo.whatsapp,
    href: whatsappHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: clinicInfo.email,
    href: `mailto:${clinicInfo.email}`,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact & Location"
            title="Visit Our Clinic"
            description="We would love to welcome you. Reach out any way that suits you — call, message or drop by."
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
                  return <li key={item.label}>{content}</li>;
                })}

                <li className="flex items-start gap-4 border-t border-border pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Opening Hours
                    </span>
                    <span className="mt-0.5 font-semibold text-foreground">
                      {clinicInfo.openingHours.note}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {clinicInfo.openingHours.weekdays}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Saturday: {clinicInfo.openingHours.saturday}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <GoogleMap className="h-80 w-full lg:h-full lg:min-h-[28rem]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
