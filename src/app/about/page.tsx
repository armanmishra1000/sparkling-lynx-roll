import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import RainbowWaveBackground from "@/components/landing/RainbowWaveBackground";
import { Heart, Users, MessageCircle, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Sophie.ai - A Native Speaker in Your Pocket",
  description:
    "SpeakWithSophie.ai was born from one simple idea: real fluency comes from real conversation, not memorization. Meet the team behind Sophie.ai.",
  openGraph: {
    title: "About Sophie.ai",
    description:
      "The story behind the AI language coach that helps you speak boldly, speak often, and speak naturally.",
    url: "https://sophie.ai/about",
    siteName: "Sophie.ai",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl pt-48 pb-20 z-10 relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-3 h-3" /> Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF]">
              Sophie.ai
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A native speaker in your pocket
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-gray-50 shadow-xl space-y-12">
          {/* Origin Story */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-600" />
              </div>
              The Beginning
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SpeakWithSophie.ai was born from one simple idea: real fluency
              comes from real conversation, not memorization. Traditional
              language learning tools often trap learners in lists of words and
              isolated grammar drills — but we knew there had to be a better
              way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Sophie.ai, we believe the fastest path to confidence in another
              language is daily speaking practice with intelligent feedback that
              feels natural and human-like. Sophie isn&apos;t just an AI —
              she&apos;s a speaking partner that listens, adapts, and helps you
              practice real-world conversations from day one.
            </p>
          </section>

          {/* Our Approach */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-purple-600" />
              </div>
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our approach is built around immersive dialogue, instant
              correction, and personalized learning paths. Instead of repeating
              lists of vocabulary, you talk, respond, and grow your skills
              through meaningful interaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over time, Sophie.ai remembers your progress, understands your
              unique patterns, and tailors practice sessions to help you improve
              faster.
            </p>
          </section>

          {/* Founders */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              Our Founders
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We Luis Alberto Olguin Reyes and Ernesto Olguin Roman shape this
              platform with the belief that anyone should be able to speak
              confidently in a new language — without fear, without judgment,
              and without boring drills. We built Sophie.ai to empower learners
              everywhere to speak boldly, speak often, and speak naturally.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-amber-600" />
              </div>
              For You
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you&apos;re preparing for travel, work, study, or just
              want real conversational fluency, Sophie.ai is here to practice
              with you — anytime, anywhere.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl border border-white/60">
              <p className="text-lg md:text-2xl font-bold text-center text-gray-900">
                Welcome to Sophie.ai — a native speaker in your pocket.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
