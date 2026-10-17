"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function SignatureIntakeForm() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formInterest, setFormInterest] = useState("Ultra-Prime Real Estate");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          interest: formInterest,
          message: formMessage,
        }),
      });
      setFormSubmitted(true);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormMessage("");
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
        <h4 className="font-serif text-2xl text-[#F5F4EF]">Inquiry Dispatched</h4>
        <p className="font-sans text-xs text-[#B8C2CF] max-w-sm mx-auto leading-relaxed">
          Thank you. Your dossier has been logged. Cristian Văduva or the private office will respond within 24 hours.
        </p>
        <button
          onClick={() => setFormSubmitted(false)}
          className="mt-4 font-mono text-xs text-[#93C8FF] underline tracking-wider uppercase"
        >
          Submit Another Communication
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="signature-form-name" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
          Principal / Representative Name *
        </label>
        <input
          id="signature-form-name"
          type="text"
          required
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="e.g. Lord Alexander Sinclair"
          className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="signature-form-email" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
            Direct Email *
          </label>
          <input
            id="signature-form-email"
            type="email"
            required
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            placeholder="principal@familyoffice.com"
            className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="signature-form-phone" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
            Direct Phone / Signal
          </label>
          <input
            id="signature-form-phone"
            type="tel"
            value={formPhone}
            onChange={(e) => setFormPhone(e.target.value)}
            placeholder="+377 ... / +40 ..."
            className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="signature-mandate-select" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
          Mandate Category *
        </label>
        <select
          id="signature-mandate-select"
          aria-label="Mandate Category"
          value={formInterest}
          onChange={(e) => setFormInterest(e.target.value)}
          className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
        >
          <option value="Ultra-Prime Real Estate">Ultra-Prime Real Estate Acquisition (€5M – €100M+)</option>
          <option value="Strategic Capital Allocation">Strategic Capital Allocation & Syndication</option>
          <option value="Asset Sovereignty & Security">Asset Sovereignty & Security Architecture</option>
          <option value="Direct Ventures & Equity">Direct Ventures & Private Equity</option>
          <option value="Confidential Advisory Mandate">Other Confidential Principal Mandate</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="signature-form-message" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
          Executive Briefing Notes
        </label>
        <textarea
          id="signature-form-message"
          rows={3}
          value={formMessage}
          onChange={(e) => setFormMessage(e.target.value)}
          placeholder="Outline target asset specifications, jurisdiction preference, or mandate timeline..."
          className="w-full bg-[#1B2028] border border-white/[0.1] px-4 py-3 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={formLoading}
        className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.24em] font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-3 min-h-[52px]"
      >
        <span className="text-[#07090D] font-bold">{formLoading ? "TRANSMITTING..." : "SUBMIT CONFIDENTIAL INQUIRY"}</span>
        <Send className="w-4 h-4 text-[#07090D]" />
      </button>

      <div className="font-mono text-[9px] uppercase tracking-wider text-center text-[#8A95A5]">
        SECURE 256-BIT TLS TRANSMISSION · STRICT CONFIDENTIALITY
      </div>
    </form>
  );
}
