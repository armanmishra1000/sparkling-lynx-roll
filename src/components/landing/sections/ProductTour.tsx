"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MicIcon, CheckCircle2, ChevronsUp } from "lucide-react";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";
import { RainbowIcon } from "@/components/ui/RainbowIcon";
import { useLanguage } from "@/context/LanguageContext";

type TourTabId = "speak" | "correct" | "track";

type TourTab = {
  id: TourTabId;
  label: string;
  desc: string;
  icon: typeof MicIcon;
};

const tabIcons: Record<TourTabId, typeof MicIcon> = {
  speak: MicIcon,
  correct: CheckCircle2,
  track: ChevronsUp
};

const ProductTour = () => {
  const { messages } = useLanguage();
  const [activeTab, setActiveTab] = useState<TourTabId>("speak");

  const tabs: TourTab[] = useMemo(
    () => messages.productTour.tabs.map((tab) => ({ ...tab, icon: tabIcons[tab.id] })),
    [messages.productTour.tabs]
  );

  const content: Record<TourTabId, React.ReactNode> = {
    speak: (
      <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-sm">
          <p className="text-2xl font-medium text-black leading-snug">{messages.productTour.speakQuote}</p>
          <div className="mt-8 w-full">
            <InteractiveRainbowWave />
          </div>
        </div>
      </div>
    ),
    correct: (
      <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden border border-gray-100">
        <div className="space-y-6 max-w-md mx-auto w-full relative z-10">
          <div className="flex justify-end">
            <div className="bg-gray-100 text-gray-500 px-6 py-4 rounded-2xl rounded-tr-sm">
              <span className="line-through decoration-red-400/50 decoration-2">{messages.features.correctionBefore}</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-2xl rounded-tl-sm shadow-xl w-full">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                {messages.productTour.suggestionLabel}
              </div>
              <div className="text-xl font-medium mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{messages.features.correctionAfter}</span>
              </div>
              <div className="h-px bg-white/10 my-3"></div>
              <p className="text-sm text-gray-400">{messages.productTour.correctionLine}</p>
            </div>
          </motion.div>
        </div>
      </div>
    ),
    track: (
      <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden border border-gray-100">
        <div className="w-full max-w-sm mx-auto space-y-8 relative z-10">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">{messages.productTour.fluencyMetrics}</h4>
            <div className="space-y-6">
              {messages.productTour.metrics.map((item, i) => (
                <div key={`${item.label}-${i}`}>
                  <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">{messages.productTour.title}</h2>
          <p className="text-xl text-gray-500 leading-relaxed">{messages.productTour.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              if (isActive) {
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="cursor-pointer bg-white w-full p-5 flex items-start gap-4 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                      <RainbowIcon icon={tab.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-black">{tab.label}</h3>
                      <p className="text-sm text-gray-500">{tab.desc}</p>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="group text-left p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50/50 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gray-200 text-gray-500 group-hover:text-black transition-colors">
                    <tab.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-500 group-hover:text-black transition-colors">{tab.label}</h3>
                    <p className="text-sm text-gray-500 font-medium">{tab.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 h-[500px] relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full w-full"
              >
                {content[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
