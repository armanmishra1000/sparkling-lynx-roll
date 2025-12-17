"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, History, Map } from "lucide-react";

const PersonalizationEngine = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              This is why Sophie <br />
              <span className="text-primary">feels unfair.</span>
            </motion.h2>
            <p className="text-lg text-muted-foreground mb-12">
              Most apps reset every session. Sophie builds a long-term model of your brain.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: History,
                  title: "Persistent Memory",
                  desc: "Mistakes from last week become drills for today. Nothing is lost."
                },
                {
                  icon: TrendingUp,
                  title: "Adaptive Difficulty",
                  desc: "Always challenging, never crushing. It scales with your confidence."
                },
                {
                  icon: Map,
                  title: "Your Life as Curriculum",
                  desc: "We prioritize vocab related to your job, hobbies, and goals."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors border border-transparent hover:border-border/50"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: Personalization Map */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Central Node */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 bg-white rounded-full shadow-2xl border-4 border-primary/20 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
                   <Brain className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Orbiting Nodes */}
              {[
                { label: "Grammar", val: "92%", color: "bg-blue-100 text-blue-700", angle: 0 },
                { label: "Accent", val: "64%", color: "bg-orange-100 text-orange-700", angle: 72 },
                { label: "Vocab", val: "88%", color: "bg-green-100 text-green-700", angle: 144 },
                { label: "Fluency", val: "75%", color: "bg-purple-100 text-purple-700", angle: 216 },
                { label: "Tone", val: "81%", color: "bg-pink-100 text-pink-700", angle: 288 },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: i * -5 }}
                  style={{ width: "100%", height: "100%", x: "-50%", y: "-50%" }}
                >
                   <motion.div 
                      className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${node.color} px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border border-white/50 flex flex-col items-center gap-0.5`}
                      style={{ transformOrigin: "50% 150px" }} // Keeps them upright? No, this rotates the container.
                      // To keep text upright while orbiting, we counter-rotate the child
                    >
                      <span>{node.label}</span>
                      <span className="text-[10px] opacity-80">{node.val}</span>
                   </motion.div>
                   {/* Connecting line */}
                   <div className="absolute top-1/2 left-1/2 w-[1px] h-[140px] bg-gradient-to-t from-transparent via-primary/20 to-transparent -translate-x-1/2 origin-bottom -rotate-180" 
                        style={{ transform: `translateX(-50%) rotate(${i * 72}deg) translateY(-50%)` }} // Static lines
                   />
                </motion.div>
              ))}

              {/* Static ring visual */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 scale-75" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-100" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngine;