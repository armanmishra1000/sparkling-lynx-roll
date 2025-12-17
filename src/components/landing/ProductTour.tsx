"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, CheckCircle2, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "speak", label: "Speak", icon: Mic },
  { id: "correct", label: "Get Corrected", icon: CheckCircle2 },
  { id: "track", label: "Track", icon: BarChart3 },
];

const content = {
  speak: (
    <div className="bg-white rounded-2xl shadow-lg border border-border p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
      <div className="relative">
         <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
         <div className="relative w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <Mic className="w-8 h-8" />
         </div>
      </div>
      <p className="text-lg font-medium text-gray-800">"I would like to order a coffee, please."</p>
      <div className="h-12 flex items-center justify-center space-x-1">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 bg-blue-400 rounded-full"
            animate={{
              height: [12, 24 + Math.random() * 16, 12],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            style={{ height: 12 }}
          />
        ))}
      </div>
    </div>
  ),
  correct: (
    <div className="bg-white rounded-2xl shadow-lg border border-border p-6 h-full flex flex-col space-y-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-red-500 font-bold text-xs">YOU</span>
        </div>
        <div className="text-sm text-gray-500 line-through">I want order coffee.</div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-start space-x-3"
      >
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-green-600 font-bold text-xs">AI</span>
        </div>
        <div>
            <div className="text-sm font-medium text-green-700">I'd like to order a coffee.</div>
            <div className="text-xs text-gray-400 mt-1">More polite & natural for a cafe setting.</div>
        </div>
      </motion.div>
    </div>
  ),
  track: (
    <div className="bg-white rounded-2xl shadow-lg border border-border p-6 h-full">
      <h4 className="font-bold text-gray-800 mb-4">Your Progress</h4>
      <div className="space-y-4">
        {[
            { label: "Vocabulary", val: 85, color: "bg-primary" },
            { label: "Pronunciation", val: 62, color: "bg-yellow-400" },
            { label: "Confidence", val: 94, color: "bg-green-400" }
        ].map((item, i) => (
             <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span className="font-bold">{item.val}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Experience the flow</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Tabs */}
            <div className="flex md:flex-col gap-2 w-full md:w-1/3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 text-left w-full",
                            activeTab === tab.id 
                                ? "bg-white shadow-md border-l-4 border-primary text-primary" 
                                : "text-muted-foreground hover:bg-white/50"
                        )}
                    >
                        <tab.icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Display */}
            <div className="w-full md:w-2/3 h-[300px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
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