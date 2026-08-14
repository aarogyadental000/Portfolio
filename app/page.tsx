import Hero from "@/components/Hero";
import AboutClinic from "@/components/AboutClinic";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorProfile from "@/components/DoctorProfile";
import { Gallery } from "@/components/LazySections";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutClinic />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <DoctorProfile />
      <Gallery />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
