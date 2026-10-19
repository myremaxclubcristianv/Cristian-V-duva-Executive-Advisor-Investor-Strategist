"use client";
import React, { useState } from 'react';
import { useLocale, Locale } from '@/app/context/LocaleContext';

const languages: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ro', label: 'RO' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'ar', label: 'AR' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const select = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className="language-switcher" style={{ position: 'relative' }}>
      <button
        className="lang-toggle"
        onClick={toggle}
        aria-label="Select language"
        aria-expanded={open}
        style={{ color: '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {locale.toUpperCase()} ▾
      </button>
      {open && (
        <ul className="lang-menu" style={{ position: 'absolute', right: 0, marginTop: '0.5rem', background: '#0B1421', border: '1px solid rgba(255,255,255,0.10)', listStyle: 'none', padding: '0.5rem', zIndex: 20 }}>
          {languages.map((l) => (
            <li key={l.code} style={{ margin: '0' }}>
              <button
                onClick={() => select(l.code)}
                style={{
                  background: 'none',
                  border: 'none',
                  width: '100%',
                  textAlign: 'right',
                  color: locale === l.code ? '#C6A15B' : '#FFFFFF',
                  padding: '0.25rem 0',
                  cursor: 'pointer',
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
