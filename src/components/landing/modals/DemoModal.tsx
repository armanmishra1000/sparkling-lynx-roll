"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Mic, RefreshCw, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";
import { useLanguage } from "@/context/LanguageContext";

interface DemoModalProps {
  children: React.ReactNode;
}

const DemoModal = ({ children }: DemoModalProps) => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<"idle" | "listening" | "processing" | "result">("idle");
  const { messages } = useLanguage();

  useEffect(() => {
    if (open && stage === "idle") {
      startDemo();
    }
    if (!open) {
      setStage("idle");
    }
  }, [open, stage]);

  const startDemo = () => {
    setStage("listening");
    setTimeout(() => setStage("processing"), 3000);
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
        <DialogTitle className="sr-only">{messages.demoModal.dialogTitle}</DialogTitle>

        <div className="relative h-[600px] flex flex-col bg-gray-50">
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{messages.demoModal.liveSimulation}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8 rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 p-6 flex flex-col justify-center space-y-6">
            <AnimatePresence mode="wait">
              {stage === "listening" && (
                <motion.div
                  key="listening"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center space-y-8 w-full"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-xl">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">{messages.demoModal.listening}</p>
                    <p className="text-sm text-gray-400">{messages.demoModal.speakClearly}</p>
                  </div>

                  <div className="w-full max-w-[80%] h-16">
                    <InteractiveRainbowWave className="h-16" />
                  </div>
                </motion.div>
              )}

              {stage === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 border-4 border-t-[#7B61FF] border-r-[#FF0080] border-b-[#FFD700] border-l-[#40E0D0] rounded-full animate-spin mb-4" />
                  <p className="text-lg font-bold text-gray-500">{messages.demoModal.analyzing}</p>
                </motion.div>
              )}

              {stage === "result" && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 w-full"
                >
                  <div className="flex justify-end">
                    <div className="bg-gray-200 text-gray-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                      <p className="font-medium">"{messages.demoModal.userInputSample}"</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-5 rounded-2xl rounded-tl-sm shadow-xl max-w-[90%] w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF0080] to-[#7B61FF] flex items-center justify-center text-[10px] font-bold">AI</div>
                        <span className="text-xs font-bold text-gray-400 uppercase">{messages.demoModal.correctionLabel}</span>
                      </div>

                      <div className="text-lg mb-4">{messages.demoModal.correctionSentence}</div>

                      <div className="bg-white/10 rounded-lg p-3 text-sm text-gray-300 border border-white/5">
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                          <div>
                            <strong>{messages.demoModal.correctionHeading}</strong> {messages.demoModal.correctionBody}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button onClick={resetDemo} variant="outline" className="gap-2 border-2 hover:bg-gray-100 rounded-full font-bold">
                      <RefreshCw className="w-4 h-4" /> {messages.demoModal.tryAnother}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {stage === "idle" && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-20">
              <Button size="lg" onClick={startDemo} className="rounded-full h-16 px-8 text-lg gap-2 shadow-xl bg-black hover:bg-gray-800 text-white">
                <Play className="w-5 h-5 fill-current" /> {messages.demoModal.tryLiveDemo}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;

