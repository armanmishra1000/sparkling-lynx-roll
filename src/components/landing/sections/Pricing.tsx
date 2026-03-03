"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import SignupModal from "@/components/landing/modals/SignupModal";
import { motion, Variants } from "framer-motion";
import { useDemo } from "@/context/DemoContext";
import { Colors } from "@/lib/constants";
import { RainbowGradient } from "@/components/ui/RainbowGradient";

const Pricing = () => {
  const { currentLanguage } = useDemo();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      }
    },
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Invest in your{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="font-bold"
              >
                {currentLanguage.name} fluency.
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Cheaper than one hour with a private tutor.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Free Tier */}
          <div
            className="relative bg-white rounded-3xl border border-gray-100 shadow-sm lg:p-8 p-6 h-full flex flex-col"
          >
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-bold text-black">M&G</h3>
              <p className="text-gray-500 text-sm">
                Meet and Greet Sophie
              </p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <div className="text-5xl font-bold text-black">
                <span>$0/</span>{" "}
                <span className="text-xl font-medium">7 days</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "App in 15 languages",
                "Natural conversations with Sophie in 50+ languages",
                "Sophie's translation from any to any available language",
                "Unlimited vocabulary saver in all available languages.",
                "100+ conversational scenarios",
              ].map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                >
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <SignupModal triggerLocation="pricing_free">
                <RainbowBorder
                  className="w-full cursor-pointer"
                  borderWidth={2}
                  borderRadius={9999}
                  innerClassName="relative bg-white w-full h-12 px-12 py-3 flex items-center justify-center overflow-hidden"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">Join Waitlist</span>
                </RainbowBorder>
              </SignupModal>
            </div>
          </div>

          {/* Premium Tier - Highlighted */}
          <div
            className="relative rounded-3xl shadow-2xl transform md:-translate-y-4 group p-[2px] h-full"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
            }}
          >
            <div className="relative bg-white rounded-[calc(1.5rem-2px)] lg:p-8 p-6 h-full flex flex-col">
              <div className="mb-8">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                      SCF
                      <Sparkles className="w-5 h-5 text-[#FFD700] fill-current" />
                    </h3>
                    <span
                      style={{
                        backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                        borderColor: currentLanguage.from,
                      }}
                      className="bg-clip-text text-transparent text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border-2"
                    >
                      Popular
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Sophie Close Friend
                  </p>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <div className="text-5xl font-bold tracking-tight text-black">
                  <span>$20/</span>{" "}
                  <span className="text-xl font-medium">Month regular price</span>
                </div>
                <div className="text-gray-700 font-medium text-lg">$14/Month launch price</div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Everything is included in the free trial.",
                  "24/7 Customer support. Guaranteed.",
                  "Unrestricted app usage",
                  "Strategic ambassador option.",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                  >
                    <div
                      key={`check-${currentLanguage.id}`}
                      style={{
                        backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                      }}
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white shadow-md"
                    >
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <SignupModal triggerLocation="pricing_plus">
                  <button
                    className="relative h-14 w-full p-0.5 rounded-full transition-all duration-300 group"
                    style={{
                      background: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                    }}
                  >
                    <div className="h-full px-12 rounded-full bg-white flex items-center justify-center font-medium text-black hover:bg-white/90 transition-colors">
                      Start Free Trial
                    </div>
                  </button>
                </SignupModal>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div
            className="relative bg-white rounded-3xl border border-gray-100 shadow-sm lg:p-8 p-6 h-full flex flex-col"
          >
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-bold text-black">SBB</h3>
              <p className="text-gray-500 text-sm">
                Sophie Best Buddy
              </p>
            </div>

            <div className="mb-8 space-y-2">
              <div className="text-2xl font-bold tracking-tight text-black">$60/6 months ($10 per month)</div>
              <div className="text-gray-600 font-medium">$108/12 months ($9 per month)</div>
              <div className="text-gray-600 font-medium">$144/18 months ($8 per month)</div>
              <div className="text-gray-600 font-medium">$168/24 months ($7 per month)</div>
            </div>

            <div className="mt-auto">
              <SignupModal triggerLocation="pricing_pro">
                <RainbowBorder
                  className="w-full cursor-pointer"
                  borderWidth={2}
                  borderRadius={9999}
                  innerClassName="relative bg-white w-full h-12 px-12 py-3 flex items-center justify-center overflow-hidden"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">Join Waitlist</span>
                </RainbowBorder>
              </SignupModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
