export type DoctorHours = {
  days: string;
  time: string;
};

export type Doctor = {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  photoUrl: string;
  photoAlt: string;
  hours: DoctorHours[];
};

export const showDoctors = true;

export const doctors: Doctor[] = [
  {
    name: "Tanvir Rahman",
    qualification: "BDS, FCPS (Oral & Maxillofacial Surgery)",
    specialization: "Dental Implants",
    experience: "12+ Years",
    bio: "Dr. Tanvir Rahman is a consultant oral and maxillofacial surgeon who specializes in dental implants and complex extractions. He completed his FCPS training with a focus on surgical dentistry and has placed over a thousand implants.",
    photoUrl: "/images/doctor-portrait.webp",
    photoAlt: "Dr. Tanvir Rahman portrait",
    hours: [
      { days: "Sunday", time: "9:00 AM – 6:00 PM" },
      { days: "Monday", time: "9:00 AM – 6:00 PM" },
      { days: "Tuesday", time: "9:00 AM – 6:00 PM" },
      { days: "Wednesday", time: "9:00 AM – 6:00 PM" },
      { days: "Thursday", time: "9:00 AM – 6:00 PM" },
      { days: "Friday", time: "3:00 PM – 8:00 PM" },
      { days: "Saturday", time: "Closed" },
    ],
  },
  {
    name: "Farhana Islam",
    qualification: "BDS, MS (Orthodontics)",
    specialization: "Braces & Aligners",
    experience: "9+ Years",
    bio: "Dr. Farhana Islam is an orthodontist who creates confident smiles with clear aligners and modern braces. She works closely with every patient to plan a treatment that fits their lifestyle and delivers lasting results.",
    photoUrl: "/images/doctor-portrait-2.webp",
    photoAlt: "Dr. Farhana Islam portrait",
    hours: [
      { days: "Sunday", time: "10:00 AM – 7:00 PM" },
      { days: "Monday", time: "10:00 AM – 7:00 PM" },
      { days: "Tuesday", time: "10:00 AM – 7:00 PM" },
      { days: "Wednesday", time: "10:00 AM – 7:00 PM" },
      { days: "Thursday", time: "10:00 AM – 7:00 PM" },
      { days: "Friday", time: "2:00 PM – 7:00 PM" },
      { days: "Saturday", time: "Closed" },
    ],
  },
  {
    name: "Shaila Akter",
    qualification: "BDS, PGT (Endodontics)",
    specialization: "Root Canal Therapy",
    experience: "7+ Years",
    bio: "Dr. Shaila Akter is an endodontist focused on painless root canal treatment and saving natural teeth. She is known for her gentle approach and uses rotary endodontics for faster, more comfortable procedures.",
    photoUrl: "/images/doctor-portrait-3.webp",
    photoAlt: "Dr. Shaila Akter portrait",
    hours: [
      { days: "Sunday", time: "9:30 AM – 5:30 PM" },
      { days: "Monday", time: "9:30 AM – 5:30 PM" },
      { days: "Tuesday", time: "9:30 AM – 5:30 PM" },
      { days: "Wednesday", time: "9:30 AM – 5:30 PM" },
      { days: "Thursday", time: "9:30 AM – 5:30 PM" },
      { days: "Friday", time: "4:00 PM – 8:00 PM" },
      { days: "Saturday", time: "Closed" },
    ],
  },
];
