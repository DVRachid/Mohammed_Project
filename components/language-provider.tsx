"use client";

import { Language } from "@/types";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext<{ language: Language; setLanguage: (v: Language) => void }>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
