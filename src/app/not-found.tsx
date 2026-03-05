import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/shared/Navbar";
import Footer from "@/components/landing/shared/Footer";
import RainbowWaveBackground from "@/components/landing/shared/RainbowWaveBackground";
import { getRequestMessages } from "@/lib/i18n/server";

export default async function NotFound() {
  const pageCopy = (await getRequestMessages()).notFoundPage;

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
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{pageCopy.title}</h2>
        <p className="text-xl text-gray-500 max-w-md mb-10 leading-relaxed">
          {pageCopy.description}
        </p>
        
        <Link href="/">
          <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-black hover:bg-gray-800 text-white font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            {pageCopy.backToHome}
          </Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
