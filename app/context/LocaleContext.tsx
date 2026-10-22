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
  const [locale, setLocaleState] = useState<Locale>('ro');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLocale = (urlParams.get('lang') || urlParams.get('locale')) as Locale | null;
      const stored = localStorage.getItem('locale') as Locale | null;
      const target = (urlLocale && ['ro', 'en'].includes(urlLocale))
        ? urlLocale
        : (stored && ['ro', 'en'].includes(stored))
          ? stored
          : 'ro';

      if (target) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(target);
        document.documentElement.lang = target;
        document.documentElement.dir = target === 'ar' ? 'rtl' : 'ltr';
      }
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', l);
      document.documentElement.lang = l;
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    }
  };

  const t = getTranslation(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
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

