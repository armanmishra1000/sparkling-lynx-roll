import React from "react";
import type { Metadata } from "next";
import { Eye, Lock, Server, Shield, Trash2, UserCheck } from "lucide-react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestLocale, getRequestMessages } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = (await getRequestMessages()).privacyPage;
  return {
    title: `${pageCopy.title} | ${brand.dotAi}`,
    description: pageCopy.useDataIntro
  };
};

export default async function PrivacyPage() {
  const pageCopy = (await getRequestMessages()).privacyPage;

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl py-32 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Shield className="w-3 h-3" /> {pageCopy.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{pageCopy.title}</h1>
          <p className="text-gray-500">{pageCopy.lastUpdated}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl space-y-12">
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.infoCollectTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{pageCopy.infoCollectIntro}</p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
              {pageCopy.infoItems.map((item) => (
                <li key={item.label} className="bg-white/50 border border-gray-100 p-4 rounded-xl">
                  <div className="font-bold text-gray-900">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Server className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.useDataTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{pageCopy.useDataIntro}</p>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-blue-900">
              <p className="leading-relaxed">
                <strong>{pageCopy.voiceDataLabel}</strong> {pageCopy.voiceDataBeforeFirstNot}
                <u>{pageCopy.voiceDataNotWord}</u>
                {pageCopy.voiceDataAfterFirstNot}
                <u>{pageCopy.voiceDataNotWord}</u>
                {pageCopy.voiceDataAfterSecondNot}
              </p>
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.dataSecurityTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.dataSecurityBody}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.rightsTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {pageCopy.rightsBeforeEmail}
              <a
                href="mailto:support@speakwithsophie.ai"
                className="text-black font-bold underline decoration-2 decoration-gray-200 hover:decoration-[#FF0080] transition-all"
              >
                support@speakwithsophie.ai
              </a>
              {pageCopy.rightsAfterEmail}
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-gray-600" />
              </div>
              {pageCopy.retentionTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.retentionBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">{pageCopy.thirdPartyTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.thirdPartyBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">{pageCopy.childrenTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.childrenBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">{pageCopy.changesTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.changesBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">{pageCopy.contactTitle}</h2>
            <p className="text-gray-600">
              {pageCopy.contactBeforeEmail}
              <a
                href="mailto:support@speakwithsophie.ai"
                className="text-black font-bold underline decoration-2 decoration-gray-200 hover:decoration-[#FF0080] transition-all"
              >
                support@speakwithsophie.ai
              </a>
              {pageCopy.contactAfterEmail}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
