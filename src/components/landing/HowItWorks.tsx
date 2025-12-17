"use client";

import React from "react";
import { Target, Mic, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Target,
    title: "Context Injection",
    subtitle: "Step 01",
    description: "Travel, work, dating, or arguing with your landlord. Sophie adapts the simulation to your actual life, not a textbook.",
    color: "bg-pink-100 text-pink-600",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Mic,
    title: "Active Simulation",
    subtitle: "Step 02",
    description: "No multiple choice. No tapping words. Just talk. Sophie responds at your level, pushing you slightly every time (i+1).",
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Neural Rewriting",
    subtitle: "Step 03",
    description: "Get instant corrections on pronunciation and style. Sophie rewrites your neural pathways before bad habits set in.",
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-500 to-violet-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            The Fluency Loop
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From frozen to fluent in three cognitive steps.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent md:-translate-x-1/2"></div>
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Node */}
                <div className="relative shrink-0 z-10 md:w-1/2 flex md:justify-end justify-start pl-2 md:pl-0">
                   <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-lg border-4 border-white ring-1 ring-black/5 relative`}>
                      <step.icon className="w-6 h-6" />
                      
                      {/* Connector Dot for Desktop Center Line */}
                      <div className={`hidden md:block absolute top-1/2 ${index % 2 !== 0 ? '-right-[42px]' : '-left-[42px]'} w-4 h-4 rounded-full border-2 border-white shadow-sm bg-gradient-to-br ${step.gradient} -translate-y-1/2 z-20`}></div>
                   </div>
                </div>

                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                   <span className={`inline-block text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                     {step.subtitle}
                   </span>
                   <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                   <p className="text-lg text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;