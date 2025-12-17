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
import { Loader2, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Confetti } from "@/components/ui/confetti";

interface SignupModalProps {
  children: React.ReactNode;
  triggerLocation?: string; // To track where the user clicked "Join"
}

const SignupModal = ({ children, triggerLocation = "unknown" }: SignupModalProps) => {
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
      // Reset form on close after a delay if needed, or keep state
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
    
    // Track the signup attempt
    trackEvent("signup_submit", { 
      language: formData.language,
      level: formData.level,
      goal: formData.goal,
      location: triggerLocation
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep("success");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle>Join the Early Access List</DialogTitle>
              <DialogDescription>
                Sophie is currently in private beta. Reserve your spot today.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="hello@example.com" 
                  required 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>I want to learn</Label>
                  <Select required onValueChange={(val) => setFormData({...formData, language: val})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>My level is</Label>
                  <Select required onValueChange={(val) => setFormData({...formData, level: val})}>
                    <SelectTrigger>
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
                  <SelectTrigger>
                    <SelectValue placeholder="Select a goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="travel">Travel confidentally</SelectItem>
                    <SelectItem value="work">Work & Business</SelectItem>
                    <SelectItem value="exams">Exams (TOEFL/IELTS)</SelectItem>
                    <SelectItem value="dating">Social & Dating</SelectItem>
                    <SelectItem value="culture">Culture & Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white mt-2" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 relative">
            <Confetti />
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold">You're on the list!</h3>
            <p className="text-muted-foreground">
              We've sent a confirmation email. Keep an eye on your inbox for your invite code.
            </p>
            <Button variant="outline" onClick={() => setOpen(false)} className="mt-4 border-2 border-black font-bold">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;