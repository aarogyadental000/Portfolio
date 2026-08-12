export type Testimonial = {
  quote: string;
  name: string;
  treatment?: string;
};

export const showTestimonials = true;

export const testimonials: Testimonial[] = [
  {
    quote: "[PATIENT QUOTE 1]",
    name: "[PATIENT NAME]",
    treatment: "[TREATMENT]",
  },
  {
    quote: "[PATIENT QUOTE 2]",
    name: "[PATIENT NAME 2]",
    treatment: "[TREATMENT 2]",
  },
  {
    quote: "[PATIENT QUOTE 3]",
    name: "[PATIENT NAME 3]",
    treatment: "[TREATMENT 3]",
  },
];
