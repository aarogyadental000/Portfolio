import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import BranchFab from "@/components/BranchFab";
import WhatsAppFab from "@/components/WhatsAppFab";
import HashScrollManager from "@/components/HashScrollManager";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BranchProvider } from "@/components/BranchProvider";
import {
  branches,
  clinicInfo,
  hasSetBranchOpeningHours,
  siteUrl,
  type Branch,
} from "@/lib/clinic";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

const ogImage = {
  url: "/images/clinic-bright.webp",
  width: 1920,
  height: 1280,
  alt: `${clinicInfo.name}, bright and modern dental clinic in ${clinicInfo.city}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Home | ${clinicInfo.name}`,
    template: `%s | ${clinicInfo.name}`,
  },
  description: `${clinicInfo.name} provides modern, compassionate dental care in ${clinicInfo.city}, Nepal. From routine checkups to advanced treatments, book your consultation today.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: siteUrl,
    siteName: clinicInfo.name,
    title: `${clinicInfo.name} | Dentist in ${clinicInfo.city}, Nepal`,
    description: `Modern, compassionate dental care in ${clinicInfo.city}, Nepal. General dentistry, cleaning, whitening, root canal treatment and more.`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicInfo.name} | Dentist in ${clinicInfo.city}, Nepal`,
    description: `Modern, compassionate dental care in ${clinicInfo.city}, Nepal.`,
    images: [ogImage.url],
  },
};

function parseTimeRange(value: string): { opens: string; closes: string } | undefined {
  const parts = value.split(/[–-]/).map((part) => part.trim());
  if (parts.length !== 2) return undefined;
  const times = parts.map((part) => {
    const match = part.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
    if (!match) return undefined;
    let hours = Number(match[1]);
    const minutes = match[2] ? Number(match[2]) : 0;
    const period = match[3]?.toUpperCase();
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    if (hours > 23 || minutes > 59) return undefined;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
  });
  if (times.some((time) => time === undefined)) return undefined;
  return { opens: times[0]!, closes: times[1]! };
}

function buildBranchDentist(branch: Branch) {
  const openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }> = [];

  if (hasSetBranchOpeningHours(branch)) {
    const weekdays = parseTimeRange(branch.openingHours.weekdays);
    if (weekdays) {
      openingHoursSpecification.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: weekdays.opens,
        closes: weekdays.closes,
      });
    }

    const saturday = parseTimeRange(branch.openingHours.saturday);
    if (saturday) {
      openingHoursSpecification.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: saturday.opens,
        closes: saturday.closes,
      });
    }
  }

  const socialProfiles = [
    clinicInfo.social.facebook,
    clinicInfo.social.instagram,
  ].filter(Boolean);

  return {
    "@type": "Dentist",
    name: clinicInfo.name,
    image: `${siteUrl}/images/clinic-bright.webp`,
    url: siteUrl,
    telephone: branch.phone,
    email: branch.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.geo.latitude,
      longitude: branch.geo.longitude,
    },
    // priceRange is omitted until the clinic's real price range is known.
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
    ...(openingHoursSpecification.length > 0
      ? { openingHoursSpecification }
      : {}),
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": branches.map(buildBranchDentist),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col"
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){var k=${JSON.stringify(
            THEME_STORAGE_KEY,
          )};var s=null;try{s=window.localStorage.getItem(k);}catch(e){}var t=s==="light"||s==="dark"?s:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark"){document.documentElement.classList.add("dark");}})();`}
        </Script>
        <a
          href="#main"
          className="sr-only z-[100] bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <BranchProvider>
            <HashScrollManager />
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <MobileContactBar />
            <BranchFab />
            <ScrollToTopButton />
            <WhatsAppFab />
          </BranchProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
