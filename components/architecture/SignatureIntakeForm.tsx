"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";

export default function SignatureIntakeForm() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formInterest, setFormInterest] = useState("Buyer representation");
  const [formMessage, setFormMessage] = useState("");
  const [formConsent, setFormConsent] = useState(false);
  const [formHoneypot, setFormHoneypot] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formConsent) return;
    setFormLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          interest: formInterest,
          message: formMessage,
          website: formHoneypot,
        }),
      });
      if (!res.ok) {
        throw new Error("Submission failed");
      }
      setFormSubmitted(true);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormMessage("");
      setFormConsent(false);
    } catch {
      window.open(
        `https://wa.me/436509536345?text=${encodeURIComponent(
          `Consultation Inquiry:\nName: ${formName}\nEmail: ${formEmail}\nPhone: ${formPhone}\nMandate: ${formInterest}\nMessage: ${formMessage}`
        )}`
      );
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="w-12 h-12 rounded-full border border-[#93C8FF] flex items-center justify-center mx-auto text-[#93C8FF]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-2xl text-[#F5F4EF]">Solicitare Transmisă cu Succes</h4>
        <p className="font-sans text-xs text-[#B8C2CF] max-w-sm mx-auto leading-relaxed">
          Vă mulțumim. Solicitarea dumneavoastră a fost înregistrată. Cristian Văduva va evalua dosarul și vă va contacta direct în termen de 24 de ore.
        </p>
        <button
          type="button"
          onClick={() => setFormSubmitted(false)}
          className="mt-4 font-mono text-xs text-[#93C8FF] hover:underline tracking-wider uppercase"
        >
          Transmite o altă solicitare
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {/* Honeypot field (hidden from legitimate users, excluded from tab order and accessibility tree) */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
        <label htmlFor="signature-website-trap">Leave blank</label>
        <input
          id="signature-website-trap"
          type="text"
          name="website"
          value={formHoneypot}
          onChange={(e) => setFormHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="signature-form-name" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
          Nume / Reprezentant Mandat *
        </label>
        <input
          id="signature-form-name"
          type="text"
          required
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="ex. Cristian Popescu"
          className="w-full bg-[#1B2028] border border-white/[0.1] rounded-xl px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="signature-form-email" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
            Adresă de Email Directă *
          </label>
          <input
            id="signature-form-email"
            type="email"
            required
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            placeholder="principal@exemplu.ro"
            className="w-full bg-[#1B2028] border border-white/[0.1] rounded-xl px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="signature-form-phone" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
            Telefon / Signal / WhatsApp
          </label>
          <input
            id="signature-form-phone"
            type="tel"
            value={formPhone}
            onChange={(e) => setFormPhone(e.target.value)}
            placeholder="+40 7..."
            className="w-full bg-[#1B2028] border border-white/[0.1] rounded-xl px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="signature-mandate-select" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
          Tipul de Asistență Solicitat *
        </label>
        <select
          id="signature-mandate-select"
          aria-label="Mandate Category"
          value={formInterest}
          onChange={(e) => setFormInterest(e.target.value)}
          className="w-full bg-[#1B2028] border border-white/[0.1] rounded-xl px-4 py-3 font-sans text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
        >
          <option value="Buyer representation">Reprezentare Cumpărător (Căutare, audit cadastral, negociere)</option>
          <option value="Seller representation">Reprezentare Vânzător (Poziționare, promovare privată, tranzacționare)</option>
          <option value="Investor advisory">Consultanță Investitor (Screening de piață, analiză de randament)</option>
          <option value="Property sourcing">Sourcing Proprietate (Descoperire off-market pe criterii specifice)</option>
          <option value="Strategic consultation">Consultanță Strategică (Consiliere imobiliară & capital)</option>
          <option value="Other">Alt mandat privat dedicat</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="signature-form-message" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
          Note de Sinteză / Criterii Proiect
        </label>
        <textarea
          id="signature-form-message"
          rows={3}
          value={formMessage}
          onChange={(e) => setFormMessage(e.target.value)}
          placeholder="Precizați tipul proprietății vizate, zona de interes, bugetul orientativ sau orizontul de timp..."
          className="w-full bg-[#1B2028] border border-white/[0.1] rounded-xl px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors resize-none"
        />
      </div>

      {/* GDPR Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="signature-gdpr-consent"
          type="checkbox"
          required
          checked={formConsent}
          onChange={(e) => setFormConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-[#1B2028] text-[#93C8FF] focus:ring-[#93C8FF] cursor-pointer"
        />
        <label htmlFor="signature-gdpr-consent" className="text-[11px] text-[#B8C2CF] leading-relaxed cursor-pointer">
          Sunt de acord cu prelucrarea datelor transmise pentru a primi un răspuns la solicitare, conform{" "}
          <Link href="/privacy" className="text-[#93C8FF] hover:underline" target="_blank">
            Politicii de Confidențialitate
          </Link>.
        </label>
      </div>

      <button
        type="submit"
        disabled={formLoading}
        className="w-full py-3.5 px-6 rounded-full bg-[#F5F4EF] hover:bg-white text-[#07090D] font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-xl flex items-center justify-center gap-2.5 min-h-[48px]"
      >
        <span>{formLoading ? "SE TRANSMITE..." : "TRANSMITE SOLICITAREA CONFIDENȚIALĂ"}</span>
        <Send className="w-4 h-4 text-[#07090D]" />
      </button>

      <div className="font-mono text-[9px] uppercase tracking-wider text-center text-[#86868B]">
        Discuțiile sunt tratate cu discreție deplină. Acord bilateral NDA la cerere.
      </div>
    </form>
  );
}
