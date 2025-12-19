"use client";

import React from "react";
import { motion } from "framer-motion";
import { useDemo } from "@/context/DemoContext";

const RainbowWaveBackground = () => {
  const { currentLanguage } = useDemo();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Aurora Orbs - Matching Current Language Color */}
      
      {/* Primary Language Color */}
      <motion.div 
        key={`primary-${currentLanguage.id}`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 100, 0],
          y: [0, -50, 0],
          backgroundColor: currentLanguage.color
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-multiply"
      />
      
      {/* Secondary Glow */}
      <motion.div 
        key={`secondary-${currentLanguage.id}`}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0],
          backgroundColor: currentLanguage.color
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[-20%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-multiply"
      />

      {/* Tertiary Glow */}
      <motion.div 
        key={`tertiary-${currentLanguage.id}`}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, 50, 0],
          y: [0, 50, 0],
          backgroundColor: currentLanguage.color
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-multiply"
      />

      {/* Quaternary Glow */}
      <motion.div 
        key={`quaternary-${currentLanguage.id}`}
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, -30, 0],
          backgroundColor: currentLanguage.color
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full blur-[100px] mix-blend-multiply"
      />

      {/* Noise Texture Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default RainbowWaveBackground;