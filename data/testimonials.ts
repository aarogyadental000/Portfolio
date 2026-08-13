export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
  /** Optional local image path (or an approved remote image URL) for the reviewer. */
  photo?: string;
  relativeTime?: string;
  url?: string;
};

export const showTestimonials = true;

// TODO: Replace the placeholders below with real reviews from the clinic's
// Google Maps listing. Optional fields: relativeTime (e.g. "2 months ago")
// and url (a link to that review on Google Maps).
export const testimonials: Testimonial[] = [
  {
    quote: "I had my dental implants done here and the experience was incredible. The doctors were so professional and caring. My fixed teeth feel completely natural, I'm so happy with the results!",
    name: "Ramesh Shrestha",
    rating: 5,
  },
  {
    quote: "My 86-year-old father got his complete dentures fixed here. The team was so patient and gentle with him. Patient's happiness is truly their goal. Highly recommend Aarogya Dental Care!",
    name: "Sita Poudel",
    rating: 5,
  },
  {
    quote: "Had a wisdom tooth extraction that I was dreading for months. The procedure was completely painless and recovery was quick. The clinic is super clean and the staff is wonderful.",
    name: "Anish Karki",
    rating: 5,
  },
];
