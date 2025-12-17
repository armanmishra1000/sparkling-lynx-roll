"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import SignupModal from "./SignupModal";
import DemoModal from "./DemoModal";
import { trackEvent } from "@/lib/analytics";
import RainbowWaveBackground from "./RainbowWaveBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      
      <RainbowWaveBackground />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-sm font-semibold text-gray-700 ring-1 ring-black/5"
          >
             <span className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0080] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF0080]"></span>
             </span>
             <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">New: Mexican Spanish Dialect Added</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] text-gray-900">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Don't just
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#7B61FF] pb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              learn Spanish.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Live it.
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-light">
            Stop translating in your head. Sophie helps you conquer <span className="text-gray-900 font-medium">Ser vs Estar</span>, master the Subjunctive, and speak like a local, not a textbook.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SignupModal triggerLocation="hero_primary">
              <Button size="lg" className="h-16 px-10 rounded-full text-lg font-semibold bg-gray-900 text-white hover:bg-black shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                Start Speaking Spanish <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </SignupModal>
            
            <DemoModal>
                 <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 px-10 rounded-full text-lg font-semibold border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white text-gray-900 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                    onClick={() => trackEvent("cta_click_secondary", { location: "hero_demo_button" })}
                >
                  <Play className="mr-2 w-4 h-4 fill-current" /> Hear Examples
                </Button>
            </DemoModal>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-6 flex items-center gap-4 text-sm text-gray-500 font-medium"
          >
            <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-[3px] border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm`}>
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}&backgroundColor=ffdfbf,c0aede,d1d4f9`} alt="User" />
                    </div>
                ))}
            </div>
            <p>10,000+ students actively learning Spanish</p>
          </motion.div>
        </div>

        {/* Right Visual - Premium Glass Card */}
        <div className="lg:col-span-6 relative mt-16 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
          <motion.div
            initial={{ y: 50, opacity: 0, rotateY: -10 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
            className="relative z-20 w-full max-w-[500px]"
          >
             {/* Main Card */}
             <div className="relative bg-white/70 backdrop-blur-3xl border border-white/50 p-8 rounded-[2.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] overflow-hidden ring-1 ring-white/60">
               
               {/* Internal Sheen */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none opacity-50"></div>
               <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-purple-100/50 to-pink-100/50 blur-3xl rounded-full pointer-events-none"></div>

               <div className="relative z-10 space-y-8">
                 
                 {/* Header of Card */}
                 <div className="flex items-center justify-between border-b border-gray-200/50 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-[2px]"></div>
                            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/20">
                                S
                            </div>
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                            <div className="text-base font-bold text-gray-900">Sophie AI</div>
                            <div className="text-xs text-gray-500 font-medium tracking-wide">Spanish Coach</div>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray-100/50 border border-gray-200/50 text-xs font-bold text-gray-500 uppercase tracking-widest backdrop-blur-sm">
                        Conversation
                    </div>
                 </div>

                 {/* Chat Area */}
                 <div className="space-y-6">
                     {/* User Message */}
                     <div className="flex justify-end">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 px-6 py-4 rounded-3xl rounded-tr-sm text-base font-medium max-w-[85%] shadow-sm border border-gray-100">
                            "Puedo tener la cuenta, por favor?"
                        </div>
                     </div>

                     {/* AI Correction */}
                     <div className="flex justify-start">
                        <div className="relative group w-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF0080] to-[#7B61FF] rounded-3xl rounded-tl-sm opacity-20 blur-sm transition duration-200"></div>
                            <div className="relative bg-white/90 border border-white/60 p-6 rounded-3xl rounded-tl-sm shadow-sm backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#FF0080] uppercase tracking-wider">
                                    <Wand2 className="w-3 h-3" /> Natural Correction
                                </div>
                                <p className="text-lg text-gray-900 leading-relaxed font-medium">
                                    <span className="text-gray-400 line-through decoration-red-300 mr-2 decoration-2 opacity-60">Puedo tener</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF] font-bold">¿Me traes</span>
                                    {" "}la cuenta?
                                </p>
                                <p className="text-sm text-gray-500 mt-2 italic">
                                    "Puedo tener" is a literal translation of "Can I have". In a restaurant, "Me traes" (Bring me) or "La cuenta, por favor" is more natural.
                                </p>
                            </div>
                        </div>
                     </div>
                 </div>

                 {/* Visualizer Footer */}
                 <div className="pt-4 flex items-center justify-center gap-1.5 h-12">
                     {[...Array(16)].map((_, i) => (
                         <motion.div 
                            key={i}
                            animate={{ height: [8, 24 + Math.random() * 24, 8], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                            className="w-1 rounded-full bg-gradient-to-t from-gray-900 to-gray-500"
                         />
                     ))}
                 </div>

               </div>
             </div>

             {/* Floating Elements for Depth */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-4 max-w-[200px]"
             >
                 <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0EA5E9] shadow-inner">
                    <Sparkles className="w-6 h-6 fill-current" />
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-gray-900 leading-none">94%</div>
                    <div className="text-xs font-medium text-gray-500 mt-1">Accent Accuracy</div>
                 </div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;