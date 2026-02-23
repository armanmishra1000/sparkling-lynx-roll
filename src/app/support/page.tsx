import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import RainbowWaveBackground from "@/components/landing/RainbowWaveBackground";
import { Headphones, Mail, MessageCircle, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Support | Speak With Sophie",
  description: "Get help with Speak With Sophie. Contact our support team, browse FAQs, and find resources to make the most of your language learning experience.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />

      <div className="container mx-auto px-6 max-w-4xl py-32 relative z-10">
        <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
                <Headphones className="w-3 h-3" /> Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How Can We Help?</h1>
            <p className="text-gray-500 max-w-lg mx-auto">We&apos;re here to help you get the most out of your language learning journey with Sophie.</p>
        </div>

        <div className="space-y-8">
          {/* Contact Card */}
          <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl">
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600" />
                </div>
                Contact Us
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href="mailto:support@speakwithsophie.ai" className="group block bg-white/50 border border-gray-100 p-6 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Email Support</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">For general inquiries, bug reports, and feature requests.</p>
                <p className="text-sm font-bold text-black">support@speakwithsophie.ai</p>
              </a>

              <a href="mailto:support@speakwithsophie.ai?subject=Account%20Issue" className="group block bg-white/50 border border-gray-100 p-6 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Account Help</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">Issues with login, subscription, or account settings.</p>
                <p className="text-sm font-bold text-black">support@speakwithsophie.ai</p>
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <Clock className="w-5 h-5 text-gray-400 shrink-0" />
              <p className="text-sm text-gray-500">We typically respond within 24 hours. For urgent issues, please include &quot;URGENT&quot; in your email subject line.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl">
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 text-gray-900">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                </div>
                Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How do I start a conversation with Sophie?",
                  a: "Open the app, go to the Talk tab, select the language you want to learn, and hold the microphone button to start speaking. Sophie will respond in real-time."
                },
                {
                  q: "Which languages does Sophie support?",
                  a: "Sophie currently supports English, Spanish, French, German, Japanese, Chinese (Mandarin), and Hindi — with more languages coming soon."
                },
                {
                  q: "Is my voice data stored?",
                  a: "Your voice is processed in real-time to provide feedback and is not permanently stored. See our Privacy Policy for full details."
                },
                {
                  q: "How do I delete my account?",
                  a: "You can request account deletion by emailing support@speakwithsophie.ai. All your data will be permanently removed within 30 days."
                },
                {
                  q: "Can I use Sophie offline?",
                  a: "Sophie requires an internet connection to process AI conversations and provide real-time feedback."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/50 border border-gray-100 p-6 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center space-y-4 pt-4">
            <p className="text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-black transition-colors underline">Privacy Policy</Link>
              {" · "}
              <Link href="/terms" className="hover:text-black transition-colors underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
