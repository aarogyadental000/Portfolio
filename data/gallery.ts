export type GalleryImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

// TODO: Add real photos for the second branch. Until then it uses a different
// mix of existing placeholder photos so the branches look distinct.
export const galleryImagesByBranch: Record<string, GalleryImage[]> = {
  gokarneshwor: [
    {
      src: "/images/clinic-room.webp",
      alt: "Modern dental treatment room",
    },
    {
      src: "/images/hero-treatment.webp",
      alt: "Dentist providing gentle treatment to a patient",
      tall: true,
    },
    {
      src: "/images/clinic-chair.webp",
      alt: "Modern dental chair and equipment",
    },
    {
      src: "/images/instruments.webp",
      alt: "Dental instruments laid out for a procedure",
    },
    {
      src: "/images/clinic-bright.webp",
      alt: "Bright and clean dental clinic room",
    },
    {
      src: "/images/tools-hands.webp",
      alt: "Dental tools in a clinician's hands",
    },
    {
      src: "/images/service-surgery.webp",
      alt: "Dentists performing a careful oral surgical procedure",
    },
    {
      src: "/images/service-team.webp",
      alt: "Dental team examining a patient in a modern clinic",
    },
    {
      src: "/images/service-prophylaxis.webp",
      alt: "Dentist professionally cleaning a patient's teeth",
    },
    {
      src: "/images/service-fillings.webp",
      alt: "Dentist light-curing a tooth-coloured filling",
    },
    {
      src: "/images/service-orthodontic.webp",
      alt: "Orthodontist adjusting braces brackets on a patient",
    },
    {
      src: "/images/service-whitening.webp",
      alt: "Teeth whitening treatment in progress",
    },
    {
      src: "/images/service-checkup.webp",
      alt: "Dentist examining a patient's teeth during a checkup",
    },
  ],
  "branch-2": [
    {
      src: "/images/clinic-chair.webp",
      alt: "Modern dental chair and equipment",
    },
    {
      src: "/images/tools-hands.webp",
      alt: "Dental tools in a clinician's hands",
      tall: true,
    },
    {
      src: "/images/service-paediatric.webp",
      alt: "Dentist examining a young patient",
    },
    {
      src: "/images/service-prophylaxis.webp",
      alt: "Dentist professionally cleaning a patient's teeth",
    },
    {
      src: "/images/service-endodontics.webp",
      alt: "Root canal treatment in progress",
    },
    {
      src: "/images/service-cosmetic.webp",
      alt: "Cosmetic dental procedure",
    },
    {
      src: "/images/service-prosthesis.webp",
      alt: "Dental prosthesis being fitted",
    },
    {
      src: "/images/service-extraction.webp",
      alt: "Tooth extraction procedure",
    },
    {
      src: "/images/clinic-bright.webp",
      alt: "Bright and clean dental clinic room",
    },
  ],
};
