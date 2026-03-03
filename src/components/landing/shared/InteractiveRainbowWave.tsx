"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";

interface InteractiveRainbowWaveProps {
  className?: string;
  lineColor?: string;
  useRainbow?: boolean;
  animate?: boolean;
  initialPhase?: number;
  lineWidth?: number;
  sampleStep?: number;
}

const InteractiveRainbowWave = ({
  className,
  lineColor,
  useRainbow,
  animate = true,
  initialPhase = 0,
  lineWidth = 4,
  sampleStep,
}: InteractiveRainbowWaveProps) => {
  const { currentLanguage } = useDemo();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let phase = initialPhase;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = window.devicePixelRatio || 1;

      // Handle high-DPI displays and resizing
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, width, height);

      // Wave configuration
      const numPeaks = 8;
      const frequency = (Math.PI * numPeaks) / width;
      const amplitude = height * 0.24;
      const speed = 0.09;
      const step = sampleStep ?? Math.max(0.5, width / 240);

      // Create Gradient from dynamic colors or use lineColor
      let strokeStyle: string | CanvasGradient = lineColor || "";

      if (!strokeStyle) {
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        if (useRainbow) {
          // Full ROYGBIV Rainbow Gradient (Updated Palette)
          gradient.addColorStop(0.0, "#E81416");   // Red
          gradient.addColorStop(0.17, "#FFA500");  // Orange
          gradient.addColorStop(0.33, "#FAEB36");  // Yellow
          gradient.addColorStop(0.5, "#79C314");   // Green
          gradient.addColorStop(0.67, "#487DE7");  // Blue
          gradient.addColorStop(0.83, "#4B369D");  // Indigo
          gradient.addColorStop(1.0, "#70369D");   // Violet
        } else {
          gradient.addColorStop(0.0, currentLanguage.from);
          gradient.addColorStop(0.5, currentLanguage.via);
          gradient.addColorStop(1.0, currentLanguage.to);
        }
        strokeStyle = gradient;
      }

      ctx.beginPath();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Draw the wave
      for (let x = 0; x <= width; x += step) {
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

      if (animate) {
        phase += speed;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animate && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animate, currentLanguage, initialPhase, lineColor, lineWidth, sampleStep, useRainbow]); // Re-init when props change

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
