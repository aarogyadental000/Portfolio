"use client";

import { doctorsByBranch, showDoctors } from "@/data/doctor";
import { DoctorCarousel } from "./LazySections";
import { useBranch } from "./BranchProvider";

export default function DoctorProfile() {
  const { branch } = useBranch();
  const doctors = doctorsByBranch[branch.slug] ?? [];

  if (!showDoctors || doctors.length === 0) {
    return null;
  }

  return <DoctorCarousel key={branch.slug} doctors={doctors} />;
}
