export type Doctor = {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  photoUrl: string;
  photoAlt: string;
};

// TODO: Fill in the real doctors below.
export const showDoctors = true;

export const doctors: Doctor[] = [
  {
    name: "[DOCTOR NAME]",
    qualification: "[QUALIFICATION]",
    specialization: "[SPECIALIZATION]",
    experience: "[EXPERIENCE]",
    bio: "[DOCTOR BIO]",
    photoUrl: "/images/doctor-portrait.webp",
    photoAlt: "[DOCTOR NAME] — portrait",
  },
  {
    name: "[DOCTOR NAME 2]",
    qualification: "[QUALIFICATION 2]",
    specialization: "[SPECIALIZATION 2]",
    experience: "[EXPERIENCE 2]",
    bio: "[DOCTOR 2 BIO]",
    photoUrl: "/images/doctor-portrait-2.webp",
    photoAlt: "[DOCTOR NAME 2] — portrait",
  },
  {
    name: "[DOCTOR NAME 3]",
    qualification: "[QUALIFICATION 3]",
    specialization: "[SPECIALIZATION 3]",
    experience: "[EXPERIENCE 3]",
    bio: "[DOCTOR 3 BIO]",
    photoUrl: "/images/doctor-portrait-3.webp",
    photoAlt: "[DOCTOR NAME 3] — portrait",
  },
];
