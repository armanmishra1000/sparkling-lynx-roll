"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, CheckCircle2, BarChart3, Sparkles, Rocket, MicIcon, ChevronUp, ChevronsUp } from "lucide-react";
import InteractiveRainbowWave from "@/components/landing/shared/InteractiveRainbowWave";
import { RainbowIcon } from "@/components/ui/RainbowIcon";

const tabs = [
    {
        id: "speak",
        label: "Natural Speaking",
        desc: "Just talk. No tapping words.",
        icon: MicIcon
    },
    {
        id: "correct",
        label: "Instant Feedback",
        desc: "Corrections that stick.",
        icon: CheckCircle2
    },
    {
        id: "track",
        label: "Boost your confidence",
        desc: "Sophie judges no one. Feel free to make mistakes",
        icon: ChevronsUp
    },
];

const content = {
    speak: (
        <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden border border-gray-100">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-sm">
                <p className="text-2xl font-medium text-black leading-snug">"I would like to order a coffee, please."</p>

                {/* Audio Waveform Visualization */}
                <div className="mt-8 w-full">
                    <InteractiveRainbowWave />
                </div>
            </div>
        </div>
    ),
    correct: (
        <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden border border-gray-100">
            <div className="space-y-6 max-w-md mx-auto w-full relative z-10">
                {/* User Bubble */}
                <div className="flex justify-end">
                    <div className="bg-gray-100 text-gray-500 px-6 py-4 rounded-2xl rounded-tr-sm">
                        <span className="line-through decoration-red-400/50 decoration-2">I want order coffee.</span>
                    </div>
                </div>

                {/* AI Bubble */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                >
                    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-2xl rounded-tl-sm shadow-xl w-full">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 text-yellow-400" /> Suggestion
                        </div>
                        <div className="text-xl font-medium mb-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">I'd like to order</span> a coffee.
                        </div>
                        <div className="h-px bg-white/10 my-3"></div>
                        <p className="text-sm text-gray-400">"I'd like" is softer and more polite than "I want".</p>
                    </div>
                </motion.div>
            </div>
        </div>
    ),
    track: (
        <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden border border-gray-100">
            <div className="w-full max-w-sm mx-auto space-y-8 relative z-10">
                <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Fluency Metrics</h4>
                    <div className="space-y-6">
                        {[
                            { label: "Vocabulary", val: 85, color: "bg-pink-500" },
                            { label: "Pronunciation", val: 62, color: "bg-orange-500" },
                            { label: "Confidence", val: 94, color: "bg-cyan-500" }
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                                    <span>{item.label}</span>
                                    <span>{item.val}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.val}%` }}
                                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
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

const ProductTour = () => {
    const [activeTab, setActiveTab] = useState<"speak" | "correct" | "track">("speak");

    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                        Confidence Boost
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed">See how Sophie speaking with Sophie will boost your speaking confidence.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Navigation (Left) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;

                            if (isActive) {
                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className="cursor-pointer bg-white w-full p-5 flex items-start gap-4 rounded-2xl shadow-sm border border-gray-100"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                            <RainbowIcon icon={tab.icon} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 text-black">
                                                {tab.label}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {tab.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className="group text-left p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50/50 flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-xl bg-gray-200 text-gray-500 group-hover:text-black transition-colors">
                                        <tab.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 text-gray-500 group-hover:text-black transition-colors">
                                            {tab.label}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium">
                                            {tab.desc}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Display Area (Right) */}
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
