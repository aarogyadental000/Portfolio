import type { Metadata } from "next";
import type { ReactNode } from "react";
import { clinicInfo, siteUrl } from "@/lib/clinic";

const ogImage = {
  url: "/images/clinic-bright.webp",
  width: 1920,
  height: 1280,
  alt: `${clinicInfo.name}, bright and modern dental clinic in ${clinicInfo.city}`,
};

export const metadata: Metadata = {
  title: "Services",
  description: `Complete dental and maxillofacial care at ${clinicInfo.name}, ${clinicInfo.city}: checkups, fillings, root canal treatment, braces, whitening, oral surgery and more.`,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Dental Services | ${clinicInfo.shortName}`,
    description:
      "Checkups, fillings, crowns, root canal treatment, braces, whitening and oral surgery — complete dental care in Kathmandu.",
    url: `${siteUrl}/services`,
    siteName: clinicInfo.name,
    images: [ogImage],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
