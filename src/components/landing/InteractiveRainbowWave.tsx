"use client";

import React, { useEffect, useRef } from "react";

const InteractiveRainbowWave = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const amplitudeRef = useRef(15);
  const targetAmplitudeRef = useRef(15);
  const frequencyRef = useRef(0.02);
  const targetFrequencyRef = useRef(0.02);

  useEffect(() => {
    let animationFrameId: number;
    const path = pathRef.current;
    
    if (!path) return;

    const animate = () => {
      progressRef.current += 0.08; // Base speed
      
      // Smooth lerp for interactivity
      amplitudeRef.current += (targetAmplitudeRef.current - amplitudeRef.current) * 0.05;
      frequencyRef.current += (targetFrequencyRef.current - frequencyRef.current) * 0.05;

      const points = [];
      const width = 300; // coordinate system width
      const height = 100; // coordinate system height
      const centerY = height / 2;
      
      // Resolution of points
      for (let x = 0; x <= width; x += 2) {
        
        // Normalize x from 0 to 1
        const normalizedX = x / width;
        
        // Dampening factor (0 at edges, 1 at center)
        // Using a power curve to keep the center wider
        const dampening = Math.sin(normalizedX * Math.PI);

        // Wave composition
        const t = progressRef.current;
        const f = frequencyRef.current;

        // Main carrier wave
        const y1 = Math.sin(x * f + t);
        
        // Secondary harmonic
        const y2 = Math.sin(x * (f * 2.5) - t * 1.5);
        
        // Third harmonic for detail
        const y3 = Math.sin(x * (f * 5.0) + t * 3.0) * 0.3;

        // Combine
        const combinedY = y1 + y2 * 0.5 + y3;
        
        // Apply amplitude and dampening
        const y = centerY + combinedY * amplitudeRef.current * dampening;
        
        points.push(`${x},${y}`);
      }

      // Smooth curve
      // For pure SVG path simplicity we use L (LineTo) with high point density
      // It looks perfectly curved on screen
      const d = `M ${points.join(" L ")}`;
      path.setAttribute("d", d);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseEnter = () => {
    targetAmplitudeRef.current = 35; // Higher waves
    targetFrequencyRef.current = 0.04; // Faster frequency
  };

  const handleMouseLeave = () => {
    targetAmplitudeRef.current = 15; // Reset
    targetFrequencyRef.current = 0.02; // Reset
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
     // We could do complex X/Y tracking here, but simple excitement state is often cleaner for UI
  };

  return (
    <div 
        ref={containerRef} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="w-full h-16 relative flex items-center justify-center cursor-pointer touch-none select-none"
    >
       <svg 
         viewBox="0 0 300 100" 
         className="w-full h-full overflow-visible drop-shadow-[0_0_10px_rgba(123,97,255,0.3)]"
         preserveAspectRatio="none"
       >
         <defs>
           <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#FF0080">
                <animate attributeName="stop-color" values="#FF0080;#FF8C00;#FF0080" dur="3s" repeatCount="indefinite" />
             </stop>
             <stop offset="50%" stopColor="#7B61FF">
                <animate attributeName="stop-color" values="#7B61FF;#FF0080;#7B61FF" dur="3s" repeatCount="indefinite" />
             </stop>
             <stop offset="100%" stopColor="#40E0D0">
                <animate attributeName="stop-color" values="#40E0D0;#7B61FF;#40E0D0" dur="3s" repeatCount="indefinite" />
             </stop>
           </linearGradient>
         </defs>
         
         {/* Main Wave */}
         <path 
            ref={pathRef} 
            fill="none" 
            stroke="url(#rainbowGradient)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
         />
       </svg>
    </div>
  );
};

export default InteractiveRainbowWave;