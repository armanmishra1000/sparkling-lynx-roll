"use client";

import React from "react";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useDemo } from "@/context/DemoContext";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowText } from "@/components/ui/RainbowText";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { useLanguage } from "@/context/LanguageContext";
import { getBrandTerms } from "@/lib/i18n/brand";

const ProblemSolution = () => {
  const { currentLanguage } = useDemo();
  const { messages, locale } = useLanguage();
  const brand = getBrandTerms(locale);
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-100 bg-zinc-50 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              The Paradigm Shift
            </span>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1] text-black">
            {messages.problemSolution.titlePrefix}{" "}
            <span className="text-zinc-400 relative inline-block mx-1">
              {messages.problemSolution.titleStrike}
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-500/30 -rotate-1"></span>
            </span>. <br />
            <span className="text-black">
              {messages.problemSolution.titleSuffix}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Problem Card - Simple & Clean */}
          <div className="group relative flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black mb-2">{messages.problemSolution.traditionalMethod}</h3>
              <p className="text-gray-500 text-sm">
                {messages.problemSolution.traditionalSubtitle}
              </p>
            </div>

            <ul className="space-y-6 flex-grow">
              {messages.problemSolution.traditionalBullets.map((text, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-4 text-gray-600"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1 border border-red-100">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-lg font-light leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card - Refined White Theme */}
          <div
            className="relative h-full"
          >
            <RainbowBorder
              borderRadius={40}
              borderWidth={2}
              className="w-full h-full"
              innerClassName="bg-white p-10 h-full flex flex-col shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-2">{messages.problemSolution.speakingWithSophie}</h3>
                  <RainbowText
                    text={messages.problemSolution.immersionInstantCorrection}
                    className="text-sm font-semibold"
                  />
                </div>
                <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center bg-zinc-50">
                  {/* <RainbowGradient className="absolute inset-0 opacity-30" /> */}
                  <Image
                    src="/SOPHIE no background.png"
                    alt={`${brand.name} Agent`}
                    width={60}
                    height={60}
                    className="object-contain w-full h-full relative z-10"
                  />
                </div>
              </div>

              <ul
                className="space-y-6 flex-grow"
              >
                {messages.problemSolution.solutionBullets.map((text, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-1 border border-green-100">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-lg font-light text-gray-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-zinc-100 flex items-center text-sm font-medium text-gray-500 gap-2">
                <span className="text-black">{messages.problemSolution.resultLabel}</span> {messages.problemSolution.resultValue}
                {/* <ArrowRight className="w-4 h-4 ml-1 text-purple-600" /> */}
              </div>
            </RainbowBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
