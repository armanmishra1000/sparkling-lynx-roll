"use client";

import React, { useMemo, useRef, useState } from "react";
import { getLocalizedMarqueeLanguages } from "@/lib/marquee-languages";
import CircleFlag from "@/components/landing/shared/CircleFlag";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { useLanguage } from "@/context/LanguageContext";

const LanguagesMarqueeSection = () => {
  const { locale, messages } = useLanguage();
  const languageItems = useMemo(() => getLocalizedMarqueeLanguages(locale), [locale]);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const visibleLanguages = showAllLanguages ? languageItems : languageItems.slice(0, 18);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleToggleLanguages = () => {
    if (showAllLanguages) {
      setShowAllLanguages(false);
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    setShowAllLanguages(true);
  };

  return (
    <section ref={sectionRef} className="pb-12 pt-10 bg-white" aria-label={messages.era.languageTitle}>
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-10">

          <div className="text-center">

            <p className="text-2xl md:text-3xl font-semibold italic text-black">
              {messages.era.languageTitle}
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languageItems.map((language) => (
              <div
                key={language.id}
                className="relative flex h-12 items-center rounded-full border border-gray-200 bg-white pl-14 "
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 shrink-0 rounded-full">
                  <CircleFlag countryCode={language.countryCode} size={48} alt={language.label} />
                </div>
                <span className="truncate text-base sm:text-lg font-semibold text-black leading-tight">
                  {language.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid lg:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleLanguages.map((language) => (
              <div
                key={language.id}
                className="relative flex h-12 items-center rounded-full border border-gray-200 bg-white pl-14 "
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 shrink-0 rounded-full">
                  <CircleFlag countryCode={language.countryCode} size={48} alt={language.label} />
                </div>
                <span className="truncate text-base sm:text-lg font-semibold text-black leading-tight">
                  {language.label}
                </span>
              </div>
            ))}
          </div>
          {languageItems.length > 16 ? (
            <div className="flex justify-center">
              <RainbowBorder
                borderWidth={2}
                borderRadius={9999}
                className="inline-flex lg:hidden"
                innerClassName="relative bg-white px-8 py-3 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={handleToggleLanguages}
                  className="relative z-10 font-medium text-black"
                >
                  {showAllLanguages ? messages.era.seeLess : messages.era.seeMore}
                </button>
                <RainbowGradient className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300" />
              </RainbowBorder>
            </div>
          ) : null}

          <h3 className="text-2xl md:text-4xl font-semibold text-black">
            {messages.era.learnAnyLanguage}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LanguagesMarqueeSection;
