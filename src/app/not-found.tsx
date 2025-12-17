import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import RainbowWaveBackground from "@/components/landing/RainbowWaveBackground";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <Navbar />
      <RainbowWaveBackground />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative z-10">
        <div className="relative mb-8">
            <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black/10 to-transparent select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                404
            </h1>
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF] relative z-10">
                404
            </h1>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Sophie is speechless.</h2>
        <p className="text-xl text-gray-500 max-w-md mb-10 leading-relaxed">
          The page you are looking for doesn't exist, or maybe it just hasn't learned to speak yet.
        </p>
        
        <Link href="/">
          <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-black hover:bg-gray-800 text-white font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            Back to Home
          </Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}