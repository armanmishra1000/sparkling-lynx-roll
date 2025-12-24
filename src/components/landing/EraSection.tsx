"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Zap, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 3D Tilt Card Component ---
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative w-full h-full rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:bg-white/60",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 w-full h-full"
            >
                {children}
            </div>

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([xPct, yPct]) => `radial-gradient(600px circle at ${(xPct as number + 0.5) * 100}% ${(yPct as number + 0.5) * 100}%, rgba(123, 97, 255, 0.1), transparent 40%)`
                    ),
                }}
            />
        </motion.div>
    );
};

const EraSection = () => {
    const points = [
        {
            title: "NO MORE FEAR OF SPEAKING",
            description: "Break the silence. Sophie creates a judgment-free space where you can practice until perfect.",
            icon: Shield,
            color: "from-blue-500/10 to-blue-600/10",
            iconColor: "text-blue-500",
        },
        {
            title: "NO MORE FREEZING",
            description: "Never lose your words again. Get instant prompts and corrections to keep the conversation flowing.",
            icon: Zap,
            color: "from-yellow-500/10 to-orange-600/10",
            iconColor: "text-yellow-500",
        },
        {
            title: "NO MORE STUDYING A LANGUAGE",
            description: "Stop memorizing, start living. Acquire languages naturally through immersive high-context dialogue.",
            icon: BookOpen,
            color: "from-purple-500/10 to-pink-600/10",
            iconColor: "text-purple-500",
        },
    ];

    return (
        <section className="relative pt-44 pb-32 overflow-hidden bg-white">
            {/* Premium Background Layers */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-100/30 via-purple-100/20 to-transparent rounded-full blur-[140px] opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-100/40 via-blue-50/20 to-transparent rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-20">
                    {/* Main Title Section */}
                    <div className="space-y-8 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/5 border border-black/5 backdrop-blur-md shadow-sm"
                        >
                            <Sparkles className="w-4 h-4 text-purple-500" />
                            <span className="text-xs font-black tracking-[0.2em] uppercase text-gray-500">
                                The Paradigm Shift
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[0.9] text-gray-900"
                        >
                            WELCOME TO THE{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#7B61FF] to-[#40E0D0] transition-colors duration-500">
                                    NEW ERA
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="absolute bottom-2 left-0 h-2 bg-gradient-to-r from-[#FF0080]/20 via-[#7B61FF]/20 to-[#40E0D0]/20 -z-10 rounded-full"
                                ></motion.div>
                            </span> <br />
                            <span className="text-gray-900/90">OF LANGUAGE ACQUISITION.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-3xl font-bold tracking-tight text-gray-500 uppercase leading-none"
                        >
                            MEET SOPHIE. A NATIVE SPEAKER IN YOUR POCKET.
                        </motion.p>
                    </div>

                    {/* Enhanced Bento Grid */}
                    <div className="w-full space-y-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 justify-center"
                        >
                            <div className="h-px w-12 bg-gray-200"></div>
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                                What are we solving for?
                            </h3>
                            <div className="h-px w-12 bg-gray-200"></div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
                            {points.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * index, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <TiltCard className="h-full">
                                        <div className="p-10 flex flex-col items-center md:items-start text-center md:text-left h-full space-y-6">
                                            <div className={cn(
                                                "w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-gradient-to-br shadow-inner border border-white/40",
                                                point.color
                                            )}>
                                                <point.icon className={cn("w-8 h-8", point.iconColor)} />
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="text-xl font-black tracking-tight text-gray-900 leading-tight">
                                                    {point.title}
                                                </h4>
                                                <p className="text-gray-500 font-medium leading-relaxed">
                                                    {point.description}
                                                </p>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EraSection;
