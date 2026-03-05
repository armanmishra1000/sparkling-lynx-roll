"use client";

import React, { useMemo } from "react";
import { marqueeLanguages } from "@/lib/marquee-languages";
import CircleFlag from "@/components/landing/shared/CircleFlag";

const LanguagesMarqueeSection = () => {
  const languageItems = useMemo(() => marqueeLanguages, []);

  return (
    <section className="pb-12 pt-10 bg-white" aria-label="Supported languages">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="space-y-10">

          <div className="text-center">

            <p className="text-2xl md:text-3xl font-semibold italic text-black">
              Sophie can assist you in 50+ languages
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languageItems.map((language) => (
              <div
                key={language.id}
                className="relative flex h-12 items-center rounded-full border border-gray-200 bg-white pl-14 "
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 shrink-0 rounded-full">
                  <CircleFlag countryCode={language.countryCode} size={48} alt={`${language.name} flag`} />
                </div>
                <span className="truncate text-base sm:text-lg font-semibold text-black leading-tight">
                  {language.name}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-4xl font-semibold text-black">
            Learn any language in any language, no English required!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LanguagesMarqueeSection;
