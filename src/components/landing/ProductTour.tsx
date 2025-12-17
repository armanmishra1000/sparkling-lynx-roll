"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, CheckCircle2, BarChart3, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import InteractiveRainbowWave from "./InteractiveRainbowWave";

const tabs = [
  { 
    id: "speak", 
    label: "Natural Speaking", 
    desc: "Just talk. No tapping words.",
    icon: Mic 
  },
  { 
    id: "correct", 
    label: "Instant Feedback", 
    desc: "Corrections that stick.",
    icon: CheckCircle2 
  },
  { 
    id: "track", 
    label: "Neural Progress", 
    desc: "See your brain adapt.",
    icon: BarChart3 
  },
];

const content = {
  speak: (
    <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden border border-gray-100">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-sm">
         <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-ping"></div>
            <Mic className="w-10 h-10 text-white" />
         </div>
         
         <p className="text-2xl font-medium text-gray-900 leading-snug">"I would like to order a coffee, please."</p>
         
         {/* Audio Waveform Visualization */}
         <div className="mt-8 w-full">
            <InteractiveRainbowWave />
         </div>
      </div>
    </div>
  ),
  correct: (
    <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden border border-gray-100">
        <div className="space-y-6 max-w-md mx-auto w-full relative z-10">
            {/* User Bubble */}
            <div className="flex justify-end">
                <div className="bg-gray-100 text-gray-500 px-6 py-4 rounded-2xl rounded-tr-sm">
                    <span className="line-through decoration-red-400/50 decoration-2">I want order coffee.</span>
                </div>
            </div>
            
            {/* AI Bubble */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
            >
                <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-2xl rounded-tl-sm shadow-xl w-full">
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-yellow-400" /> Suggestion
                    </div>
                    <div className="text-xl font-medium mb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">I'd like to order</span> a coffee.
                    </div>
                    <div className="h-px bg-white/10 my-3"></div>
                    <p className="text-sm text-gray-400">"I'd like" is softer and more polite than "I want".</p>
                </div>
            </motion.div>
        </div>
    </div>
  ),
  track: (
    <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden border border-gray-100">
      <div className="w-full max-w-sm mx-auto space-y-8 relative z-10">
        <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Fluency Metrics</h4>
            <div className="space-y-6">
                {[
                    { label: "Vocabulary", val: 85, color: "bg-pink-500" },
                    { label: "Pronunciation", val: 62, color: "bg-orange-500" },
                    { label: "Confidence", val: 94, color: "bg-cyan-500" }
                ].map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                            <span>{item.label}</span>
                            <span>{item.val}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${item.val}%` }}
                                transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                                className={`h-full rounded-full ${item.color}`} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
};

const ProductTour = () => {
  const [activeTab, setActiveTab] = useState<"speak" | "correct" | "track">("speak");

  return (
    <section className="py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Flow</span>
            </h2>
            <p className="text-xl text-gray-500">See how Sophie adapts to you in real-time.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Navigation (Left) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "group text-left p-6 rounded-2xl transition-all duration-300 relative overflow-hidden",
                            activeTab === tab.id 
                                ? "bg-gray-50 ring-1 ring-gray-200 shadow-sm" 
                                : "hover:bg-gray-50/50"
                        )}
                    >
                        {activeTab === tab.id && (
                            <motion.div 
                                layoutId="activeTabIndicator"
                                className="absolute left-0 top-0 bottom-0 w-1 bg-black" 
                            />
                        )}
                        <div className="flex items-start gap-4">
                            <div className={cn(
                                "p-3 rounded-xl transition-colors",
                                activeTab === tab.id ? "bg-black text-white" : "bg-gray-100 text-gray-500 group-hover:text-black"
                            )}>
                                <tab.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className={cn("font-bold text-lg mb-1", activeTab === tab.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900")}>
                                    {tab.label}
                                </h3>
                                <p className="text-sm text-gray-400 font-medium">
                                    {tab.desc}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Display Area (Right) */}
            <div className="lg:col-span-8 h-[500px] relative perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="h-full w-full"
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