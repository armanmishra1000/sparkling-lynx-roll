import React from "react";
import Link from "next/link";
import { MadeWithDyad } from "../made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
                <Link href="/" className="text-xl font-bold text-primary mb-4 block">Sophie.ai</Link>
                <p className="text-sm text-muted-foreground">
                    Your private language coach that remembers you.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#features">Features</Link></li>
                    <li><Link href="#pricing">Pricing</Link></li>
                    <li><Link href="#faq">FAQ</Link></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Careers</Link></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/privacy">Privacy</Link></li>
                    <li><Link href="/terms">Terms</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sophie AI Inc. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                <Link href="#">Twitter</Link>
                <Link href="#">LinkedIn</Link>
                <Link href="#">Instagram</Link>
            </div>
        </div>
        <div className="mt-8">
            <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;