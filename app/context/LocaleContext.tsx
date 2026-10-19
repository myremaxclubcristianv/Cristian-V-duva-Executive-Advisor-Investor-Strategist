"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Locale = 'en' | 'ro' | 'fr' | 'de' | 'ar';

interface LocaleContextProps {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('locale') as Locale | null;
      if (stored) setLocaleState(stored);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', l);
      document.documentElement.lang = l === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
};


// Duplicate block removed – original definitions retained above.

