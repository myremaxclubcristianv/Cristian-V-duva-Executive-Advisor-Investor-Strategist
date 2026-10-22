import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Lock,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Studii de Caz & Cadrul Metodologic al Mandatelor | Executive",
  description:
    "Cadrul de analiză și structura metodologică aplicată în mandatele de consultanță imobiliară premium. Publicarea studiilor de caz reale respectă confidențialitatea strictă și acordul scris bilateral al clienților.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/studii-de-caz",
  },
  openGraph: {
    title: "Studii de Caz & Cadru Metodologic | Cristian Văduva",
    description:
      "Anatomia unui mandat structurat de consultanță imobiliară privată și politica riguroasă de confidențialitate a clienților.",
    url: "https://executive.cristianvaduva.com/studii-de-caz",
    type: "website",
  },
};

const ANATOMY_POINTS = [
  {
    num: "01",
    title: "Situația Inițială & Profil",
    desc: "Obiectivul clientului (locuință primară, plasament de capital, vânzare de patrimoniu), constrângerile de timp și criteriile obligatorii.",
  },
  {
    num: "02",
    title: "Diagnostic & Due Diligence",
    desc: "Verificarea istoricului de proprietate, a conformității cadastrale, a expertizei tehnice de rezistență și a stării juridice a cărții funciare.",
  },
  {
    num: "03",
    title: "Strategia de Mandat",
    desc: "Definirea modelului de abordare: scanare pe întreaga piață, identificare off-market sau poziționare discretă de vânzare.",
  },
  {
    num: "04",
    title: "Negocierea & Execuția",
    desc: "Structurarea poziției financiare pe bază de date like-for-like, negocierea clauzelor suspensive și optimizarea termenilor de plată.",
  },
  {
    num: "05",
    title: "Concluzie & Valoare Creată",
    desc: "Finalizarea actului autentic la biroul notarial, transferul fără riscuri juridice și economiile demonstrate prin audit.",
  },
];

export default function StudiiDeCazPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="max-w-4xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                <FileText className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>METODOLOGIE & MANDATE DOCUMENTATE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                Studii de Caz: Cadrul Metodologic de Analiză
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-3xl">
                Fiecare mandat imobiliar administrat de Executive urmează o procedură riguroasă de analiză tehnică, due diligence multidisciplinar și negociere strategică. Respectând acordurile stricte de confidențialitate (NDA), prezentăm aici arhitectura metodologică prin care gestionăm deciziile de anvergură.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/programare"
                  className="btn-apple-pill-primary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/cum-lucrez"
                  className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>METODOLOGIE & ETAPE DE LUCRU</span>
                </Link>
              </div>
            </div>
          </section>

          {/* EDITORIAL NOTICE ON FACTUAL INTEGRITY & CLIENT CONFIDENTIALITY */}
          <section className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.1] rounded-3xl relative shadow-xl">
            <div className="flex items-start gap-5">
              <div className="p-3 bg-white/[0.04] border border-white/[0.08] text-[#93C8FF] shrink-0 mt-1 rounded-2xl">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                  POLITICĂ DE CONFORMITATE FACTUALĂ & CONFIDENȚIALITATE (NDA)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Publicarea Responsabilă a Datelor: Zero Fictivitate
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#8A95A5] leading-relaxed">
                  Refuzăm categoric practica răspândită pe piață de a inventa tranzacții fictive, cumpărători imaginari, discounturi exagerate sau testimoniale fabricate. Mandatele imobiliare gestionate de Cristian Văduva implică patrimonii private și sunt protejate prin acorduri bilaterale de confidențialitate (NDA).
                </p>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Cazurile documentate sunt publicate exclusiv după finalizarea tranzacției, anonimizarea completă a tuturor datelor prin care părțile ar putea fi identificate indirect și obținerea consimțământului scris al fiecărui client în parte.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // ANATOMIA ÎN 5 PUNCTE */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="ARHITECTURĂ DE EVALUARE"
              title="Anatomia în 5 Puncte a Fiecărui Mandat Documentat"
              description="Standardul riguros după care este structurat fiecare dosar de consultanță pentru a garanta decizii sigure și verificate tehnic."
            />

            <div className="grid md:grid-cols-5 gap-4">
              {ANATOMY_POINTS.map((pt) => (
                <div
                  key={pt.num}
                  className="p-6 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF]/40 transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="font-serif text-2xl text-[#93C8FF] block">
                      {pt.num}
                    </span>
                    <h4 className="font-serif text-base text-[#F5F4EF] leading-snug">
                      {pt.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CHAPTER 02 // 3 STUDII CADRU WIREFRAME */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="CADRUL ILUSTRATIV DE MANDAT"
              title="Trei Scenarii Cadru de Asistență Strategică"
              description="Structurate pe baza metodologiei noastre operaționale, marcate transparent în curs de autorizare formală de către clienți."
            />

            <div className="space-y-10">
              {/* Case 01 */}
              <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08] space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] block">
                      SCENARIUL CADRU 01 // MANDAT DE ACHIZIȚIE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Achiziție Penthouse Rezidențial Prime · Zona Herăstrău
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.1] font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    ÎN CURS DE AUTORIZARE CLIENT (NDA)
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">PROVOCARE IDENTIFICATĂ</span>
                    <p className="leading-relaxed">
                      Căutare pe o piață restrânsă cu discrepanțe masive între prețurile cerute pe portaluri și calitatea reală a cărților tehnice.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">INTERVENȚIE EXECUTIVE</span>
                    <p className="leading-relaxed">
                      Scanare off-market, inspecție tehnică a teraselor și instalațiilor, corelarea valorii pe bază de tranzacții reale recente like-for-like.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">REZULTAT & PROTECȚIE</span>
                    <p className="leading-relaxed">
                      Optimizare negociată a clauzelor antecontractului, remedierea pe cheltuiala vânzătorului a viciilor minore și transfer notarial sigur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case 02 */}
              <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08] space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] block">
                      SCENARIUL CADRU 02 // VÂNZARE ASISTATĂ
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Poziționare & Vânzare Discretă Proprietate Individuală · Pipera
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.1] font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    ÎN CURS DE AUTORIZARE CLIENT (NDA)
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">PROVOCARE IDENTIFICATĂ</span>
                    <p className="leading-relaxed">
                      Proprietate de mare valoare cu istoric de listare publică necoordonată de către multiple agenții, generând confuzie de preț.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">INTERVENȚIE EXECUTIVE</span>
                    <p className="leading-relaxed">
                      Retragerea tuturor anunțurilor spam, refacerea dosarului cadastral, realizarea unui dosar tehnic de prezentare impecabil.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">REZULTAT & PROTECȚIE</span>
                    <p className="leading-relaxed">
                      Acces selectat doar pentru cumpărători precalificați financiar, eliminarea vizionărilor inutile și închidere la preț corect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case 03 */}
              <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.08] space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] block">
                      SCENARIUL CADRU 03 // AUDIT DUE DILIGENCE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Restructurare & Securizare Patrimoniu Imobiliar Istoric
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.1] font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    ÎN CURS DE AUTORIZARE CLIENT (NDA)
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">PROVOCARE IDENTIFICATĂ</span>
                    <p className="leading-relaxed">
                      Imobil istoric central cu suprapuneri cadastrale, servituți vechi nereglementate și riscuri de consolidare structurală.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">INTERVENȚIE EXECUTIVE</span>
                    <p className="leading-relaxed">
                      Coordonarea cabinetelor de avocatură pentru clarificarea sarcinilor, inspecție tehnică structurală de specialitate și reevaluare de piață ANEVAR.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-black/40 border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-[#93C8FF] uppercase block">REZULTAT & PROTECȚIE</span>
                    <p className="leading-relaxed">
                      Dosar de proprietate complet curățat de sarcini juridice, permițând cumpărătorului o investiție sigură pe termen lung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="AUDIT & DECIZIE STRUCTURATĂ"
            title="Doriți o evaluare obiectivă pentru o proprietate sau un portofoliu?"
            description="Programați o primă conversație confidențială de 20 de minute. Stabilim împreună dacă proiectul dumneavoastră se încadrează în standardele noastre de lucru."
            primaryCtaText="SOLICITĂ DISCUȚIE (20 MIN)"
            primaryCtaHref="/programare"
            secondaryCtaText="CUM LUCREZ: METODOLOGIE & ETAPE"
            secondaryCtaHref="/cum-lucrez"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
