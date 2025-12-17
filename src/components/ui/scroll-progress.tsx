"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};