"use client";

import { useEffect, useState } from "react";
import { demoLanguages, type LanguageConfig } from "@/lib/demo-languages";

const HERO_ROTATION_INTERVAL_MS = 3000;
const HERO_INITIAL_INDEX = 0;

export const useLandingDemoLanguage = (): LanguageConfig => {
  if (demoLanguages.length === 0) {
    throw new Error("Hero demo languages are not configured.");
  }

  const [currentIndex, setCurrentIndex] = useState(HERO_INITIAL_INDEX);

  useEffect(() => {
    if (demoLanguages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % demoLanguages.length);
    }, HERO_ROTATION_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return demoLanguages[currentIndex] ?? demoLanguages[HERO_INITIAL_INDEX];
};

export const useHeroDemoLanguage = useLandingDemoLanguage;
