import { getLocaleMeta, type AppLocale } from "@/lib/i18n/locales";

export interface MarqueeLanguageItem {
  id: string;
  name: string;
  countryCode: string;
  languageTag: string;
}

export const marqueeLanguages: MarqueeLanguageItem[] = [
  { id: "english", name: "English", countryCode: "gb", languageTag: "en" },
  { id: "mandarin-chinese", name: "Mandarin Chinese", countryCode: "cn", languageTag: "zh" },
  { id: "hindi", name: "Hindi", countryCode: "in", languageTag: "hi" },
  { id: "spanish", name: "Spanish", countryCode: "es", languageTag: "es" },
  { id: "modern-standard-arabic", name: "Modern Standard Arabic", countryCode: "sa", languageTag: "ar" },
  { id: "french", name: "French", countryCode: "fr", languageTag: "fr" },
  { id: "bengali", name: "Bengali", countryCode: "bd", languageTag: "bn" },
  { id: "portuguese", name: "Portuguese", countryCode: "pt", languageTag: "pt" },
  { id: "russian", name: "Russian", countryCode: "ru", languageTag: "ru" },
  { id: "indonesian", name: "Indonesian", countryCode: "id", languageTag: "id" },
  { id: "urdu", name: "Urdu", countryCode: "pk", languageTag: "ur" },
  { id: "standard-german", name: "Standard German", countryCode: "de", languageTag: "de" },
  { id: "japanese", name: "Japanese", countryCode: "jp", languageTag: "ja" },
  { id: "nigerian-pidgin", name: "Nigerian Pidgin", countryCode: "ng", languageTag: "pcm" },
  { id: "egyptian-arabic", name: "Egyptian Arabic", countryCode: "eg", languageTag: "arz" },
  { id: "marathi", name: "Marathi", countryCode: "in", languageTag: "mr" },
  { id: "vietnamese", name: "Vietnamese", countryCode: "vn", languageTag: "vi" },
  { id: "telugu", name: "Telugu", countryCode: "in", languageTag: "te" },
  { id: "hausa", name: "Hausa", countryCode: "ng", languageTag: "ha" },
  { id: "turkish", name: "Turkish", countryCode: "tr", languageTag: "tr" },
  { id: "western-punjabi", name: "Western Punjabi", countryCode: "pk", languageTag: "pnb" },
  { id: "swahili", name: "Swahili", countryCode: "ke", languageTag: "sw" },
  { id: "tagalog", name: "Tagalog", countryCode: "ph", languageTag: "tl" },
  { id: "tamil", name: "Tamil", countryCode: "in", languageTag: "ta" },
  { id: "yue-chinese", name: "Yue Chinese (incl. Cantonese)", countryCode: "hk", languageTag: "yue" },
  { id: "wu-chinese", name: "Wu Chinese", countryCode: "cn", languageTag: "wuu" },
  { id: "iranian-persian", name: "Iranian Persian", countryCode: "ir", languageTag: "fa" },
  { id: "korean", name: "Korean", countryCode: "kr", languageTag: "ko" },
  { id: "thai", name: "Thai", countryCode: "th", languageTag: "th" },
  { id: "javanese", name: "Javanese", countryCode: "id", languageTag: "jv" },
  { id: "italian", name: "Italian", countryCode: "it", languageTag: "it" },
  { id: "gujarati", name: "Gujarati", countryCode: "in", languageTag: "gu" },
  { id: "levantine-arabic", name: "Levantine Arabic", countryCode: "lb", languageTag: "apc" },
  { id: "amharic", name: "Amharic", countryCode: "et", languageTag: "am" },
  { id: "kannada", name: "Kannada", countryCode: "in", languageTag: "kn" },
  { id: "bhojpuri", name: "Bhojpuri", countryCode: "in", languageTag: "bho" },
  { id: "sudanese-arabic", name: "Sudanese Arabic", countryCode: "sd", languageTag: "apd" },
  { id: "polish", name: "Polish", countryCode: "pl", languageTag: "pl" },
  { id: "chinese-jinyu", name: "Chinese, Jinyu", countryCode: "cn", languageTag: "cjy" },
  { id: "ukrainian", name: "Ukrainian", countryCode: "ua", languageTag: "uk" },
  { id: "chinese-xiang", name: "Chinese, Xiang", countryCode: "cn", languageTag: "hsn" },
  { id: "malayalam", name: "Malayalam", countryCode: "in", languageTag: "ml" },
  { id: "chinese-hakka", name: "Chinese, Hakka", countryCode: "cn", languageTag: "hak" },
  { id: "oriya-odia", name: "Oriya (Odia)", countryCode: "in", languageTag: "or" },
  { id: "burmese", name: "Burmese", countryCode: "mm", languageTag: "my" },
  { id: "panjabi-eastern", name: "Panjabi, Eastern", countryCode: "in", languageTag: "pa" },
  { id: "sunda", name: "Sunda", countryCode: "id", languageTag: "su" },
  { id: "romanian", name: "Romanian", countryCode: "ro", languageTag: "ro" },
  { id: "maithili", name: "Maithili", countryCode: "in", languageTag: "mai" },
  { id: "azerbaijani", name: "Azerbaijani", countryCode: "az", languageTag: "az" },
];

interface LocalizedMarqueeLanguageItem extends MarqueeLanguageItem {
  label: string;
}

const LANGUAGE_FALLBACK_BY_ID: Readonly<Record<string, string>> = {
  "nigerian-pidgin": "en",
  "egyptian-arabic": "ar",
  "levantine-arabic": "ar",
  "sudanese-arabic": "ar",
  "western-punjabi": "pa",
  "yue-chinese": "zh",
  "wu-chinese": "zh",
  "chinese-jinyu": "zh",
  "chinese-xiang": "zh",
  "chinese-hakka": "zh",
  "bhojpuri": "hi",
  "maithili": "hi",
  "sunda": "id"
};

const resolveLanguageLabel = (item: MarqueeLanguageItem, displayNames: Intl.DisplayNames): string => {
  const displayName = displayNames.of(item.languageTag);
  if (displayName) {
    return displayName;
  }

  const fallbackTag = LANGUAGE_FALLBACK_BY_ID[item.id];
  if (fallbackTag) {
    const fallbackName = displayNames.of(fallbackTag);
    if (fallbackName) {
      return fallbackName;
    }
  }

  return item.name;
};

export const getLocalizedMarqueeLanguages = (locale: AppLocale): LocalizedMarqueeLanguageItem[] => {
  const { langTag } = getLocaleMeta(locale);
  const displayNames = new Intl.DisplayNames([langTag], { type: "language" });

  return marqueeLanguages.map((item) => ({
    ...item,
    label: resolveLanguageLabel(item, displayNames)
  }));
};
