"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { demoLanguages, LanguageConfig } from "@/lib/demo-languages";

interface DemoContextType {
  currentLanguage: LanguageConfig;
  isPaused: boolean;
  setPaused: (paused: boolean) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoLanguages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentLanguage = demoLanguages[currentIndex];

  return (
    <DemoContext.Provider value={{ currentLanguage, isPaused, setPaused: setIsPaused }}>
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
