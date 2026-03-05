"use client";

import React from "react";
import {
  CalendarDays,
  Check,
  Gauge,
  MessageCircleMore,
  Tag,
  Zap,
} from "lucide-react";
import { Colors } from "@/lib/constants";
import { RainbowIcon } from "@/components/ui/RainbowIcon";
import { useLanguage } from "@/context/LanguageContext";

const ComparisonTable = () => {
  const { messages } = useLanguage();
  const features = messages.comparisonTable.rows;

  const featureIcons = [Tag, CalendarDays, Zap, MessageCircleMore, Gauge, Check];
  const rainbowBorder = `linear-gradient(180deg, ${Colors.rainbow.join(", ")})`;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            {messages.comparisonTable.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {messages.comparisonTable.subtitle}
          </p>
        </div>

        <div className="relative rounded-[40px] border border-gray-300 shadow-[0_20px_55px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <div className="min-w-[980px] p-0">
              <div className="relative">
                <table className="relative z-20 w-full table-fixed border-separate border-spacing-0 text-black">
                  <colgroup>
                    <col className="w-[34.0659%]" />
                    <col className="w-[21.9780%]" />
                    <col className="w-[21.9780%]" />
                    <col className="w-[21.9780%]" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-5 text-left text-xl md:text-2xl font-bold border-r border-b border-gray-300">
                        {messages.comparisonTable.columns.feature}
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-xl md:text-2xl font-bold border-r border-b border-gray-300">
                        {messages.comparisonTable.columns.sophie}
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-xl md:text-2xl font-bold border-r border-b border-gray-300">
                        {messages.comparisonTable.columns.apps}
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-xl md:text-2xl font-bold border-b border-gray-300">
                        {messages.comparisonTable.columns.tutor}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, i) => {
                      const Icon = featureIcons[i % featureIcons.length];
                      const isStrongValue =
                        feature.sophie.includes("Unlimited") ||
                        feature.sophie === "Permanent" ||
                        feature.sophie === "Zero";

                      return (
                        <tr key={i} className="[&:not(:last-child)>td]:border-b [&>td]:border-gray-300">
                          <td className="px-6 py-5 align-middle text-gray-700 border-r">
                            <div className="flex items-center gap-3 md:gap-4">
                              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-gray-700">
                                <Icon size={17} strokeWidth={2.2} />
                              </span>
                              <span className="text-sm md:text-xl md:leading-[1.2]">{feature.name}</span>
                            </div>
                          </td>

                          <td className="px-6 py-5 align-middle border-r">
                            <div className="flex items-center justify-center text-gray-700 font-normal">
                              <span className="inline-flex items-center gap-2 text-sm md:text-2xl md:leading-[1.2]">
                                {isStrongValue ? (
                                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border border-gray-200">
                                    <RainbowIcon icon={Check} size={14} strokeWidth={3.5} />
                                  </span>
                                ) : null}
                                {feature.sophie}
                              </span>
                            </div>
                          </td>

                          <td className="px-6 py-5 align-middle border-r">
                            <div className="flex items-center justify-center text-gray-700 font-normal text-sm md:text-2xl md:leading-[1.2]">
                              {feature.apps}
                            </div>
                          </td>

                          <td className="px-6 py-5 align-middle">
                            <div className="flex items-center justify-center text-gray-700 font-normal text-sm md:text-2xl md:leading-[1.2]">
                              {feature.tutor}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div
                  className="pointer-events-none absolute inset-y-0 left-[34.0659%] w-[21.9780%] z-30 border-2 border-transparent"
                  style={{ borderImage: `${rainbowBorder} 1` }}
                />
              </div>
            </div>
          </div>

          <div className="p-6 text-center text-sm text-gray-700 border-t border-gray-300 flex items-center justify-center gap-2">
            <span>{messages.comparisonTable.footer}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
