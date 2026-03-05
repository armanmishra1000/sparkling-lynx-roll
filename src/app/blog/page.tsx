import React from "react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRequestMessages } from "@/lib/i18n/server";

const POST_IMAGES: Record<string, string> = {
  "why-you-are-still-translating": "bg-gradient-to-br from-pink-100 to-rose-100",
  "myth-of-language-gene": "bg-gradient-to-br from-blue-100 to-cyan-100",
  "mexican-vs-spanish-slang": "bg-gradient-to-br from-purple-100 to-violet-100",
  "how-sophie-uses-llms": "bg-gradient-to-br from-gray-100 to-gray-200"
};

export default async function BlogPage() {
  const pageCopy = (await getRequestMessages()).blogPage;

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <section className="pt-48 pb-24 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-gray-900 leading-[0.95]">
            {pageCopy.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF]">
              {pageCopy.titleLine2}
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">{pageCopy.subtitle}</p>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            {pageCopy.posts.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="group block">
                <article className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div
                    className={`h-64 ${POST_IMAGES[post.slug] ?? "bg-gradient-to-br from-gray-100 to-gray-200"} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                      <span className="text-[#FF0080]">{post.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#7B61FF] transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-8 flex-1">{post.excerpt}</p>

                    <div className="flex items-center text-sm font-bold text-black group-hover:translate-x-2 transition-transform">
                      {pageCopy.readArticle} <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" className="rounded-full px-8 h-12 border-gray-200 hover:bg-black hover:text-white transition-all">
              {pageCopy.loadMoreArticles}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

