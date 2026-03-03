"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2, Sparkles, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Confetti } from "@/components/ui/confetti";
import { motion } from "framer-motion";
import { useDemo } from "@/context/DemoContext";
import { demoLanguages } from "@/lib/demo-languages";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { RainbowIcon } from "@/components/ui/RainbowIcon";

interface SignupModalProps {
  children: React.ReactNode;
  triggerLocation?: string;
}

const SignupModal = ({ children, triggerLocation = "unknown" }: SignupModalProps) => {
  const { currentLanguage } = useDemo();
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    language: "",
    level: "",
    goal: ""
  });

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      if (step === "success") {
        setTimeout(() => setStep("form"), 500);
      }
    }
    if (newOpen) {
      trackEvent("cta_click_primary", { location: triggerLocation });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    trackEvent("signup_submit", {
      language: formData.language,
      level: formData.level,
      goal: formData.goal,
      location: triggerLocation
    });

    // Send notification to Telegram (fire and forget)
    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form: "Early Access Signup",
        email: formData.email,
        language: formData.language,
        level: formData.level,
        goal: formData.goal,
        location: triggerLocation,
      }),
    }).catch(console.error);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep("success");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent hideClose={true} className="sm:max-w-[450px] overflow-hidden bg-white border-none rounded-[2rem] p-0 font-sans">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-50 group focus:outline-none"
        >
          <RainbowBorder
            borderRadius={9999}
            borderWidth={1.5}
            innerClassName="w-8 h-8 bg-white flex items-center justify-center rounded-full relative overflow-hidden"
          >
            <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <X className="w-5 h-5 text-black transition-colors relative z-10" />
          </RainbowBorder>
        </button>
        {step === "form" ? (
          <div className="p-8">
            <DialogHeader className="mb-6">
              {/* <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-black" />
              </div> */}
              <DialogTitle className="text-2xl font-bold">Join the Early Access List</DialogTitle>
              <DialogDescription className="text-base text-gray-500">
                Sophie is currently in private beta. Reserve your spot today.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  required
                  className="h-12 rounded-xl bg-gray-50 border-gray-300 focus:outline-none focus-visible:ring-0 shadow-none "
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>I want to learn</Label>
                  <Select required onValueChange={(val) => setFormData({ ...formData, language: val })} defaultValue={currentLanguage.id}>
                    <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 shadow-none focus-visible:ring-0">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      {demoLanguages.map((lang) => (
                        <SelectItem key={lang.id} value={lang.id}>{lang.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>My level is</Label>
                  <Select required onValueChange={(val) => setFormData({ ...formData, level: val })}>
                    <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 shadow-none focus-visible:ring-0">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Main goal</Label>
                <Select onValueChange={(val) => setFormData({ ...formData, goal: val })}>
                  <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 shadow-none focus-visible:ring-0">
                    <SelectValue placeholder="Select a goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="travel">Travel confidentally</SelectItem>
                    <SelectItem value="work">Work & Business</SelectItem>
                    <SelectItem value="exams">Study tool for school</SelectItem>
                    <SelectItem value="dating">Family, friends or dating</SelectItem>
                    <SelectItem value="dating">Country migration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-block transition-transform active:scale-9 w-full"
                >
                  <RainbowBorder
                    className="w-full"
                    borderWidth={2}
                    borderRadius={9999}
                    innerClassName="relative bg-white w-full h-12 px-12 py-3 flex items-center justify-center overflow-hidden"
                  >
                    <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium text-black inline-flex items-center">
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </span>
                  </RainbowBorder>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center space-y-6 relative bg-white">
            <Confetti />
            <div className="flex items-center justify-center mb-2">
              <RainbowIcon icon={CheckCircle2} size={48} />
            </div>
            <div>
              <h3 className="text-3xl mb-2">You&apos;re on the list!</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xs mx-auto">
                We&apos;ve sent a confirmation email to <span className="font-semibold">{formData.email}</span>.
              </p>
            </div>
            <div className="w-full max-w-[200px] group">
              <button
                onClick={() => setOpen(false)}
                className="w-full transition-transform active:scale-95"
              >
                <RainbowBorder
                  className="w-full"
                  borderWidth={2}
                  borderRadius={9999}
                  innerClassName="relative bg-white w-full h-12 px-8 flex items-center justify-center overflow-hidden"
                >
                  <RainbowGradient className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium text-black">
                    Close
                  </span>
                </RainbowBorder>
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;