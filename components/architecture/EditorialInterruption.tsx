import React from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export default function EditorialInterruption() {
  return (
    <section className="relative w-full bg-[#F5F4EF] text-[#07090D] py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-[#E2DDD5]">
      <div className="site-container space-y-16 sm:space-y-24">
        {/* Editorial Eyebrow Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#07090D]/10 pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#785338]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#07090D]" />
            <span className="font-semibold text-[#07090D]">MANDATUL FIDUCIAR</span>
            <span className="text-[#07090D]/30">/</span>
            <span>REPREZENTARE DEDICATĂ</span>
          </div>
          <span className="text-[#8A95A5]">BUCUREȘTI · MONACO · DUBAI</span>
        </div>

        {/* Master Editorial Thesis: 12-Column Asymmetric Spread */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Statement & Criteria (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                PRINCIPIU FUNDAMENTAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#07090D] leading-[1.08] tracking-tight font-normal">
                În tranzacțiile de mare valoare, asimetria de informație este cel mai mare risc.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#2C3440] font-light leading-relaxed">
              Tranzacțiile imobiliare tradiționale forțează intermediarul să servească ambele părți pentru a încasa un comision rapid. Biroul Executive operează exclusiv sub mandat unilateral: acționăm exclusiv în interesul dumneavoastră, fie ca mandatar de achiziție, fie ca reprezentant strategic la vânzare.
            </p>

            <div className="pt-4 border-t border-[#D8D0C2]/70 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-[#D8D0C2]/40">
                <span className="text-[#647082] uppercase text-[10px] tracking-wider">CADRU DE LUCRU</span>
                <span className="font-sans font-medium text-[#07090D]">Mandat Scris · Unilateral</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#D8D0C2]/40">
                <span className="text-[#647082] uppercase text-[10px] tracking-wider">CONFIDENȚIALITATE</span>
                <span className="font-sans font-medium text-[#07090D]">Acord Bilateral (NDA)</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#647082] uppercase text-[10px] tracking-wider">ALINIERE FINANCIARĂ</span>
                <span className="font-sans font-medium text-[#07090D]">Retainer sau Success Fee</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/pentru-clienti"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#07090D] text-[#F5F4EF] hover:bg-[#1B2028] font-mono text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-lg group"
              >
                <span>CONSULTĂ DETALIILE MANDATULUI</span>
                <ArrowUpRight className="w-4 h-4 text-[#A97F60] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: The 3 Core Practice Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            {/* Pillar 01 */}
            <div className="pb-8 border-b border-[#D8D0C2]/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-widest uppercase">
                  01 // ACHIZIȚIE REZIDENȚIALĂ PRIME (BUYER ADVISORY)
                </span>
                <Building2 className="w-4 h-4 text-[#07090D]/60" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#07090D]">
                Reprezentare Exclusivă la Cumpărare & Acces Off-Market
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#3A4553] font-light leading-relaxed">
                Identificarea proprietăților ce nu apar pe portalurile publice, negociere dură pe baza valorii reale de piață și coordonarea procesului alături de notari și avocați de prestigiu.
              </p>
              <div className="pt-2">
                <Link href="/pentru-clienti" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#07090D] font-semibold hover:text-[#785338] transition-colors group">
                  <span>Detalii Reprezentare Cumpărător</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A97F60] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="pb-8 border-b border-[#D8D0C2]/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-widest uppercase">
                  02 // AUDIT TEHNIC, CADASTRAL ȘI URBANISTIC
                </span>
                <TrendingUp className="w-4 h-4 text-[#07090D]/60" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#07090D]">
                Diligence Structurat & Verificare Titlu
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#3A4553] font-light leading-relaxed">
                Verificarea istoricului de proprietate pe 30 de ani, concordanța releveelor cadastrale, analiza structurii de rezistență prin experți MLPAT și evaluarea riscurilor urbanistice vecine (PUZ/PUD).
              </p>
              <div className="pt-2">
                <Link href="/ghid-cumparator" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#07090D] font-semibold hover:text-[#785338] transition-colors group">
                  <span>Consultă Criteriile de Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A97F60] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-widest uppercase">
                  03 // ASIGURARE PATRIMONIALĂ & TRANSFER DE RISC
                </span>
                <ShieldCheck className="w-4 h-4 text-[#07090D]/60" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#07090D]">
                Protecția Clădirilor la Valoare Reală de Reconstrucție
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#3A4553] font-light leading-relaxed">
                În calitate de agent autorizat Generali România, structurăm polițe dedicate pentru proprietăți de mare valoare, garantând acoperirea completă a costurilor de reconstrucție și răspundere civilă.
              </p>
              <div className="pt-2">
                <Link href="/parteneri" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#07090D] font-semibold hover:text-[#785338] transition-colors group">
                  <span>Parteneriatul Generali România</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A97F60] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
