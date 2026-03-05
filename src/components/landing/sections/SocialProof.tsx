"use client";

import React from "react";
import { useDemo } from "@/context/DemoContext";
import { demoLanguages } from "@/lib/demo-languages";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { name: "Espa\u00f1ol" },
  { name: "Deutsch" },
  { name: "English" },
  { name: "\u4e2d\u6587" },
  { name: "\u65e5\u672c\u8a9e" },
  { name: "\u0939\u093f\u0928\u094d\u0926\u0940" },
  { name: "\u7cb5\u8a9e" },
  { name: "Fran\u00e7ais" },
  { name: "Italiano" },
  { name: "Portugu\u00eas" },
  { name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
  { name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
  { name: "\ud55c\uad6d\uc5b4" },
  { name: "\u0627\u0631\u062f\u0648" },
  { name: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
  { name: "\u09ac\u09be\u0982\u09b2\u09be" },
  { name: "Svenska" },
  { name: "Ti\u1ebfng Vi\u1ec7t" },
  { name: "Kiswahili" },
  { name: "Bahasa Indonesia" }
];

const SocialProof = () => {
  const { currentLanguage } = useDemo();
  const { messages } = useLanguage();

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-xl md:text-2xl text-black leading-relaxed">{messages.socialProof.title}</p>
      </div>

      <div className="relative flex overflow-x-hidden group max-w-7xl mx-auto mask-linear-fade">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center pr-16">
          {[...languages, ...languages].map((lang, i) => {
            const config = demoLanguages.find((d) => d.nativeName === lang.name);
            const isActive = lang.name === currentLanguage.nativeName;

            return (
              <span
                key={i}
                className={`text-2xl font-medium transition-all duration-700 cursor-default select-none ${
                  isActive ? "scale-110 opacity-100" : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                style={
                  config
                    ? {
                        backgroundImage: `linear-gradient(to right, ${config.from}, ${config.via}, ${config.to})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }
                    : {}
                }
              >
                {lang.name}
              </span>
            );
          })}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center pr-16">
          {[...languages, ...languages].map((lang, i) => {
            const config = demoLanguages.find((d) => d.nativeName === lang.name);
            const isActive = lang.name === currentLanguage.nativeName;

            return (
              <span
                key={i}
                className={`text-2xl font-medium transition-all duration-700 cursor-default select-none ${
                  isActive ? "scale-110 opacity-100" : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                style={
                  config
                    ? {
                        backgroundImage: `linear-gradient(to right, ${config.from}, ${config.via}, ${config.to})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }
                    : {}
                }
              >
                {lang.name}
              </span>
            );
          })}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SocialProof;
