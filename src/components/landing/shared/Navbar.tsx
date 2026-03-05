"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, MessageCircle, X } from "lucide-react";
import Logo from "@/components/landing/shared/Logo";
import { useDemo } from "@/context/DemoContext";

const headerLanguageOptions = [
  { id: "en", label: "English" },
  { id: "zh", label: "Mandarin Chinese" },
  { id: "hi", label: "Hindi" },
  { id: "es", label: "Spanish" },
  { id: "ar", label: "Modern Standard Arabic" },
] as const;

const Navbar = () => {
  const whatsappUrl = "https://wa.me/971505814567";
  const { currentLanguage, setLanguageById } = useDemo();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (value: string) => {
    const option = headerLanguageOptions.find((item) => item.id === value);
    if (!option) return;
    setLanguageById(option.id);
  };

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
          "w-[95%] max-w-7xl flex items-center justify-between transition-all duration-300 rounded-full px-4 mx-auto",
          isScrolled
            ? "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-sm py-3 ring-1 ring-black/5"
            : "bg-transparent py-4 border border-transparent"
        )}
      >
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-white/20 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2 font-medium text-gray-500 hover:text-black hover:bg-white/80 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Select
            value={currentLanguage.id}
            onValueChange={handleLanguageChange}
          >
            <SelectTrigger
              aria-label="Select language"
              className="h-10 w-[220px] rounded-full border-gray-200 bg-white/80 text-gray-700 focus:ring-0 focus:ring-offset-0 shadow-sm"
            >
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {headerLanguageOptions.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Link href="/login" className="font-semibold text-black transition-colors">
            Log in
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 h-10 bg-black hover:bg-gray-900 text-white font-medium shadow-sm transition-all duration-300 text-sm border border-transparent">
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen} >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10 text-black hover:bg-black/5 rounded-full border border-black/10 bg-white/90 shadow-sm"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] flex h-full flex-col overflow-hidden border-l border-gray-100 bg-white/95 backdrop-blur-xl p-0 [&>button]:hidden"
            >
              <SheetHeader className="shrink-0 border-b border-gray-100 px-6 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Logo withLink={false} showText={false} markSize={40} />
                    <div className="min-w-0">
                      <SheetTitle className="text-left text-xl font-bold leading-tight text-black">
                        Menu
                      </SheetTitle>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full border border-black/10 bg-white text-black shadow-sm hover:bg-gray-50"
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>

              <div className="flex-1 min-h-0 px-6 py-6">
                <div className="h-full overflow-y-auto custom-scrollbar">
                  <div className="flex min-h-full flex-col justify-start gap-3">
                    <div className="mb-2">
                      <Select
                        value={currentLanguage.id}
                        onValueChange={handleLanguageChange}
                      >
                        <SelectTrigger
                          aria-label="Select language"
                          className="h-12 w-full rounded-xl border-gray-200 bg-white text-gray-700 focus:ring-0 focus:ring-offset-0 shadow-sm"
                        >
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          {headerLanguageOptions.map((option) => (
                            <SelectItem key={option.id} value={option.id}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full text-lg font-semibold text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-3 rounded-xl transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0 border-t border-gray-100 p-6">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-black"
                >
                  Log in
                </Link>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full h-12 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-base shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
