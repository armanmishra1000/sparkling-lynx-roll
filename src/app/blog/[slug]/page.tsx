import React from "react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import ArticlePlayer from "@/components/blog/ArticlePlayer";
import Link from "next/link";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRequestMessages } from "@/lib/i18n/server";

export default async function BlogPostPage() {
  const pageCopy = (await getRequestMessages()).blogPostPage;

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl pt-32 pb-8 relative z-10">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-black transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> {pageCopy.backToLog}
        </Link>
      </div>

      <article className="container mx-auto px-6 max-w-4xl pb-32 relative z-10">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span className="text-[#FF0080]">{pageCopy.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {pageCopy.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {pageCopy.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
            {pageCopy.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#7B61FF]">
              {pageCopy.titleLine2}
            </span>
          </h1>

          <div className="flex items-center justify-between border-b border-gray-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=SophieTeam" alt="Author" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{pageCopy.authorName}</div>
                <div className="text-sm text-gray-500">{pageCopy.authorRole}</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="w-5 h-5 text-gray-500" />
            </Button>
          </div>

          <ArticlePlayer />
        </header>

        <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#FF0080] prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-xl">
          <p className="lead text-xl text-gray-600 leading-relaxed font-light mb-10">{pageCopy.lead}</p>

          <h3>{pageCopy.sectionCognitiveTitle}</h3>
          <p>{pageCopy.sectionCognitiveP1}</p>
          <p>{pageCopy.sectionCognitiveP2}</p>

          <div className="my-12 bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h4 className="text-blue-900 mt-0 mb-4">{pageCopy.approachTitle}</h4>
            <p className="mb-0 text-blue-800">{pageCopy.approachBody}</p>
          </div>

          <h3>{pageCopy.sectionNeuroTitle}</h3>
          <p>{pageCopy.sectionNeuroP1}</p>
          <p>{pageCopy.sectionNeuroP2}</p>

          <blockquote>{pageCopy.quote}</blockquote>

          <h3>{pageCopy.sectionBreakingTitle}</h3>
          <p>{pageCopy.sectionBreakingP1}</p>
          <ul>
            {pageCopy.breakingList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </article>

      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7B61FF] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{pageCopy.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">{pageCopy.ctaSubtitle}</p>
          <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg shadow-xl hover:scale-105 transition-all">
            {pageCopy.ctaButton}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

