"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";

interface InteractiveRainbowWaveProps {
  className?: string;
  lineColor?: string;
  useRainbow?: boolean;
}

const InteractiveRainbowWave = ({ className, lineColor, useRainbow }: InteractiveRainbowWaveProps) => {
  const { currentLanguage } = useDemo();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = window.devicePixelRatio || 1;

      // Handle high-DPI displays and resizing
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }

      ctx.clearRect(0, 0, width, height);

      // Wave configuration
      const numPeaks = 8;
      const frequency = (Math.PI * numPeaks) / width;
      const amplitude = height * 0.24;
      const speed = 0.09;

      // Create Gradient from dynamic colors or use lineColor
      let strokeStyle: string | CanvasGradient = lineColor || "";

      if (!strokeStyle) {
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        if (useRainbow) {
          // Full ROYGBIV Rainbow Gradient
          gradient.addColorStop(0.0, "#FF0000");   // Red
          gradient.addColorStop(0.17, "#FF7F00");  // Orange
          gradient.addColorStop(0.33, "#FFFF00");  // Yellow
          gradient.addColorStop(0.5, "#00FF00");   // Green
          gradient.addColorStop(0.67, "#0000FF");  // Blue
          gradient.addColorStop(0.83, "#4B0082");  // Indigo
          gradient.addColorStop(1.0, "#9400D3");   // Violet
        } else {
          gradient.addColorStop(0.0, currentLanguage.from);
          gradient.addColorStop(0.5, currentLanguage.via);
          gradient.addColorStop(1.0, currentLanguage.to);
        }
        strokeStyle = gradient;
      }

      ctx.beginPath();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Draw the wave
      for (let x = 0; x <= width; x += 2) {
        const nx = x / width;
        // Envelope function
        const envelope = Math.pow(Math.sin(nx * Math.PI), 1.5);

        // Wave equation
        const y = (height / 2) + (envelope * amplitude * Math.sin(frequency * x - phase));

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      phase += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentLanguage, lineColor, useRainbow]); // Re-init when props change

  return (
    <div className={cn("relative w-full h-40", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default InteractiveRainbowWave;
