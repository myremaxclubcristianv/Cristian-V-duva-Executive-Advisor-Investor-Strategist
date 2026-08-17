"use client";

import { useState, useEffect, useSyncExternalStore, useCallback } from "react";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean; // Always true
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "aix_cookie_consent_v1";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  preferences: true,
  analytics: false,
  marketing: false,
};

const emptySubscribe = () => () => {};

export default function CookieConsent() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  // Initialize from storage once mounted
  useEffect(() => {
    if (!isHydrated) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isHydrated]);

  // Listen for custom trigger to reopen preferences from footer
  useEffect(() => {
    const handleReopen = () => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          try {
            setPreferences(JSON.parse(stored));
          } catch {
            setPreferences(defaultPreferences);
          }
        }
      }
      setIsModalOpen(true);
      setIsOpen(false);
    };

    window.addEventListener("open-cookie-preferences", handleReopen);
    return () => window.removeEventListener("open-cookie-preferences", handleReopen);
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    }
    setPreferences(prefs);
    setIsOpen(false);
    setIsModalOpen(false);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyNecessary);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isHydrated || (!isOpen && !isModalOpen)) return null;

  return (
    <>
      {/* Initial Bottom Consent Banner */}
      {isOpen && !isModalOpen && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Notice"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-surface-primary/95 backdrop-blur-xl border-t border-surface-secondary/80 shadow-2xl transition-transform duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                <span>PRIVACY & TRANSPARENCY</span>
                <span className="w-4 h-[1px] bg-accent/40" />
                <span>COOKIE NOTICE</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
                We use strictly necessary technical storage to ensure platform integrity and remember your preferences. No non-essential advertising trackers are deployed without explicit consent. Read our{" "}
                <Link href="/cookies" className="text-accent underline hover:text-text-primary">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-accent underline hover:text-text-primary">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 lg:flex-none px-6 py-3 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="flex-1 lg:flex-none px-5 py-3 border border-surface-secondary/80 bg-background/50 text-text-primary font-mono text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-quick text-center"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-4 py-3 text-text-secondary hover:text-text-primary font-mono text-xs uppercase tracking-widest transition-quick text-center underline"
              >
                Customize
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Detailed Granular Preferences Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative max-w-2xl w-full bg-surface-primary border border-surface-secondary/80 p-6 sm:p-10 space-y-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-surface-secondary/60 pb-5">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">
                  DATA GOVERNANCE
                </span>
                <h2 id="cookie-modal-title" className="font-display text-2xl sm:text-3xl text-text-primary">
                  Cookie & Privacy Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-text-secondary hover:text-text-primary p-2 text-xl"
                aria-label="Close preferences modal"
              >
                &times;
              </button>
            </div>

            <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
              Configure which technologies you allow AiX Media and Cristian Văduva platforms to utilize during your session. Strictly necessary storage cannot be deactivated as it is required for core security and navigation.
            </p>

            <div className="space-y-5">
              {/* Category 1: Strictly Necessary */}
              <div className="p-4 border border-surface-secondary/70 bg-background/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base text-text-primary">1. Strictly Necessary Technologies</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 border border-accent/30">
                    Always Active
                  </span>
                </div>
                <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed">
                  Required for session management, security headers, viewport rendering, and remembering your consent state.
                </p>
              </div>

              {/* Category 2: Functional & Preferences */}
              <div className="p-4 border border-surface-secondary/70 bg-background/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base text-text-primary">2. Preference & Accessibility Storage</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) =>
                        setPreferences({ ...preferences, preferences: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-surface-secondary border border-surface-secondary/80 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>
                <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed">
                  Remembers your display preferences, reduced motion state, and audio/video player volume controls.
                </p>
              </div>

              {/* Category 3: Analytics & Diagnostics */}
              <div className="p-4 border border-surface-secondary/70 bg-background/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base text-text-primary">3. Anonymous Analytics & Diagnostics</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-surface-secondary border border-surface-secondary/80 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>
                <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed">
                  Helps understand route usage and platform latency anonymously to improve infrastructure performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-secondary/60">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-8 py-3.5 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-6 py-3.5 border border-surface-secondary/80 text-text-secondary hover:text-text-primary font-mono text-xs uppercase tracking-widest transition-quick"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
