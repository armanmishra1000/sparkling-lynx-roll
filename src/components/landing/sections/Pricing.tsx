"use client";

import React from "react";
import { Check } from "lucide-react";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import SignupModal from "@/components/landing/modals/SignupModal";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { RainbowIcon } from "@/components/ui/RainbowIcon";
import { RainbowText } from "@/components/ui/RainbowText";
import { useLanguage } from "@/context/LanguageContext";
import { useLandingDemoLanguage } from "@/components/landing/sections/HeroDemoLanguage";

const SBB_MONTHLY_PRICE = 12;

const Pricing = () => {
  const currentLanguage = useLandingDemoLanguage();
  const { messages } = useLanguage();
  const withLanguage = (text: string) =>
    text
      .replaceAll("{language}", currentLanguage.name)
      .replaceAll("{nativeLanguage}", currentLanguage.nativeName);

  return (
    <section id="pricing" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              {messages.pricing.titlePrefix}{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="font-bold"
              >
                {currentLanguage.name} {messages.pricing.titleSuffix}
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {messages.pricing.cheaperThanTutor}
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Free Tier */}
          <div
            className="relative bg-white rounded-3xl border border-gray-100 shadow-sm lg:p-8 p-6 h-full flex flex-col"
          >
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-bold text-black">{messages.pricing.freeTierName}</h3>
              <p className="text-gray-500 text-sm">
                {messages.pricing.freeTierSubtitle}
              </p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <div className="text-5xl font-bold text-black">
                <span>$0/</span>{" "}
                <span className="text-xl font-medium">{messages.pricing.freePriceSuffix}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {messages.pricing.freeFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white shadow-sm">
                    <RainbowIcon icon={Check} size={14} strokeWidth={2.5} />
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
                  <span className="relative z-10 font-medium text-black">{messages.pricing.joinWaitlist}</span>
                </RainbowBorder>
              </SignupModal>
            </div>
          </div>

          {/* Premium Tier - Highlighted */}
          <div
            className="relative rounded-3xl shadow-2xl transform lg:-translate-y-4 md:translate-y-1/2 group p-[2px] h-full"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
            }}
          >
            <div className="relative bg-white rounded-[calc(1.5rem-2px)] lg:p-8 p-6 h-full flex flex-col">
              <div className="mb-8">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                      {messages.pricing.premiumTierName}
                    </h3>
                    <span
                      style={{
                        backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                        borderColor: currentLanguage.from,
                      }}
                      className="bg-clip-text text-transparent text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border-2"
                    >
                      {messages.pricing.premiumBadge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {withLanguage(messages.pricing.premiumTierSubtitle)}
                  </p>
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <div className="text-5xl font-bold tracking-tight text-black">
                  <span>$8/</span>{" "}
                  <span className="text-xl font-medium">{messages.pricing.premiumRegularPriceSuffix}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {messages.pricing.premiumFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                  >
                    <div
                      style={{
                        backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                      }}
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white shadow-md"
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span>{withLanguage(feature)}</span>
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
                    <div className="h-full px-12 rounded-full bg-white flex items-center justify-center font-medium text-black hover:bg-white/70 transition-colors">
                      {messages.pricing.startFreeTrial}
                    </div>
                  </button>
                </SignupModal>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm lg:p-8 p-6 h-full flex flex-col">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                      {messages.pricing.proTierName}
                    </h3>
                    <RainbowBorder
                      borderWidth={1}
                      borderRadius={9999}
                      className="inline-flex"
                      innerClassName="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white"
                    >
                      <RainbowText text={messages.pricing.bestValue} />
                    </RainbowBorder>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {messages.pricing.proTierSubtitle}
                  </p>
                </div>
              </div>

              <div className="mb-7 space-y-3">
                <div className="text-5xl font-bold tracking-tight text-black">
                  <span>${SBB_MONTHLY_PRICE}/</span>{" "}
                  <span className="text-xl font-medium">{messages.pricing.proMonth}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {messages.pricing.proFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-sm font-medium text-gray-700"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white shadow-sm">
                      <RainbowIcon icon={Check} size={14} strokeWidth={2.5} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <SignupModal triggerLocation="pricing_pro">
                  <RainbowBorder
                    className="w-full cursor-pointer"
                    borderWidth={2}
                    borderRadius={9999}
                    innerClassName="relative bg-white w-full h-12 px-12 py-3 flex items-center justify-center overflow-hidden"
                  >
                    <RainbowGradient className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium text-black">{messages.pricing.joinWaitlist}</span>
                  </RainbowBorder>
                </SignupModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
