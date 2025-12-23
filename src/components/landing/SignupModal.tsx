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
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Confetti } from "@/components/ui/confetti";
import { motion } from "framer-motion";
import { useDemo } from "@/context/DemoContext";
import { demoLanguages } from "@/lib/demo-languages";

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
      <DialogContent className="sm:max-w-[450px] overflow-hidden bg-white border-none rounded-[2rem] p-0">
        {step === "form" ? (
          <div className="p-8">
            <DialogHeader className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                 <Sparkles className="w-6 h-6 text-black" />
              </div>
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
                  className="h-11 rounded-xl bg-gray-50 border-gray-200"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>I want to learn</Label>
                  <Select required onValueChange={(val) => setFormData({...formData, language: val})} defaultValue={currentLanguage.id}>
                    <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-gray-200">
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
                  <Select required onValueChange={(val) => setFormData({...formData, level: val})}>
                    <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-gray-200">
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
                <Select onValueChange={(val) => setFormData({...formData, goal: val})}>
                  <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-gray-200">
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

              <Button type="submit" className="w-full h-12 rounded-xl bg-black hover:bg-gray-800 text-white font-bold text-lg mt-2 shadow-lg hover:shadow-xl transition-all" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center space-y-6 relative bg-white">
            <Confetti />
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-2"
            >
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </motion.div>
            <div>
                <h3 className="text-3xl font-bold mb-2">You're on the list!</h3>
                <p className="text-gray-500 text-lg max-w-xs mx-auto">
                We've sent a confirmation email to <strong>{formData.email}</strong>.
                </p>
            </div>
            <Button variant="outline" onClick={() => setOpen(false)} className="h-12 px-8 rounded-xl border-2 border-gray-100 font-bold hover:bg-gray-50 hover:border-gray-200">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;