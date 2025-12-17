import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-8">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF] animate-pulse">
                404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-black/5 blur-3xl -z-10"></div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Sophie is speechless.</h2>
        <p className="text-xl text-gray-500 max-w-md mb-8">
          The page you are looking for doesn't exist, or maybe it just hasn't learned to speak yet.
        </p>
        
        <Link href="/">
          <Button size="lg" className="rounded-full px-8 bg-black hover:bg-gray-800 h-14 text-lg">
            Go Home
          </Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}