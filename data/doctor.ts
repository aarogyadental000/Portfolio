export type DoctorHours = {
  days: string;
  time: string;
};

export type Doctor = {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  photoUrl: string;
  photoAlt: string;
  hours: DoctorHours[];
};

export const showDoctors = true;

// TODO: Replace the placeholder doctors and photos below with the second
// branch's real team.
export const doctorsByBranch: Record<string, Doctor[]> = {
  gokarneshwor: [
    {
      name: "Tanvir Rahman",
      qualification: "BDS, FCPS (Oral & Maxillofacial Surgery)",
      specialization: "Dental Implants",
      experience: "12+ Years",
      bio: "Dr. Tanvir Rahman leads our maxillofacial surgery team with over a decade of hands-on experience in dental implants and complex oral surgery. Having placed well over a thousand implants, he combines precise surgical technique with a calm, reassuring approach that puts even the most anxious patients at ease.",
      photoUrl: "/images/doctor-portrait.webp",
      photoAlt: "Dr. Tanvir Rahman portrait",
      hours: [
        { days: "Sunday", time: "9:00 AM – 6:00 PM" },
        { days: "Monday", time: "9:00 AM – 6:00 PM" },
        { days: "Tuesday", time: "9:00 AM – 6:00 PM" },
        { days: "Wednesday", time: "9:00 AM – 6:00 PM" },
        { days: "Thursday", time: "9:00 AM – 6:00 PM" },
        { days: "Friday", time: "3:00 PM – 8:00 PM" },
        { days: "Saturday", time: "Closed" },
      ],
    },
    {
      name: "Farhana Islam",
      qualification: "BDS, MS (Orthodontics)",
      specialization: "Braces & Aligners",
      experience: "9+ Years",
      bio: "Dr. Farhana Islam believes orthodontics is about more than straight teeth. She takes the time to understand each patient's daily life, concerns, and goals, then crafts a personalized plan using clear aligners or modern braces that fits around work, school, and social commitments.",
      photoUrl: "/images/doctor-portrait-2.webp",
      photoAlt: "Dr. Farhana Islam portrait",
      hours: [
        { days: "Sunday", time: "10:00 AM – 7:00 PM" },
        { days: "Monday", time: "10:00 AM – 7:00 PM" },
        { days: "Tuesday", time: "10:00 AM – 7:00 PM" },
        { days: "Wednesday", time: "10:00 AM – 7:00 PM" },
        { days: "Thursday", time: "10:00 AM – 7:00 PM" },
        { days: "Friday", time: "2:00 PM – 7:00 PM" },
        { days: "Saturday", time: "Closed" },
      ],
    },
    {
      name: "Shaila Akter",
      qualification: "BDS, PGT (Endodontics)",
      specialization: "Root Canal Therapy",
      experience: "7+ Years",
      bio: "Dr. Shaila Akter knows that 'root canal' still sounds alarming to many patients. Her gentle technique and use of rotary endodontics mean most procedures are quicker and more comfortable than expected, with the goal of saving your natural tooth whenever possible.",
      photoUrl: "/images/doctor-portrait-3.webp",
      photoAlt: "Dr. Shaila Akter portrait",
      hours: [
        { days: "Sunday", time: "9:30 AM – 5:30 PM" },
        { days: "Monday", time: "9:30 AM – 5:30 PM" },
        { days: "Tuesday", time: "9:30 AM – 5:30 PM" },
        { days: "Wednesday", time: "9:30 AM – 5:30 PM" },
        { days: "Thursday", time: "9:30 AM – 5:30 PM" },
        { days: "Friday", time: "4:00 PM – 8:00 PM" },
        { days: "Saturday", time: "Closed" },
      ],
    },
  ],
  "branch-2": [
    {
      name: "Anil Maharjan",
      qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
      specialization: "Dental Implants",
      experience: "10+ Years",
      bio: "Dr. Anil Maharjan brings careful, methodical precision to every surgical case. From single implants to full-mouth rehabilitation, he plans each procedure in detail and talks you through every step, so you know exactly what to expect before, during, and after treatment.",
      photoUrl: "/images/doctor-portrait.webp",
      photoAlt: "Dr. Anil Maharjan portrait",
      hours: [
        { days: "Sunday", time: "9:00 AM – 6:00 PM" },
        { days: "Monday", time: "9:00 AM – 6:00 PM" },
        { days: "Tuesday", time: "9:00 AM – 6:00 PM" },
        { days: "Wednesday", time: "9:00 AM – 6:00 PM" },
        { days: "Thursday", time: "9:00 AM – 6:00 PM" },
        { days: "Friday", time: "3:00 PM – 8:00 PM" },
        { days: "Saturday", time: "Closed" },
      ],
    },
    {
      name: "Sunita Gurung",
      qualification: "BDS, MDS (Orthodontics)",
      specialization: "Braces & Aligners",
      experience: "8+ Years",
      bio: "Dr. Sunita Gurung treats every orthodontic patient as an individual. Whether you are a teenager needing braces or a professional seeking discreet clear aligners, she explains each phase of treatment clearly and adjusts the plan to suit your lifestyle and budget.",
      photoUrl: "/images/doctor-portrait-2.webp",
      photoAlt: "Dr. Sunita Gurung portrait",
      hours: [
        { days: "Sunday", time: "10:00 AM – 7:00 PM" },
        { days: "Monday", time: "10:00 AM – 7:00 PM" },
        { days: "Tuesday", time: "10:00 AM – 7:00 PM" },
        { days: "Wednesday", time: "10:00 AM – 7:00 PM" },
        { days: "Thursday", time: "10:00 AM – 7:00 PM" },
        { days: "Friday", time: "2:00 PM – 7:00 PM" },
        { days: "Saturday", time: "Closed" },
      ],
    },
    {
      name: "Krishna Shrestha",
      qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
      specialization: "Root Canal Therapy",
      experience: "9+ Years",
      bio: "Dr. Krishna Shrestha is passionate about saving natural teeth. Using rotary endodontics and magnification, he performs root canal therapy with a level of precision that reduces discomfort and improves outcomes, giving your tooth the best chance to last a lifetime.",
      photoUrl: "/images/doctor-portrait-3.webp",
      photoAlt: "Dr. Krishna Shrestha portrait",
      hours: [
        { days: "Sunday", time: "9:30 AM – 5:30 PM" },
        { days: "Monday", time: "9:30 AM – 5:30 PM" },
        { days: "Tuesday", time: "9:30 AM – 5:30 PM" },
        { days: "Wednesday", time: "9:30 AM – 5:30 PM" },
        { days: "Thursday", time: "9:30 AM – 5:30 PM" },
        { days: "Friday", time: "4:00 PM – 8:00 PM" },
        { days: "Saturday", time: "Closed" },
      ],
    },
  ],
};
