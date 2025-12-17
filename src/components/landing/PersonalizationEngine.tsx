"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, History, Map } from "lucide-react";

const nodes = [
  { label: "Grammar", val: "92%", x: 50, y: 0 },   // Top Center
  { label: "Accent", val: "64%", x: 90, y: 25 },   // Right Top
  { label: "Vocab", val: "88%", x: 80, y: 80 },    // Right Bottom
  { label: "Fluency", val: "75%", x: 20, y: 80 },  // Left Bottom
  { label: "Tone", val: "81%", x: 10, y: 25 },     // Left Top
];

const PersonalizationEngine = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden relative">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#2e1065,transparent_50%)] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-indigo-900/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-300">Long-term Memory</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium mb-8 leading-[1.1] tracking-tight"
            >
              We build a map of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-bold">
                your unique brain.
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
              Most apps reset every session. Sophie builds a persistent, evolving model of your language patterns. She knows what you know.
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
                  title: "Context Awareness",
                  desc: "Sophie knows you're a 'Software Engineer' who likes 'Hiking', not a generic user."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-200">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: The Synapse Map */}
          <div className="order-1 lg:order-2 flex justify-center py-10 lg:py-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-square"
            >
              
              {/* Single SVG Layer for Connections - Uses 100x100 coordinate system matching percentages */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 100 100">
                {nodes.map((node, i) => (
                    <g key={i}>
                        {/* Static Line */}
                        <line 
                            x1="50" y1="50" 
                            x2={node.x} y2={node.y} 
                            stroke="#6366f1" 
                            strokeWidth="0.5" 
                            strokeOpacity="0.3" 
                        />
                        {/* Pulse Packet */}
                        <motion.circle
                            r="1.5"
                            fill="#fff"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                cx: [node.x, 50],
                                cy: [node.y, 50],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ 
                                duration: 2 + (i % 2),
                                repeat: Infinity, 
                                ease: "linear",
                                delay: i * 0.5
                            }}
                        />
                    </g>
                ))}
              </svg>

              {/* Central Brain Node */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-[60px] opacity-20 animate-pulse"></div>
                    <div className="w-24 h-24 bg-black rounded-3xl border border-indigo-500/30 flex items-center justify-center relative shadow-2xl z-10 backdrop-blur-xl">
                        <Brain className="w-10 h-10 text-white" />
                    </div>
                    {/* Ring */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-indigo-500/20 rounded-[2rem] border-dashed"
                    />
                </div>
              </div>

              {/* Data Nodes (HTML Layer) */}
              {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
                >
                    <div className="bg-zinc-900/90 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-md shadow-xl flex flex-col items-center min-w-[90px] hover:border-indigo-500/50 hover:scale-105 transition-all cursor-default group">
                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">{node.label}</span>
                        <span className="text-lg font-bold text-white font-mono group-hover:text-indigo-400 transition-colors">{node.val}</span>
                    </div>
                </motion.div>
              ))}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngine;