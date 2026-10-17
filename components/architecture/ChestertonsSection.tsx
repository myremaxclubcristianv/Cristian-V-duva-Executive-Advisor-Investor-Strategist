import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowUpRight, ShieldCheck, Building } from "lucide-react";

/**
 * CHESTERTONS INTERNATIONAL AFFILIATION SECTION
 * Factual, refined editorial integration for the homepage.
 * Clarifies the international property network affiliation of Cristian Văduva with Chestertons.
 */
export default function ChestertonsSection() {
  return (
    <section className="relative w-full bg-[#07090D] text-[#F5F4EF] py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#93C8FF]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A97F60]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <Globe className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>REȚEA IMOBILIARĂ INTERNAȚIONALĂ · FONDATĂ 1805</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] font-normal tracking-tight leading-[1.15]">
              Acces Direct la Portofoliul Imobiliar Global Chestertons
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#8A95A5] leading-relaxed">
              Cristian Văduva activează în calitate de partener asociat în rețeaua internațională Chestertons, facilitând accesul clienților privați din România la proprietăți de prestigiu și oportunități rezidențiale pe marile piețe globale.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-3 font-mono text-xs text-[#8A95A5] shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#0C1119] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
              <span>HUB BUCUREȘTI · CORIDOARE GLOBALE</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#0C1119] border border-white/[0.08]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A97F60]" />
              <span>ASISTENȚĂ ÎN LIMBA ROMÂNĂ</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Editorial Narrative & Authentic Photography */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] bg-[#0C1119] border border-white/[0.1] overflow-hidden group">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
                alt="Cristian Văduva — Activitate în cadrul rețelei Chestertons Global Network"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/10 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] block">
                  FOTOGRAFIE AUTENTICĂ DIN ARHIVĂ
                </span>
                <p className="font-sans text-xs text-[#E1E4EA] leading-snug">
                  Cristian Văduva · Consultanță strategică și coordonare tranzacții internaționale
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-[#0C1119] border border-white/[0.06] font-mono text-xs text-[#8A95A5]">
              <span>PREZENȚĂ REȚEA GLOBALĂ</span>
              <span className="text-[#F5F4EF] font-medium">30+ ȚĂRI · 100+ BIROURI</span>
            </div>
          </div>

          {/* Editorial Content Side (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A97F60] font-semibold block">
                BENEFICII PENTRU CLIENTUL PRIVAT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
                Punte directă între patrimoniul local și cele mai căutate enclave internaționale
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed">
                Achiziția unei proprietăți de lux în afara țării implică adesea bariere lingvistice, asimetrii informaționale și particularități juridice locale. Prin afilierea cu Chestertons, beneficiați de un punct unic de contact la București, care filtrează ofertele, verifică credibilitatea dezvoltatorilor și vă conectează nemijlocit cu echipele locale dedicate.
              </p>
            </div>

            {/* Corridors Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Londra & Regatul Unit</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Mayfair, Belgravia, Kensington</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Apartamente rezidențiale de prestigiu, clădiri de patrimoniu și reședințe unifamiliale în inima capitalei britanice.
                </p>
              </div>

              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Riviera Franceză & Monaco</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Cap d&apos;Ail, Cannes, Saint-Tropez</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Vile de coastă cu vedere panoramică la Mediterană și proprietăți trofeu în enclave cu cerere permanentă.
                </p>
              </div>

              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Dubai & Emiratele Arabe</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Palm Jumeirah, Dubai Islands</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Proprietăți branded, penthouse-uri ultramoderne și oportunități selectate în proiecte masterplan internaționale.
                </p>
              </div>

              <div className="p-5 bg-[#0C1119] border border-white/[0.06] space-y-2 hover:border-[#93C8FF]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Spania & Baleare</span>
                </div>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Madrid, Marbella, Mallorca</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Reședințe de vacanță de lux, vile private în comunități securizate și apartamente prime în Madrid.
                </p>
              </div>
            </div>

            {/* Transparent Status Disclaimer Box */}
            <div className="p-4 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">
                Delimitare factuală a relației profesionale:
              </strong>
              Chestertons Global este o rețea imobiliară independentă fondată la Londra în 1805. Cristian Văduva colaborează în calitate de partener/asociat internațional pe piața din România. Platforma Executive nu deține și nu operează brandul Chestertons, ci oferă asistență de consultanță privată și facilitare de acces la proprietățile rețelei.
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/parteneri"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#F5F4EF] transition-colors"
              >
                <span>DETALII PARTENERIAT CHESTERTONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#93C8FF] transition-colors"
              >
                <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
