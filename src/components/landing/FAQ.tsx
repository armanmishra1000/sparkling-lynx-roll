"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about the product.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                What languages are available at launch?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              We are launching with <strong>Spanish, French, German, and English</strong>. Our model is language-agnostic, so we will be rolling out Italian, Portuguese, and Mandarin shortly after launch based on user voting.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                Is Sophie suitable for complete beginners?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Absolutely. Sophie detects your level in the first conversation. If you are a beginner, she will speak slowly, use simple vocabulary, and provide translations when you get stuck. It adapts to <em>you</em>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                How is this different from ChatGPT voice mode?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Generic LLMs forget you after the chat closes. Sophie builds a persistent <strong>Long-Term Memory</strong> of your grammar mistakes, vocabulary gaps, and interests. She proactively drills you on your weak spots over weeks, not just within one session.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                Is my voice data private?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Yes. We take privacy seriously. Your audio is processed for transcription and then immediately discarded unless you explicitly opt-in to data donation. We do not sell your voice data to third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;