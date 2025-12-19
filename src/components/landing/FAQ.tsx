"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDemo } from "@/context/DemoContext";

const FAQ = () => {
  const { currentLanguage } = useDemo();

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Common questions from {currentLanguage.name} learners.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                Does this teach different {currentLanguage.name} dialects?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Both! You can toggle between different regional dialects of {currentLanguage.name} in settings. Sophie adjusts her vocabulary and accent accordingly to match the region you're focusing on.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                I'm a complete beginner. Is this too hard?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Not at all. Sophie detects your level instantly. For beginners, she speaks slowly, uses simple grammar, and provides instant translations in {currentLanguage.name}. It's like having a very patient tutor.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                Does it help with complex grammar?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Yes. This is our superpower. Instead of memorizing rules, Sophie creates scenarios that <em>force</em> you to use complex {currentLanguage.name} grammar naturally, then corrects you if you slip up.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-100 px-0 pb-4">
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
                Can I use it for other languages?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Currently we are highlighting <strong>{currentLanguage.name}</strong>. Our system supports 20+ languages including French, German, and English, with deep scenario libraries for each.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;