import React from "react";
import {
  Brain,
  MessageCircle,
  Repeat,
  ShieldCheck,
  TrendingUp,
  Zap
} from "lucide-react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { getRequestMessages } from "@/lib/i18n/server";

export default async function MethodologyPage() {
  const pageCopy = (await getRequestMessages()).methodologyPage;
  const principles = [
    { icon: MessageCircle, color: "text-[#FF0080]", bg: "bg-[#FF0080]/10" },
    { icon: Repeat, color: "text-[#FF8C00]", bg: "bg-[#FF8C00]/10" },
    { icon: ShieldCheck, color: "text-[#40E0D0]", bg: "bg-[#40E0D0]/10" },
    { icon: Zap, color: "text-[#7B61FF]", bg: "bg-[#7B61FF]/10" }
  ].map((ui, index) => ({
    ...ui,
    title: pageCopy.principles[index]?.title ?? "",
    description: pageCopy.principles[index]?.description ?? ""
  }));

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      <RainbowWaveBackground />

      <section className="pt-48 pb-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-sm font-semibold text-gray-500 mb-8 shadow-sm">
            <Brain className="w-4 h-4" /> {pageCopy.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-gray-900 leading-[0.95]">
            {pageCopy.titlePrefix}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF]">
              {pageCopy.titleGradient}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">{pageCopy.subtitle}</p>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex gap-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${principle.bg} ${principle.color}`}>
                    <principle.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#7B61FF] transition-colors">{principle.title}</h3>
                    <p className="text-lg text-gray-500 leading-relaxed font-light">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7B61FF] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF0080] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <TrendingUp className="w-12 h-12 text-gray-500 mx-auto mb-8 opacity-50" />
          <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12">{pageCopy.quote}</p>
          <div className="inline-flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/10 mb-4 flex items-center justify-center font-bold text-lg">S</div>
            <div className="font-bold text-gray-400 uppercase tracking-widest text-sm">{pageCopy.quoteAuthor}</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
