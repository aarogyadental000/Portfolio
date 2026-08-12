export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
  relativeTime?: string;
  url?: string;
};

export const showTestimonials = true;

// TODO: Replace the placeholders below with real reviews from the clinic's
// Google Maps listing. Optional fields: relativeTime (e.g. "2 months ago")
// and url (a link to that review on Google Maps).
export const testimonials: Testimonial[] = [
  {
    quote: "[PATIENT QUOTE 1]",
    name: "[PATIENT NAME]",
    rating: 5,
  },
  {
    quote: "[PATIENT QUOTE 2]",
    name: "[PATIENT NAME 2]",
    rating: 5,
  },
  {
    quote: "[PATIENT QUOTE 3]",
    name: "[PATIENT NAME 3]",
    rating: 5,
  },
];
