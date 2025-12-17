"use client";

import React from "react";
import { Target, Mic, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Target,
    title: "1. Pick a Context",
    description: "Travel, work, dating, or arguing with your landlord. Sophie adapts the simulation to your actual life.",
    color: "from-[#FF0080] to-[#FF8C00]" // Pink to Orange
  },
  {
    icon: Mic,
    title: "2. Speak Freely",
    description: "No multiple choice. No tapping words. Just talk. Sophie responds at your level, pushing you slightly every time.",
    color: "from-[#FF8C00] to-[#40E0D0]" // Orange to Teal
  },
  {
    icon: TrendingUp,
    title: "3. Close the Gap",
    description: "Get instant corrections on pronunciation and style. Sophie remembers your mistakes so you don't make them twice.",
    color: "from-[#40E0D0] to-[#7B61FF]" // Teal to Violet
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            THE <span className="rainbow-text">LOOP</span>
          </h2>
          <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
            From frozen to fluent in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Content */}
                <div className={`flex-1 text-center ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed">{step.description}</p>
                </div>

                {/* Center Icon Node */}
                <div className="relative shrink-0 z-10">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-xl`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-black" />
                    </div>
                  </div>
                  {/* Glowing halo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-xl opacity-30 -z-10 animate-pulse`}></div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;