import React from "react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import ArticlePlayer from "@/components/blog/ArticlePlayer";
import Link from "next/link";
import { ArrowLeft, Share2, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />
      
      {/* Back Link */}
      <div className="container mx-auto px-6 max-w-4xl pt-32 pb-8 relative z-10">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-black transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Log
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 max-w-4xl pb-32 relative z-10">
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span className="text-[#FF0080]">Methodology</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 24, 2023</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                Why You're Still <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#7B61FF]">
                    Translating in Your Head.
                </span>
            </h1>

            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=SophieTeam" alt="Author" />
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">Dr. Elena Rostova</div>
                        <div className="text-sm text-gray-500">Head of Linguistics</div>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 className="w-5 h-5 text-gray-500" />
                </Button>
            </div>

            {/* Audio Player Injection */}
            <ArticlePlayer />
        </header>

        {/* Content Body - Prose Styling */}
        <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#FF0080] prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-xl">
            <p className="lead text-xl text-gray-600 leading-relaxed font-light mb-10">
                You know the feeling. Someone asks you a simple question in Spanish, and your brain instantly freezes. You hear the words, translate them to English, formulate a response in English, translate it back to Spanish, check the grammar tables in your mind's eye, and finally—five seconds too late—you speak.
            </p>
            
            <h3>The Cognitive Bottleneck</h3>
            <p>
                This process is called "Translation Dependence," and it's the number one killer of fluency. Traditional language education (the kind you likely had in high school) actually <em>trains</em> this bad habit by focusing on vocabulary lists and grammar rules rather than context.
            </p>
            <p>
                When you learn that <em>"Gato" = "Cat"</em>, you are creating a neural dependency. You cannot access the concept of the animal without first passing through your native language.
            </p>

            <div className="my-12 bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h4 className="text-blue-900 mt-0 mb-4">The Sophie Approach</h4>
                <p className="mb-0 text-blue-800">
                    We use the <strong>Direct Method</strong>. We show you an image of a cat or place you in a scenario with a cat, and force you to interact with it directly in Spanish. No English bridge. No translation buffer.
                </p>
            </div>

            <h3>Neuroplasticity and Stress</h3>
            <p>
                Fear is the other factor. The amygdala—the brain's fear center—activates when we feel social pressure. In a classroom or real-world setting, the fear of looking stupid literally shuts down the language centers of the brain (Broca's area).
            </p>
            <p>
                This is why AI is the perfect practice partner. Sophie never judges. She never gets impatient. She simply corrects you and moves on. This lowers the "Affective Filter" (a concept by linguist Stephen Krashen), allowing your brain to take risks.
            </p>
            
            <blockquote>
                "Fluency isn't about knowing every word. It's about the speed of retrieval. And translation is the slowest retrieval method possible."
            </blockquote>

            <h3>Breaking the Habit</h3>
            <p>
                To break translation dependence, you must practice <strong>Production</strong>, not just reception. You need to speak. A lot.
            </p>
            <ul>
                <li><strong>Stop using subtitles</strong> in your native language.</li>
                <li><strong>Label your environment</strong> physically or mentally in your target language.</li>
                <li><strong>Use Sophie's "Hands-Free" mode</strong> to force audio-only processing, mimicking real conversation.</li>
            </ul>
        </div>
      </article>

      {/* CTA Footer for Blog */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7B61FF] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to stop translating?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
                Join 10,000+ students breaking the translation barrier today.
            </p>
            <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg shadow-xl hover:scale-105 transition-all">
                Get Early Access
            </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}