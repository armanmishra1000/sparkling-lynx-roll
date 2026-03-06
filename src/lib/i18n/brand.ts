import type { AppLocale } from "./locales.ts";
import type { Messages } from "./messages.ts";

export interface BrandTerms {
  name: string;
  ai: string;
  dotAi: string;
}

export const ERA_FIXED_TITLE = "Sophia AI";

const BRAND_TERMS_BY_LOCALE: Record<AppLocale, BrandTerms> = {
  en: {
    name: "Sophie",
    ai: "Sophie AI",
    dotAi: "Sophie.ai"
  },
  zh: {
    name: "\u82CF\u83F2",
    ai: "\u82CF\u83F2\u4EBA\u5DE5\u667A\u80FD",
    dotAi: "\u82CF\u83F2.ai"
  },
  hi: {
    name: "\u0938\u094B\u092B\u0940",
    ai: "\u0938\u094B\u092B\u0940 \u090F\u0906\u0908",
    dotAi: "\u0938\u094B\u092B\u0940.\u090F\u0906\u0908"
  },
  es: {
    name: "Sofia",
    ai: "Sofia IA",
    dotAi: "Sofia.ai"
  },
  ar: {
    name: "\u0635\u0648\u0641\u064A",
    ai: "\u0635\u0648\u0641\u064A \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
    dotAi: "\u0635\u0648\u0641\u064A.ai"
  }
};

const PROTECTED_LITERALS: readonly string[] = [
  "Sophie AI Inc."
];

const protectReservedLiterals = (value: string) => {
  let protectedValue = value;
  const markers = new Map<string, string>();

  for (let i = 0; i < PROTECTED_LITERALS.length; i += 1) {
    const literal = PROTECTED_LITERALS[i];
    if (!protectedValue.includes(literal)) {
      continue;
    }
    const marker = `__BRAND_LITERAL_${i}__`;
    markers.set(marker, literal);
    protectedValue = protectedValue.replaceAll(literal, marker);
  }

  return { protectedValue, markers };
};

export const getBrandTerms = (locale: AppLocale): BrandTerms => BRAND_TERMS_BY_LOCALE[locale];

export const localizeBrandTokens = (value: string, locale: AppLocale): string => {
  if (locale === "en") {
    return value;
  }

  const terms = getBrandTerms(locale);
  const { protectedValue, markers } = protectReservedLiterals(value);

  let localized = protectedValue
    .replace(/\bSophie\.ai\b/gu, terms.dotAi)
    .replace(/\bSophia AI\b/gu, terms.ai)
    .replace(/\bSophie AI\b(?!\s+Inc\.)/gu, terms.ai)
    .replace(/\bSophia\b/gu, terms.name)
    .replace(/\bSophie\b/gu, terms.name);

  for (const [marker, literal] of markers.entries()) {
    localized = localized.replaceAll(marker, literal);
  }

  return localized;
};

const localizeNode = <T>(value: T, locale: AppLocale): T => {
  if (typeof value === "string") {
    return localizeBrandTokens(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeNode(item, locale)) as T;
  }

  if (value !== null && typeof value === "object") {
    const localizedEntries = Object.entries(value as Record<string, unknown>).map(([key, nodeValue]) => [
      key,
      localizeNode(nodeValue, locale)
    ]);
    return Object.fromEntries(localizedEntries) as T;
  }

  return value;
};

export const localizeBrandInMessages = (messages: Messages, locale: AppLocale): Messages =>
  localizeNode(messages, locale);
