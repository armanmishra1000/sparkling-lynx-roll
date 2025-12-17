"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF]"
      style={{ scaleX }}
    />
  );
};