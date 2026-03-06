"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MESSAGES, type Messages } from "@/lib/i18n/messages";
import { DEFAULT_LOCALE, getLocaleMeta, isAppLocale, type AppLocale } from "@/lib/i18n/locales";
import { localizeBrandInMessages } from "@/lib/i18n/brand";

interface LanguageContextValue {
  locale: AppLocale;
  messages: Messages;
  setLocale: (locale: AppLocale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "sophie-locale";
const COOKIE_KEY = "locale";

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLocale?: AppLocale;
}

export const LanguageProvider = ({ children, initialLocale = DEFAULT_LOCALE }: LanguageProviderProps) => {
  const [locale, setLocaleState] = useState<AppLocale>(initialLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && isAppLocale(saved)) {
      setLocaleState((currentLocale) => (currentLocale === saved ? currentLocale : saved));
    }
  // Read persisted locale once on mount to avoid effect ping-pong loops.
  }, []);

  useEffect(() => {
    const localeMeta = getLocaleMeta(locale);
    document.documentElement.lang = localeMeta.langTag;
    document.documentElement.dir = localeMeta.dir;

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.cookie = `${COOKIE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY || !event.newValue || !isAppLocale(event.newValue)) {
        return;
      }
      setLocaleState(event.newValue);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLocale = useCallback((nextLocale: AppLocale) => {
    setLocaleState((currentLocale) => (currentLocale === nextLocale ? currentLocale : nextLocale));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      messages: localizeBrandInMessages(MESSAGES[locale], locale),
      setLocale
    }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
