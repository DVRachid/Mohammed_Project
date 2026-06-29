export type Language = "en" | "fr";

export interface Topic {
  title: string;
  description: string;
  subtopics?: string[];
  icon?: string;
}

export interface Speaker {
  name: string;
  role: string;
  institution: string;
  bio: string;
  image: string;
  links: { linkedin?: string; x?: string; website?: string };
}

export interface ImportantDate {
  label: string;
  date: string;
  status: "upcoming" | "current" | "done";
}

export interface ProgramSession {
  time: string;
  title: string;
  speaker: string;
  room: string;
}

export interface ConferenceChair {
  name: string;
}
