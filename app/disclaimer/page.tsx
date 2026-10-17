import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Notă Legală & Disclaimer — Cristian Văduva Executive",
  description: "Clarificări legale privind natura informațiilor editoriale, delimitarea serviciilor de consultanță personalizată și cadrul de remunerare.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      kicker="CADRU DE TRANSPARENȚĂ"
      title="Notă Legală, Delimitarea Serviciilor & Disclaimer"
      subtitle="Clarificări esențiale privind natura informațiilor publicate pe platformă, serviciile de consultanță personalizată și limitele de competență profesională."
      lastUpdated="Octombrie 2026"
    >
      <div className="space-y-12 text-[#B8C2CF] font-light leading-relaxed">
        {/* Core Distinction Callout */}
        <section className="bg-[#0C1119] border border-[#93C8FF]/40 p-8 space-y-5 shadow-2xl">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
            <span>DISTINCȚIE FUNDAMENTALĂ</span>
            <span className="w-4 h-[1px] bg-[#93C8FF]/40" />
            <span>INFORMAȚII PUBLICE VS. MANDATE CONTRACTATE</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
            Natura Conținutului Publicat și a Serviciilor Personalizate
          </h2>
          <div className="space-y-3 text-sm text-[#B8C2CF] leading-relaxed">
            <p>
              Toate articolele, analizele de piață, materialele video, monografiile de proprietăți și datele orientative publicate pe <span className="font-mono text-[#F5F4EF]">executive.cristianvaduva.com</span> au un caracter pur informativ și editorial. Ele reflectă observații profesionale și analize la data redactării și nu reprezintă o ofertă fermă sau un angajament contractual general.
            </p>
            <p>
              Serviciile de consultanță personalizată (bespoke advisory) sunt oferite <strong className="text-[#F5F4EF] font-medium">exclusiv în baza unui contract scris și a unui mandat expres</strong> convenit bilateral cu fiecare client. Un serviciu personalizat nu ia naștere prin simpla navigare pe acest site sau prin trimiterea unui mesaj inițial, ci exclusiv după definirea obiectivelor, verificările necesare și semnarea acordului contractual.
            </p>
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <Link
              href="/cum-lucrez"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#93C8FF] hover:underline"
            >
              <span>Consultă principiile de remunerare și etapele de colaborare pe pagina dedicată</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 1: Limitele de Competență */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECȚIUNEA 01</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">1. Limitele Profesionale și Servicii Externe</h2>
          </div>
          <p className="text-sm">
            Cristian Văduva oferă consultanță imobiliară strategică, asistență în selecția și negocierea proprietăților și coordonarea procesului de due diligence. Activitatea desfășurată <strong className="text-[#F5F4EF] font-medium">nu substituie și nu constituie servicii de asistență juridică rezervate avocaților</strong>, audit contabil/fiscal autorizat sau consultanță de investiții financiare reglementată pe piețe de capital.
          </p>
          <p className="text-sm">
            Pentru redactarea actelor autentice, autentificarea tranzacțiilor, emiterea de opinii juridice formale sau analize de structurare fiscală complexă, colaborăm punctual cu notari publici, case de avocatură și consultanți fiscali autorizați, sau recomandăm clientului apelarea la proprii săi consilieri independenți.
          </p>
        </section>

        {/* Section 2: Date Imobiliare și Reprezentări */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECȚIUNEA 02</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">2. Proprietăți, Suprafețe și Concepte Arhitecturale</h2>
          </div>
          <p className="text-sm">
            Descrierile proprietăților, suprafețele utile și construite, specificațiile tehnice și prețurile afișate în catalog sunt preluate din documentația furnizată de dezvoltatori, proprietari sau platformele partenere. Deși depunem diligențe rezonabile pentru verificarea corectitudinii acestora, orice cumpărător este sfătuit să solicite verificarea cărții funciare și a documentelor cadastrale înainte de orice angajament financiar.
          </p>
          <p className="text-sm">
            Imaginile etichetate drept <span className="text-[#F5F4EF] font-mono text-xs">Concept Arhitectural</span> sau <span className="text-[#F5F4EF] font-mono text-xs">Randare Ilustrativă</span> reprezintă studii de design și volumetrie, nefiind fotografii ale unor construcții finalizate.
          </p>
        </section>

        {/* Section 3: Remunerație & Relații Partenere */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECȚIUNEA 03</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">3. Transparența Remunerației și Parteneriate Comerciale</h2>
          </div>
          <p className="text-sm">
            Modul de remunerare variază în funcție de tipul serviciului (mandat de căutare cumpărător, intermediere vânzare, consultanță imobiliară). Relația cu Generali România este exercitată în calitate de partener/agent de asigurare autorizat, iar eventuala remunerare derivă din comisioanele standard reglementate în asigurări. Relația cu Chestertons oferă acces la rețeaua internațională de proprietăți.
          </p>
          <p className="text-sm">
            Toate detaliile privind eventualele comisioane, onorarii sau mecanisme de plată sunt prezentate detaliat pe pagina <Link href="/cum-lucrez" className="text-[#93C8FF] underline">Cum lucrez și cum este stabilită remunerația</Link> și sunt stipulate în contractul încheiat cu clientul.
          </p>
        </section>

        {/* Section 4: Riscuri de Piață și Fără Garanții Absolute */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] text-[#93C8FF] uppercase tracking-widest block">SECȚIUNEA 04</span>
            <h2 className="font-serif text-2xl text-[#F5F4EF]">4. Absența Garanțiilor Absolute & Riscuri de Piață</h2>
          </div>
          <p className="text-sm">
            Tranzacțiile imobiliare sunt supuse fluctuațiilor pieței, modificărilor legislative, evoluției ratelor dobânzilor și riscurilor specifice fiecărei proprietăți. Nu formulăm promisiuni absolute privind randamente viitoare, loialitate fără limite dincolo de cadrul contractual sau eliminarea totală a oricărui risc. Un proces structurat de due diligence are scopul de a reduce asimetria informațională și de a identifica riscurile documentate, fără a garanta că toate riscurile neevidente pot fi anticipate.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
