"use client";

import React from "react";
import { motion } from "framer-motion";

const RainbowWaveBackground = () => {
  const colors = [
    "rgba(255, 0, 128, 0.6)",   // Magenta
    "rgba(255, 140, 0, 0.6)",  // Orange
    "rgba(255, 215, 0, 0.6)",  // Yellow
    "rgba(64, 224, 208, 0.6)", // Turquoise
    "rgba(123, 97, 255, 0.6)", // Violet
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 w-[200%] h-[500px]"
          style={{
            bottom: `${-100 + i * 40}px`,
            fill: color,
            opacity: 0.7,
          }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 15 + i * 5, // Different speeds for parallax effect
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full transform scale-150 origin-bottom">
            <path
              fill={color}
              fillOpacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default RainbowWaveBackground;