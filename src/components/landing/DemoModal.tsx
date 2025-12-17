"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Mic, RefreshCw, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveRainbowWave from "./InteractiveRainbowWave";

interface DemoModalProps {
  children: React.ReactNode;
}

const DemoModal = ({ children }: DemoModalProps) => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<"idle" | "listening" | "processing" | "result">("idle");

  useEffect(() => {
    if (open && stage === "idle") {
      // Auto-start demo when opened
      startDemo();
    }
    if (!open) {
      setStage("idle");
    }
  }, [open]);

  const startDemo = () => {
    setStage("listening");
    setTimeout(() => setStage("processing"), 3000); // Extended slightly for wave enjoyment
    setTimeout(() => setStage("result"), 4500);
  };

  const resetDemo = () => {
    setStage("idle");
    setTimeout(startDemo, 500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white border-none rounded-[2rem]">
        <div className="relative h-[600px] flex flex-col bg-gray-50">
            
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Live Simulation</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8 rounded-full">
                    <X className="w-4 h-4" />
                </Button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 p-6 flex flex-col justify-center space-y-6">
                <AnimatePresence mode="wait">
                    
                    {/* Stage: Listening */}
                    {stage === "listening" && (
                        <motion.div 
                            key="listening"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center justify-center space-y-8 w-full"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
                                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-xl">
                                    <Mic className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-bold text-gray-800">Listening...</p>
                                <p className="text-sm text-gray-400">Speak clearly into your microphone</p>
                            </div>
                            
                            <div className="w-full max-w-[80%] h-16">
                                <InteractiveRainbowWave className="h-16" />
                            </div>
                        </motion.div>
                    )}

                    {/* Stage: Processing */}
                    {stage === "processing" && (
                        <motion.div 
                            key="processing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="w-16 h-16 border-4 border-t-[#7B61FF] border-r-[#FF0080] border-b-[#FFD700] border-l-[#40E0D0] rounded-full animate-spin mb-4"></div>
                            <p className="text-lg font-bold text-gray-500">Analyzing grammar & accent...</p>
                        </motion.div>
                    )}

                    {/* Stage: Result */}
                    {stage === "result" && (
                        <motion.div 
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 w-full"
                        >
                            {/* User Input */}
                            <div className="flex justify-end">
                                <div className="bg-gray-200 text-gray-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                                    <p className="font-medium">"El museo es cerrado ahora."</p>
                                </div>
                            </div>

                            {/* AI Correction */}
                            <div className="flex justify-start">
                                <div className="bg-gradient-to-br from-gray-900 to-black text-white p-5 rounded-2xl rounded-tl-sm shadow-xl max-w-[90%] w-full">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF0080] to-[#7B61FF] flex items-center justify-center text-[10px] font-bold">AI</div>
                                        <span className="text-xs font-bold text-gray-400 uppercase">Correction</span>
                                    </div>
                                    
                                    <div className="text-lg mb-4">
                                        El museo <span className="text-[#40E0D0] font-bold">está</span> cerrado ahora.
                                    </div>

                                    <div className="bg-white/10 rounded-lg p-3 text-sm text-gray-300 border border-white/5">
                                        <div className="flex items-start gap-2">
                                            <Sparkles className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                                            <div>
                                                <strong>Ser vs Estar:</strong> Being closed is a <em>state</em>, not a permanent characteristic. Use <strong>Estar</strong>.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <Button onClick={resetDemo} variant="outline" className="gap-2 border-2 hover:bg-gray-100 rounded-full font-bold">
                                    <RefreshCw className="w-4 h-4" /> Try Another
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            {/* Footer / Controls */}
            {stage === "idle" && (
                 <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-20">
                    <Button size="lg" onClick={startDemo} className="rounded-full h-16 px-8 text-lg gap-2 shadow-xl bg-black hover:bg-gray-800 text-white">
                        <Play className="w-5 h-5 fill-current" /> Try Live Demo
                    </Button>
                 </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;