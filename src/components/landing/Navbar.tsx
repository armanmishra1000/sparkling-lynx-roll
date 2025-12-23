"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, Sparkles } from "lucide-react";
import SignupModal from "./SignupModal";
import { useDemo } from "@/context/DemoContext";

const Navbar = () => {
  const { currentLanguage } = useDemo();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { href: "/methodology", label: "Science" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300",
        isScrolled ? "pt-4" : "pt-6"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className={cn(
            "w-[95%] max-w-7xl flex items-center justify-between transition-all duration-300 rounded-full px-6 mx-auto",
            isScrolled 
                ? "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-3 ring-1 ring-black/5" 
                : "bg-transparent py-4 border border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
           <div className="relative w-9 h-9 flex items-center justify-center">
                {/* logo design */}
                <motion.div 
                  key={currentLanguage.id}
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`
                  }}
                  className={cn("absolute inset-0 rounded-full opacity-80 group-hover:opacity-100 blur-[6px] transition-all duration-500")}
                ></motion.div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-sm font-black border border-white/50">S</div>
           </div>
           <span className="text-xl font-bold tracking-tight text-gray-900">Sophie.ai</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-white/20 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white/80 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
            Log in
          </Link>
          <SignupModal triggerLocation="navbar_desktop">
            <Button className="rounded-full px-6 h-10 bg-black hover:bg-gray-800 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm border border-transparent hover:border-white/20">
              <Sparkles className="w-3 h-3 mr-2 text-[#FFD700]" /> Early Access
            </Button>
          </SignupModal>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-black/5 rounded-full">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col border-l border-gray-100 bg-white/95 backdrop-blur-xl p-6">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left text-2xl font-bold flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">S</div>
                         Menu
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-3 rounded-xl transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-4" />
                    <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-600 hover:text-black px-4 py-3 rounded-xl hover:bg-gray-50">
                        Log in
                    </Link>
                    <SignupModal triggerLocation="navbar_mobile">
                        <Button className="w-full h-12 rounded-xl bg-black hover:bg-gray-900 text-white font-bold text-lg mt-4 shadow-lg">
                            Get Early Access
                        </Button>
                    </SignupModal>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;