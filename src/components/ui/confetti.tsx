"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const colors = ["#FF0080", "#FF8C00", "#FFD700", "#40E0D0", "#7B61FF"];

export const Confetti = () => {
  const [pieces, setPieces] = useState<number[]>([]);

  useEffect(() => {
    setPieces(Array.from({ length: 50 }).map((_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((i) => (
        <motion.div
          key={i}
          initial={{ 
            y: "50%", 
            x: "50%", 
            scale: 0 
          }}
          animate={{ 
            y: ["50%", `${Math.random() * 100 - 50}%`],
            x: ["50%", `${Math.random() * 100}%`],
            scale: [0, 1, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{ 
            duration: 1.5 + Math.random(), 
            ease: "easeOut",
            times: [0, 1]
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            left: "0%",
            top: "0%"
          }}
        />
      ))}
    </div>
  );
};