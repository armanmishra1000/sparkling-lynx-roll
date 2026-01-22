"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveRainbowWave from "./InteractiveRainbowWave";

const EraSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white min-h-[600px] flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-7xl px-4 relative z-10 flex flex-col items-center text-center">
        {/* Main Title: Sophie AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center my-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 flex items-center uppercase">
            <span className="text-transparent bg-clip-text bg-[radial-gradient(circle_at_0%_0%,#df0000,#f61304,#ffc304,#38ff18,#0066ff,#2a0084)] mr-1">
              S</span>ophie AI
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl font-semibold text-gray-900"
        >
          The{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF0000_0%,#FF7F00_17%,#FFFF00_33%,#00FF00_50%,#0000FF_67%,#4B0082_83%,#9400D3_100%)]">
            New Era
          </span>{" "}
          of Language Adquisition
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
          <p className="text-3xl md:text-5xl font-semibold text-gray-900">
            Any Language. Anytime. Anywhere
          </p>
          <p className="text-xl md:text-3xl text-gray-900">
            Speak with Sophie for Fast & Efficient Fluency
          </p>
        </motion.div>

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
            className="group relative inline-block p-[2px] rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#FF0000_0%,#FF7F00_17%,#FFFF00_33%,#00FF00_50%,#0000FF_67%,#4B0082_83%,#9400D3_100%)] rounded-full" />
            <div className="relative px-12 py-3 bg-white rounded-full transition-colors">
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                Meet Sophie
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EraSection;
