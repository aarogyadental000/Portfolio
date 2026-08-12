import Hero from "@/components/Hero";
import AboutClinic from "@/components/AboutClinic";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorProfile from "@/components/DoctorProfile";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutClinic />
      <Services />
      <WhyChooseUs />
      <DoctorProfile />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
