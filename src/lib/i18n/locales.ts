export type AppLocale = "en" | "zh" | "hi" | "es" | "ar";

export interface LocaleMeta {
  id: AppLocale;
  label: string;
  langTag: string;
  dir: "ltr" | "rtl";
}

export const APP_LOCALES: readonly LocaleMeta[] = [
  { id: "en", label: "English", langTag: "en", dir: "ltr" },
  { id: "zh", label: "Mandarin Chinese", langTag: "zh-CN", dir: "ltr" },
  { id: "hi", label: "Hindi", langTag: "hi", dir: "ltr" },
  { id: "es", label: "Spanish", langTag: "es", dir: "ltr" },
  { id: "ar", label: "Modern Standard Arabic", langTag: "ar", dir: "rtl" }
] as const;

export const DEFAULT_LOCALE: AppLocale = "en";

export const isAppLocale = (value: string): value is AppLocale =>
  APP_LOCALES.some((locale) => locale.id === value);

export const getLocaleMeta = (locale: AppLocale): LocaleMeta =>
  APP_LOCALES.find((item) => item.id === locale) ?? APP_LOCALES[0];
