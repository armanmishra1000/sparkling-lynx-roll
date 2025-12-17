"use client";

import React from "react";
import { MessageSquare, GraduationCap, Headphones, Zap, Ear, Brain, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section id="features" className="py-32 bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">sound like a local.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
          
          {/* Card 1: Scenario Engine (Large) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                 <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Scenario Engine</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">Practice high-stakes conversations: Job interviews, dates, ordering food, or arguing a bill.</p>
            </div>
            
            <div className="flex gap-2 mt-8">
                {["Travel", "Business", "Dating"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-600 border border-gray-200">{tag}</span>
                ))}
            </div>
          </motion.div>

          {/* Card 2: Instant Fixes (Vertical) */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-1 md:row-span-2 bg-black text-white p-8 rounded-[2rem] shadow-xl flex flex-col relative overflow-hidden group"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#333,transparent_50%)]"></div>
             
             <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                    <Zap className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Fixes</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Not just grammar checks. Sophie rewrites your sentences to sound more natural and polite.</p>
                
                {/* Visual */}
                <div className="mt-auto bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="text-xs text-red-400/70 line-through mb-2">I want go now.</div>
                    <div className="flex items-center gap-2 text-sm font-bold text-green-400">
                        <Sparkles className="w-3 h-3" />
                        I need to leave.
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Card 3: Personalization (Square) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                        <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Memory</h3>
                    <p className="text-gray-500 text-sm">Sophie remembers that you struggle with "Ser vs Estar".</p>
                </div>
             </div>
          </motion.div>

           {/* Card 4: Tutor Mode (Square) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Tutor Mode</h3>
                    <p className="text-gray-500 text-sm">Ask "How do I say..." in your native language anytime.</p>
                </div>
             </div>
          </motion.div>

          {/* Card 5: Immersion (Wide) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gradient-to-br from-[#FF0080] to-[#7B61FF] text-white p-10 rounded-[2rem] shadow-lg flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                         <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-white/80 uppercase tracking-widest text-xs">Immersion</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Hands-Free Mode</h3>
                <p className="text-white/80 leading-relaxed">Practice while driving, cooking, or walking. No screen needed.</p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto flex justify-center">
                 <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <Play className="w-5 h-5 text-[#FF0080] ml-1 fill-current" />
                    </div>
                 </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;