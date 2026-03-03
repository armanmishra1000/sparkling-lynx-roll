import React from "react";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import { Brain, Repeat, MessageCircle, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";

export default function MethodologyPage() {
  const principles = [
    {
      icon: MessageCircle,
      title: "Active Production (i+1)",
      description: "Passive listening doesn't build fluency. Our engine forces you to construct sentences slightly above your current level, triggering rapid adaptation in the brain's language centers.",
      color: "text-[#FF0080]",
      bg: "bg-[#FF0080]/10"
    },
    {
      icon: Repeat,
      title: "Contextual Spaced Repetition",
      description: "We don't just repeat words. We repeat *patterns* within new contexts. If you struggle with the Spanish subjunctive, Sophie will weave it into a debate about politics, then a date scenario.",
      color: "text-[#FF8C00]",
      bg: "bg-[#FF8C00]/10"
    },
    {
      icon: ShieldCheck,
      title: "The Affective Filter",
      description: "Fear blocks learning. By simulating a safe, judgment-free environment with AI, we lower your cortisol levels, allowing your brain to take risks and retain information 3x faster.",
      color: "text-[#40E0D0]",
      bg: "bg-[#40E0D0]/10"
    },
    {
      icon: Zap,
      title: "Immediate Feedback Loop",
      description: "Neuroplasticity requires instant error correction. Sophie intervenes the moment a mistake happens, rewriting the neural pathway before the bad habit (fossilization) sets in.",
      color: "text-[#7B61FF]",
      bg: "bg-[#7B61FF]/10"
    }
  ];

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      <RainbowWaveBackground />
      
      {/* Header */}
      <section className="pt-48 pb-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-sm font-semibold text-gray-500 mb-8 shadow-sm">
                <Brain className="w-4 h-4" /> The Sophie Method
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-gray-900 leading-[0.95]">
                The science of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF]">
                    acquisition.
                </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                We didn't invent language learning. We just stripped away the gamification to focus on how the brain actually rewires itself.
            </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
                {principles.map((p, i) => (
                    <div 
                        key={i} 
                        className="group bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="relative z-10 flex gap-8">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${p.bg} ${p.color}`}>
                                <p.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#7B61FF] transition-colors">{p.title}</h3>
                                <p className="text-lg text-gray-500 leading-relaxed font-light">{p.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7B61FF] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF0080] rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <TrendingUp className="w-12 h-12 text-gray-500 mx-auto mb-8 opacity-50" />
            <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12">
                "Language is not a genetic gift, it is a social organism. It lives only when spoken."
            </p>
            <div className="inline-flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 mb-4 flex items-center justify-center font-bold text-lg">S</div>
                <div className="font-bold text-gray-400 uppercase tracking-widest text-sm">Sophie Research Team</div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}