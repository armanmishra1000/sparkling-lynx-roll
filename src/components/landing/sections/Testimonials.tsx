"use client";

import { Star, Quote } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

const Testimonials = () => {
  const { currentLanguage } = useDemo();

  const testimonials = [
    {
      quote: `I took 4 years of ${currentLanguage.name} in high school but couldn't order a taco. Sophie fixed my fear of speaking in 2 weeks.`,
      author: "James T.",
      role: "Traveler",
    },
    {
      quote: `Real-world context finally makes sense. Sophie explained it while we were roleplaying a scene in ${currentLanguage.nativeName}.`,
      author: "Sarah M.",
      role: "Expat",
    },
    {
      quote: "The accent correction is brutal but effective. I finally stopped sounding like a textbook and started sounding like a local.",
      author: "David K.",
      role: "Digital Nomad",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Don&apos;t take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-gray-50 p-8 rounded-3xl shadow-sm flex flex-col h-full"
            >
              <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="mb-6 opacity-50">
                  <Quote className="w-10 h-10 text-black" />
                </div>

                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-8 text-black font-light ">&quot;{t.quote}&quot;</p>

                {/* user-profile */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm text-black">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-black">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;