"use client";

import React from "react";
import { Check, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
             <span className="text-yellow-400 font-bold tracking-widest uppercase border border-yellow-400/30 px-4 py-1 rounded-full">Reality Check</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Recognition is <span className="text-gray-500 line-through decoration-red-500">easy</span>. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">Speaking is hard.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Problem - Brutalist Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 relative group hover:border-red-500/50 transition-colors"
          >
            <div className="absolute -top-6 -left-6 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl transform -rotate-12 shadow-lg z-10">
               VS
            </div>
            <h3 className="text-2xl font-bold mb-8 text-gray-300">The Old Way</h3>
            <ul className="space-y-6">
              {[
                "Freeze up in real conversations.",
                "Wait days (or never) for corrections.",
                "Drill sentences you'll never use."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution - Rainbow Gradient Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 p-1 rounded-3xl relative"
          >
            <div className="bg-black p-9 rounded-[1.3rem] h-full relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                <div className="absolute -top-4 -right-4 bg-yellow-300 text-black px-4 py-1 font-bold uppercase transform rotate-3 rounded-sm shadow-lg">
                    The Sophie Way
                </div>

                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                    <Zap className="text-yellow-300 fill-current" />
                    Sophie.ai
                </h3>
                
                <ul className="space-y-6 relative z-10">
                {[
                    "Simulate high-pressure scenarios.",
                    "Get fixed instantly, mid-sentence.",
                    "Learn straight from your life."
                ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-4">
                    <div className="bg-white/10 p-1 rounded-full text-green-400">
                        <Check className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-bold text-white">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;