"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, CheckCircle2, BarChart3, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "speak", label: "Speak", icon: Mic },
  { id: "correct", label: "Get Corrected", icon: CheckCircle2 },
  { id: "track", label: "Track", icon: BarChart3 },
];

const rainbowColors = [
    "#FF0080", "#FF8C00", "#FFD700", "#40E0D0", "#7B61FF", 
    "#FF0080", "#FF8C00", "#FFD700", "#40E0D0", "#7B61FF"
];

const content = {
  speak: (
    <div className="bg-white rounded-[2rem] shadow-xl border-2 border-black p-8 h-full flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden">
      {/* Abstract bg shape */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-xl"></div>

      <div className="relative z-10">
         <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center animate-pulse shadow-[4px_4px_0px_#FF0080]">
            <Mic className="w-10 h-10 text-white" />
         </div>
      </div>
      <p className="text-2xl font-bold text-black italic">"I would like to order a coffee."</p>
      
      {/* Rainbow Waveform */}
      <div className="h-16 flex items-center justify-center space-x-1.5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 rounded-full border border-black/10"
            style={{ backgroundColor: rainbowColors[i] }}
            animate={{
              height: [20, 40 + Math.random() * 40, 20],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  ),
  correct: (
    <div className="bg-white rounded-[2rem] shadow-xl border-2 border-black p-8 h-full flex flex-col space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0 border-2 border-black">
            <span className="text-black font-black text-xs">YOU</span>
        </div>
        <div className="text-lg text-gray-400 line-through decoration-red-500 decoration-2">I want order coffee.</div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-start space-x-4 relative"
      >
        <div className="absolute -left-2 -top-2">
            <Sparkles className="w-6 h-6 text-yellow-400 fill-current animate-spin-slow" />
        </div>
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#40E0D0]">
            <span className="text-white font-black text-xs">AI</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 w-full">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                I'd like to order a coffee.
            </div>
            <div className="text-sm font-bold text-gray-400 mt-2 uppercase tracking-wider">
                ↑ More natural
            </div>
        </div>
      </motion.div>
    </div>
  ),
  track: (
    <div className="bg-white rounded-[2rem] shadow-xl border-2 border-black p-8 h-full">
      <h4 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">Your Stats</h4>
      <div className="space-y-6">
        {[
            { label: "Vocabulary", val: 85, color: "bg-[#FF0080]" },
            { label: "Pronunciation", val: 62, color: "bg-[#FF8C00]" },
            { label: "Confidence", val: 94, color: "bg-[#40E0D0]" }
        ].map((item, i) => (
             <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-2 uppercase">
                    <span>{item.label}</span>
                    <span>{item.val}%</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden border border-black/5">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className={`h-full ${item.color}`} 
                    />
                </div>
            </div>
        ))}
      </div>
    </div>
  )
};

const ProductTour = () => {
  const [activeTab, setActiveTab] = useState<"speak" | "correct" | "track">("speak");

  return (
    <section className="py-32 overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                EXPERIENCE THE <span className="rainbow-text">FLOW</span>
            </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Tabs - Chunky Buttons */}
            <div className="flex md:flex-col gap-4 w-full md:w-1/3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "group flex items-center space-x-4 px-6 py-5 rounded-2xl transition-all duration-300 text-left w-full border-2",
                            activeTab === tab.id 
                                ? "bg-black border-black text-white shadow-[8px_8px_0px_#40E0D0] translate-x-[-2px] translate-y-[-2px]" 
                                : "bg-white border-transparent hover:border-black/10 text-gray-500 hover:bg-white"
                        )}
                    >
                        <tab.icon className={cn("w-6 h-6", activeTab === tab.id ? "text-yellow-400" : "text-gray-400 group-hover:text-black")} />
                        <span className="font-bold text-lg">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Display */}
            <div className="w-full md:w-2/3 h-[400px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, rotateX: -10, y: 50 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, rotateX: 10, y: -50 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        className="h-full perspective-1000"
                    >
                        {content[activeTab]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;