export type GalleryImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80",
    alt: "Dentist providing gentle treatment to a patient",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    alt: "Modern dental treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    alt: "Modern dental chair and equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&q=80",
    alt: "Dental instruments laid out for a procedure",
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80",
    alt: "Bright and clean dental clinic room",
  },
  {
    src: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&q=80",
    alt: "Dental tools in a clinician's hands",
  },
];
