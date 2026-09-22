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
import { faqs } from "@/data/faq";
import { readBranchGalleryMap } from "@/lib/gallery";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default async function Home() {
  const imagesByBranch = await readBranchGalleryMap();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Hero />
      <AboutClinic />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <DoctorProfile />
      <Gallery imagesByBranch={imagesByBranch} />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
