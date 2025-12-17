"use client";

import React from "react";
import { Check, X, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1a1a1a,transparent_70%)]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#FACC15]"></div>
             <span className="text-xs font-bold tracking-widest uppercase text-gray-300">The Paradigm Shift</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1]"
          >
            Recognition is <span className="text-gray-600 line-through decoration-red-500/50 decoration-2">easy</span>. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white font-bold">Speaking is the unlock.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Problem Card - Dark & Minimal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 relative group hover:bg-zinc-900/80 transition-all duration-500"
          >
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-gray-200">The Old Way</h3>
                <p className="text-gray-500 text-sm">Passive consumption & drills</p>
            </div>
            
            <ul className="space-y-8">
              {[
                { text: "Freeze up in real conversations", icon: X },
                { text: "Wait days for teacher corrections", icon: X },
                { text: "Drill sentences you'll never use", icon: X }
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                    <item.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card - Glowing & Premium */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-[2.5rem] overflow-hidden"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0080] via-[#7B61FF] to-[#40E0D0] opacity-50"></div>
            
            <div className="bg-black/90 backdrop-blur-xl p-10 rounded-[2.5rem] h-full relative overflow-hidden">
                {/* Internal Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="mb-8 flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                            Sophie.ai
                        </h3>
                        <p className="text-purple-300 text-sm">Active recall & adaptation</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#FF0080] to-[#7B61FF] w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Zap className="text-white w-5 h-5 fill-current" />
                    </div>
                </div>
                
                <ul className="space-y-8 relative z-10">
                {[
                    "Simulate high-pressure scenarios",
                    "Get fixed instantly, mid-sentence",
                    "Learn straight from your life context"
                ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400/20 to-green-500/20 flex items-center justify-center border border-green-500/30 text-green-400">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-lg font-medium text-white">{item}</span>
                    </li>
                ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center text-sm font-medium text-gray-400 gap-2">
                    <span className="text-white">Result:</span> 3x faster fluency acquisition <ArrowRight className="w-4 h-4 ml-1" />
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;