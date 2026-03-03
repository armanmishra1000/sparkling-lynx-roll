import React from "react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { Shield, Lock, Eye, Server, UserCheck, Trash2 } from "lucide-react";

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
            <p className="text-gray-500">Last updated: January 13, 2026</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl space-y-12">

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-gray-600" />
                </div>
                1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information to provide better services to all our users. This includes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                    { label: "Account Data", desc: "Name, email address, and preferred languages" },
                    { label: "Voice Data", desc: "Audio processed in real-time for speaking practice (transient)" },
                    { label: "Learning Progress", desc: "Vocabulary, grammar stats, and session history" },
                    { label: "Technical Data", desc: "Device info and usage analytics for app stability" }
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
                2. How We Use Your Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your data is used to personalize your learning experience, track your progress, and improve our AI&apos;s accuracy. We do not sell your personal data to third parties.
            </p>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-blue-900">
                <p className="leading-relaxed">
                    <strong>Voice Data:</strong> Your voice data is used exclusively for providing real-time speaking feedback. We do <u>not</u> sell your voice data. We do <u>not</u> use your voice recordings to train public AI models. Conversations and inputs are processed to generate AI responses and may be used in an anonymized form to improve the language learning experience.
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
              We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. All data in transit is encrypted via TLS, and data at rest is encrypted using AES-256. Your conversation transcripts are stored in isolated containers and are only accessible by you.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-gray-600" />
                </div>
                4. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct, or delete your personal information at any time through the app&apos;s account settings or by contacting our support team at <a href="mailto:support@speakwithsophie.ai" className="text-black font-bold underline decoration-2 decoration-gray-200 hover:decoration-[#FF0080] transition-all">support@speakwithsophie.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-gray-600" />
                </div>
                5. Data Retention & Deletion
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal data only for as long as necessary to provide our services. You may request deletion of your account and all associated data at any time by contacting us. Upon account deletion, your data will be permanently removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">6. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              We use third-party services including Supabase (authentication and database), Google Gemini (AI language processing), and analytics tools to operate the app. These services process data in accordance with their own privacy policies and are bound by data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">7. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Speak With Sophie is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us so we can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">8. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@speakwithsophie.ai" className="text-black font-bold underline decoration-2 decoration-gray-200 hover:decoration-[#FF0080] transition-all">support@speakwithsophie.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
