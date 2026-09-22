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
      name: "Puspadip Kharel",
      qualification: "BDS, MDS (RUHS), Jaipur, India",
      specialization: "Maxillofacial Surgeon",
      experience: "10+ Years",
      bio: "Dr. Puspadip Kharel is a Consultant Oral & Maxillofacial Surgeon with over a decade of clinical excellence. Holding a BDS and MDS from RUHS, Jaipur, Dr. Kharel specializes in complex oral surgeries, facial trauma, TMJ disorders, and pathology. Trusted by thousands of patients, he has successfully completed over 500 dental implant procedures and more than 2,000 impaction surgeries with precision and dedicated care.",
      photoUrl: "/images/doctor/Puspadip.jpg",
      photoAlt: "Dr. Puspadip Kharel portrait",
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
      name: "Gita Khadka Kharel",
      qualification: "Bachelor of Dental Surgery (Kathmandu University)",
      specialization: "Dental Surgeon",
      experience: "8+ Years",
      bio: "Dr. Gita Khadka Kharel is a dedicated Dental Surgeon with over 8 years of clinical experience. She completed her Bachelor of Dental Surgery at Kathmandu University and specializes in Cosmetic and General Dentistry. Dr. Khadka is passionate about helping patients achieve healthy, confident smiles through personalized, high-quality dental care.",
      photoUrl: "/images/doctor/Gita.jpg",
      photoAlt: "Dr. Gita Khadka Kharel portrait",
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
      name: "Ankita Thapa",
      qualification: "Bachelor of Dental Surgery (Kathmandu University)",
      specialization: "General Dentist",
      experience: "2+ Years",
      bio: "Dr. Ankita Thapa is a General Dentist dedicated to delivering high-quality, comprehensive oral healthcare. A graduate of Kathmandu University with a Bachelor of Dental Surgery, she brings extensive clinical expertise in preventive treatments and oral health management. Dr. Ankita is known for her patient-first approach, ensuring each individual receives personalized and attentive dental care.",
      photoUrl: "/images/doctor/Annkita.jpg",
      photoAlt: "Dr. Ankita Thapa portrait",
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
      name: "Puspadip Kharel",
      qualification: "BDS, MDS (RUHS), Jaipur, India",
      specialization: "Maxillofacial Surgeon",
      experience: "10+ Years",
      bio: "Dr. Puspadip Kharel is a Consultant Oral & Maxillofacial Surgeon with over a decade of clinical excellence. Holding a BDS and MDS from RUHS, Jaipur, Dr. Kharel specializes in complex oral surgeries, facial trauma, TMJ disorders, and pathology. Trusted by thousands of patients, he has successfully completed over 500 dental implant procedures and more than 2,000 impaction surgeries with precision and dedicated care.",
      photoUrl: "/images/doctor/Puspadip.jpg",
      photoAlt: "Dr. Puspadip Kharel portrait",
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
      name: "Gita Khadka Kharel",
      qualification: "Bachelor of Dental Surgery (Kathmandu University)",
      specialization: "Dental Surgeon",
      experience: "8+ Years",
      bio: "Dr. Gita Khadka Kharel is a dedicated Dental Surgeon with over 8 years of clinical experience. She completed her Bachelor of Dental Surgery at Kathmandu University and specializes in Cosmetic and General Dentistry. Dr. Khadka is passionate about helping patients achieve healthy, confident smiles through personalized, high-quality dental care.",
      photoUrl: "/images/doctor/Gita.jpg",
      photoAlt: "Dr. Gita Khadka Kharel portrait",
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
      name: "Ankita Thapa",
      qualification: "Bachelor of Dental Surgery (Kathmandu University)",
      specialization: "General Dentist",
      experience: "2+ Years",
      bio: "Dr. Ankita Thapa is a General Dentist dedicated to delivering high-quality, comprehensive oral healthcare. A graduate of Kathmandu University with a Bachelor of Dental Surgery, she brings extensive clinical expertise in preventive treatments and oral health management. Dr. Ankita is known for her patient-first approach, ensuring each individual receives personalized and attentive dental care.",
      photoUrl: "/images/doctor/Annkita.jpg",
      photoAlt: "Dr. Ankita Thapa portrait",
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
