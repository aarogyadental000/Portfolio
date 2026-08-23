export type HeroSlide = {
  src: string;
  alt: string;
};

// TODO: Add real photos for the second branch. Until then it reuses existing
// placeholder photos in a different order so the branches look distinct.
export const heroSlidesByBranch: Record<string, HeroSlide[]> = {
  gokarneshwor: [
    {
      src: "/images/2.webp",
      alt: "Bright and clean dental clinic room",
    },{
      src: "/images/5.webp",
      alt: "Bright and clean dental clinic room",
    },
    
  ],
  "branch-2": [
    {
      src: "/images/3.webp",
      alt: "Modern dental treatment room",
    },{
      src: "/images/5.webp",
      alt: "Modern dental treatment room",
    },
    
  ],
};
