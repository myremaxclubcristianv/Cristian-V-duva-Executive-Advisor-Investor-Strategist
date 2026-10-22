import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export default function EditorialInterruption() {
  return (
    <section className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-black/[0.08]">
      <div className="site-container space-y-16 sm:space-y-24">
        
        {/* Editorial Eyebrow Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#86868B]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
            <span className="font-semibold text-[#1D1D1F]">CONSULTANȚA DEDICATĂ</span>
            <span className="text-black/20">/</span>
            <span>REPREZENTARE DEDICATĂ</span>
          </div>
          <span className="text-[#86868B]">BUCUREȘTI · MONACO · DUBAI</span>
        </div>

        {/* Master Editorial Thesis: 12-Column Spread */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] font-semibold block">
                PRINCIPIU FUNDAMENTAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1F] leading-[1.06] tracking-tight font-normal">
                În tranzacțiile de mare valoare, asimetria de informație este cel mai mare risc.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#515154] font-light leading-relaxed">
              Tranzacțiile imobiliare complexe necesită o poziționare clară și fără ambiguități. Biroul Executive operează pe bază de mandat dedicat: acționăm exclusiv în interesul părții pe care o reprezentăm — vânzător, cumpărător sau investitor, conform cadrului contractual agreat.
            </p>

            <div className="pt-4 border-t border-black/[0.08] space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-2 border-b border-black/[0.06]">
                <span className="text-[#86868B] uppercase text-[10px] tracking-wider">CADRU DE LUCRU</span>
                <span className="font-sans font-medium text-[#1D1D1F]">Reprezentare pe Bază de Mandat</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-black/[0.06]">
                <span className="text-[#86868B] uppercase text-[10px] tracking-wider">CONFIDENȚIALITATE</span>
                <span className="font-sans font-medium text-[#1D1D1F]">Acord Bilateral (NDA) la Cerere</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#86868B] uppercase text-[10px] tracking-wider">ALINIERE STRATEGICĂ</span>
                <span className="font-sans font-medium text-[#1D1D1F]">Stabilită prin Contract de Mandat</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/pentru-clienti"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1D1D1F] text-[#F5F4EF] hover:bg-black font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-md group"
              >
                <span>CONSULTĂ DETALIILE MANDATULUI</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5F4EF] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: The 3 Core Practice Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            
            {/* Pillar 01 */}
            <div className="pb-8 border-b border-black/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-widest uppercase">
                  01 // ACHIZIȚIE REZIDENȚIALĂ PRIME (BUYER ADVISORY)
                </span>
                <Building2 className="w-4 h-4 text-black/40" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal">
                Reprezentare Exclusivă la Cumpărare & Acces Off-Market
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#515154] font-light leading-relaxed">
                Identificarea proprietăților ce nu apar pe portalurile publice, negociere pe baza valorii reale de piață și coordonarea procesului alături de notari și avocați de prestigiu.
              </p>
              <div className="pt-2">
                <Link href="/pentru-clienti" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#0066CC] hover:underline">
                  <span>Detalii reprezentare cumpărător</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="pb-8 border-b border-black/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-widest uppercase">
                  02 // AUDIT TEHNIC, CADASTRAL ȘI URBANISTIC
                </span>
                <TrendingUp className="w-4 h-4 text-black/40" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal">
                Diligence Structurat & Verificare Titlu
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#515154] font-light leading-relaxed">
                Verificarea istoricului de proprietate pe 30 de ani, concordanța releveelor cadastrale, analiza structurii de rezistență prin experți tehnici atestați în construcții și evaluarea riscurilor urbanistice vecine (PUZ/PUD).
              </p>
              <div className="pt-2">
                <Link href="/ghid-cumparator" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#0066CC] hover:underline">
                  <span>Consultă criteriile de audit</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-widest uppercase">
                  03 // ASIGURARE PATRIMONIALĂ & TRANSFER DE RISC
                </span>
                <ShieldCheck className="w-4 h-4 text-black/40" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal">
                Protecția Clădirilor la Valoare Reală de Reconstrucție
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#515154] font-light leading-relaxed">
                În calitate de agent autorizat Generali România, structurăm polițe dedicate pentru proprietăți de mare valoare, asigurând acoperirea costurilor de reconstrucție și răspundere civilă.
              </p>
              <div className="pt-2">
                <Link href="/parteneri" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#0066CC] hover:underline">
                  <span>Parteneriatul Generali România</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
