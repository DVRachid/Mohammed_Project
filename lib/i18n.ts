import { Language } from "@/types";

type Copy = {
  nav: string[];
  ctaSubmit: string;
  ctaRegister: string;
  ctaProgram: string;
};

export const content: Record<Language, Copy> = {
  en: {
    nav: ["About", "Topics", "Speakers", "Dates", "Submission", "Registration", "Program", "Committee", "Sponsors", "Contact"],
    ctaSubmit: "Submit Paper",
    ctaRegister: "Register Now",
    ctaProgram: "View Program",
  },
  fr: {
    nav: ["À propos", "Thèmes", "Intervenants", "Dates", "Soumission", "Inscription", "Programme", "Comité", "Sponsors", "Contact"],
    ctaSubmit: "Soumettre un article",
    ctaRegister: "S'inscrire",
    ctaProgram: "Voir le programme",
  },
};
