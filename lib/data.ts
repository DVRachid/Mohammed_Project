import { ConferenceChair, ImportantDate, ProgramSession, Speaker, Topic } from "@/types";

export const conferenceMeta = {
  shortName: "ICETEI 2026",
  title: "International Conference on Emerging Technologies, Engineering and Interdisciplinary Innovation",
  theme: "Advancing Knowledge, Technology and Innovation for a Sustainable Future",
  date: "December 20-21, 2026",
  location: "Faculty of Sciences, Tetouan – Abdelmalek Essaâdi University, Morocco",
  venue: "Faculty of Sciences, Tetouan",
  format: "In-person / Hybrid",
  university: "Abdelmalek Essaâdi University",
  scopusIndexed: true,
  website: "https://www.icetei2027.org",
  email: "icetei2027@fst.uae.ac.ma",
  submissionUrl: "/submission",
  registrationUrl: "/registration",
  programUrl: "/program",
  targetDate: "2026-12-20T09:00:00",
};

export const conferenceChairs: ConferenceChair[] = [
  { name: "Pr. Lahlaouti Mohammed Lhassane" },
  { name: "Pr. Essaouini Hilal" },
  { name: "Dr. Bousla Mohamed" },
];

export const topics: Topic[] = [
  {
    title: "Track 1 — Computer Science & Digital Technologies",
    description: "AI, data science, cybersecurity, and digital transformation.",
    subtopics: [
      "AI & Machine Learning",
      "Data Science & Big Data",
      "Cybersecurity",
      "Cloud/Edge Computing",
      "IoT",
      "Computer Vision",
      "Software Engineering",
      "Digital Transformation",
    ],
    icon: "brain",
  },
  {
    title: "Track 2 — Electrical Eng., Electronics & Energy Systems",
    description: "Power systems, smart grids, and renewable energy technologies.",
    subtopics: [
      "Power Systems",
      "Smart Grids",
      "Renewable Energy",
      "Energy Storage",
      "Power Electronics",
      "Embedded Systems",
      "Signal Processing",
      "Communications",
    ],
    icon: "zap",
  },
  {
    title: "Track 3 — Mechanical, Industrial & Manufacturing Eng.",
    description: "Industry 4.0/5.0, robotics, and advanced manufacturing.",
    subtopics: [
      "Manufacturing Systems",
      "Industry 4.0/5.0",
      "Robotics & Automation",
      "Mechatronics",
      "Product Design",
      "Additive Manufacturing",
      "Reliability",
      "Optimization",
    ],
    icon: "cog",
  },
  {
    title: "Track 4 — Applied Sciences & Advanced Modeling",
    description: "Computational sciences, simulation, and digital twins.",
    subtopics: [
      "Applied Physics & Maths",
      "Numerical Methods",
      "Optimization",
      "Computational Sciences",
      "Modeling & Simulation",
      "Digital Twins",
      "Multi-Physics Systems",
    ],
    icon: "flask",
  },
  {
    title: "Track 5 — Sustainable Development & Environmental Systems",
    description: "Green technologies, climate adaptation, and circular economy.",
    subtopics: [
      "Sustainable Development",
      "Environmental Engineering",
      "Climate Adaptation",
      "Circular Economy",
      "Green Technologies",
      "Water Resources",
      "Sustainable Mobility",
    ],
    icon: "leaf",
  },
  {
    title: "Track 6 — Logistics, Management & Interdisciplinary Innovation",
    description: "Supply chain, operations research, and entrepreneurship.",
    subtopics: [
      "Supply Chain & Smart Logistics",
      "Operations Research",
      "Decision Support",
      "Project & Technology Management",
      "Innovation & Entrepreneurship",
    ],
    icon: "truck",
  },
];

export const speakers: Speaker[] = [
  {
    name: "Prof. Lina El Haddad",
    role: "AI Systems Keynote",
    institution: "École Polytechnique Paris",
    bio: "Expert in trustworthy AI and large-scale intelligent systems for critical sectors.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
    links: { linkedin: "#", x: "#", website: "#" },
  },
  {
    name: "Dr. Omar Benali",
    role: "Industry 4.0 Keynote",
    institution: "TU Munich",
    bio: "Leads cyber-physical manufacturing initiatives across European smart factories.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
    links: { linkedin: "#", x: "#", website: "#" },
  },
  {
    name: "Prof. Sarah K. Njeri",
    role: "Energy Transition Keynote",
    institution: "University of Cape Town",
    bio: "Researcher in renewable energy optimization and resilient infrastructure design.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
    links: { linkedin: "#", x: "#", website: "#" },
  },
];

export const importantDates: ImportantDate[] = [
  { label: "Articles Submission Deadline", date: "September 30, 2026", status: "current" },
  { label: "Notification of Acceptance", date: "October 30, 2026", status: "upcoming" },
  { label: "Camera-ready & Registration", date: "November 30, 2026", status: "upcoming" },
  { label: "Conference", date: "December 20-21, 2026", status: "upcoming" },
];

export const schedule: Record<string, ProgramSession[]> = {
  "Day 1": [
    { time: "09:00", title: "Opening Ceremony", speaker: "Organizing Committee", room: "Main Hall" },
    { time: "10:00", title: "Keynote: Emerging Technologies", speaker: "Invited Speaker", room: "Main Hall" },
  ],
  "Day 2": [
    { time: "09:30", title: "Technical Sessions", speaker: "Multiple Speakers", room: "Room A" },
    { time: "15:30", title: "Awards & Closing", speaker: "Conference Chairs", room: "Main Hall" },
  ],
};

export const partners = [
  "Faculty of Sciences – Tetouan",
  "Springer",
  "Scopus Indexed",
  "Association Energies Renouvelables et Développement Durable",
];
