import { doctors } from "@/data/doctor";
import DoctorCarousel from "./DoctorCarousel";

export default function DoctorProfile() {
  return (
    <section id="doctor" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DoctorCarousel doctors={doctors} />
      </div>
    </section>
  );
}
