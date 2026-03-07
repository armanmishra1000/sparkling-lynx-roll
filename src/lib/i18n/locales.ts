export type AppLocale = "en" | "zh" | "hi" | "es" | "ar";

export interface LocaleMeta {
  id: AppLocale;
  label: string;
  langTag: string;
  dir: "ltr" | "rtl";
  countryCode: string;
}

export const APP_LOCALES: readonly LocaleMeta[] = [
  { id: "en", label: "English", langTag: "en", dir: "ltr", countryCode: "gb" },
  { id: "zh", label: "Mandarin Chinese", langTag: "zh-CN", dir: "ltr", countryCode: "cn" },
  { id: "hi", label: "Hindi", langTag: "hi", dir: "ltr", countryCode: "in" },
  { id: "es", label: "Spanish", langTag: "es", dir: "ltr", countryCode: "es" },
  { id: "ar", label: "Modern Standard Arabic", langTag: "ar", dir: "rtl", countryCode: "sa" }
] as const;

export const DEFAULT_LOCALE: AppLocale = "en";

export const isAppLocale = (value: string): value is AppLocale =>
  APP_LOCALES.some((locale) => locale.id === value);

export const getLocaleMeta = (locale: AppLocale): LocaleMeta =>
  APP_LOCALES.find((item) => item.id === locale) ?? APP_LOCALES[0];
