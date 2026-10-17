import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  FileText,
  Search,
  ArrowRight,
  CheckCircle2,
  Globe,
  Scale,
  Users,
  Lock,
  Calendar
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Consultanță Imobiliară Premium pentru Clienți Privați | Executive",
  description: "Servicii de consultanță strategică, reprezentare unilaterală dedicată și due diligence imobiliar pentru achiziția și vânzarea de proprietăți rezidențiale de prestigiu în București și internațional.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/pentru-clienti",
  },
  openGraph: {
    title: "Consultanță Imobiliară Premium pentru Clienți Privați | Cristian Văduva",
    description: "Orientare strategică independentă pentru decizii de achiziție și vânzare imobiliară premium în București și internațional.",
    url: "https://executive.cristianvaduva.com/pentru-clienti",
    type: "website",
  },
};

export default function PentruClientiPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-32">

          {/* HERO SECTION */}
          <section className="space-y-8 max-w-4xl border-b border-white/[0.08] pb-16">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>PENTRU CLIENȚI PRIVATAȚI · REPREZENTARE DEDICATĂ</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Consultanță și Orientare pentru Decizii Imobiliare Premium
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Executive oferă asistență strategică privată cumpărătorilor și proprietarilor de active rezidențiale de prestigiu. Lucrăm exclusiv pe bază de mandat scris, eliminând conflictele de interese și oferind o analiză obiectivă, documentată riguros.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <span>SOLICITĂ O DISCUȚIE DE 20 MINUTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cum-lucrez"
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
              >
                <span>CUM FUNCȚIONEAZĂ REMUNERAȚIA</span>
              </Link>
            </div>
          </section>

          {/* CE POATE FACE EXECUTIVE PENTRU DUMNEAVOASTRĂ */}
          <section className="space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                01 // CAPABILITĂȚI & ASISTENȚĂ PRACTICĂ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Ce poate face Executive pentru dumneavoastră
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                O abordare structurată concepută pentru a proteja capitalul și timpul decidentului, de la selecția preliminară până la finalizarea formală.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Mandat de Achiziție (Buyer Advisory)</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Definim împreună profilul exact al proprietății dorite, filtrăm piața publică și identificăm oportunități off-market. Evaluăm riscurile ascunse și negociem exclusiv în interesul dumneavoastră.
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Filtrare independentă fără bias comercial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Analiză comparativă like-for-like</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Negociere asistată de preț și termeni</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Vânzare Asistată & Poziționare</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Pentru proprietarii de reședințe excepționale, pregătim un dosar de prezentare impecabil din punct de vedere tehnic și juridic, stabilim prețul optim fundamentat pe date reale și gestionăm discret accesul potențialilor cumpărători calificați.
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Verificarea prealabilă a documentației cadastrale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Precalificarea financiară a cumpărătorilor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Prezentare discretă fără listări spam</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Coordonare Due Diligence</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Coordonăm verificarea istoricului de proprietate, a conformității urbanistice și a stării tehnice structurale prin intermediul experților independenți (avocați, notari publici, ingineri atestați, evaluatori ANEVAR).
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Centralizarea dosarului de achiziție</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Identificarea neconcordanțelor din cartea funciară</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>Asistență până la semnarea actului autentic</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* PIEȚE ȘI ZONE RELEVANTE */}
          <section className="space-y-8 p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                02 // ARIA GEOGRAFICĂ & SEGMENTE ACOPERITE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                Piețe Relevante: București Prime & Coridoare Globale
              </h2>
              <p className="font-sans text-sm text-[#8A95A5] max-w-3xl leading-relaxed">
                Ne concentrăm exclusiv pe segmentele rezidențiale unde calitatea construcției, raritatea urbanistică și valoarea patrimonială justifică o abordare personalizată.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-[#93C8FF] flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>București & Zona Metropolitană de Nord</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                  Monitorizăm permanent micro-piețele consacrate din Capitală:
                </p>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs text-[#B8C2CF]">
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Herăstrău & Șoseaua Nordului</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Primăverii & Aviatorilor</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Kiseleff & Dorobanți Capitale</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Floreasca & Lacul Tei</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Pipera Rezidențial (Vile)</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Proprietăți Istorice / Centru</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg text-[#93C8FF] flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Coridoare Internaționale prin Rețeaua Chestertons</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                  Prin afilierea profesională cu rețeaua internațională Chestertons, conectăm clienții privați din România direct cu birourile locale partenere din:
                </p>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs text-[#B8C2CF]">
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Londra (Prime Central London)</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Riviera Franceză & Cap d&apos;Ail</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Monaco (Parteneriate Locale)</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Dubai & Zona Golfului</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Madrid & Marbella (Spania)</div>
                  <div className="p-2.5 bg-black/40 border border-white/[0.05]">Insulele Baleare (Mallorca)</div>
                </div>
              </div>
            </div>
          </section>

          {/* CUM FUNCȚIONEAZĂ COLABORAREA & REMUNERAȚIA */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                03 // METODOLOGIE & TRANSPARENȚĂ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Cum funcționează colaborarea și stabilirea remunerației
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                O relație profesională bazată pe claritate totală, etape documentate și remunerare agreată în avans prin contract scris.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 pt-2">
              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF]">ETAPA 01</span>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Discuție Inițială</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  O conversație confidențială de 20 de minute pentru a evalua compatibilitatea proiectului dumneavoastră cu aria noastră de expertiză.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF]">ETAPA 02</span>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Mandat & Acord NDA</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Definirea explicită a obiectivelor, a termenilor de confidențialitate bilaterală și a formulei de remunerare aplicabile.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF]">ETAPA 03</span>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Analiză & Verificare</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Filtrarea activelor, verificarea comparativă a prețurilor reale și coordonarea auditului tehnic și cadastral preliminar.
                </p>
              </div>

              <div className="p-6 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <span className="font-mono text-xs text-[#93C8FF]">ETAPA 04</span>
                <h4 className="font-serif text-lg text-[#F5F4EF]">Negociere & Încheiere</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Asistență strategică în redactarea antecontractului, structurarea garanțiilor și finalizarea tranzacției la biroul notarial.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-[#F5F4EF]">Aflați mai multe despre structura de remunerare</h4>
                <p className="font-sans text-xs sm:text-sm text-[#8A95A5]">
                  Explicații detaliate privind retainerul de consultanță, comisionul de succes și responsabilitățile părților.
                </p>
              </div>
              <Link
                href="/cum-lucrez"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0C1119] border border-white/20 text-[#F5F4EF] font-mono text-xs uppercase tracking-wider hover:border-[#93C8FF] shrink-0 transition-colors"
              >
                <span>CONSULTĂ PAGINA „CUM LUCREZ”</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#93C8FF]" />
              </Link>
            </div>
          </section>

          {/* DELIMITARE LEGALĂ, DUE DILIGENCE ȘI CONFIDENȚIALITATE */}
          <section className="space-y-8 p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                04 // CONFORMITATE & TRANSPARENȚĂ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                Due Diligence, Confidențialitate Contractuală și Limitele Serviciului
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-serif text-base text-[#F5F4EF] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#93C8FF]" />
                  <span>Confidențialitate Contractuală (NDA) și KYC Legal</span>
                </h4>
                <p>
                  Protejăm datele și planurile clienților noștri printr-un Acord Bilateral de Confidențialitate (NDA) semnat anterior transmiterii oricăror date sensibile. În același timp, operăm în deplină conformitate cu legislația națională și europeană de prevenire a spălării banilor (KYC/AML). Nu oferim și nu încurajăm scheme de evitare fiscală sau anonimat ilicit.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-base text-[#F5F4EF] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#93C8FF]" />
                  <span>Delimitarea Consultanței de Serviciile Reglementate</span>
                </h4>
                <p>
                  Serviciile oferite de Cristian Văduva / Executive reprezintă asistență strategică și coordonare în tranzacții imobiliare. Acestea nu constituie asistență juridică formală (rezervată avocaților înscriși în Barou), autentificare notarială (rezervată notarilor publici), raport de evaluare oficial (rezervat evaluatorilor atestați ANEVAR) sau consultanță fiscală autorizată. Colaborăm deschis cu avocații și consilierii dumneavoastră fiscali.
                </p>
              </div>
            </div>
          </section>

          {/* RELAȚII PROFESIONALE CONFIRMATE */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                05 // RELAȚII PROFESIONALE CONFIRMATE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Parteneriate și Afilieri Instituționale Factuale
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <span className="font-mono text-xs text-[#93C8FF] uppercase tracking-wider block">
                  REȚEA IMOBILIARĂ INTERNAȚIONALĂ
                </span>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">Chestertons Global Network</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Cristian Văduva colaborează în calitate de partener asociat pe piața din România, facilitând accesul direct la proprietăți internaționale prime și colaborarea nemijlocită cu birourile Chestertons din peste 30 de țări.
                </p>
                <div className="pt-2">
                  <Link
                    href="/parteneri"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#93C8FF] hover:underline"
                  >
                    <span>Detalii despre parteneriat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <span className="font-mono text-xs text-[#A97F60] uppercase tracking-wider block">
                  PROTECȚIE PATRIMONIALĂ & ASIGURĂRI
                </span>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">Partener Autorizat Generali România</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Parteneriat autorizat (agent de asigurare) dedicat structurării soluțiilor de protecție a reședințelor de mare valoare, evaluării corecte a costurilor de reconstrucție și acoperirii riscurilor pentru colecții și active rezidențiale.
                </p>
                <div className="pt-2">
                  <Link
                    href="/parteneri"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A97F60] hover:underline"
                  >
                    <span>Detalii despre parteneriat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA CADRAN */}
          <section className="p-10 sm:p-16 bg-[#0C1119] border border-white/[0.1] text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] block">
              PUNCT DE CONTACT DIRECT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] max-w-2xl mx-auto">
              Sunteți pregătit să analizați o decizie imobiliară importantă?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-xl mx-auto leading-relaxed">
              Programați o conversație inițială confidențială de 20 de minute. Fără obligații comerciale, orientată strict pe claritatea situației dumneavoastră.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <span>SOLICITĂ PROGRAMARE DE 20 MINUTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ghid-cumparator"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] bg-[#07090D] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
              >
                <span>DESCARCĂ DOSARUL CUMPĂRĂTORULUI</span>
              </Link>
            </div>
            <div className="pt-6 font-mono text-xs text-[#6B7280]">
              Email direct: <a href="mailto:cristianvaduva@duck.com" className="text-[#93C8FF] hover:underline">cristianvaduva@duck.com</a> · București, România
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
