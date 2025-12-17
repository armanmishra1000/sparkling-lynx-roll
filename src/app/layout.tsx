import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophie.ai | The Language Coach That Remembers You",
  description: "Stop freezing when you speak. Sophie is the AI language tutor that remembers your mistakes, adapts to your life, and helps you speak fluently in 10 minutes a day.",
  keywords: ["language learning", "AI tutor", "speaking practice", "spanish", "french", "german", "english", "fluency"],
  authors: [{ name: "Sophie.ai Team" }],
  openGraph: {
    title: "Sophie.ai | Fluency, Personalized",
    description: "The private AI language coach that remembers you. Talk daily, get corrected instantly, and build real-world confidence.",
    url: "https://sophie.ai",
    siteName: "Sophie.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie.ai | The Language Coach That Remembers You",
    description: "Stop freezing. Start speaking. The first AI tutor that actually remembers your progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}