import type { Metadata } from "next";
import LoginPageClient from "@/components/auth/LoginPageClient";
import { getBrandTerms } from "@/lib/i18n/brand";
import { getRequestLocale, getRequestMessages } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getRequestLocale();
  const brand = getBrandTerms(locale);
  const pageCopy = await getRequestMessages();

  const title = `${pageCopy.loginForm.signIn} | ${brand.dotAi}`;
  const description = pageCopy.loginForm.readySubtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: brand.dotAi,
      type: "website",
      url: "https://sophie.ai/login"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
};

export default function LoginPage() {
  return <LoginPageClient />;
}
