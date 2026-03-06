import React from "react";
import type { Metadata } from "next";
import { AlertCircle, CheckCircle, FileText } from "lucide-react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestLocale, getRequestMessages } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = (await getRequestMessages()).termsPage;
  return {
    title: `${pageCopy.title} | ${brand.dotAi}`,
    description: pageCopy.acceptanceBody
  };
};

export default async function TermsPage() {
  const pageCopy = (await getRequestMessages()).termsPage;

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl py-32 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3 h-3" /> {pageCopy.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{pageCopy.title}</h1>
          <p className="text-gray-500">
            {pageCopy.lastUpdatedPrefix} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{pageCopy.acceptanceTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.acceptanceBody}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{pageCopy.usageTitle}</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{pageCopy.permittedTitle}</h3>
                  <p className="text-gray-600 text-sm">{pageCopy.permittedBody}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{pageCopy.prohibitedTitle}</h3>
                  <p className="text-gray-600 text-sm">{pageCopy.prohibitedBody}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{pageCopy.subscriptionsTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{pageCopy.subscriptionsBody}</p>
            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-500 border border-gray-100">
              <strong>{pageCopy.refundLabel}</strong> {pageCopy.refundBody}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{pageCopy.ipTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.ipBody}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{pageCopy.terminationTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{pageCopy.terminationBody}</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
