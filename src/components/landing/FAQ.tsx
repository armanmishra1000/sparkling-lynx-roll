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
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Common questions from {currentLanguage.name} learners.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="border-b border-gray-100 px-0 pb-4"
          >
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
              Does this teach different {currentLanguage.name} dialects?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Both! You can toggle between different regional dialects of{" "}
              {currentLanguage.name} in settings. Sophie adjusts her vocabulary
              and accent accordingly to match the region you're focusing on.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-b border-gray-100 px-0 pb-4"
          >
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
              I'm a complete beginner. Is this too hard?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Not at all. You can tell Sophie your level and she will
              adapt to you. To complex? tell her. To fast? Tell her to slow
              down. To advance? Tell her ease. Didn't get it? ask her to
              translate.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-b border-gray-100 px-0 pb-4"
          >
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
              Does it help with complex grammar?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Yes. This is our superpower. Instead of memorizing rules, Sophie
              creates scenarios that <em>force</em> you to use complex{" "}
              {currentLanguage.name} grammar naturally, then corrects you if you
              slip up.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-b border-gray-100 px-0 pb-4"
          >
            <AccordionTrigger className="text-lg font-bold hover:no-underline text-gray-900 data-[state=open]:text-black hover:text-black transition-colors py-4">
              How many languages can SOPHIE speak?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed pt-2 pb-4">
              Sophie can currently Speak <strong> 20 languages </strong>. But
              she is currently learning more for you
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
