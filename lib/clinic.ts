// TODO: Replace with the clinic's real domain before going live.
export const siteUrl = "https://www.example.com";

export type OpeningHours = {
  weekdays: string;
  saturday: string;
  note: string;
};

export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: OpeningHours;
  geo: { latitude: number; longitude: number };
  mapEmbedUrl: string;
  directionsUrl: string;
  reviewsUrl: string;
  welcomeMessage: string;
};

export const clinicInfo = {
  name: "Aarogya Maxillofacial & Dental Care",
  shortName: "Aarogya",
  tagline: "Maxillofacial expertise, complete dental care",
  city: "Kathmandu",
  country: "Nepal",
  // TODO: Add a Formspree endpoint (https://formspree.io) to enable the
  // contact form. When empty, the form falls back to WhatsApp/mailto.
  formEndpoint: "",
  social: {
    facebook: "https://www.facebook.com/p/Aarogya-Maxillofacial-and-Dental-care-Pvt-Ltd-61558536381193/",
    instagram: "",
  },
  whatsappMessage:
    "Hello, I would like to book a consultation at Aarogya Maxillofacial & Dental Care. Could you please help me with an appointment?",
};

// TODO: Add the second branch's remaining real details when known:
// - phone / whatsapp / email
// - opening hours
export const branches: Branch[] = [
  {
    slug: "gokarneshwor",
    name: "Aarogya Maxillofacial & Dental Care",
    shortName: "Gokarneshwor",
    address: "Gokarneshwor 44600",
    city: "Kathmandu",
    phone: "+977-9845824247",
    whatsapp: "+977-9845824247",
    email: "puspadip.kharel@gmail.com",
    openingHours: {
      weekdays: "9:00 AM – 6:00 PM",
      saturday: "12:00 AM – 6:00 PM",
      note: "Sunday – Friday",
    },
    geo: {
      latitude: 27.733784,
      longitude: 85.3816485,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35241.08303938534!2d85.3816485!3d27.733784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0065115d89%3A0xf264fe4f1665066!2sAarogya%20Maxillofacial%20%26%20Dental%20Care%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1786518604523!5m2!1sen!2snp",
    directionsUrl: "https://www.google.com/maps/dir/27.6938458,85.3258887/Aarogya+Maxillofacial+%26+Dental+Care+Pvt.+Ltd.,+Gokarneshwor+44600/@27.7155931,85.3335339,8627m/data=!3m1!1e3!4m10!4m9!1m1!4e1!1m5!1m1!1s0x39eb1b0065115d89:0xf264fe4f1665066!2m2!1d85.3816485!2d27.733784!3e0?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D",
    reviewsUrl: "https://www.google.com/maps/place/Aarogya+Maxillofacial+%26+Dental+Care+Pvt.+Ltd./@27.733784,85.3790736,1012m/data=!3m1!1e3!4m8!3m7!1s0x39eb1b0065115d89:0xf264fe4f1665066!8m2!3d27.733784!4d85.3816485!9m1!1b1!16s%2Fg%2F11xggcpc60?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    welcomeMessage:
      "Welcome to Aarogya Maxillofacial & Dental Care. Please choose the branch you would like to visit.",
  },
  {
    slug: "branch-2",
    name: "Aarogya Maxillofacial & Dental Care (Boudha)",
    shortName: "Boudha",
    address: "Boudha Main Road 44100",
    city: "Kathmandu",
    phone: "+977-XXXXXXXXXX",
    whatsapp: "+977-XXXXXXXXXX",
    email: "puspadip.kharel@gmail.com",
    openingHours: {
      weekdays: "[9:00 AM – 6:00 PM]",
      saturday: "[12:00 AM – 6:00 PM]",
      note: "[Sunday – Friday]",
    },
    geo: {
      latitude: 27.7204292,
      longitude: 85.3627434,
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35245.40080121226!2d85.3627434!3d27.7204292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b99293dc11f%3A0xa7a66412580286a7!2sAarogya%20Maxillofacial%20and%20DENTAL%20Care%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1786691570299!5m2!1sen!2snp",
    directionsUrl: "https://www.google.com/maps/dir//Aarogya+Maxillofacial+and+DENTAL+Care+Pvt.+Ltd.,+Kathmandu+44100/@27.7204292,85.3627434,8094m/data=!3m1!1e3!4m18!1m8!3m7!1s0x39eb1b99293dc11f:0xa7a66412580286a7!2sAarogya+Maxillofacial+and+DENTAL+Care+Pvt.+Ltd.!8m2!3d27.7204292!4d85.3627434!15sChVhYXJvZ3lhIGRlbnRhbCBjbGluaWNaFyIVYWFyb2d5YSBkZW50YWwgY2xpbmljkgENZGVudGFsX2NsaW5pY5oBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydzVWRlZ1WkVSUmJsVjZZekpPTkZSdFRubGlSVWwwWkZkNFExVllZeEFC4AEA-gEECCYQRg!16s%2Fg%2F11y59520gl!4m8!1m0!1m5!1m1!1s0x39eb1b99293dc11f:0xa7a66412580286a7!2m2!1d85.3627434!2d27.7204292!3e0?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    reviewsUrl: "https://www.google.com/maps/place/Aarogya+Maxillofacial+and+DENTAL+Care+Pvt.+Ltd./@27.7204292,85.3627434,8094m/data=!3m1!1e3!4m12!1m2!2m1!1saarogya+dental+clinic!3m8!1s0x39eb1b99293dc11f:0xa7a66412580286a7!8m2!3d27.7204292!4d85.3627434!9m1!1b1!15sChVhYXJvZ3lhIGRlbnRhbCBjbGluaWNaFyIVYWFyb2d5YSBkZW50YWwgY2xpbmljkgENZGVudGFsX2NsaW5pY5oBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyeHdNV0ZGVW10ak1VNXpZa2hKTldJd01YSlplazVYWXpGS1VGUldSUkFC4AEA-gEECAAQMA!16s%2Fg%2F11y59520gl?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    welcomeMessage:
      "Welcome to Aarogya Maxillofacial & Dental Care. Please choose the branch you would like to visit.",
  },
];

export const primaryBranch = branches[0]!;

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((branch) => branch.slug === slug);
}

const phoneDigits = (value: string) => value.replace(/[^\dX]/g, "");

export function branchPhoneHref(branch: Branch): string {
  return `tel:${phoneDigits(branch.phone)}`;
}

export function branchWaNumber(branch: Branch): string {
  return phoneDigits(branch.whatsapp);
}

export function branchWhatsappHref(
  branch: Branch,
  message: string = clinicInfo.whatsappMessage,
): string {
  return `https://wa.me/${branchWaNumber(branch)}?text=${encodeURIComponent(message)}`;
}

export function branchFullAddress(branch: Branch): string {
  return `${branch.address}, ${branch.city}, ${clinicInfo.country}`;
}

// Opening hours are only included in structured data (app/layout.tsx) once the
// placeholders in a branch's openingHours are replaced.
export function hasSetBranchOpeningHours(branch: Branch): boolean {
  return !branch.openingHours.weekdays.includes("[");
}
