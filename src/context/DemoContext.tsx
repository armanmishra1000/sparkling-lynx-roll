"use client";

import React, { createContext, useCallback, useContext, useState, ReactNode } from "react";
import { demoLanguages, LanguageConfig } from "@/lib/demo-languages";

interface DemoContextType {
  currentLanguage: LanguageConfig;
  isPaused: boolean;
  setPaused: (paused: boolean) => void;
  setLanguageById: (id: LanguageConfig["id"]) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const englishIndex = demoLanguages.findIndex((lang) => lang.id === "en");
  const [currentIndex, setCurrentIndex] = useState(englishIndex >= 0 ? englishIndex : 0);
  const [isPaused, setIsPaused] = useState(true);

  const setLanguageById = useCallback((id: LanguageConfig["id"]) => {
    const index = demoLanguages.findIndex((lang) => lang.id === id);
    if (index < 0) return;

    setCurrentIndex((previousIndex) => (previousIndex === index ? previousIndex : index));
    setIsPaused((previousPaused) => (previousPaused ? previousPaused : true));
  }, []);

  const currentLanguage = demoLanguages[currentIndex];

  return (
    <DemoContext.Provider value={{ currentLanguage, isPaused, setPaused: setIsPaused, setLanguageById }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
};
