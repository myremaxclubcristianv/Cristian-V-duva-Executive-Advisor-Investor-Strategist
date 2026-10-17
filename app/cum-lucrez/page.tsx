import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  FileCheck2,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  UserCheck,
  Briefcase,
  Building
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cum Lucrez și Stabilirea Remunerației | Executive Cristian Văduva",
  description: "Transparență contractuală privind modelele de remunerare, etapele colaborării, procedura KYC, confidențialitatea NDA și delimitarea responsabilităților profesionale în mandatele imobiliare premium.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/cum-lucrez",
  },
  openGraph: {
    title: "Cum Lucrez și Cum Este Stabilită Remunerația | Cristian Văduva",
    description: "Claritate contractuală, etape de lucru, modele de mandat și delimitarea responsabilităților în consultanța imobiliară privată.",
    url: "https://executive.cristianvaduva.com/cum-lucrez",
    type: "website",
  },
};

export default function CumLucrezPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/3 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* HERO */}
          <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <Scale className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>ETAPĂ METODOLOGICĂ · TRANSPARENȚĂ DEPLINĂ</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Cum Lucrez și Cum Este Stabilită Remunerația
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Relațiile profesionale de succes se bazează pe așteptări clar definite, absența conflictelor de interese și o remunerare proporțională cu valoarea adusă și complexitatea mandatului.
            </p>
          </section>

          {/* 1. ETAPELE COLABORĂRII */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                01 // CĂLĂTORIA MANDATULUI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Etapele unei Colaborări Structurate
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                Fiecare proiect parcurge o succesiune logică, concepută pentru a asigura fundamentarea solidă a fiecărei decizii.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 font-mono text-xs text-[#93C8FF]">
                  <span className="text-xl sm:text-2xl font-serif text-[#F5F4EF] block mb-1">01</span>
                  <span>DISCUȚIE ORIENTATIVĂ (20 MIN)</span>
                </div>
                <div className="lg:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Evaluarea Compatibilității & Obiectivelor</h3>
                  <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                    O conversație inițială confidențială în care clarificăm ce căutați sau doriți să valorificați, care este orizontul de timp și dacă specificul proiectului se încadrează în aria noastră de competență. Nu implică niciun cost și nicio obligație contractuală.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 font-mono text-xs text-[#93C8FF]">
                  <span className="text-xl sm:text-2xl font-serif text-[#F5F4EF] block mb-1">02</span>
                  <span>MANDAT SCRIS & ACORD NDA</span>
                </div>
                <div className="lg:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Formalizarea Relației & Cadrul de Confidențialitate</h3>
                  <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                    Dacă decidem să colaborăm, semnăm un contract scris bilateral (mandat de consultanță sau reprezentare) și un acord de confidențialitate (NDA). În acest contract sunt stipulate exact serviciile furnizate, responsabilitățile, structura remunerației și termenele de plată.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 font-mono text-xs text-[#93C8FF]">
                  <span className="text-xl sm:text-2xl font-serif text-[#F5F4EF] block mb-1">03</span>
                  <span>SELECȚIE & VERIFICARE ACTIVĂ</span>
                </div>
                <div className="lg:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Căutare, Filtrare & Analiză Comparativă</h3>
                  <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                    Pentru cumpărători: scanăm piața, verificăm proprietățile off-market, eliminăm listările compromise și realizăm evaluări de preț bazate pe metodologie like-for-like. Pentru vânzători: realizăm auditul de prezentare și precalificăm cumpărătorii.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 font-mono text-xs text-[#93C8FF]">
                  <span className="text-xl sm:text-2xl font-serif text-[#F5F4EF] block mb-1">04</span>
                  <span>COORDONARE DUE DILIGENCE</span>
                </div>
                <div className="lg:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Audit Tehnic, Cadastral & Juridic Extern</h3>
                  <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                    Centralizăm extrasul de carte funciară, istoricul titlurilor de proprietate, autorizațiile de construire și documentația de urbanism. Coordonăm intervenția avocaților dumneavoastră și a experților tehnici independenți pentru a elimina orice surpriză structurală sau juridică.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.08] grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3 font-mono text-xs text-[#93C8FF]">
                  <span className="text-xl sm:text-2xl font-serif text-[#F5F4EF] block mb-1">05</span>
                  <span>ASISTENȚĂ ÎN NEGOCIERE & ÎNCHEIERE</span>
                </div>
                <div className="lg:col-span-9 space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Finalizarea Tranzacției la Biroul Notarial</h3>
                  <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                    Asistăm la formularea ofertelor scrise, negocierea clauzelor financiare din antecontract și sincronizarea tuturor documentelor necesare redactării actului autentic de către notarul public ales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MODELELE DE REMUNERARE */}
          <section className="space-y-8 p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                02 // STRUCTURA ONORARIILOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Modele de Remunerare Factuale & Transparente
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-3xl leading-relaxed">
                Nu operăm cu tarife fixe generalizate impuse arbitrar. Fiecare mandat are un grad distinct de complexitate, volum de muncă și durată estimată. Modelul financiar este agreat întotdeauna înainte de începerea colaborării.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 bg-black/40 border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF] block">MODELUL A</span>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Retainer de Consultanță</h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                  O sumă fixă lunară sau per etapă, aplicată mandatelor complexe de căutare exclusivă, audit preliminar sau asistență strategică pe termen extins. Acoperă timpul dedicat și cercetarea detaliată, indiferent de decizia finală de achiziție a clientului.
                </p>
                <div className="pt-2 font-mono text-[11px] text-[#A97F60]">
                  Garantează dedicare 100% și aliniere deplină
                </div>
              </div>

              <div className="p-6 bg-black/40 border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF] block">MODELUL B</span>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Onorariu de Succes (Comision)</h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                  Un procent agreat contractual din valoarea tranzacției, datorat exclusiv la semnarea actului autentic de vânzare-cumpărare în fața notarului public. Aplicabil mandatelor de vânzare asistată sau intermedierilor bilaterale agreate explicit.
                </p>
                <div className="pt-2 font-mono text-[11px] text-[#A97F60]">
                  Legat strict de realizarea efectivă a tranzacției
                </div>
              </div>

              <div className="p-6 bg-black/40 border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF] block">MODELUL C</span>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Structură Hibridă</h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                  O combinație între un retainer inițial redus (care acoperă costurile operaționale directe de selecție și due diligence) și o componentă de succes dedusă parțial la finalizarea tranzacției.
                </p>
                <div className="pt-2 font-mono text-[11px] text-[#A97F60]">
                  Echilibru optim între risc, efort și rezultat
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border-l-2 border-[#93C8FF] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">
                Politica privind dubla comisionare:
              </strong>
              În cadrul mandatelor de reprezentare unilaterală a cumpărătorului, refuzăm încasarea de comisioane ascunse de la vânzător sau dezvoltator fără acordul scris, prealabil și explicit al clientului reprezentat. Aceasta este singura garanție veritabilă a unei apărări autentice a intereselor financiare ale cumpărătorului.
            </div>
          </section>

          {/* 3. KYC, AML & ROLUL NDA */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                03 // CONFORMITATE & CONFIDENȚIALITATE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                KYC Legal și Confidențialitate Contractuală
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-[#93C8FF]" />
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Procesul KYC / AML ca Cerință Legală</h3>
                </div>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Procedura „Know Your Customer” (KYC) și verificările privind prevenirea spălării banilor (AML) sunt cerințe obligatorii prevăzute de legislația națională (Legea 129/2019) și directivele europene.
                </p>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Prezentăm aceste verificări cu maximă seriozitate: solicităm identificarea persoanei fizice sau a beneficiarului real al entității juridice și clarificarea provenienței fondurilor. Nu promitem anonimat în fața autorităților bancare, fiscale sau notariale și nu oferim structuri fictive pentru eludarea normelor legale.
                </p>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#A97F60]" />
                  <h3 className="font-serif text-xl text-[#F5F4EF]">Rolul și Limitele Acordului NDA</h3>
                </div>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Acordul Bilateral de Confidențialitate (Non-Disclosure Agreement) este un instrument contractual civil menit să protejeze datele de afaceri, preferințele particulare ale familiei dumneavoastră și termenii negocierilor față de terți neimplicați.
                </p>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Mențiune de transparență: un NDA este o obligație contractuală civilă între părți. El nu conferă secret profesional similar celui al avocatului înscris în Barou și nu poate fi invocat pentru a încălca obligațiile legale de raportare către autoritățile competente prevăzute de lege.
                </p>
              </div>
            </div>
          </section>

          {/* 4. CALENDAR ORIENTATIV */}
          <section className="space-y-8 p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                04 // ORIZONT TEMPORAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Calendar Orientativ al unui Mandat
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                O tranzacție imobiliară premium necesită răbdare și rigoare. Nu oferim promisiuni de timp nerealiste; durata depinde de raritatea activului căutat și complexitatea verificărilor.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs text-[#B8C2CF]">
              <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-[#93C8FF]">
                  <Clock className="w-4 h-4" />
                  <span>SĂPTĂMÂNA 1 – 2</span>
                </div>
                <h4 className="font-serif text-base text-[#F5F4EF] font-sans">Cadru & Criterii Eliminatorii</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Semnarea mandatului, stabilirea matricei de criterii, discuția cu consilierii financiari și creionarea profilului de risc.
                </p>
              </div>

              <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-[#93C8FF]">
                  <Clock className="w-4 h-4" />
                  <span>SĂPTĂMÂNA 3 – 8 (SAU EXTINS)</span>
                </div>
                <h4 className="font-serif text-base text-[#F5F4EF] font-sans">Filtrare & Inspecții Tehnice</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Vizionarea activelor calificate, colectarea cărților funciare, evaluări comparative de preț și verificări tehnice structurale.
                </p>
              </div>

              <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-[#93C8FF]">
                  <Clock className="w-4 h-4" />
                  <span>SĂPTĂMÂNA 9 – 12</span>
                </div>
                <h4 className="font-serif text-base text-[#F5F4EF] font-sans">Negociere & Finalizare Notarială</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Negocierea termenilor finali, verificarea draftului de contract la notar, transferul fondurilor prin cont escrow și recepția cheilor.
                </p>
              </div>
            </div>
          </section>

          {/* 5. CE OFERIM DIRECT VS CE NECESITĂ PROFESIONIȘTI EXTERNI */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                05 // DELIMITAREA COMPETENȚELOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Ce Oferă Direct Executive vs. Ce Necesită Profesioniști Externi
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-2 text-[#93C8FF] font-mono text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Servicii Oferite Direct de Executive</span>
                </div>
                <ul className="space-y-3 font-sans text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Consultanță strategică imobiliară și formulare mandat de căutare / vânzare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Analiză comparativă de piață bazată pe tranzacții reale like-for-like</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Filtrare preliminară a proprietăților și eliminarea celor compromise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Asistență directă în formularea strategiei și a poziției de negociere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Coordonarea comunicării între toți experții implicați în tranzacție</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Servicii ce Necesită Profesioniști Acreditați Externi</span>
                </div>
                <ul className="space-y-3 font-sans text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <span>Asistență și reprezentare juridică formală (furnizată exclusiv de avocați înscriși în Barou)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <span>Autentificarea actelor de vânzare-cumpărare (exclusiv la birouri notariale autorizate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <span>Rapoarte oficiale de evaluare pentru bănci/instituții (evaluatori atestați ANEVAR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <span>Audit structural de rezistență și expertiză tehnică MLPAT (ingineri atestați)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <span>Consultanță fiscală personalizată privind impozitarea averii și rezidența fiscală</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. CE NU OFERĂ EXECUTIVE */}
          <section className="p-8 sm:p-10 bg-white/[0.02] border border-white/[0.08] space-y-4">
            <h3 className="font-serif text-xl text-[#F5F4EF]">Ce NU oferă Executive:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-[#8A95A5]">
              <div className="p-3 bg-black/40 border border-white/[0.05]">
                Nu intermediem credite bancare de consum neautorizate
              </div>
              <div className="p-3 bg-black/40 border border-white/[0.05]">
                Nu promitem randamente investiționale garantate
              </div>
              <div className="p-3 bg-black/40 border border-white/[0.05]">
                Nu facilităm scheme de evitare fiscală sau anonimat ilicit
              </div>
              <div className="p-3 bg-black/40 border border-white/[0.05]">
                Nu practicăm comisioane duble ascunse pe aceeași tranzacție
              </div>
            </div>
          </section>

          {/* CTA CADRAN */}
          <section className="p-10 sm:p-14 bg-[#0C1119] border border-white/[0.1] text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
              Doriți să discutăm despre un proiect specific?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-xl mx-auto leading-relaxed">
              Programați o primă conversație de 20 de minute. Fără nicio obligație comercială.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pentru-clienti"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] bg-[#07090D] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
              >
                <span>PENTRU CLIENȚI ROMÂNI</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
