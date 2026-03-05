"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useDemo } from "@/context/DemoContext";
import { Plus, Minus } from "lucide-react";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  value: string;
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQItem;
}

const FAQCard = ({ faq }: FAQItemProps) => {
  return (
    <div className="mb-4">
      <AccordionItem
        value={faq.value}
        className="group border border-gray-100 bg-white rounded-2xl transition-all duration-300 hover:border-gray-200 overflow-hidden"
      >
        <AccordionTrigger className="flex sm:p-6 p-4 text-left hover:no-underline transition-colors group-data-[state=open]:bg-gray-50 [&>svg]:hidden focus:outline-none">
          <div className="flex items-center justify-between w-full pr-4">
            <span className="text-lg md:text-xl text-black ">{faq.question}</span>
            <div className="relative w-6 h-6 shrink-0 ml-4">
              <Plus className="absolute inset-0 w-6 h-6 text-gray-400 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90 transition-all duration-300" />
              <Minus className="absolute inset-0 w-6 h-6 text-black opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0 transition-all duration-300" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="sm:p-6 p-4">
          <div className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl font-light">{faq.answer}</div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

const FAQ = () => {
  const { currentLanguage } = useDemo();
  const { messages } = useLanguage();
  const whatsappUrl = "https://wa.me/971505814567";
  const withLanguage = (text: string) => text.replaceAll("{language}", currentLanguage.name);

  const faqs: FAQItem[] = messages.faq.items.map((item, index) => ({
    value: `item-${index + 1}`,
    question: withLanguage(item.question),
    answer: withLanguage(item.answer)
  }));

  return (
    <section id="faq" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">{messages.faq.title}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{withLanguage(messages.faq.subtitle)}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <FAQCard key={faq.value} faq={faq} />
            ))}
          </Accordion>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="text-center p-12 md:p-16 rounded-3xl bg-gray-50 border border-gray-100">
            <h3 className="text-3xl font-bold mb-4 text-black">{messages.faq.stillHaveQuestions}</h3>
            <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">{messages.faq.stillHaveQuestionsBody}</p>
            <div className="inline-block group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform active:scale-95">
                <RainbowBorder
                  borderRadius={9999}
                  borderWidth={2}
                  innerClassName="relative bg-white w-full h-14 px-12 py-3 flex items-center justify-center transition-colors overflow-hidden rounded-full"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">{messages.faq.getInTouch}</span>
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
