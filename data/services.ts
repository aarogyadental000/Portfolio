import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Crown,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "General Dentistry",
    description:
      "Routine examinations, preventive care and treatment for the everyday health of your teeth and gums.",
    icon: Stethoscope,
    image: "/images/demo-checkup-portrait.webp",
    imageAlt: "Patient receiving a routine dental checkup",
    featured: true,
  },
  {
    title: "Dental Cleaning & Whitening",
    description:
      "Professional plaque and tartar removal plus cosmetic whitening for a cleaner, brighter smile.",
    icon: Sparkles,
    image: "/images/demo-hygienist.webp",
    imageAlt: "Dental hygienist performing a professional cleaning",
    featured: true,
  },
  {
    title: "Fillings & Root Canal Treatment",
    description:
      "Modern cavity fillings and root canal therapy that save damaged or infected teeth and relieve pain.",
    icon: Activity,
    image: "/images/demo-procedure-assist.webp",
    imageAlt: "Dentist performing a restorative procedure",
    featured: true,
  },
  {
    title: "Crowns, Bridges & Dentures",
    description:
      "Natural-looking crowns, bridges and dentures to restore or replace missing teeth.",
    icon: Crown,
    image: "/images/demo-dentist-treatment.webp",
    imageAlt: "Dentist providing gentle dental treatment",
    featured: true,
  },
  {
    title: "Orthodontic Treatment",
    description:
      "Braces and alignment options to straighten teeth and correct your bite.",
    icon: SlidersHorizontal,
    image: "/images/demo-teen-xray.webp",
    imageAlt: "Young patient during an orthodontic X-ray",
    featured: true,
  },
];
