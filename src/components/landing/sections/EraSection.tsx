"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import LanguagesMarqueeSection from "@/components/landing/sections/LanguagesMarqueeSection";
import { useLanguage } from "@/context/LanguageContext";

const EraSection = () => {
  const { messages } = useLanguage();

  return (
    <section className="relative pb-24 pt-24 md:pt-32 overflow-hidden bg-white min-h-[600px] flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-7xl px-4 relative z-10 flex flex-col items-center text-center">
        {/* Main Title: Sophie AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center my-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-black flex items-center uppercase">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#E81416,#FFA500,#FAEB36,#79C314,#487DE7,#4B369D,#70369D)] mr-1">
              S</span>ophie AI
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl font-semibold text-black"
        >
          {messages.era.subtitle}
        </motion.h2>

        {/* Part 2: Wave - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mb-12 h-64 flex items-center justify-center"
        >
          <InteractiveRainbowWave className="h-full" useRainbow={true} />
        </motion.div>

        {/* Additional Text Before Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-8 text-center space-y-4"
        >
          <p className="text-3xl md:text-5xl font-semibold text-black">
            {messages.era.line1}
          </p>
          <p className="text-xl md:text-3xl text-gray-500">
            {messages.era.line2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <LanguagesMarqueeSection />

          {/* Meet Sophie Button with Rainbow Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://sophie-rose.vercel.app/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block transition-transform active:scale-95"
            >
              <RainbowBorder
                borderRadius={9999}
                borderWidth={2}
                innerClassName="relative bg-white w-full h-14 px-12 py-3 flex items-center justify-center overflow-hidden"
              >
                <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <span className="relative z-10 font-medium text-black">
                  {messages.era.meetButton}
                </span>
              </RainbowBorder>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EraSection;
