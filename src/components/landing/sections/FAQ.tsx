"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDemo } from "@/context/DemoContext";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";

interface FAQItemProps {
  faq: {
    value: string;
    question: string;
    answer: string | React.ReactNode;
  };
  index: number;
  currentLanguage: any;
}

const FAQCard = ({ faq, index, currentLanguage }: FAQItemProps) => {
  return (
    <div
      className="mb-4"
    >
      <AccordionItem
        value={faq.value}
        className="group border border-gray-100 bg-white rounded-2xl transition-all duration-300 hover:border-gray-200 overflow-hidden"
      >
        <AccordionTrigger
          className="flex sm:p-6 p-4 text-left hover:no-underline transition-colors group-data-[state=open]:bg-gray-50 [&>svg]:hidden focus:outline-none"
        >
          <div className="flex items-center justify-between w-full pr-4">
            <span className="text-lg md:text-xl text-black ">
              {faq.question}
            </span>
            <div className="relative w-6 h-6 shrink-0 ml-4">
              <Plus className="absolute inset-0 w-6 h-6 text-gray-400 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90 transition-all duration-300" />
              <Minus className="absolute inset-0 w-6 h-6 text-black opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0 transition-all duration-300" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="sm:p-6 p-4">
          <div className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl font-light">
            {faq.answer}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

const FAQ = () => {
  const { currentLanguage } = useDemo();
  const whatsappUrl = "https://wa.me/971505814567";

  const faqs = [
    {
      value: "item-1",
      question: `Does Sophie teach different ${currentLanguage.name} dialects?`,
      answer: `Yes! You can toggle between different regional accents and dialects of ${currentLanguage.name} in your settings. Sophie adapts her vocabulary, common expressions, and pronunciation to match the specific region you're focusing on.`,
    },
    {
      value: "item-2",
      question: "I'm a complete beginner. Is this too hard?",
      answer:
        "Not at all. Sophie is designed to adapt to your specific level. If a conversation is too complex, you can simply ask her to slow down, use simpler words, or even provide instant translations to help you follow along.",
    },
    {
      value: "item-3",
      question: "How does Sophie help with complex grammar?",
      answer: `Sophie uses a "context-first" approach. Instead of drills, she places you in real-world scenarios that naturally require complex ${currentLanguage.name} grammar. If you make a mistake, she provides gentle, constructive feedback in real-time.`,
    },
    {
      value: "item-4",
      question: "Which platforms is Sophie available on?",
      answer:
        "Sophie is currently available as a web application and a mobile app for both iOS and Android. Your progress, custom vocabulary lists, and conversation history are synced across all your devices.",
    },
    {
      value: "item-5",
      question: "Can I practice specific conversation topics?",
      answer:
        "Definitely. You can choose from dozens of preset scenarios—like ordering at a cafe, a business meeting, or a first date—or create your own custom topics. Sophie can handle almost any conversation you want to have.",
    },
    {
      value: "item-6",
      question: "How many languages can Sophie speak?",
      answer:
        "Sophie currently supports 20 major world languages, and we're adding more every month. Each language is backed by native-level AI models to ensure the most accurate and natural learning experience possible.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about mastering {currentLanguage.name} with your AI tutor.
          </p>
        </div>

        {/* FAQ Accordion - Centered Single Column */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FAQCard
                key={faq.value}
                faq={faq}
                index={index}
                currentLanguage={currentLanguage}
              />
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-3xl mx-auto mt-10">
          <div
            className="text-center p-12 md:p-16 rounded-3xl bg-gray-50 border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-4 text-black">Still have questions?</h3>
            <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Our team is here to help you get the most out of your learning journey.
            </p>
            <div
              className="inline-block group"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform active:scale-95"
              >
                <RainbowBorder
                  borderRadius={9999}
                  borderWidth={2}
                  innerClassName="relative bg-white w-full h-14 px-12 py-3 flex items-center justify-center transition-colors overflow-hidden rounded-full"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">
                    Get in Touch
                  </span>
                </RainbowBorder>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
