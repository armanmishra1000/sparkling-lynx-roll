"use client";

import React from "react";
import { TrendingUp, History, Map, type LucideIcon } from "lucide-react";
import { Colors } from "@/lib/constants";
import { RainbowIcon } from "@/components/ui/RainbowIcon";
import { RainbowGradient } from "@/components/ui/RainbowGradient";

type PersonalizationStat = {
  label: string;
  val: string;
  helper: string;
  progress: number;
  tone: string;
};

type PersonalizationStep = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const stats: PersonalizationStat[] = [
  { label: "Confidence", val: "100%", helper: "Conversation-ready", progress: 100, tone: Colors.rainbow[0] },
  { label: "Vocab", val: "88%", helper: "Industry terms tracked", progress: 88, tone: Colors.rainbow[1] },
  { label: "Tone", val: "81%", helper: "Context adjusted", progress: 81, tone: Colors.rainbow[2] },
  { label: "Fluency", val: "75%", helper: "Weekly improvement", progress: 75, tone: Colors.rainbow[3] },
  { label: "Accent", val: "64%", helper: "Pronunciation map", progress: 64, tone: Colors.rainbow[4] },
];

const steps: PersonalizationStep[] = [
  {
    icon: History,
    title: "Persistent Memory",
    desc: "Mistakes from last week become drills for today. Nothing is lost.",
    tag: "Memory",
  },
  {
    icon: TrendingUp,
    title: "Adaptive Difficulty",
    desc: "Always challenging, never crushing. It scales with your confidence.",
    tag: "Adaptation",
  },
  {
    icon: Map,
    title: "Context Awareness",
    desc: "Sophie knows you're a 'Software Engineer' who likes 'Hiking', not a generic user.",
    tag: "Context",
  },
];

const PersonalizationEngine = () => {
  const rainbowLine = `linear-gradient(90deg, ${Colors.rainbow.join(", ")})`;

  return (
    <section className="py-16 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center lg:text-left mb-12 md:mb-16">
          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-black max-w-3xl">
            A premium learning engine built around your behavior.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Most apps reset every session. Sophie builds a persistent, evolving model of your language patterns.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 lg:gap-10 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-900">Live Learning Graph</p>
                <p className="text-sm text-gray-500">Updated after every conversation</p>
              </div>
              <div className="relative overflow-hidden rounded-full px-3 py-1">
                <RainbowGradient className="absolute inset-0 opacity-30" />
                <span className="relative text-xs font-semibold tracking-widest uppercase text-black">
                  Realtime
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs tracking-[0.12em] uppercase text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-black tracking-tight mt-1">{stat.val}</p>
                    </div>
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: stat.tone }} />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{stat.helper}</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${stat.progress}%`, backgroundColor: stat.tone }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-4 sm:p-6"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative w-12 h-12 shrink-0 rounded-xl border border-gray-200 bg-white flex items-center justify-center">
                    <RainbowIcon
                      icon={step.icon}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-lg text-black">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-gray-600 leading-relaxed">{step.desc}</p>
                    <div
                      className="mt-4 h-px w-full"
                      style={{ backgroundImage: rainbowLine }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngine;
