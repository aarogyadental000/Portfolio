export type HeroSlide = {
  src: string;
  alt: string;
};

// TODO: Add real photos for the second branch. Until then it reuses existing
// placeholder photos in a different order so the branches look distinct.
export const heroSlidesByBranch: Record<string, HeroSlide[]> = {
  gokarneshwor: [
    {
      src: "/images/hero-dentist-patient.webp",
      alt: "Dentist examining a patient in a modern dental clinic",
    },
    {
      src: "/images/hero-treatment.webp",
      alt: "Dentist providing gentle treatment to a patient",
    },
    {
      src: "/images/clinic-bright.webp",
      alt: "Bright and clean dental clinic room",
    },
  ],
  "branch-2": [
    {
      src: "/images/clinic-bright.webp",
      alt: "Bright and clean dental clinic room",
    },
    {
      src: "/images/clinic-room.webp",
      alt: "Modern dental treatment room",
    },
    {
      src: "/images/hero-dentist-patient.webp",
      alt: "Dentist examining a patient in a modern dental clinic",
    },
  ],
};
