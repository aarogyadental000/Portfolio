import { doctors, showDoctors } from "@/data/doctor";
import DoctorCarousel from "./DoctorCarousel";

export default function DoctorProfile() {
  if (!showDoctors || doctors.length === 0) {
    return null;
  }

  return <DoctorCarousel doctors={doctors} />;
}
