import type { LucideIcon } from "lucide-react";
import { Award, HeartHandshake, Stethoscope, Users } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

// TODO: Replace with the clinic's real numbers before going live.
export const stats: Stat[] = [
  { value: "10+", label: "Years of experience", icon: Award },
  { value: "5,000+", label: "Happy patients", icon: Users },
  { value: "15+", label: "Services offered", icon: Stethoscope },
  { value: "100%", label: "Gentle, honest care", icon: HeartHandshake },
];
