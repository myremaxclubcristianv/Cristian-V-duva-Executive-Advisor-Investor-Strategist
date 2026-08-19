"use client";

import { useState, FormEvent } from "react";

const INTEREST_OPTIONS = [
  "Real Estate",
  "Capital & Investments",
  "Executive Advisory",
  "Strategic Partnerships",
  "Other",
] as const;

export default function PrivateConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Real Estate",
    message: "",
    website: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.name.trim()) {
      setValidationError("Full Name is required.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("A valid Email address is required.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setValidationError("Please enter a message with at least 10 characters.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          interest: formData.interest,
          message: formData.message.trim(),
          website: formData.website,
          source: typeof window !== "undefined" ? window.location.pathname : "/contact",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "Real Estate",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface-primary border border-accent/50 p-6 sm:p-10 space-y-6 shadow-2xl text-left animate-fade-in">
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>CONFIDENTIAL DESK</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-text-primary tracking-tight">
          PRIVATE INQUIRY RECEIVED
        </h3>
        <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
          Thank you. Your request has been securely received by the Executive Desk.
        </p>
        <p className="font-sans text-xs text-text-secondary/70 font-light leading-relaxed border-t border-white/10 pt-4">
          We will review your inquiry and respond directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="pt-2 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:underline block touch-active min-h-[36px]"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-primary border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl text-left"
    >
      <div className="space-y-2 border-b border-white/10 pb-4 sm:pb-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold block">
          PRIVATE DESK
        </span>
        <h3 className="font-display text-xl sm:text-2xl text-text-primary">
          CONFIDENTIAL INQUIRY
        </h3>
        <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
          Direct mandate inquiry for real estate acquisitions, capital advisory, or board engagements.
        </p>
      </div>

      {/* Honeypot field - invisible to real visitors */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Do not fill this field</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {validationError && (
        <div className="p-3 border border-red-900/50 bg-red-950/20 text-red-300 font-mono text-xs">
          {validationError}
        </div>
      )}

      {status === "error" && (
        <div className="p-4 border border-amber-900/50 bg-amber-950/20 text-amber-200 font-sans text-xs leading-relaxed">
          Unable to submit your inquiry at this moment. Please contact the Executive Desk directly.
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-name" className="block font-mono text-[11px] uppercase tracking-wider text-text-secondary">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="inquiry-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Executive Name"
            className="w-full bg-background border border-white/10 px-4 py-3.5 text-base sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-quick min-h-[48px]"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="inquiry-email" className="block font-mono text-[11px] uppercase tracking-wider text-text-secondary">
              Corporate Email <span className="text-accent">*</span>
            </label>
            <input
              id="inquiry-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className="w-full bg-background border border-white/10 px-4 py-3.5 text-base sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-quick min-h-[48px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="inquiry-phone" className="block font-mono text-[11px] uppercase tracking-wider text-text-secondary">
              Phone / WhatsApp
            </label>
            <input
              id="inquiry-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+43 / +40 ..."
              className="w-full bg-background border border-white/10 px-4 py-3.5 text-base sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-quick min-h-[48px]"
            />
          </div>
        </div>

        {/* Area of Interest */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-interest" className="block font-mono text-[11px] uppercase tracking-wider text-text-secondary">
            Area of Interest <span className="text-accent">*</span>
          </label>
          <select
            id="inquiry-interest"
            required
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full bg-background border border-white/10 px-4 py-3.5 text-base sm:text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-quick min-h-[48px]"
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-surface-primary text-text-primary">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="inquiry-message" className="block font-mono text-[11px] uppercase tracking-wider text-text-secondary">
            Mandate Details / Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="inquiry-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Brief description of project requirements or strategic inquiry..."
            className="w-full bg-background border border-white/10 px-4 py-3.5 text-base sm:text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-quick resize-none"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full min-h-[48px] px-8 py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-quick shadow-xl touch-active"
        >
          {status === "submitting" ? "TRANSMITTING..." : "REQUEST PRIVATE CONSULTATION"}
        </button>
      </div>
    </form>
  );
}
