"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Mail,
  Phone,
  User
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export default function ProgramarePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationType, setConsultationType] = useState("Achiziție rezidențială prime (Buyer Advisory)");
  const [preferredTimeframe, setPreferredTimeframe] = useState("După-amiaza (14:00 - 18:00)");
  const [requestPriorNDA, setRequestPriorNDA] = useState(false);
  const [notes, setNotes] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim()) {
      setErrorMsg("Vă rugăm să introduceți numele dumneavoastră.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Vă rugăm să introduceți o adresă de email validă.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Vă rugăm să introduceți numărul de telefon.");
      return;
    }
    if (!consentPrivacy) {
      setErrorMsg("Este necesar acordul pentru prelucrarea datelor în vederea confirmării programării.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/programare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          consultationType,
          preferredTimeframe,
          requestPriorNDA,
          notes,
          consentPrivacy,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "A apărut o problemă la transmiterea solicitării.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("A apărut o problemă neprevăzută.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-16 sm:space-y-24">

          {/* HERO */}
          <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-12">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <Calendar className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>DISCUȚIE INIȚIALĂ · 20 MINUTE CONFIDENȚIALE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Programare Conversație Inițială
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              O sesiune structurată de 20 de minute pentru a evalua obiectivele dumneavoastră imobiliare și compatibilitatea cu metodologia de lucru Executive. Fără obligații comerciale sau costuri asociate.
            </p>
          </section>

          {/* STRUCTURA CONVERSAȚIEI & CE TREBUIE SĂ ȘTIȚI */}
          <section className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Expectations & Guidelines (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#93C8FF] font-semibold block">
                  CE VA AVEA LOC ÎN CELE 20 DE MINUTE:
                </span>
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Clarificarea obiectivului:</strong> Înțelegerea profilului proprietății căutate sau a activului propus spre valorificare.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Evaluarea compatibilității:</strong> Verificarea dacă cerințele dumneavoastră se aliniază cu expertiza și aria noastră de acțiune.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Fără presiune comercială:</strong> Conversația este strict analitică. Nu vă vom propune proprietăți nepotrivite sau contracte pe loc.</span>
                  </li>
                </ul>
              </div>

              {/* Protocol NDA box */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>Opțiunea de Confidențialitate (NDA)</span>
                </div>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Dacă discuția vizează patrimonii private sensibile sau proprietăți off-market, puteți bifa opțiunea de a semna un Acord Bilateral de Confidențialitate (NDA) în prealabil, înainte de dezvăluirea detaliilor particulare.
                </p>
                <div className="text-[11px] font-mono text-[#6B7280]">
                  *Un NDA este o convenție contractuală civilă între părți.
                </div>
              </div>

              {/* Procedură de confirmare */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h4 className="font-serif text-sm text-[#F5F4EF]">Cum funcționează confirmarea:</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Nu utilizăm calendare automate care simulează disponibilități artificiale. Cristian Văduva verifică agenda personală și vă va contacta în termen de 24 de ore lucrătoare pentru a confirma data și intervalul convenit.
                </p>
              </div>
            </div>

            {/* Right: Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08]">
                {success ? (
                  <div className="space-y-6 text-center py-6">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white/[0.03] border border-[#93C8FF]/40 flex items-center justify-center text-[#93C8FF]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                        Solicitare Transmisă cu Succes
                      </h3>
                      <p className="font-sans text-sm text-[#8A95A5] max-w-md mx-auto leading-relaxed">
                        Vă mulțumim, <strong>{fullName}</strong>. Solicitarea dumneavoastră a fost înregistrată. Vă vom contacta la adresa <strong>{email}</strong> sau telefonic în maximum 24 de ore lucrătoare pentru a stabili ora exactă.
                      </p>
                    </div>

                    {requestPriorNDA && (
                      <div className="p-4 bg-black/40 border border-[#A97F60]/40 font-mono text-xs text-[#A97F60] max-w-md mx-auto">
                        Ați solicitat semnarea unui acord de confidențialitate (NDA) în prealabil. Draftul acordului va fi transmis înainte de stabilirea sesiunii.
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#E1E4EA]"
                      >
                        <span>ÎNAPOI LA PAGINA PRINCIPALĂ</span>
                      </Link>
                      <Link
                        href="/cum-lucrez"
                        className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-[#F5F4EF] font-mono text-xs uppercase tracking-wider hover:border-[#93C8FF]"
                      >
                        <span>CONSULTĂ ETAPELE COLABORĂRII</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl text-[#F5F4EF]">
                        Formular de Solicitare Discuție
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#8A95A5]">
                        Introduceți datele necesare pentru a pregăti conversația.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm font-sans flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Nume Complet <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ex: Cristian Ionescu"
                          className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Adresă de Email <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="nume@exemplu.ro"
                          className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Număr de Telefon <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+40 7..."
                          className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Interval Orar Preferat
                        </label>
                        <select
                          value={preferredTimeframe}
                          onChange={(e) => setPreferredTimeframe(e.target.value)}
                          className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        >
                          <option value="Dimineața (09:00 - 12:00)">Dimineața (09:00 - 12:00)</option>
                          <option value="Prânz (12:00 - 15:00)">Prânz (12:00 - 15:00)</option>
                          <option value="După-amiaza (15:00 - 18:00)">După-amiaza (15:00 - 18:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Subiectul Principal al Conversației
                      </label>
                      <select
                        value={consultationType}
                        onChange={(e) => setConsultationType(e.target.value)}
                        className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      >
                        <option value="Achiziție rezidențială prime (Buyer Advisory)">
                          Mandat de Achiziție Rezidențială Prime (București)
                        </option>
                        <option value="Vânzare asistată & poziționare (Seller Advisory)">
                          Vânzare Asistată & Poziționare Proprietate De Lux
                        </option>
                        <option value="Proprietăți internaționale (Parteneriat Chestertons)">
                          Achiziție Internațională (Londra, Coasta de Azur, Dubai etc.)
                        </option>
                        <option value="Protecție patrimonială / Asigurare de valoare mare">
                          Consultanță Protecție Clădiri & Bunuri (Generali)
                        </option>
                        <option value="Alt subiect / Consultanță generală">
                          Alt subiect de consultanță imobiliară privată
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Detalii Suplimentare / Context (Opțional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Menționați pe scurt criteriile cheie (zonă, tip imobil, orizont temporal)..."
                        className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      />
                    </div>

                    {/* BIFĂ NDA ÎN PREALABIL */}
                    <div className="p-4 bg-black/40 border border-white/[0.08] space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-[#E1E4EA] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={requestPriorNDA}
                          onChange={(e) => setRequestPriorNDA(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded-none bg-black border-white/20 text-[#A97F60] focus:ring-0 cursor-pointer"
                        />
                        <span>
                          <strong className="text-[#A97F60]">Solicit Acord de Confidențialitate (NDA) în prealabil:</strong> Doresc transmiterea unui acord bilateral de confidențialitate înainte de a divulga detalii specifice privind activele sau planurile mele.
                        </span>
                      </label>
                    </div>

                    {/* BIFĂ GDPR OBLIGATORIE */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                        <input
                          type="checkbox"
                          required
                          checked={consentPrivacy}
                          onChange={(e) => setConsentPrivacy(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded-none bg-black border-white/20 text-[#93C8FF] focus:ring-0 cursor-pointer"
                        />
                        <span>
                          Sunt de acord cu prelucrarea datelor mele cu caracter personal furnizate în scopul stabilirii și desfășurării conversației inițiale, conform <Link href="/privacy" className="text-[#93C8FF] underline">Politicii de Confidențialitate</Link>. Datele nu sunt înstrăinate către terți.
                        </span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] disabled:opacity-50 transition-colors"
                      >
                        <span>{loading ? "SE TRANSMITE..." : "SOLICITĂ PROGRAMAREA CONVERSAȚIEI"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="font-mono text-[11px] text-[#6B7280] text-center sm:text-left">
                      Alternativ, puteți trimite un email la <a href="mailto:cristianvaduva@duck.com" className="text-[#93C8FF] underline">cristianvaduva@duck.com</a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
