import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { CookieBanner } from "@/components/ui/cookie-banner";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cookies } from "next/headers";
import { DemoProvider } from "@/context/DemoContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { DEFAULT_LOCALE, getLocaleMeta, isAppLocale, type AppLocale } from "@/lib/i18n/locales";
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestMessages } from "@/lib/i18n/server";

const googleSans = localFont({
  src: [
    { path: "../../public/fonts/GoogleSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GoogleSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/GoogleSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/GoogleSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/GoogleSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/GoogleSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../public/fonts/GoogleSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/GoogleSans-BoldItalic.ttf", weight: "700", style: "italic" }
  ],
  variable: "--font-google-sans",
  display: "swap"
});

export const generateMetadata = async (): Promise<Metadata> => {
  const cookieStore = await cookies();
  const cookieLocaleValue = cookieStore.get("locale")?.value;
  const locale: AppLocale =
    cookieLocaleValue && isAppLocale(cookieLocaleValue) ? cookieLocaleValue : DEFAULT_LOCALE;
  const localeMeta = getLocaleMeta(locale);
  const brand = getBrandTerms(locale);
  const pageCopy = await getRequestMessages();

  const pageTitle = `${brand.dotAi} | ${pageCopy.era.subtitle}`;
  const description = pageCopy.hero.intro;
  const openGraphTitle = `${brand.dotAi} | ${pageCopy.problemSolution.resultValue}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      brand.dotAi,
      pageCopy.era.languageTitle,
      pageCopy.hero.conversation,
      pageCopy.hero.naturalCorrection,
      pageCopy.hero.accentAccuracy
    ],
    authors: [{ name: brand.dotAi }],
    openGraph: {
      title: openGraphTitle,
      description,
      url: "https://sophie.ai",
      siteName: brand.dotAi,
      locale: localeMeta.langTag.replace("-", "_"),
      type: "website",
      images: [
        {
          url: "https://sophie.ai/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${brand.dotAi} App Preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["https://sophie.ai/og-image.jpg"]
    },
    icons: {
      icon: "/favicon-preview/wave-favicon-preview-512.png",
      shortcut: "/favicon-preview/wave-favicon-preview-512.png",
      apple: "/favicon-preview/wave-favicon-preview-512.png"
    }
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocaleValue = cookieStore.get("locale")?.value;
  const initialLocale: AppLocale =
    cookieLocaleValue && isAppLocale(cookieLocaleValue) ? cookieLocaleValue : DEFAULT_LOCALE;
  const localeMeta = getLocaleMeta(initialLocale);
  const brand = getBrandTerms(initialLocale);
  const pageCopy = await getRequestMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": brand.dotAi,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "12.00",
      "priceCurrency": "USD"
    },
    "description": pageCopy.hero.intro,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <html lang={localeMeta.langTag} dir={localeMeta.dir} className={`${googleSans.variable} scroll-smooth`}>
      <body
        className="font-sans antialiased"
      >
        <LanguageProvider initialLocale={initialLocale}>
          <DemoProvider>
            <ScrollProgress />
            {children}
            <CookieBanner />
            <BackToTop />
          </DemoProvider>
        </LanguageProvider>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics gaId="G-SZQZ64JTT4" />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""} />
    </html>
  );
}
