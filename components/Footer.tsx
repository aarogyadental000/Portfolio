"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  branchFullAddress,
  branchPhoneHref,
  branchWhatsappHref,
  branches,
  clinicInfo,
} from "@/lib/clinic";
import { showDoctors } from "@/data/doctor";
import { useBranch } from "./BranchProvider";

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const doctorLink = { href: "/#doctor", label: "Doctor" };

const footerLinks = showDoctors
  ? [...quickLinks.slice(0, 3), doctorLink, ...quickLinks.slice(3)]
  : quickLinks;

const socials = [
  {
    label: "Facebook",
    href: clinicInfo.social.facebook,
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: clinicInfo.social.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.154 0-3.53.013-4.774.069-2.38.109-3.476 1.229-3.585 3.585-.056 1.244-.07 1.62-.07 4.774s.014 3.53.07 4.774c.109 2.354 1.201 3.475 3.585 3.585 1.245.056 1.62.07 4.774.07s3.53-.014 4.774-.07c2.382-.109 3.478-1.231 3.585-3.585.056-1.244.07-1.62.07-4.774s-.014-3.53-.07-4.774c-.109-2.353-1.201-3.476-3.585-3.585-1.244-.056-1.62-.07-4.774-.07zm0 3.064a4.971 4.971 0 1 0 0 9.942 4.971 4.971 0 0 0 0-9.942zm0 8.196a3.225 3.225 0 1 1 0-6.45 3.225 3.225 0 0 1 0 6.45zm6.336-8.406a1.161 1.161 0 1 1-2.322 0 1.161 1.161 0 0 1 2.322 0z",
  },
];

export default function Footer() {
  const { branch } = useBranch();
  const otherBranches = branches.filter((item) => item.slug !== branch.slug);

  const contactLinks = [
    { href: branchPhoneHref(branch), label: branch.phone, icon: Phone },
    {
      href: branchWhatsappHref(branch),
      label: branch.whatsapp,
      icon: MessageCircle,
      external: true,
    },
    { href: `mailto:${branch.email}`, label: branch.email, icon: Mail },
  ];

  return (
    <footer className="bg-ink-950 pb-20 text-ink-300 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-12 md:gap-12 lg:grid-cols-4 lg:items-center">
          <div>
            <Link href="/#home" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.webp"
                alt={clinicInfo.name}
                width={354}
                height={354}
                className="h-16 w-16 shrink-0 object-contain"
              />
              <span className="min-w-0 text-lg font-semibold tracking-tight text-white">
                {clinicInfo.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {clinicInfo.tagline}. Modern, compassionate dental care in{" "}
              {clinicInfo.city}, Nepal.
            </p>
            {socials.some((social) => social.href) && (
              <div className="mt-6 flex gap-3">
                {socials.map(
                  (social) =>
                    social.href && (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-brand-600 hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                          <path d={social.path} />
                        </svg>
                      </a>
                    ),
                )}
              </div>
            )}
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-start gap-2 text-sm transition-colors hover:text-brand-300"
                  >
                    <link.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                    <span className="break-words">{link.label}</span>
                  </a>
                </li>
              ))}
              <li className="inline-flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                <span className="break-words">{branchFullAddress(branch)}</span>
              </li>
            </ul>

            {otherBranches.length > 0 && (
              <ul className="mt-5 border-t border-white/10 pt-4 text-sm">
                <li className="inline-flex items-center gap-2 text-ink-400">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  Also at {otherBranches.map((item) => item.shortName).join(", ")}
                </li>
                <li className="mt-1 pl-6">
                  {otherBranches.map((item) => item.address).join(", ")}
                </li>
              </ul>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                {branch.openingHours.note}
              </li>
              <li className="pl-6">{branch.openingHours.weekdays}</li>
              <li className="pl-6">Saturday: {branch.openingHours.saturday}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-ink-400 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
          </p>
          <p>Dental care in {clinicInfo.city}, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
