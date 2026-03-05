"use client";

import React from "react";
import {
  MessageSquare,
  Zap,
  Brain,
  Headphones,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { Colors } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const Features = () => {
  const { messages } = useLanguage();
  const cards = messages.features.cards;

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            {messages.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[350px] grid-flow-dense">
          <motion.div
            whileHover={{ y: -5 }}
            style={{ borderColor: Colors.rainbow[0] }}
            className="md:col-span-2 md:row-span-1 bg-white p-10 rounded-3xl border-2 shadow-sm flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            <div className="relative z-10">
              <div
                style={{ backgroundColor: `${Colors.rainbow[0]}20`, color: Colors.rainbow[0] }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">{cards[0].title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{cards[0].description}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={{ borderColor: Colors.rainbow[1] }}
            className="md:col-span-1 md:row-span-2 bg-white p-8 rounded-3xl border-2 shadow-sm flex flex-col relative overflow-hidden group transition-all"
          >
            <div className="relative z-10 flex-1 flex flex-col">
              <div
                style={{ backgroundColor: `${Colors.rainbow[1]}20`, color: Colors.rainbow[1] }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <Zap className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{cards[1].title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{cards[1].description}</p>

              <div className="mt-auto bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="text-xs text-red-400 line-through mb-2">{messages.features.correctionBefore}</div>
                <div className="flex items-center gap-2 text-sm font-bold text-green-500">
                  <Sparkles className="w-3 h-3" />
                  {messages.features.correctionAfter}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={{ borderColor: Colors.rainbow[2] }}
            className="md:col-span-1 bg-white p-8 rounded-3xl border-2 shadow-sm group relative overflow-hidden transition-all duration-300"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div
                  style={{ backgroundColor: `${Colors.rainbow[2]}20`, color: "#EAB308" }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                >
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">{cards[2].title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{cards[2].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={{ borderColor: Colors.rainbow[3] }}
            className="md:col-span-2 bg-white p-10 rounded-3xl border-2 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
          >
            <div className="flex-1 relative z-10">
              <div>
                <div
                  style={{ backgroundColor: `${Colors.rainbow[3]}20`, color: Colors.rainbow[3] }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                >
                  <Headphones className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">{cards[3].title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{cards[3].description}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={{ borderColor: Colors.rainbow[4] }}
            className="md:col-span-1 bg-white p-8 rounded-3xl border-2 shadow-sm group relative overflow-hidden transition-all duration-300"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div
                  style={{ backgroundColor: `${Colors.rainbow[4]}20`, color: Colors.rainbow[4] }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                >
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">{cards[4].title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{cards[4].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
