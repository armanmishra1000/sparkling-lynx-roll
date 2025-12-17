"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Linguist.io", font: "font-serif" },
  { name: "SpeechTech", font: "font-mono" },
  { name: "PolyglotDaily", font: "font-sans" },
  { name: "GlobalSpeak", font: "font-serif italic" },
  { name: "FutureLang", font: "font-bold" },
  { name: "VoiceAI", font: "font-mono" },
];

const SocialProof = () => {
  return (
    <section className="py-12 border-b border-black/5 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          Powering the next generation of polyglots
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className={`text-2xl md:text-4xl text-gray-300 ${brand.font} font-bold hover:text-black transition-colors duration-300 cursor-default select-none`}
            >
              {brand.name}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 md:gap-32 items-center ml-16 md:ml-32">
           {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className={`text-2xl md:text-4xl text-gray-300 ${brand.font} font-bold hover:text-black transition-colors duration-300 cursor-default select-none`}
            >
              {brand.name}
            </span>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SocialProof;