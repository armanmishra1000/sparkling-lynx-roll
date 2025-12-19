"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import { motion } from "framer-motion";

interface InteractiveRainbowWaveProps {
  className?: string;
  lineColor?: string;
}

const InteractiveRainbowWave = ({ className, lineColor }: InteractiveRainbowWaveProps) => {
  const { currentLanguage } = useDemo();
  const pathRef = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation state refs
  const progressRef = useRef(0);
  const mouseXRef = useRef(0.5); // 0 to 1
  const amplitudeRef = useRef(10);
  const targetAmplitudeRef = useRef(10);
  const speedRef = useRef(0.02);
  const targetSpeedRef = useRef(0.02);

  useEffect(() => {
    let animationFrameId: number;
    const path = pathRef.current;
    const path2 = pathRef2.current;
    
    if (!path || !path2) return;

    const animate = () => {
      // Lerp values for smooth transitions
      amplitudeRef.current += (targetAmplitudeRef.current - amplitudeRef.current) * 0.1;
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.1;
      
      progressRef.current += speedRef.current;

      const width = 300;
      const height = 100;
      const centerY = height / 2;
      const points1: string[] = [];
      const points2: string[] = [];
      
      // Reduce resolution for performance, increase for smoothness if needed
      // Step 2 is good balance
      for (let x = 0; x <= width; x += 2) {
        const normalizedX = x / width;
        
        // Bell curve dampening: forces strict 0 at ends, high in center
        // Power of 2.5 gives nice tapered look
        const dampening = Math.pow(Math.sin(normalizedX * Math.PI), 2.5);

        // Calculate wave distortion based on mouse X position
        // When mouse is near this X, increase frequency/chaos slightly
        const mouseInfluence = 1 - Math.abs(normalizedX - mouseXRef.current);
        const localizedAmp = amplitudeRef.current * (1 + (Math.max(0, mouseInfluence) * 0.5));

        const t = progressRef.current;

        // Wave 1: Main vocal line
        const y1 = Math.sin(x * 0.03 + t) 
                 + Math.sin(x * 0.08 - t * 0.5) * 0.5;
        
        // Wave 2: Harmonic echo (ghost line)
        const y2 = Math.cos(x * 0.04 - t * 0.8) 
                 + Math.sin(x * 0.1 + t) * 0.3;

        const finalY1 = centerY + y1 * localizedAmp * dampening;
        const finalY2 = centerY + y2 * (localizedAmp * 0.7) * dampening; // Slightly smaller amp

        points1.push(`${x},${finalY1}`);
        points2.push(`${x},${finalY2}`);
      }

      path.setAttribute("d", `M ${points1.join(" L ")}`);
      path2.setAttribute("d", `M ${points2.join(" L ")}`);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    mouseXRef.current = x;
    
    // Increase energy when interacting
    targetAmplitudeRef.current = 25; 
    targetSpeedRef.current = 0.08;
  };

  const handleMouseLeave = () => {
    // Reset to calm state
    targetAmplitudeRef.current = 10;
    targetSpeedRef.current = 0.02;
    mouseXRef.current = 0.5;
  };

  return (
    <div 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("w-full h-24 relative flex items-center justify-center cursor-crosshair touch-none select-none", className)}
    >
       <svg 
         viewBox="0 0 300 100" 
         className="w-full h-full overflow-visible"
         preserveAspectRatio="none"
       >
         <defs>
           <motion.linearGradient 
             id={`rainbowGradient-${currentLanguage.id}`} 
             x1="0%" y1="0%" x2="100%" y2="0%"
           >
             <stop offset="0%" stopColor={currentLanguage.color} />
             <stop offset="50%" stopColor="#FFFFFF" />
             <stop offset="100%" stopColor={currentLanguage.color} />
           </motion.linearGradient>
           
           <motion.linearGradient 
             id={`ghostGradient-${currentLanguage.id}`} 
             x1="0%" y1="0%" x2="100%" y2="0%"
           >
             <stop offset="0%" stopColor={currentLanguage.color} stopOpacity="0.2" />
             <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.2" />
             <stop offset="100%" stopColor={currentLanguage.color} stopOpacity="0.2" />
           </motion.linearGradient>
         </defs>
         
         {/* Ghost Wave (Echo) */}
         <path 
            ref={pathRef2} 
            fill="none" 
            stroke={lineColor ? lineColor : `url(#ghostGradient-${currentLanguage.id})`}
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={lineColor ? "opacity-30" : ""}
         />

         {/* Main Wave */}
         <path 
            ref={pathRef} 
            fill="none" 
            stroke={lineColor ? lineColor : `url(#rainbowGradient-${currentLanguage.id})`} 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
         />
       </svg>
    </div>
  );
};

export default InteractiveRainbowWave;