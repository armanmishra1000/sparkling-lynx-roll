import { cookies } from "next/headers";
import { MESSAGES, type Messages } from "@/lib/i18n/messages";
import { DEFAULT_LOCALE, isAppLocale, type AppLocale } from "@/lib/i18n/locales";
import { localizeBrandInMessages } from "@/lib/i18n/brand";

const LOCALIZED_MESSAGES: Record<AppLocale, Messages> = {
  en: localizeBrandInMessages(MESSAGES.en, "en"),
  zh: localizeBrandInMessages(MESSAGES.zh, "zh"),
  hi: localizeBrandInMessages(MESSAGES.hi, "hi"),
  es: localizeBrandInMessages(MESSAGES.es, "es"),
  ar: localizeBrandInMessages(MESSAGES.ar, "ar")
};

export const getRequestLocale = async (): Promise<AppLocale> => {
  const cookieStore = await cookies();
  const localeValue = cookieStore.get("locale")?.value;
  return localeValue && isAppLocale(localeValue) ? localeValue : DEFAULT_LOCALE;
};

export const getRequestMessages = async (): Promise<Messages> => {
  const locale = await getRequestLocale();
  return LOCALIZED_MESSAGES[locale];
};
