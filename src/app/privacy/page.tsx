import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import RainbowWaveBackground from "@/components/landing/RainbowWaveBackground";
import { Shield, Lock, Eye, Server } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />
      
      <div className="container mx-auto px-6 max-w-4xl py-32 relative z-10">
        <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                <Shield className="w-3 h-3" /> Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl space-y-12">
          
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-gray-600" />
                </div>
                1. The Data We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe in minimal data collection. Sophie.ai only collects what is strictly necessary to function as your language coach.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                    { label: "Identity Data", desc: "Name & Login credentials" },
                    { label: "Voice Data", desc: "Audio for processing (transient)" },
                    { label: "Progress Data", desc: "Vocabulary & grammar stats" },
                    { label: "Technical Data", desc: "Device info for stability" }
                ].map((item, i) => (
                    <li key={i} className="bg-white/50 border border-gray-100 p-4 rounded-xl">
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
                2. How We Use Voice Data
            </h2>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-blue-900">
                <p className="leading-relaxed">
                    <strong>Important:</strong> Your voice data is used exclusively for providing real-time feedback. We do <u>not</u> sell your voice data to third parties. We do <u>not</u> use your voice to train public voice clones.
                </p>
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-gray-600" />
                </div>
                3. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We employ banking-grade encryption (AES-256) for all data at rest and TLS 1.3 for data in transit. Your conversation transcripts are stored in isolated containers and are only accessible by you.
            </p>
          </section>

           <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">4. Contact Us</h2>
            <p className="text-gray-600">
              For privacy concerns, Data Protection Officer contact, or GDPR requests, please email <a href="mailto:privacy@sophie.ai" className="text-black font-bold underline decoration-2 decoration-gray-200 hover:decoration-[#FF0080] transition-all">privacy@sophie.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}