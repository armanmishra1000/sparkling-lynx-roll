"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupModal from "./SignupModal";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground">Start for free, upgrade for fluency.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="border border-border rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <div className="text-3xl font-bold mb-6">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>10 mins/day speaking</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Basic feedback</span>
                    </li>
                </ul>
                <SignupModal>
                    <Button variant="outline" className="w-full rounded-full">Join Waitlist</Button>
                </SignupModal>
            </div>

            {/* Plus */}
            <div className="border-2 border-primary rounded-3xl p-8 bg-primary/5 relative transform scale-105 shadow-xl flex flex-col">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                <h3 className="text-xl font-bold mb-2 text-primary">Plus</h3>
                <div className="text-3xl font-bold mb-6">$12<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Unlimited speaking</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Full detailed feedback</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Tutor Mode</span>
                    </li>
                </ul>
                <SignupModal>
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90">Join Waitlist</Button>
                </SignupModal>
            </div>

            {/* Pro */}
            <div className="border border-border rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-6">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Everything in Plus</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Advanced drills</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Accent packs</span>
                    </li>
                </ul>
                <SignupModal>
                    <Button variant="outline" className="w-full rounded-full">Join Waitlist</Button>
                </SignupModal>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;