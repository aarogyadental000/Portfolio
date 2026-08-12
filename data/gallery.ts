export type GalleryImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero-treatment.jpg",
    alt: "Dentist providing gentle treatment to a patient",
    tall: true,
  },
  {
    src: "/images/clinic-room.jpg",
    alt: "Modern dental treatment room",
  },
  {
    src: "/images/clinic-chair.jpg",
    alt: "Modern dental chair and equipment",
  },
  {
    src: "/images/instruments.jpg",
    alt: "Dental instruments laid out for a procedure",
  },
  {
    src: "/images/clinic-bright.jpg",
    alt: "Bright and clean dental clinic room",
  },
  {
    src: "/images/tools-hands.jpg",
    alt: "Dental tools in a clinician's hands",
  },
];
