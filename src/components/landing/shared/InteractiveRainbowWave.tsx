"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import type { LanguageConfig } from "@/lib/demo-languages";
import {
  getWavePoints,
  getWaveSampleStep,
  RAINBOW_COLOR_STOPS,
} from "@/lib/branding/wave-shape";

interface InteractiveRainbowWaveProps {
  className?: string;
  lineColor?: string;
  useRainbow?: boolean;
  animate?: boolean;
  initialPhase?: number;
  lineWidth?: number;
  sampleStep?: number;
  languageOverride?: LanguageConfig;
}

const InteractiveRainbowWave = ({
  className,
  lineColor,
  useRainbow,
  animate = true,
  initialPhase = 0,
  lineWidth = 4,
  sampleStep,
  languageOverride,
}: InteractiveRainbowWaveProps) => {
  const { currentLanguage: demoLanguage } = useDemo();
  const currentLanguage = languageOverride ?? demoLanguage;
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
      const speed = 0.09;
      const step = sampleStep ?? getWaveSampleStep(width);

      // Create Gradient from dynamic colors or use lineColor
      let strokeStyle: string | CanvasGradient = lineColor || "";

      if (!strokeStyle) {
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        if (useRainbow) {
          for (const stop of RAINBOW_COLOR_STOPS) {
            gradient.addColorStop(stop.offset, stop.color);
          }
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

      const points = getWavePoints({
        width,
        height,
        phase,
        step,
      });

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
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
