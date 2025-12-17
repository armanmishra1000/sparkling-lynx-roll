"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SignupModal from "./SignupModal";
import { trackEvent } from "@/lib/analytics";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-secondary/30 px-3 py-1 rounded-full border border-secondary/50"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">New • The language coach that remembers you</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Fluency, but <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
              personalized.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-lg"
          >
            Talk to Sophie for 10 minutes a day. Get corrections you can use immediately—pronunciation, wording, and flow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <SignupModal triggerLocation="hero_primary">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-12 px-8 shadow-xl shadow-primary/20">
                Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </SignupModal>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto rounded-full text-lg h-12 px-8 border-2"
              onClick={() => trackEvent("cta_click_secondary", { location: "hero_demo_button" })}
            >
              <Play className="mr-2 w-4 h-4 fill-current" /> Watch 60-sec demo
            </Button>
          </motion.div>
        </div>

        {/* Hero Demo Module */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="relative bg-white border border-border rounded-3xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:ml-auto">
            {/* Header of Demo */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-primary/30 rounded-full"
                    />
                    <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10">S</div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Sophie</div>
                  <div className="text-xs text-muted-foreground">AI Coach • Online</div>
                </div>
              </div>
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-primary/40 rounded-full animate-pulse" />
                <div className="w-1 h-6 bg-primary/60 rounded-full animate-pulse delay-75" />
                <div className="w-1 h-4 bg-primary/40 rounded-full animate-pulse delay-150" />
              </div>
            </div>

            {/* Chat Area */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-end">
                <div className="bg-primary/10 text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                  I try to go to the station yesterday but it was closed.
                </div>
              </div>
              
              {/* Sophie's Correction */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-secondary/20 border border-secondary/30 p-4 rounded-2xl rounded-tl-sm text-sm space-y-2"
              >
                <div className="flex items-center space-x-2 text-primary font-medium text-xs uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Correction</span>
                </div>
                <p className="text-gray-700">
                  <span className="line-through text-red-400 opacity-60">I try to go</span>{" "}
                  <span className="text-green-600 font-semibold bg-green-50 px-1 rounded">I tried to go</span>{" "}
                  to the station yesterday...
                </p>
                <div className="text-xs text-muted-foreground pt-2 border-t border-secondary/20 mt-2">
                  💡 Tip: Use past tense "tried" for yesterday.
                </div>
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
              <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors cursor-pointer">
                <div className="w-3 h-3 bg-current rounded-sm" />
              </div>
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform cursor-pointer">
                 <div className="w-6 h-8 border-l-4 border-r-4 border-white mx-auto" />
              </div>
              <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
                 <div className="w-4 h-4 border-2 border-current rounded-full" />
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border hidden md:block"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">Pronunciation</div>
                <div className="text-xs text-gray-500">94% Accuracy</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;