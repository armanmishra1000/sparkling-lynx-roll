import { getLocaleMeta, type AppLocale } from "@/lib/i18n/locales";

export interface MarqueeLanguageItem {
  id: string;
  name: string;
  countryCode: string;
  languageTag: string;
  youtubeShortsUrl?: string;
}

export const marqueeLanguages: MarqueeLanguageItem[] = [
  { id: "english", name: "English", countryCode: "gb", languageTag: "en" },
  { id: "mandarin-chinese", name: "Mandarin Chinese", countryCode: "cn", languageTag: "zh", youtubeShortsUrl: "https://www.youtube.com/shorts/SLEZ4VT1l3E" },
  { id: "hindi", name: "Hindi", countryCode: "in", languageTag: "hi", youtubeShortsUrl: "https://www.youtube.com/shorts/tYv8_HgTtsA" },
  { id: "spanish", name: "Spanish", countryCode: "es", languageTag: "es", youtubeShortsUrl: "https://www.youtube.com/shorts/7tu8vj7kyRg" },
  { id: "modern-standard-arabic", name: "Modern Standard Arabic", countryCode: "sa", languageTag: "ar", youtubeShortsUrl: "https://www.youtube.com/shorts/awFxWUvGAKg" },
  { id: "french", name: "French", countryCode: "fr", languageTag: "fr" },
  { id: "bengali", name: "Bengali", countryCode: "bd", languageTag: "bn" },
  { id: "portuguese", name: "Portuguese", countryCode: "pt", languageTag: "pt" },
  { id: "russian", name: "Russian", countryCode: "ru", languageTag: "ru", youtubeShortsUrl: "https://www.youtube.com/shorts/dxmVX3QHQTo" },
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

const LOCALE_LANGUAGE_NAME_OVERRIDES: Record<AppLocale, Partial<Record<string, string>>> = {
  en: {},
  es: {
    "western-punjabi": "Punjabi occidental",
    "nigerian-pidgin": "Pidgin nigeriano",
    "egyptian-arabic": "Árabe egipcio",
    "levantine-arabic": "Árabe levantino",
    "sudanese-arabic": "Árabe sudanés",
    "wu-chinese": "Chino wu",
    "chinese-jinyu": "Chino jinyu",
    "chinese-xiang": "Chino xiang",
    "chinese-hakka": "Chino hakka"
  },
  hi: {
    "western-punjabi": "पश्चिमी पंजाबी",
    "nigerian-pidgin": "नाइजीरियाई पिजिन",
    "egyptian-arabic": "मिस्री अरबी",
    "levantine-arabic": "लेवैंटाइन अरबी",
    "sudanese-arabic": "सूडानी अरबी",
    "wu-chinese": "वू चीनी",
    "chinese-jinyu": "जिन्यू चीनी",
    "chinese-xiang": "श्यांग चीनी",
    "chinese-hakka": "हक्का चीनी"
  },
  zh: {
    "western-punjabi": "西旁遮普语",
    "nigerian-pidgin": "尼日利亚皮钦语",
    "egyptian-arabic": "埃及阿拉伯语",
    "levantine-arabic": "黎凡特阿拉伯语",
    "sudanese-arabic": "苏丹阿拉伯语",
    "wu-chinese": "吴语",
    "chinese-jinyu": "晋语",
    "chinese-xiang": "湘语",
    "chinese-hakka": "客家话"
  },
  ar: {
    "western-punjabi": "البنجابية الغربية",
    "nigerian-pidgin": "البدجن النيجيرية",
    "egyptian-arabic": "العربية المصرية",
    "levantine-arabic": "العربية الشامية",
    "sudanese-arabic": "العربية السودانية",
    "wu-chinese": "الصينية وو",
    "chinese-jinyu": "الصينية جينيو",
    "chinese-xiang": "الصينية شيانغ",
    "chinese-hakka": "الصينية الهاكا"
  }
};

const SHORT_CODE_PATTERN = /^[a-z]{2,4}$/i;

const isCodeLikeLabel = (label: string, tag: string): boolean =>
  label.trim().toLowerCase() === tag.trim().toLowerCase() || SHORT_CODE_PATTERN.test(label.trim());

const resolveLanguageLabel = (item: MarqueeLanguageItem, locale: AppLocale, displayNames: Intl.DisplayNames): string => {
  const localeOverride = LOCALE_LANGUAGE_NAME_OVERRIDES[locale]?.[item.id];
  if (localeOverride) {
    return localeOverride;
  }

  const localizedName = displayNames.of(item.languageTag);
  if (localizedName && !isCodeLikeLabel(localizedName, item.languageTag)) {
    return localizedName;
  }

  return item.name;
};

export const getLocalizedMarqueeLanguages = (locale: AppLocale): LocalizedMarqueeLanguageItem[] => {
  const { langTag } = getLocaleMeta(locale);
  const displayNames = new Intl.DisplayNames([langTag], { type: "language" });

  return marqueeLanguages.map((item) => ({
    ...item,
    label: resolveLanguageLabel(item, locale, displayNames)
  }));
};
