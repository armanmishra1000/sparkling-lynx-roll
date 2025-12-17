"use client";

import React from "react";
import { MessageSquare, GraduationCap, Headphones, Zap, Ear, Brain, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Features = () => {
  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            EVERYTHING YOU NEED <br />
            <span className="text-gray-400">TO SOUND LIKE A LOCAL.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Large - Real Conversations */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-black text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                 <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Scenario Engine</h3>
              <p className="text-gray-400 text-lg max-w-md">Practice high-stakes conversations: Job interviews, dates, ordering food, or arguing a bill.</p>
            </div>
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Card 2: Vertical - Corrections */}
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="md:row-span-2 bg-white border-2 border-black/5 rounded-[2rem] p-10 flex flex-col relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
             <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                        <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Instant Fixes</h3>
                    <p className="text-gray-500">Not just "grammar checks". Sophie rewrites your sentences to sound more natural, polite, or casual depending on context.</p>
                </div>
                
                {/* Mini UI Visual */}
                <div className="mt-8 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm transform group-hover:-translate-y-2 transition-transform">
                    <div className="text-xs text-red-400 line-through mb-1">I want go now.</div>
                    <div className="text-sm font-bold text-green-600">I need to leave now.</div>
                </div>
             </div>
          </motion.div>

          {/* Card 3: Standard - Tutor Mode */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#FF0080] text-white rounded-[2rem] p-8 flex flex-col justify-between group"
          >
            <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
            <div>
                <h3 className="text-xl font-bold mb-2">Tutor Mode</h3>
                <p className="text-white/80 text-sm">Step-by-step guidance when you're stuck. Ask "How do I say X?" in your native language.</p>
            </div>
          </motion.div>

           {/* Card 4: Standard - Roleplay */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#40E0D0] text-black rounded-[2rem] p-8 flex flex-col justify-between group"
          >
            <Headphones className="w-10 h-10 mb-4 opacity-70" />
            <div>
                <h3 className="text-xl font-bold mb-2">Immersion Mode</h3>
                <p className="text-black/70 text-sm">No interruptions. Just flow. Get a full report card after the conversation ends.</p>
            </div>
          </motion.div>

          {/* Card 5: Wide - Memory */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-white border-2 border-black/5 rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8 group"
          >
            <div className="flex-1">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Personalization Memory</h3>
                <p className="text-gray-500">Sophie remembers that you struggle with "Ser vs Estar" and that you love hiking. Tomorrow's lesson is built on yesterday's data.</p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-4 border-dashed border-purple-200 rounded-full animate-spin-slow"></div>
                <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">98%</div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Recall</div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;