"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupModal from "./SignupModal";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-gray-50/80 to-transparent -z-10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                Invest in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF]">voice.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Simple, transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </motion.div>
        </div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start"
        >
            {/* Free Tier */}
            <motion.div variants={item} className="group relative bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Starter</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold tracking-tight">$0</span>
                    <span className="text-gray-400 font-medium">/ forever</span>
                </div>
                <p className="text-gray-500 text-sm mb-8">Perfect for getting a feel for the AI.</p>
                <ul className="space-y-4 mb-8">
                    {[
                        "10 mins/day speaking",
                        "Basic grammar corrections",
                        "Limited scenario access"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-gray-600" /></div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <SignupModal triggerLocation="pricing_free">
                    <Button variant="outline" className="w-full rounded-xl h-12 border-gray-200 font-bold hover:bg-gray-50 hover:text-black hover:border-black transition-colors">Join Waitlist</Button>
                </SignupModal>
            </motion.div>

            {/* Plus Tier - Highlighted */}
            <motion.div variants={item} className="relative bg-black text-white rounded-[2rem] p-1 shadow-2xl transform md:-translate-y-6">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-[2rem]"></div>
                
                <div className="relative bg-[#0A0A0A] rounded-[1.8rem] p-8 h-full flex flex-col">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF] rounded-t-[1.8rem] opacity-80"></div>
                    
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            Plus <Sparkles className="w-4 h-4 text-[#FFD700] fill-current" />
                        </h3>
                        <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-5xl font-bold tracking-tight">$12</span>
                        <span className="text-gray-400 font-medium">/ month</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-8">For serious learners who want fluency fast.</p>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            "Unlimited speaking time",
                            "Full detailed feedback reports",
                            "Tutor Mode (Ask anything)",
                            "All Roleplay scenarios",
                            "Priority support"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center space-x-3 text-sm font-medium text-gray-200">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF0080] to-[#7B61FF] flex items-center justify-center shrink-0 text-white"><Check className="w-3 h-3" /></div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <SignupModal triggerLocation="pricing_plus">
                        <Button className="w-full rounded-xl h-14 bg-white text-black hover:bg-gray-200 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow">Start Free Trial</Button>
                    </SignupModal>
                </div>
            </motion.div>

            {/* Pro Tier */}
            <motion.div variants={item} className="group relative bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Pro</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold tracking-tight">$29</span>
                    <span className="text-gray-400 font-medium">/ month</span>
                </div>
                <p className="text-gray-500 text-sm mb-8">Advanced coaching for professionals.</p>
                <ul className="space-y-4 mb-8">
                    {[
                        "Everything in Plus",
                        "Advanced Accent Training",
                        "Business-specific Drills",
                        "Interview Prep Module"
                    ].map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 text-white"><Check className="w-3 h-3" /></div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <SignupModal triggerLocation="pricing_pro">
                    <Button variant="outline" className="w-full rounded-xl h-12 border-gray-200 font-bold hover:bg-gray-50 hover:text-black hover:border-black transition-colors">Join Waitlist</Button>
                </SignupModal>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;