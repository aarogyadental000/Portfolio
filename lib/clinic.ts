// TODO: Replace with the clinic's real domain before going live.
export const siteUrl = "https://www.example.com";

// TODO: Fill in the street/building, then refine the address below.
export const clinicInfo = {
  name: "Aarogya Maxillofacial & Dental Care",
  shortName: "Aarogya",
  tagline: "Compassionate, modern dental care",
  phone: "+977-9845824247",
  whatsapp: "+977-9845824247",
  email: "puspadip.kharel@gmail.com",
  address: "Gokarneshwor 44600",
  city: "Kathmandu",
  country: "Nepal",
  // TODO: Replace the bracketed placeholders with real opening hours,
  // e.g. weekdays: "9:00 AM – 6:00 PM".
  openingHours: {
    weekdays: "9:00 AM – 6:00 PM",
    saturday: "12:00 AM – 6:00 PM",
    note: "Sunday – Friday",
  },
  // TODO: Add a Formspree endpoint (https://formspree.io) to enable the
  // contact form. When empty, the form falls back to WhatsApp/mailto.
  formEndpoint: "",
  // TODO: Link to the clinic's Google Business reviews page. When empty,
  // the "Read our reviews" link is hidden.
  reviewsUrl: "https://www.google.com/maps/place/Aarogya+Maxillofacial+%26+Dental+Care+Pvt.+Ltd./@27.733784,85.3790736,1012m/data=!3m1!1e3!4m8!3m7!1s0x39eb1b0065115d89:0xf264fe4f1665066!8m2!3d27.733784!4d85.3816485!9m1!1b1!16s%2Fg%2F11xggcpc60?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  geo: {
    latitude: 27.733784,
    longitude: 85.3816485,
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35241.08303938534!2d85.3816485!3d27.733784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0065115d89%3A0xf264fe4f1665066!2sAarogya%20Maxillofacial%20%26%20Dental%20Care%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1786518604523!5m2!1sen!2snp",
  directionsUrl: "https://www.google.com/maps/dir/27.6938458,85.3258887/Aarogya+Maxillofacial+%26+Dental+Care+Pvt.+Ltd.,+Gokarneshwor+44600/@27.7155931,85.3335339,8627m/data=!3m1!1e3!4m10!4m9!1m1!4e1!1m5!1m1!1s0x39eb1b0065115d89:0xf264fe4f1665066!2m2!1d85.3816485!2d27.733784!3e0?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D",
  social: {
    facebook: "https://www.facebook.com/p/Aarogya-Maxillofacial-and-Dental-care-Pvt-Ltd-61558536381193/",
    instagram: "",
  },
  whatsappMessage: "Hello, I would like to book a dental consultation.",
} as const;

const phoneDigits = (value: string) => value.replace(/[^\dX]/g, "");

export const phoneHref = `tel:${phoneDigits(clinicInfo.phone)}`;

export const waNumber = phoneDigits(clinicInfo.whatsapp);

export const whatsappHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  clinicInfo.whatsappMessage,
)}`;

export const fullAddress = `${clinicInfo.address}, ${clinicInfo.city}, ${clinicInfo.country}`;

// Opening hours are only included in structured data (app/layout.tsx) once the
// placeholders in clinicInfo are replaced.
export const hasSetOpeningHours = !clinicInfo.openingHours.weekdays.includes("[");
