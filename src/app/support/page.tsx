import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Clock, Headphones, Mail, MessageCircle } from "lucide-react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestLocale, getRequestMessages } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = (await getRequestMessages()).supportPage;
  return {
    title: `${pageCopy.title} | ${brand.dotAi}`,
    description: pageCopy.subtitle
  };
};

export default async function SupportPage() {
  const pageCopy = (await getRequestMessages()).supportPage;
  const whatsappUrl = "https://wa.me/971505814567";

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl py-32 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Headphones className="w-3 h-3" /> {pageCopy.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{pageCopy.title}</h1>
          <p className="text-gray-500 max-w-lg mx-auto">{pageCopy.subtitle}</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl">
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.contactUs}
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:support@speakwithsophie.ai"
                className="group block bg-white/50 border border-gray-100 p-6 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{pageCopy.emailSupport}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{pageCopy.emailSupportDesc}</p>
                <p className="text-sm font-bold text-black">support@speakwithsophie.ai</p>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/50 border border-gray-100 p-6 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{pageCopy.accountHelp}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{pageCopy.accountHelpDesc}</p>
                <p className="text-sm font-bold text-black">+971 50 581 4567</p>
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <Clock className="w-5 h-5 text-gray-400 shrink-0" />
              <p className="text-sm text-gray-500">{pageCopy.responseTime}</p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl">
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.faqTitle}
            </h2>

            <div className="space-y-6">
              {pageCopy.faqs.map((item) => (
                <div key={item.q} className="bg-white/50 border border-gray-100 p-6 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4 pt-4">
            <p className="text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-black transition-colors underline">
                {pageCopy.privacyPolicy}
              </Link>
              {" | "}
              <Link href="/terms" className="hover:text-black transition-colors underline">
                {pageCopy.termsOfService}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
