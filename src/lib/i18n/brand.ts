import type { AppLocale } from "./locales.ts";

export interface BrandTerms {
  name: string;
  ai: string;
  dotAi: string;
}

export const ERA_FIXED_TITLE = "Sophia AI";

// Product and brand names are intentionally fixed in English across all locales.
export const BRAND_TERMS: BrandTerms = {
  name: "Sophie",
  ai: "Sophie AI",
  dotAi: "Sophie.ai"
};

export const getBrandTerms = (_locale: AppLocale): BrandTerms => BRAND_TERMS;
