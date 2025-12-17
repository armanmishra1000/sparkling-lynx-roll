"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b-2 border-black/5"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-black flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 animate-pulse"></div>
           Sophie.ai
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-sm font-bold text-gray-600 hover:text-black hover:underline decoration-wavy decoration-pink-500 underline-offset-4 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="text-sm font-bold text-gray-600 hover:text-black">
            Sign in
          </Link>
          <SignupModal triggerLocation="navbar_desktop">
            <Button className="rounded-full px-6 bg-black hover:bg-gray-800 text-white font-bold border-2 border-transparent hover:border-black transition-all shadow-md">
              Get Early Access
            </Button>
          </SignupModal>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-black">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col border-l-2 border-black">
                <SheetHeader>
                    <SheetTitle className="text-left text-2xl font-black text-black">Sophie.ai</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-gray-600 hover:text-black transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-px bg-black/10 my-2" />
                    <Link href="#" className="text-2xl font-bold text-gray-600 hover:text-black">
                        Sign in
                    </Link>
                    <SignupModal triggerLocation="navbar_mobile">
                        <Button className="w-full h-12 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-lg">
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