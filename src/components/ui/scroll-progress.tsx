"use client";

import { motion, useScroll } from "framer-motion";
import {Colors} from "@/lib/constants";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
      style={{
        scaleX: scrollYProgress,
        background: `linear-gradient(to right, ${Colors.rainbow.join(", ")})`,
      }}
    />
  );
};