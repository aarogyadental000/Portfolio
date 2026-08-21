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
      src: "/images/1.webp",
      alt: "Modern dental treatment room",
    },{
      src: "/images/6.webp",
      alt: "Modern dental treatment room",
    },{
      src: "/images/7.webp",
      alt: "Modern dental treatment room",
    },{
      src: "/images/4.webp",
      alt: "Modern dental treatment room",
    },{
      src: "/images/5.webp",
      alt: "Modern dental treatment room",
    },{
      src: "/images/10.webp",
      alt: "Modern dental treatment room",
    },
  ],
  "branch-2": [
    {
      src: "/images/7.webp",
      alt: "Modern dental chair and equipment",
    },
    {
      src: "/images/6.webp",
      alt: "Modern dental chair and equipment",
    },
    {
      src: "/images/8.webp",
      alt: "Modern dental chair and equipment",
    },{
      src: "/images/9.webp",
      alt: "Modern dental chair and equipment",
    },{
      src: "/images/11.webp",
      alt: "Modern dental chair and equipment",
    },

  ],
};
