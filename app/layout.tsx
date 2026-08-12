import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { clinicInfo } from "@/lib/clinic";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinicInfo.name} — Dentist in ${clinicInfo.city}, Nepal`,
    template: `%s | ${clinicInfo.name}`,
  },
  description: `${clinicInfo.name} provides modern, compassionate dental care in ${clinicInfo.city}, Nepal. From routine checkups to advanced treatments — book your consultation today.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: siteUrl,
    siteName: clinicInfo.name,
    title: `${clinicInfo.name} — Dentist in ${clinicInfo.city}, Nepal`,
    description: `Modern, compassionate dental care in ${clinicInfo.city}, Nepal. General dentistry, cleaning, whitening, root canal treatment and more.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinicInfo.name,
  image:
    "https://www.example.com/images/hero-dentist-patient.jpg",
  telephone: clinicInfo.phone,
  email: clinicInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinicInfo.address,
    addressLocality: clinicInfo.city,
    addressCountry: "NP",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "00:00",
    closes: "00:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k=${JSON.stringify(
              THEME_STORAGE_KEY,
            )};var s=null;try{s=window.localStorage.getItem(k);}catch(e){}var t=s==="light"||s==="dark"?s:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark"){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col"
      >
        <a
          href="#main"
          className="sr-only z-[100] bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileContactBar />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
