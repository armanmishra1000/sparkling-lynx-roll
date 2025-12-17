"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem("sophie_cookies_accepted");
    if (!accepted) {
      // Delay showing it slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sophie_cookies_accepted", "true");
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
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-50"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-[1.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF0080] to-[#7B61FF]"></div>
            
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Cookie className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Cookies & Privacy</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        We use cookies to ensure Sophie remembers your progress and settings. We respect your privacy.
                    </p>
                    <div className="flex gap-2">
                        <Button 
                            onClick={handleAccept} 
                            size="sm" 
                            className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 font-semibold shadow-md"
                        >
                            Accept
                        </Button>
                        <Button 
                            onClick={() => setIsVisible(false)} 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-500 hover:text-black hover:bg-black/5 rounded-lg px-4"
                        >
                            Decline
                        </Button>
                    </div>
                </div>
                <button 
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-black transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};