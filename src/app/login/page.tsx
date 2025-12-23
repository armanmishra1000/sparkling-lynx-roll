import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Form */}
      <div className="flex flex-col p-8 lg:p-12 justify-between bg-white relative z-10">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-black transition-colors mb-8 w-fit group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <div className="flex-1 flex flex-col justify-center items-center w-full max-w-md mx-auto">
            <LoginForm />
        </div>

        <div className="mt-8 text-center lg:text-left text-xs text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Sophie AI Inc.
        </div>
      </div>

      {/* Right: Visual */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 relative overflow-hidden bg-black text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7B61FF] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF0080] rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>
            {/* Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-lg">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF0080] to-[#7B61FF] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <div className="font-bold text-lg">Daily Progress</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Spanish • Advanced</div>
                    </div>
                </div>
                
                <div className="space-y-4 mb-8">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[75%] bg-white rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Today's Goal</span>
                        <span className="text-white font-bold">15 / 20 mins</span>
                    </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <p className="text-lg font-medium leading-relaxed">
                        "Sophie pushed me to speak from Day 1. Its Incredibly seamingless, natural & effective."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div className="text-sm font-bold text-gray-300">Alex Chen</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}