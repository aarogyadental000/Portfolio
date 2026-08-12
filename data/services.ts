import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  CircleMinus,
  Crown,
  Droplets,
  FaceSlightlySmiling,
  Layers,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "General Dentistry",
    description:
      "Routine examinations, cleaning, fillings and preventive care for your everyday oral health.",
    icon: Stethoscope,
    featured: true,
  },
  {
    title: "Dental Cleaning",
    description:
      "Professional cleaning to keep your teeth and gums healthy and remove plaque and tartar.",
    icon: Droplets,
    featured: true,
  },
  {
    title: "Teeth Whitening",
    description:
      "Cosmetic whitening treatments for a brighter, more confident smile.",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Dental Fillings",
    description:
      "Care and restoration for cavities and damaged teeth using modern materials.",
    icon: Layers,
    featured: true,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Treatment to save infected or severely damaged teeth and relieve pain.",
    icon: Activity,
    featured: true,
  },
  {
    title: "Tooth Extraction",
    description:
      "Safe and gentle tooth removal when a tooth cannot be saved or must be removed.",
    icon: CircleMinus,
    featured: true,
  },
  {
    title: "Dental Crowns & Bridges",
    description:
      "Restoration and replacement of damaged or missing teeth for natural-looking results.",
    icon: Crown,
    featured: true,
  },
  {
    title: "Dentures",
    description:
      "Comfortable, well-fitted solutions for replacing missing teeth.",
    icon: FaceSlightlySmiling,
    featured: true,
  },
  {
    title: "Orthodontic Treatment",
    description:
      "Treatment options to improve tooth alignment and bite for a straighter smile.",
    icon: SlidersHorizontal,
    featured: true,
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle, friendly dental care that helps children build healthy habits early.",
    icon: Baby,
    featured: true,
  },
];
