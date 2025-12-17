"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("sophie_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sophie_cookie_consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("sophie_cookie_consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-md z-50"
        >
          <div className="bg-black text-white p-6 rounded-2xl shadow-2xl border-2 border-white/10 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF0080] to-[#7B61FF] rounded-full blur-[50px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white/10 p-2 rounded-xl">
                        <Cookie className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">We use cookies</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            To personalize your learning experience and analyze our traffic. Sophie learns from you, but we respect your privacy.
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <Button 
                        onClick={handleAccept} 
                        className="flex-1 bg-white text-black hover:bg-gray-200 font-bold rounded-xl"
                    >
                        Accept
                    </Button>
                    <Button 
                        onClick={handleDecline} 
                        variant="outline" 
                        className="flex-1 bg-transparent border-white/20 hover:bg-white/10 text-white rounded-xl"
                    >
                        Decline
                    </Button>
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};