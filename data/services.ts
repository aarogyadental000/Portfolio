import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Crown,
  Eraser,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Scissors,
  Stethoscope,
  Sun,
  Syringe,
} from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  featured?: boolean;
  longDescription: string[];
  whatToExpect: string[];
  benefits: string[];
  pricingNote: string;
};

export const services: Service[] = [
  {
    title: "Oral Check Up and Diagnosis",
    slug: "oral-check-up-and-diagnosis",
    description:
      "Routine examinations, preventive care and treatment for the everyday health of your teeth and gums.",
    icon: Stethoscope,
    image: "/images/service-checkup.webp",
    imageAlt: "Dentist examining a patient's teeth with a mirror during a routine checkup",
    featured: true,
    longDescription: [
      "Regular checkups are the foundation of good oral health. During a routine visit we examine your teeth, gums and mouth for early signs of problems, before they become painful or expensive to treat. Catching issues while they are small, simple and easy to manage is the best way to protect your smile.",
      "Your visit combines a thorough examination, a careful review of your medical and dental history, and clear guidance on your daily care routine. Where needed, we use X-rays to see what is happening beneath the surface, so nothing is missed.",
      "We take time to explain what we find in plain language and answer your questions honestly. Whether you are due for a checkup or worried about a specific concern, this is where every healthy smile starts.",
    ],
    whatToExpect: [
      "A friendly conversation about your dental history, habits and any concerns.",
      "A thorough examination of your teeth, gums, bite and mouth.",
      "X-rays when needed to check for hidden issues.",
      "A clear diagnosis and honest recommendations, in plain language.",
      "A personalised plan for keeping your smile healthy.",
    ],
    benefits: [
      "For everyone, children, adults and older patients.",
      "Catches problems early, before they turn into pain or costly treatment.",
      "Gives you a clear, honest picture of your oral health.",
      "Fresher breath and a cleaner, healthier mouth.",
      "Builds a long-term relationship with a dentist who knows your history.",
    ],
    pricingNote:
      "Checkup costs are simple and clearly explained before we begin. We will always confirm the price before any examination or treatment, with no hidden charges.",
  },
  {
    title: "Restoration with Fillings",
    slug: "restoration-with-fillings",
    description:
      "Modern, natural-looking fillings that repair cavities and restore damaged teeth.",
    icon: Activity,
    image: "/images/service-fillings.webp",
    imageAlt: "Dentist light-curing a tooth-coloured filling to restore a tooth",
    featured: false,
    longDescription: [
      "When a tooth is damaged by decay, a filling restores it quickly and comfortably before the problem can grow worse. We remove the decayed tissue carefully, clean the area, and rebuild the tooth so it looks and functions naturally again.",
      "Modern tooth-coloured fillings blend seamlessly with your smile, so a restored tooth is practically invisible. They are durable, comfortable and safe, and they let you keep your natural tooth rather than losing it to decay.",
      "Treating cavities early means smaller fillings, less time in the chair and a far better outcome for your tooth. If you have noticed tooth pain, sensitivity or a visible hole, the sooner we restore it, the simpler the treatment.",
    ],
    whatToExpect: [
      "An examination, and an X-ray where needed, to see the full extent of the decay.",
      "A clear explanation of what we found and the recommended treatment.",
      "Numbing the area so the treatment is completely comfortable.",
      "Removing the decay and rebuilding the tooth with a precise, natural-looking filling.",
      "A bite check, polish and aftercare advice to help it last.",
    ],
    benefits: [
      "For anyone with cavities, tooth pain, sensitivity or damaged teeth.",
      "Stops decay from spreading and saves your natural tooth.",
      "Natural-looking fillings that match your smile.",
      "Comfortable, usually completed in a single visit.",
      "Protects the tooth from further damage and future pain.",
    ],
    pricingNote:
      "The cost depends on the size and position of the filling. We examine first, explain your options and confirm the exact price before any treatment begins.",
  },
  {
    title: "Dental Prosthesis",
    slug: "dental-prosthesis",
    description:
      "Natural-looking crowns, bridges and dentures to restore or replace missing teeth.",
    icon: Crown,
    image: "/images/service-prosthesis.webp",
    imageAlt: "Close-up of a dental denture in a gloved hand",
    featured: false,
    longDescription: [
      "Missing or severely damaged teeth affect more than your smile. They make it harder to eat, speak and feel confident. Crowns, bridges and dentures are time-tested ways to restore your teeth so you can eat, smile and laugh without hesitation.",
      "A crown caps and protects a weak or broken tooth. A bridge fills a gap using the healthy teeth on either side for support. Dentures replace several or all missing teeth with comfortable, natural-looking options that fit your mouth precisely.",
      "We take care to match the shape, shade and alignment of your remaining teeth, so your restoration looks and feels as natural as possible. The result is a complete, confident smile that works as well as it looks.",
    ],
    whatToExpect: [
      "A consultation to understand your needs and examine your teeth.",
      "A discussion of the best option, crown, bridge or denture, for your situation.",
      "Precise measurements and shade-matching for a natural fit.",
      "A comfortable fitting, adjusted until everything feels right.",
      "Clear care instructions so your restoration lasts for years.",
    ],
    benefits: [
      "For anyone with broken, weakened or missing teeth.",
      "Restores your ability to chew and speak normally.",
      "Supports the teeth around the gap, preventing them from shifting.",
      "Natural-looking results matched to your smile.",
      "Long-lasting solutions when cared for properly.",
    ],
    pricingNote:
      "Crowns, bridges and dentures are planned individually, so the cost varies with the option you choose. We provide a clear, itemised quote before starting, no surprises.",
  },
  {
    title: "Oral Surgery",
    slug: "oral-surgery",
    description:
      "Surgical procedures performed with care, precision and patient comfort in mind.",
    icon: Scissors,
    image: "/images/service-surgery.webp",
    imageAlt: "Surgeons performing a careful oral surgical procedure",
    featured: false,
    longDescription: [
      "Some dental problems need more than routine treatment. Oral surgery covers a range of procedures, from the removal of impacted teeth and cysts to biopsy and other surgical care, all performed with modern equipment and careful technique.",
      "Your comfort is our priority. We use effective local anaesthesia and gentle, precise methods, and we explain what is happening at every step so you always feel informed and in control.",
      "Most surgical procedures are straightforward and recovery is quicker than most people expect. We give you clear, practical aftercare instructions and stay in touch until you are fully healed.",
    ],
    whatToExpect: [
      "A full assessment, including X-rays, to plan the procedure safely.",
      "A clear explanation of the procedure, its benefits and the recovery.",
      "Local anaesthesia so the treatment is comfortable.",
      "A gentle, precise procedure with close monitoring throughout.",
      "Written aftercare advice and a follow-up to check healing.",
    ],
    benefits: [
      "For anyone needing removal of impacted or problematic teeth, cysts or other surgical care.",
      "Relieves pain and prevents further complications.",
      "Performed with modern equipment and strict safety standards.",
      "Clear, guided recovery with support until you heal.",
      "Protects the long-term health of your mouth and remaining teeth.",
    ],
    pricingNote:
      "Surgical procedures are planned individually, so cost depends on the complexity. We explain the exact cost and any follow-up visits before we begin.",
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description:
      "Smile-enhancing treatments that improve the appearance of your teeth.",
    icon: Sparkles,
    image: "/images/service-cosmetic.webp",
    imageAlt: "Close-up of natural-looking dental veneers on a teeth model",
    featured: true,
    longDescription: [
      "Your smile is often the first thing people notice about you, and when you are proud of it, it shows. Cosmetic dentistry focuses on the appearance of your teeth: correcting discolouration, gaps, chips, uneven teeth and other imperfections so you can smile with confidence.",
      "Depending on your goals, cosmetic treatment can include whitening, composite bonding, veneers or reshaping. We begin with a conversation about what you would like to change, examine your teeth and gums, and recommend honest, natural-looking options that suit you.",
      "We believe cosmetic dentistry should enhance what makes your smile yours, not replace it. The result is a brighter, more balanced smile that looks completely natural.",
    ],
    whatToExpect: [
      "A friendly consultation about your smile goals and concerns.",
      "A careful examination of your teeth and gums.",
      "Clear options and honest recommendations, with photographs if helpful.",
      "A comfortable, precise treatment matched to your goals.",
      "Aftercare advice to help your results last.",
    ],
    benefits: [
      "For anyone unhappy with the colour, shape or alignment of their smile.",
      "Boosts confidence in social and professional situations.",
      "Natural-looking, personalised results.",
      "A wide range of options to suit different budgets and goals.",
      "Often completed in just a few visits.",
    ],
    pricingNote:
      "Cosmetic treatment varies widely depending on the option you choose. We discuss your goals, explain the options and confirm the full cost before starting.",
  },
  {
    title: "Orthodontic Treatment",
    slug: "orthodontic-treatment",
    description:
      "Braces and alignment options to straighten teeth and correct your bite.",
    icon: SlidersHorizontal,
    image: "/images/service-orthodontic.webp",
    imageAlt: "Orthodontist adjusting braces brackets on a patient's teeth",
    featured: true,
    longDescription: [
      "Crooked, crowded or misaligned teeth are more than a cosmetic concern. They are harder to clean, which can lead to decay and gum problems, and an uneven bite can cause wear and discomfort over time. Orthodontic treatment straightens your teeth and corrects how your upper and lower teeth meet.",
      "We assess your teeth, bite and jaw to recommend the right approach, from traditional braces to modern, more discreet options. Treatment is tailored to you, and we guide you through every stage so you always know what is happening and why.",
      "The investment of time pays off with a straighter, healthier smile and an easier-to-clean mouth that protects your teeth for life. Most patients find the process far more comfortable and straightforward than they expected.",
    ],
    whatToExpect: [
      "A full examination, including bite assessment and, where needed, X-rays.",
      "A clear explanation of your options, treatment time and costs.",
      "Fitting your chosen braces or alignment system comfortably.",
      "Regular adjustment visits to guide your teeth into position.",
      "A retention plan after treatment to keep your results in place.",
    ],
    benefits: [
      "For teenagers and adults with crooked, crowded or gappy teeth.",
      "Straighter teeth are easier to brush and floss, reducing decay risk.",
      "Correcting your bite protects teeth from uneven wear.",
      "A confident, aligned smile.",
      "Options available to suit different needs and comfort levels.",
    ],
    pricingNote:
      "Orthodontic treatment is planned over several visits, and the cost depends on the option and treatment time. We give you a full cost plan before you start, with no hidden fees.",
  },
  {
    title: "Paediatric Dental Services",
    slug: "paediatric-dental-services",
    description:
      "Gentle, friendly dental care that helps children build healthy habits.",
    icon: Smile,
    image: "/images/service-paediatric.webp",
    imageAlt: "Child patient smiling during a friendly dental visit",
    featured: false,
    longDescription: [
      "Children's dental care is different. It is about more than treating teeth. It is about making young patients feel safe, comfortable and even excited about visiting the dentist, so they grow up with healthy habits and no fear of the chair.",
      "We offer gentle checkups, preventive care and early treatment for children of all ages. We explain everything in a friendly, age-appropriate way and take things at your child's pace, so every visit is a positive experience.",
      "By starting early, we can guide the growth and development of your child's teeth, prevent problems before they start, and catch any concerns while they are small and easy to treat.",
    ],
    whatToExpect: [
      "A warm, patient-first welcome designed to put your child at ease.",
      "A gentle examination of teeth, gums and jaw development.",
      "Preventive care such as cleaning and fluoride where recommended.",
      "Friendly, age-appropriate explanations at every step.",
      "Practical advice for parents on brushing, diet and habits.",
    ],
    benefits: [
      "For babies, children and teenagers from their first tooth onwards.",
      "Builds positive dental experiences that last a lifetime.",
      "Catches development issues early, when they are easiest to treat.",
      "Prevents decay with education and preventive care.",
      "A calm, child-friendly environment and team.",
    ],
    pricingNote:
      "Children's treatments are planned simply and clearly, and we always confirm costs with parents before starting. Preventive visits are kept affordable.",
  },
  {
    title: "Endodontics (Root Canal Treatment)",
    slug: "endodontics-root-canal-treatment",
    description:
      "Root canal therapy that saves infected teeth and relieves pain.",
    icon: Syringe,
    image: "/images/service-endodontics.webp",
    imageAlt: "Dental X-ray showing the roots of a tooth",
    featured: true,
    longDescription: [
      "When decay or infection reaches the nerve inside a tooth, a root canal treatment is the way to save it. We remove the infected tissue, clean the canals thoroughly and seal the tooth, relieving pain and preventing the infection from spreading, so you keep your natural tooth.",
      "Modern techniques and effective local anaesthesia have made root canal treatment far more comfortable than its reputation suggests. Most patients feel little to nothing during the procedure, and the relief from toothache is usually immediate once the source of the problem is treated.",
      "Saving your natural tooth is almost always the best option, better than extraction for your bite, your chewing and your long-term oral health. We explain the entire process before we begin, so there are no surprises.",
    ],
    whatToExpect: [
      "An examination and X-rays to confirm the infection and its extent.",
      "A clear explanation of the treatment, benefits and expected outcome.",
      "Numbing the tooth completely for a comfortable procedure.",
      "Removing the infection, cleaning the canals and sealing the tooth.",
      "Aftercare advice and a plan for restoring the tooth afterwards.",
    ],
    benefits: [
      "For anyone with deep decay, severe toothache or an infected tooth.",
      "Relieves pain and stops infection from spreading.",
      "Saves your natural tooth instead of needing an extraction.",
      "Restores comfortable chewing and normal function.",
      "A proven, long-lasting treatment when properly cared for.",
    ],
    pricingNote:
      "The cost of root canal treatment depends on which tooth is affected and the complexity of the case. We confirm the exact price before beginning, no surprises.",
  },
  {
    title: "Oral Prophylaxis",
    slug: "oral-prophylaxis",
    description:
      "Professional plaque and tartar removal to keep teeth and gums healthy.",
    icon: ShieldCheck,
    image: "/images/service-prophylaxis.webp",
    imageAlt: "Dentist professionally cleaning a patient's teeth",
    featured: false,
    longDescription: [
      "Even with careful brushing and flossing, plaque can harden into tartar that a toothbrush cannot remove. Professional cleaning, known as oral prophylaxis, gently removes this build-up from your teeth and gum line, protecting you from gum disease and decay.",
      "During a prophylaxis session we scale away plaque and tartar, polish your teeth to remove surface stains, and check your gums for early signs of disease. It is the single most effective way to prevent gum problems and keep your mouth healthy.",
      "Most patients notice a cleaner feeling and fresher breath immediately. Regular professional cleanings, combined with good home care, are the best protection your smile can have.",
    ],
    whatToExpect: [
      "A quick assessment of your teeth and gum health.",
      "Gentle scaling to remove plaque and tartar from your teeth and gum line.",
      "Polishing to smooth your teeth and remove surface stains.",
      "A check for early signs of gum disease.",
      "Home-care advice to help your results last longer.",
    ],
    benefits: [
      "For anyone with tartar build-up, bleeding gums or bad breath.",
      "Prevents gum disease and tooth decay.",
      "Removes stains for a brighter smile.",
      "Reduces the need for more involved treatment later.",
      "Quick, comfortable and usually a single visit.",
    ],
    pricingNote:
      "Professional cleaning prices are confirmed up-front. We will explain the cost clearly before starting, with no hidden charges.",
  },
  {
    title: "Whitening Teeth",
    slug: "whitening-teeth",
    description:
      "Safe, effective whitening that lifts stains and brightens your smile.",
    icon: Sun,
    image: "/images/service-whitening.webp",
    imageAlt: "Dentist performing a teeth whitening procedure",
    featured: true,
    longDescription: [
      "Teeth naturally darken with age, and everyday drinks like coffee and tea, not to mention smoking, can leave stubborn stains. Whitening safely lifts these surface and deeper stains to restore a brighter, more youthful smile.",
      "We begin with a shade assessment and a quick check that your teeth and gums are healthy enough for whitening. Then we recommend the option that suits you best, whether that is an in-clinic session or a take-home approach under our guidance.",
      "Because we control the process and check your progress, whitening is safe for your tooth enamel and kind to your gums. The result is a noticeably whiter smile, usually in a single session or a short course of home treatment.",
    ],
    whatToExpect: [
      "A shade assessment and a check that your teeth and gums are ready.",
      "A clear discussion of your whitening options and expected results.",
      "Protection for your gums and a safe, comfortable whitening session.",
      "A visible brightening, usually right away.",
      "Advice on care and habits to help your results last.",
    ],
    benefits: [
      "For anyone with stained or discoloured teeth.",
      "Noticeably whiter teeth, often after a single session.",
      "Safe and gentle on tooth enamel.",
      "Boosts confidence in your smile.",
      "Flexible options to suit your time and budget.",
    ],
    pricingNote:
      "Whitening prices depend on the option you choose. We explain the cost and the expected result clearly before starting, no surprises.",
  },
  {
    title: "Dental Extraction",
    slug: "dental-extraction",
    description:
      "Gentle removal of teeth that are damaged, decayed or causing problems.",
    icon: Eraser,
    image: "/images/service-extraction.webp",
    imageAlt: "Patient undergoing a gentle tooth extraction procedure",
    featured: false,
    longDescription: [
      "While we always try to save your natural teeth, sometimes a tooth is too damaged, decayed or crowded to keep. Removing it, and replacing it where appropriate, protects your overall oral health and relieves pain or pressure you may have been living with.",
      "Extractions are performed under effective local anaesthesia, so the procedure itself is comfortable. We work gently and precisely, and we explain each step so you know what is happening.",
      "We do not simply remove the tooth and send you on your way. We explain what to expect during healing, how to care for the area, and the options for replacing the tooth so your smile and bite stay healthy in the long term.",
    ],
    whatToExpect: [
      "An examination and X-rays to plan the extraction safely.",
      "A clear explanation of why the tooth needs to come out.",
      "Local anaesthesia so you feel little to nothing.",
      "A gentle, precise removal with close care throughout.",
      "Written aftercare advice and a plan for replacement if recommended.",
    ],
    benefits: [
      "For anyone with a severely damaged, decayed or problematic tooth.",
      "Relieves pain and infection at the source.",
      "Prevents damage to the surrounding healthy teeth.",
      "A comfortable procedure with clear recovery guidance.",
      "Leaves your mouth healthier, with options to restore your smile.",
    ],
    pricingNote:
      "Extraction costs depend on the position and complexity of the tooth. We confirm the exact price before the procedure and discuss replacement options clearly.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
