"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { currentLanguage } = useDemo();
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-gray-50 to-transparent -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Section: CTA and Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-xl">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 mb-8 group w-fit">
              <div className="relative w-9 h-9 flex items-center justify-center">
                {/* logo design with dynamic gradient glow */}
                <motion.div
                  key={`footer-logo-glow-${currentLanguage.id}`}
                  style={{
                    backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                  }}
                  className="absolute inset-0 rounded-full opacity-80 group-hover:opacity-100 blur-[6px] transition-all duration-500"
                ></motion.div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-sm font-black border border-white/50 text-gray-900 shadow-sm">
                  S
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Sophie.ai
              </span>
            </Link>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Ready to find your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF]">
                authentic voice?
              </span>
            </h3>
            <p className="text-xl text-gray-500 mb-10 max-w-md font-light">
              Join thousands of learners who have stopped memorizing and started
              speaking.
            </p>

            {/* Meet and greet Sophie */}
            <div className="flex flex-wrap gap-4">
              <div className="relative group">
                <motion.div
                  key={`footer-glow-${currentLanguage.id}`}
                  style={{
                    backgroundImage: `linear-gradient(to right, ${currentLanguage.from}, ${currentLanguage.via}, ${currentLanguage.to})`,
                  }}
                  className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-80 blur-xl transition-all duration-500 scale-105"
                ></motion.div>
                <Button className="relative h-16 px-10 rounded-full text-lg font-bold bg-white text-gray-900 hover:bg-white border border-gray-200/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  Meet and greet Sophie
                </Button>
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
              <h4 className="font-bold mb-8 text-black text-sm uppercase tracking-widest">
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
              <h4 className="font-bold mb-8 text-black text-sm uppercase tracking-widest">
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
              <h4 className="font-bold mb-8 text-black text-sm uppercase tracking-widest">
                Legal
              </h4>
              <ul className="space-y-5 text-gray-500 font-medium">
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
        <div className="border-t border-gray-200/60 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Sophie AI Inc. All rights
            reserved.
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
