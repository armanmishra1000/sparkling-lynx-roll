import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import RainbowWaveBackground from "@/components/landing/RainbowWaveBackground";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <RainbowWaveBackground />
      
      <div className="container mx-auto px-6 max-w-4xl py-32 relative z-10">
        <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-4">
                <FileText className="w-3 h-3" /> Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms of Service</h1>
            <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using Sophie.ai ("Service"), you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Usage Guidelines</h2>
             <div className="space-y-4">
                <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                        <h3 className="font-bold text-gray-900">Permitted Use</h3>
                        <p className="text-gray-600 text-sm">Personal language learning, educational purposes, and normal conversational practice.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                    <div>
                        <h3 className="font-bold text-gray-900">Prohibited Use</h3>
                        <p className="text-gray-600 text-sm">Automated scraping, reverse engineering the AI model, or using the service for harassment/hate speech.</p>
                    </div>
                </div>
             </div>
          </section>

           <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Subscriptions & Billing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sophie.ai offers Free and Paid tiers. Paid subscriptions are billed monthly or annually. You may cancel at any time, and access will continue until the end of your billing period.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-500 border border-gray-100">
                <strong>Refund Policy:</strong> We offer a 14-day money-back guarantee for first-time subscribers who are unsatisfied with the service.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content (excluding user-generated voice data), features, and functionality are the exclusive property of Sophie.ai.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Service.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}