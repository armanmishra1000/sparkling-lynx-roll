import Navbar from "@/components/landing/shared/Navbar";
import EraSection from "@/components/landing/sections/EraSection";
import Hero from "@/components/landing/sections/Hero";
import SocialProof from "@/components/landing/sections/SocialProof";
import ProblemSolution from "@/components/landing/sections/ProblemSolution";
import HowItWorks from "@/components/landing/sections/HowItWorks";
import Features from "@/components/landing/sections/Features";
import PersonalizationEngine from "@/components/landing/sections/PersonalizationEngine";
import ProductTour from "@/components/landing/sections/ProductTour";
import ComparisonTable from "@/components/landing/sections/ComparisonTable";
import Testimonials from "@/components/landing/sections/Testimonials";
import Pricing from "@/components/landing/sections/Pricing";
import FAQ from "@/components/landing/sections/FAQ";
import Footer from "@/components/landing/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-[#FF0080]/20 selection:text-[#FF0080]">
      <Navbar />
      <EraSection />
      <HowItWorks />
      <ProblemSolution />
      <Hero />
      {/* <SocialProof /> */}
      <Features />
      <PersonalizationEngine />
      <ProductTour />
      <Testimonials />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
