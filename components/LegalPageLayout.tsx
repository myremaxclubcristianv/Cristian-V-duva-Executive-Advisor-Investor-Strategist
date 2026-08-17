import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

interface LegalPageLayoutProps {
  kicker: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  kicker,
  title,
  subtitle,
  lastUpdated = "August 2026",
  children,
}: LegalPageLayoutProps) {
  const legalNavLinks = [
    { href: "/legal", label: "Legal Overview" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/gdpr", label: "GDPR Rights" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/terms-of-use", label: "Terms of Use" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/data-provenance", label: "Data Provenance" },
    { href: "/editorial-policy", label: "Editorial Policy" },
    { href: "/accessibility", label: "Accessibility" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Hero Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>{kicker}</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>COMPLIANCE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              {title}
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-3xl leading-relaxed pt-2">
              {subtitle}
            </p>
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-text-secondary/60 pt-2">
              <span>LAST REVIEWED: {lastUpdated}</span>
              <span>·</span>
              <span>JURISDICTION: EUROPEAN UNION / ROMANIA</span>
            </div>

            {/* Quick Legal Hub Navigation Pills */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-surface-secondary/40">
              {legalNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider border border-surface-secondary/70 bg-surface-primary/50 text-text-secondary/80 hover:border-accent hover:text-accent transition-quick"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Content Body */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto space-y-12">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
