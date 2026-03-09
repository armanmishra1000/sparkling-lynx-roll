"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowText } from "@/components/ui/RainbowText";
import { ArrowRight } from "lucide-react";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { useLanguage } from "@/context/LanguageContext";
import { getBrandTerms } from "@/lib/i18n/brand";

const listVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HowItWorks = () => {
  const { messages, locale } = useLanguage();
  const brand = getBrandTerms(locale);
  const steps = messages.howItWorks.steps;

  return (
    <section id="how-it-works" className="relative overflow-hidden pb-16">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {messages.howItWorks.title}
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600">
            {messages.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2rem] border p-5 shadow-sm backdrop-blur-sm md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <motion.div
                  className="relative isolate overflow-hidden rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/SOPHIE no background.png"
                    alt={`${brand.ai} Mascot`}
                    width={600}
                    height={800}
                    className="relative z-10 h-[470px] w-full object-contain lg:h-[520px]"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative lg:col-span-7"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <ol className="space-y-5">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className={`group relative lg:w-[88%] ${index === 1 ? "lg:ml-auto" : "lg:mr-auto"}`}
                  >
                    <div className="rounded-2xl bg-gradient-to-br from-sky-200/60 via-slate-100 to-amber-100 p-[1px] lg:mx-8">
                      <div className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-[0_24px_65px_-45px_rgba(15,23,42,0.6)] transition-all duration-300 group-hover:shadow-[0_28px_72px_-45px_rgba(15,23,42,0.7)] md:px-7 md:py-7">
                        <div className="pointer-events-none absolute right-4 top-4 text-6xl font-semibold text-slate-100">
                          {step.step.replace("Step ", "")}
                        </div>
                        <span className="relative mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-bold uppercase tracking-wider">
                          <RainbowText text={step.step} />
                        </span>
                        <h3 className="relative mb-4 text-2xl font-bold text-slate-950 md:text-3xl">
                          {step.title}
                        </h3>
                        <p className="relative max-w-lg text-lg leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.button className="lg:pl-14 pt-6 group inline-block transition-transform active:scale-95" variants={itemVariants}>
                <RainbowBorder
                  borderRadius={9999}
                  borderWidth={2}
                  innerClassName="relative bg-white h-14 px-12 py-3 flex items-center justify-center overflow-hidden"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center font-medium text-black">
                    {messages.howItWorks.startTalking}
                    <ArrowRight className="ml-2 w-5 h-5 mt-0.5" />
                  </span>
                </RainbowBorder>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
