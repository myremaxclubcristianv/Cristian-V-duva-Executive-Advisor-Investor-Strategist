"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Locale, Translations, getTranslation } from '@/lib/translations';

export type { Locale };

interface LocaleContextProps {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', 'en');
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  }, []);

  const setLocale = (_l: Locale) => {
    setLocaleState('en');
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', 'en');
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  };

  const t = getTranslation('en');

  return (
    <LocaleContext.Provider value={{ locale: 'en', setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
};

export const useTranslation = () => {
  const { t, locale } = useLocale();
  return { t, locale };
};

