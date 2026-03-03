"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";
import { motion, AnimatePresence } from "framer-motion";

const ArticlePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-50 rounded-[2rem] p-4 flex items-center gap-6 border border-gray-100 shadow-inner my-12">
      <Button 
        size="icon" 
        onClick={() => setIsPlaying(!isPlaying)}
        className="h-14 w-14 rounded-full bg-black text-white hover:bg-gray-800 shrink-0 shadow-lg shadow-black/20"
      >
        {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
      </Button>

      <div className="flex-1 overflow-hidden relative h-16 flex items-center">
        <AnimatePresence mode="wait">
            {!isPlaying ? (
                <motion.div 
                    key="text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-gray-500 font-medium text-sm flex flex-col justify-center"
                >
                    <span className="text-gray-900 font-bold mb-0.5">Listen to this article</span>
                    <span className="text-xs uppercase tracking-wider text-gray-400">Audio Version • 5:23</span>
                </motion.div>
            ) : (
                <motion.div
                    key="wave"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                >
                    <InteractiveRainbowWave className="h-16 w-full" />
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ArticlePlayer;