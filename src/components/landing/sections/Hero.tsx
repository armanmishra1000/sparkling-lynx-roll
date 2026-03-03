"use client";

import React from "react";
import { ArrowRight, Play, Sparkles, Wand2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "@/components/landing/modals/SignupModal";
import VideoModal from "@/components/landing/modals/VideoModal";
import { trackEvent } from "@/lib/analytics";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";
import { useDemo } from "@/context/DemoContext";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";

const Hero = () => {
  const { currentLanguage } = useDemo();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pb-24">
      <RainbowWaveBackground />

      <div className="container mx-auto max-w-7xl px-4">

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-sm font-semibold text-gray-700 ring-1 ring-black/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  key={currentLanguage.id}
                  animate={{ backgroundColor: currentLanguage.color }}
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                ></motion.span>
                <motion.span
                  key={`dot-${currentLanguage.id}`}
                  animate={{ backgroundColor: currentLanguage.color }}
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                ></motion.span>
              </span>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                New: {currentLanguage.name} Dialects Added
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] text-gray-900">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                Don't just
              </motion.span>
              <div className="min-h-[1.2em] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentLanguage.id}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: "1.2",
                    }}
                    className="block pb-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentLanguage.headline}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="min-h-[1em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`sub-${currentLanguage.id}`}
                    className="block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentLanguage.subheadline}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-light">
              Stop translating in your head, just ask Sophie. She will help you to
              conquer real conversation to speak like a native, not like a
              textbook student.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4"
            >
              <SignupModal triggerLocation="hero_primary">
                <button
                  className="relative h-[60px] p-0.5 rounded-full transition-all duration-300 group"
                  style={{
                    background: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                  }}
                >
                  <div className="h-full px-12 rounded-full bg-white flex items-center justify-center font-medium text-black group-hover:bg-white/90 transition-colors">
                    {currentLanguage.cta} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </button>
              </SignupModal>

              <VideoModal>
                <button
                  className="group inline-block transition-transform active:scale-95"
                  onClick={() =>
                    trackEvent("cta_click_secondary", {
                      location: "hero_demo_button",
                    })
                  }
                >
                  <RainbowBorder
                    borderRadius={9999}
                    borderWidth={2}
                    className="w-full"
                    innerClassName="relative bg-white h-14 px-12 py-3 flex items-center justify-center transition-colors overflow-hidden rounded-full"
                  >
                    <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center font-medium text-black">
                      <Play className="mr-2 w-3 h-3 fill-current" /> Hear Sophie
                    </span>
                  </RainbowBorder>
                </button>
              </VideoModal>
            </div>

            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-6 flex items-center gap-4 text-sm text-gray-500 font-medium"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full border-[3px] border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm`}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20
                      }&backgroundColor=ffdfbf,c0aede,d1d4f9`}
                    alt="User"
                  />
                </div>
              ))}
            </div>
            <p>
              {currentLanguage.students_count} students actively learning{" "}
              {currentLanguage.name}
            </p>
          </motion.div> */}

          </div>

          {/* Right Visual - Premium Glass Card */}
          <div className=" relative mt-16 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
            <div
              className="relative z-20 w-full max-w-[500px]"
            >
              {/* Main Card */}
              <div className="relative bg-white/70 backdrop-blur-3xl border border-white/50 p-8 rounded-[2.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] overflow-hidden ring-1 ring-white/60">

                <div className="relative z-10 space-y-8">
                  {/* Header of Card */}
                  <div className="flex items-center justify-between border-b border-gray-200/50 pb-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative w-12 h-12">
                        <div
                          style={{
                            background: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                          }}
                          className="w-full h-full rounded-full p-[2px]"
                        >
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-lg font-black text-gray-900">
                            S
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-10"></div>
                      </div>
                      <div>
                        <div className="text-base font-bold text-gray-900">
                          Sophie
                        </div>
                        <div className="text-xs text-gray-500 font-medium tracking-wide">
                          {currentLanguage.name}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray-100/50 border border-gray-200/50 text-xs font-bold text-gray-500 uppercase tracking-widest backdrop-blur-sm">
                      Conversation
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="space-y-6">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`user-msg-${currentLanguage.id}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 px-6 py-4 rounded-3xl rounded-tr-sm text-base font-medium max-w-[85%] shadow-sm border border-gray-100"
                        >
                          "{currentLanguage.chat_user}"
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* AI Correction */}
                    <div className="flex justify-start">
                      <div className="relative group w-full">
                        <motion.div
                          key={`glow-${currentLanguage.id}`}
                          animate={{ background: currentLanguage.color }}
                          className="absolute -inset-0.5 rounded-3xl rounded-tl-sm opacity-20 blur-sm transition duration-200"
                        ></motion.div>
                        <div className="relative bg-white/90 border border-white/60 p-6 rounded-3xl rounded-tl-sm shadow-sm backdrop-blur-sm">
                          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider">
                            <Wand2 className="w-3 h-3" />{" "}
                            <span
                              style={{
                                backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                              className="font-bold"
                            >
                              Natural Correction
                            </span>
                          </div>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`ai-msg-${currentLanguage.id}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              <p className="text-lg text-gray-900 leading-relaxed font-medium">
                                <span
                                  style={{
                                    backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                  }}
                                  className="font-bold"
                                >
                                  {currentLanguage.chat_ai}
                                </span>{" "}
                                ...
                              </p>
                              <p className="text-sm text-gray-500 mt-2 italic">
                                {currentLanguage.chat_explanation}
                              </p>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Rainbow Wave */}
                  <div className="pt-2">
                    <InteractiveRainbowWave />
                  </div>
                </div>
              </div>

              {/* Floating Elements for Depth */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-4 max-w-[200px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0EA5E9] shadow-inner">
                  <Sparkles className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">
                    94%
                  </div>
                  <div className="text-xs font-medium text-gray-500 mt-1">
                    Accent Accuracy
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
