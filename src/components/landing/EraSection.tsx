"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveRainbowWave from "./InteractiveRainbowWave";
import SignupModal from "./SignupModal";

const EraSection = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white min-h-[600px] flex flex-col items-center justify-center">
            <div className="container mx-auto max-w-7xl px-4 relative z-10 flex flex-col items-center text-center">
                {/* Main Title: Sophie AI */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center mb-4 mt-14"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 flex items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff0000] via-[#ffbd2e] via-[#22c55e] to-[#00d2ff] mr-1">S</span>
                        ophie AI
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl md:text-2xl font-black tracking-widest text-gray-900 mb-12 uppercase"
                >
                    THE <span className="text-[#ff1f1f]">N</span>
                    <span className="text-[#f59e0b]">E</span>
                    <span className="text-[#22c55e]">W</span>{" "}
                    <span className="text-[#22c55e]">E</span>
                    <span className="text-[#3b82f6]">R</span>
                    <span className="text-[#8b5cf6]">A</span> OF LANGUAGE ACQUISITION.
                </motion.h2>

                {/* Interactive Wave Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl mb-12 h-64 flex items-center justify-center"
                >
                    <InteractiveRainbowWave className="h-full" useRainbow={true} />
                </motion.div>

                {/* Meet Sophie Button with Rainbow Border */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <SignupModal triggerLocation="era_section">
                        <button className="group relative p-[2px] rounded-full transition-transform hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000] via-[#FF7F00] via-[#FFFF00] via-[#00FF00] via-[#0000FF] to-[#4B0082] rounded-full" />
                            <div className="relative px-12 py-3 bg-white rounded-full transition-colors">
                                <span className="text-lg font-bold text-gray-900 tracking-tight">
                                    Meet Sophie
                                </span>
                            </div>
                        </button>
                    </SignupModal>
                </motion.div>
            </div>
        </section>
    );
};

export default EraSection;
