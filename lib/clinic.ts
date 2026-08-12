export const clinicInfo = {
  name: "[CLINIC NAME]",
  shortName: "[CLINIC]",
  tagline: "Compassionate, modern dental care",
  phone: "+977XXXXXXXXXX",
  whatsapp: "+977XXXXXXXXXX",
  email: "[EMAIL]",
  address: "[CLINIC ADDRESS]",
  city: "[CITY]",
  country: "Nepal",
  openingHours: {
    weekdays: "[OPENING TIME] – [CLOSING TIME]",
    saturday: "Closed",
    note: "Sunday – Friday",
  },
  mapEmbedUrl: "[GOOGLE MAP EMBED URL]",
  directionsUrl: "[GOOGLE MAPS DIRECTIONS URL]",
  social: {
    facebook: "",
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
