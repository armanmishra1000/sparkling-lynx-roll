import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { CookieBanner } from "@/components/ui/cookie-banner";
import Script from "next/script";

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
    images: [
      {
        url: "https://sophie.ai/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Sophie.ai App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie.ai | The Language Coach That Remembers You",
    description: "Stop freezing. Start speaking. The first AI tutor that actually remembers your progress.",
    images: ["https://sophie.ai/og-image.jpg"],
  },
};

import { DemoProvider } from "@/context/DemoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sophie.ai",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "12.00",
      "priceCurrency": "USD"
    },
    "description": "AI-powered language learning platform focusing on speaking practice and personalized feedback.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DemoProvider>
          <ScrollProgress />
          {children}
          <CookieBanner />
          <BackToTop />
        </DemoProvider>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}