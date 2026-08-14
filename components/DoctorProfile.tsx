import { doctors, showDoctors } from "@/data/doctor";
import { DoctorCarousel } from "./LazySections";

export default function DoctorProfile() {
  if (!showDoctors || doctors.length === 0) {
    return null;
  }

  return <DoctorCarousel doctors={doctors} />;
}
