"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import Logo from "@/components/landing/shared/Logo";

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Top Section: CTA and Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-xl">
            {/* Brand Logo */}
            <Logo
              className="mb-8"
              textClassName="text-2xl font-bold tracking-tight text-gray-900"
            />
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Just ask sophie
            </h3>
            <p className="text-xl text-gray-500 max-w-md mx-auto leading-relaxed">
              Join thousands of learners who have stopped memorizing and started
              speaking.
            </p>

            {/* Meet and greet Sophie */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="relative group">
                <RainbowBorder
                  borderRadius={9999}
                  borderWidth={2}
                  innerClassName="relative bg-white w-full h-14 px-12 py-3 flex items-center justify-center overflow-hidden"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">
                    Meet and greet Sophie
                  </span>
                </RainbowBorder>
              </div>
              {/* <Button
                variant="outline"
                className="rounded-full px-8 h-14 border-gray-200 hover:bg-white hover:border-black text-gray-700 hover:text-black font-semibold text-lg transition-all bg-white/50 backdrop-blur-sm"
              >
                Contact Sales
              </Button> */}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">
            <div>
              <h4 className="font-semibold mb-8 text-black text-lg">
                Product
              </h4>
              <ul className="space-y-5 text-gray-500 font-medium">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-black transition-colors flex items-center group"
                  >
                    Features{" "}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-black transition-colors flex items-center group"
                  >
                    Pricing{" "}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#methodology"
                    className="hover:text-black transition-colors flex items-center group"
                  >
                    Science{" "}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-black transition-colors flex items-center group"
                  >
                    Log in{" "}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-8 text-black text-lg">
                Company
              </h4>
              <ul className="space-y-5 text-gray-500 font-medium">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-black transition-colors"
                  >
                    About
                  </Link>
                </li>
                {/* <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li> */}
                {/* <li><Link href="#" className="hover:text-black transition-colors">Careers</Link></li> */}
                {/* <li><Link href="#" className="hover:text-black transition-colors">Press</Link></li> */}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-8 text-black text-lg">
                Legal
              </h4>
              <ul className="space-y-5 text-gray-500">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-black transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-black transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="font-medium text-gray-500">
            &copy; 2026 Olguin Technologies FZCO. All rights reserved.
          </p>

          {/* <div className="flex items-center space-x-8 mt-6 md:mt-0 font-bold text-gray-500">
                <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
                <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
                <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
            </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
