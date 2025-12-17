"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SignupModal from "./SignupModal";
import DemoModal from "./DemoModal";
import { trackEvent } from "@/lib/analytics";
import RainbowWaveBackground from "./RainbowWaveBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-20">
      
      {/* The Brand Identity: Rainbow Wave */}
      <RainbowWaveBackground />
      
      {/* Floating Particles/Grains for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Typographic "Monolith" - Absurdly Big & Bold */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-block"
          >
             <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform rotate-2">
               Beta Access Live
             </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-black drop-shadow-sm">
            <motion.span 
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              DON'T JUST
            </motion.span>
            <motion.span 
              className="block rainbow-text"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              LEARN IT.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              SPEAK IT.
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-gray-800 max-w-xl leading-relaxed">
            The AI language coach that rides your brainwaves. <br/>
            <span className="bg-yellow-300 px-2 italic">Forget boring drills.</span> Start surfing conversations.
          </p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <SignupModal triggerLocation="hero_primary">
              <Button size="lg" className="h-16 px-8 rounded-full text-xl font-bold bg-black text-white hover:bg-gray-900 shadow-[8px_8px_0px_#FF0080] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#FF0080] transition-all border-2 border-black">
                Start The Wave
              </Button>
            </SignupModal>
            
            <DemoModal>
                 <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 px-8 rounded-full text-lg font-bold border-2 border-black bg-white hover:bg-gray-50 shadow-[8px_8px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#000000] transition-all"
                    onClick={() => trackEvent("cta_click_secondary", { location: "hero_demo_button" })}
                >
                  <Play className="mr-2 w-5 h-5 fill-current" /> See It Flow
                </Button>
            </DemoModal>
          </motion.div>
        </div>

        {/* The "Floater" - Demo UI surfing the wave */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ y: 100, opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
            className="relative z-20"
          >
             {/* Glassmorphism Card */}
            <div className="bg-white/80 backdrop-blur-xl border-2 border-white/50 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
               {/* Decorative Gradient Blob inside card */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-[80px] opacity-40 -z-10"></div>
               
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-primary/30 rounded-full"
                        />
                        <div className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg z-10">S</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-none">Sophie</h3>
                      <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">Live Coaching</span>
                    </div>
                  </div>
                  {/* Mini Wave Line */}
                  <div className="w-16 h-8">
                     <svg width="100%" height="100%" viewBox="0 0 60 20" preserveAspectRatio="none">
                         <defs>
                            <linearGradient id="miniRainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF0080" />
                                <stop offset="100%" stopColor="#7B61FF" />
                            </linearGradient>
                         </defs>
                         <motion.path 
                            d="M0,10 Q15,10 30,10 T60,10"
                            animate={{
                                d: [
                                    "M0,10 Q15,0 30,10 T60,10",
                                    "M0,10 Q15,20 30,10 T60,10",
                                    "M0,10 Q15,0 30,10 T60,10"
                                ]
                            }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            fill="none"
                            stroke="url(#miniRainbow)"
                            strokeWidth="3"
                            strokeLinecap="round"
                         />
                     </svg>
                  </div>
               </div>

               <div className="space-y-6">
                 {/* User Bubble */}
                 <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none text-right border border-gray-200">
                    <p className="text-gray-600 text-lg">"I... uh... want buy ticket?"</p>
                 </div>

                 {/* Sophie Response - The Rainbow Correction */}
                 <div className="relative">
                    <div className="absolute -left-4 -top-4 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full border border-black transform -rotate-12 z-10 shadow-sm">
                      BETTER FLOW
                    </div>
                    <div className="bg-black p-5 rounded-3xl rounded-tl-none text-white shadow-xl">
                      <p className="text-lg font-medium leading-relaxed">
                        <span className="text-gray-500 line-through mr-2">want buy</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 font-bold">I'd like to buy</span>
                        {" "}a ticket, please.
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-sm text-gray-400 border-t border-gray-800 pt-3">
                         <Sparkles className="w-4 h-4 text-yellow-300" />
                         <span>Polite & natural phrasing</span>
                      </div>
                    </div>
                 </div>
               </div>

               {/* Interaction Pill */}
               <div className="mt-8 flex justify-center">
                  <div className="bg-white border-2 border-gray-100 rounded-full px-6 py-3 flex items-center gap-4 shadow-lg">
                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                     <span className="text-sm font-bold text-gray-800">Listening...</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;