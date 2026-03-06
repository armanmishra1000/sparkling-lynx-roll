import { Metadata } from 'next';
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestLocale, getRequestMessages } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = await getRequestMessages();
  const title = `${pageCopy.demoModal.dialogTitle} | ${brand.dotAi}`;
  const description = `${pageCopy.demoModal.liveSimulation}: ${pageCopy.demoModal.correctionBody}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: brand.dotAi,
      type: "website",
      url: "https://sophie.ai/demo"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
};

/**
 * DemoPage component that integrates the RealTalk.ai project via a seamless iframe.
 * This provides a robust integration while hiding the external URL from the browser's address bar.
 */
export default function DemoPage() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-background overflow-hidden">
      <iframe
        src="https://realtalk-three.vercel.app/"
        className="w-full h-full border-none"
        title="Project Demo"
        allow="camera; microphone; clipboard-write; autoplay; display-capture;"
        loading="lazy"
      />
    </div>
  );
}
