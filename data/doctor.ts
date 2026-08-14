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

// TODO: Replace the placeholder doctors and photos below with the second
// branch's real team.
export const doctorsByBranch: Record<string, Doctor[]> = {
  gokarneshwor: [
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
  ],
  "branch-2": [
    {
      name: "Anil Maharjan",
      qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
      specialization: "Dental Implants",
      experience: "10+ Years",
      bio: "Dr. Anil Maharjan is a consultant oral and maxillofacial surgeon who specializes in dental implants and surgical tooth extractions. He has placed hundreds of implants and is known for careful, precise surgical planning.",
      photoUrl: "/images/doctor-portrait.webp",
      photoAlt: "Dr. Anil Maharjan portrait",
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
      name: "Sunita Gurung",
      qualification: "BDS, MDS (Orthodontics)",
      specialization: "Braces & Aligners",
      experience: "8+ Years",
      bio: "Dr. Sunita Gurung is an orthodontist who helps patients achieve confident smiles with clear aligners and modern braces. She takes time to explain every step of treatment and plans around each patient's lifestyle.",
      photoUrl: "/images/doctor-portrait-2.webp",
      photoAlt: "Dr. Sunita Gurung portrait",
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
      name: "Krishna Shrestha",
      qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
      specialization: "Root Canal Therapy",
      experience: "9+ Years",
      bio: "Dr. Krishna Shrestha is an endodontist dedicated to painless root canal treatment and preserving natural teeth. He uses rotary endodontics and magnification for faster, more comfortable procedures.",
      photoUrl: "/images/doctor-portrait-3.webp",
      photoAlt: "Dr. Krishna Shrestha portrait",
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
  ],
};
