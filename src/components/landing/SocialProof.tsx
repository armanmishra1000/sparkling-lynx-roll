"use client";

import React from "react";

const languages = [
  { name: "Español", font: "font-sans" },
  { name: "Deutsch", font: "font-serif" },
  { name: "English", font: "font-sans" },
  { name: "中文", font: "font-sans" },
  { name: "日本語", font: "font-sans" },
  { name: "हिन्दी", font: "font-sans" },
  { name: "粵語", font: "font-sans" },
  { name: "Français", font: "font-serif" },
  { name: "Italiano", font: "font-serif" },
  { name: "Português", font: "font-sans" },
  { name: "العربية", font: "font-sans" },
  { name: "Русский", font: "font-sans" },
  { name: "한국어", font: "font-sans" },
  { name: "اردو", font: "font-sans" },
  { name: "தமிழ்", font: "font-sans" },
  { name: "বাংলা", font: "font-sans" },
  { name: "Svenska", font: "font-serif" },
  { name: "Tiếng Việt", font: "font-sans" },
  { name: "Kiswahili", font: "font-sans" },
  { name: "Bahasa Indonesia", font: "font-sans" },
];

const SocialProof = () => {
  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Powering the next generation of polyglots
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group max-w-7xl mx-auto mask-linear-fade">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...languages, ...languages].map((lang, i) => (
            <span
              key={i}
              className={`text-2xl text-gray-300 font-medium hover:text-gray-900 transition-colors duration-500 cursor-default select-none grayscale hover:grayscale-0`}
            >
              {lang.name}
            </span>
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center">
          {[...languages, ...languages].map((lang, i) => (
            <span
              key={i}
              className={`text-2xl text-gray-300 font-medium hover:text-gray-900 transition-colors duration-500 cursor-default select-none grayscale hover:grayscale-0`}
            >
              {lang.name}
            </span>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SocialProof;
