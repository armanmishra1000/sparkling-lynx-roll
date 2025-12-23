"use client";

import { Star, Quote } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const { currentLanguage } = useDemo();

  const testimonials = [
    {
      quote: `I took 4 years of ${currentLanguage.name} in high school but couldn't order a taco. Sophie fixed my fear of speaking in 2 weeks.`,
      author: "James T.",
      role: "Traveler",
      gradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      quote: `Real-world context finally makes sense. Sophie explained it while we were roleplaying a scene in ${currentLanguage.nativeName}.`,
      author: "Sarah M.",
      role: "Expat",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      quote: "The accent correction is brutal but effective. I finally stopped sounding like a textbook and started sounding like a local.",
      author: "David K.",
      role: "Digital Nomad",
      gradient: "from-purple-500/10 to-violet-500/10"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Don&apos;t take our <br />
            <motion.span
              key={currentLanguage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              className="font-bold"
            >
              word for it.
            </motion.span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Subtle Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} rounded-3xl opacity-50`}></div>

              <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="mb-6 opacity-20">
                  <Quote className="w-10 h-10 text-black" />
                </div>

                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">&quot;{t.quote}&quot;</p>

                {/* user-profile */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100/50 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.author}</div>
                    <div className="text-sm text-gray-500 font-medium">{t.role}</div>
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