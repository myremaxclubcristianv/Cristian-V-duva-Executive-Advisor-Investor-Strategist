import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export default function EditorialInterruption() {
  return (
    <section className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-black/[0.08]">
      <div className="site-container space-y-16 sm:space-y-24">
        
        {/* Editorial Eyebrow Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#515154]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
            <span className="font-semibold text-[#1D1D1F]">DEDICATED ADVISORY</span>
            <span className="text-black/30">/</span>
            <span className="text-[#515154]">MANDATE REPRESENTATION</span>
          </div>
          <span className="text-[#515154]">BUCHAREST · MONACO · DUBAI</span>
        </div>

        {/* Master Editorial Thesis: 12-Column Spread */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#7A4F30] font-semibold block">
                CORE PRINCIPLE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1F] leading-[1.06] tracking-tight font-normal">
                In high-value transactions, information asymmetry is the single greatest risk.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#333336] font-light leading-relaxed">
              Complex property transactions demand unambiguous alignment. The Executive practice operates strictly on a dedicated mandate basis: we act exclusively in the interest of the party we represent — buyer, seller, or investor — under a clearly defined contractual framework.
            </p>

            <div className="pt-4 border-t border-black/[0.08] space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-2 border-b border-black/[0.06]">
                <span className="text-[#515154] uppercase text-[10px] tracking-wider font-medium">ENGAGEMENT MODEL</span>
                <span className="font-sans font-medium text-[#1D1D1F]">Mandate-Based Representation</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-black/[0.06]">
                <span className="text-[#515154] uppercase text-[10px] tracking-wider font-medium">CONFIDENTIALITY</span>
                <span className="font-sans font-medium text-[#1D1D1F]">Bilateral NDA upon Request</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#515154] uppercase text-[10px] tracking-wider font-medium">STRATEGIC ALIGNMENT</span>
                <span className="font-sans font-medium text-[#1D1D1F]">Defined by Mandate Contract</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/pentru-clienti"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1D1D1F] text-[#F5F4EF] hover:bg-black font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-md group min-h-[48px]"
              >
                <span>EXPLORE MANDATE DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5F4EF] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: The 3 Core Practice Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            
            {/* Pillar 01 */}
            <div className="pb-8 border-b border-black/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7A4F30] font-semibold tracking-widest uppercase">
                  01 // PRIME RESIDENTIAL ACQUISITION (BUYER ADVISORY)
                </span>
                <Building2 className="w-4 h-4 text-black/60" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal">
                Exclusive Buyer Representation & Off-Market Access
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#333336] font-light leading-relaxed">
                Identifying discreet assets absent from public portals, evidence-based negotiation on true market value, and seamless coordination alongside leading legal and notary partners.
              </p>
              <div className="pt-2">
                <Link href="/pentru-clienti" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#0066CC] hover:underline underline-offset-4 min-h-[36px]">
                  <span>Buyer advisory details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="pb-8 border-b border-black/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7A4F30] font-semibold tracking-widest uppercase">
                  02 // TECHNICAL, CADASTRAL & ZONING AUDIT
                </span>
                <TrendingUp className="w-4 h-4 text-black/60" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal">
                Structured Due Diligence & Title Verification
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#333336] font-light leading-relaxed">
                Comprehensive 30-year chain of title review, cadastral survey verification, structural engineering inspections by certified technical experts, and adjacent zoning risk assessment (PUZ/PUD).
              </p>
              <div className="pt-2">
                <Link href="/ghid-cumparator" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#0066CC] hover:underline underline-offset-4 min-h-[36px]">
                  <span>Review audit criteria</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7A4F30] font-semibold tracking-widest uppercase">
                  03 // ASSET PROTECTION & RISK TRANSFER
                </span>
                <ShieldCheck className="w-4 h-4 text-black/60" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal">
                Prime Building Coverage at Full Reconstruction Value
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#333336] font-light leading-relaxed">
                As an authorized agent of Generali Romania, we structure tailored coverage for high-value properties, safeguarding replacement costs, structural liabilities, and civil liability.
              </p>
              <div className="pt-2">
                <Link href="/parteneri" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#0066CC] hover:underline underline-offset-4 min-h-[36px]">
                  <span>Generali Romania partnership</span>
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
