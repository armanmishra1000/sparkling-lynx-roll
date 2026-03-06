import React from "react";
import type { Metadata } from "next";
import { Heart, MessageCircle, Target, Users } from "lucide-react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestLocale, getRequestMessages } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = (await getRequestMessages()).aboutPage;
  return {
    title: `${pageCopy.titlePrefix} | ${brand.dotAi}`,
    description: pageCopy.subtitle,
    openGraph: {
      title: `${pageCopy.titlePrefix} ${brand.dotAi}`,
      description: pageCopy.subtitle,
      url: "https://sophie.ai/about",
      siteName: brand.dotAi,
      type: "website"
    }
  };
};

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = (await getRequestMessages()).aboutPage;

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl pt-48 pb-20 z-10 relative">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-3 h-3" /> {pageCopy.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {pageCopy.titlePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF]">
              {brand.dotAi}
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{pageCopy.subtitle}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-gray-50 shadow-xl space-y-12">
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-600" />
              </div>
              {pageCopy.sectionBeginning}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{pageCopy.beginningP1}</p>
            <p className="text-gray-600 leading-relaxed">{pageCopy.beginningP2}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-purple-600" />
              </div>
              {pageCopy.sectionApproach}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{pageCopy.approachP1}</p>
            <p className="text-gray-600 leading-relaxed">{pageCopy.approachP2}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              {pageCopy.sectionFounders}
            </h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.foundersP1}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-amber-600" />
              </div>
              {pageCopy.sectionForYou}
            </h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.forYouP1}</p>
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl border border-white/60">
              <p className="text-lg md:text-2xl font-bold text-center text-gray-900">{pageCopy.closingBanner}</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
