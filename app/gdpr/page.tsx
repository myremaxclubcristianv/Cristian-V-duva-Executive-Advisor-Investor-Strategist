import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { contactInfo } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "GDPR Rights & Data Subject Requests — Cristian Văduva",
  description: "Practical guide to exercising your statutory GDPR rights, including access, rectification, erasure, and data portability.",
  alternates: {
    canonical: "https://cristianvaduva.com/gdpr",
  },
};

export default function GDPRPage() {
  const rights = [
    {
      num: "01",
      name: "Right of Access (Article 15)",
      desc: "You have the right to request confirmation as to whether your personal data is being processed, and where that is the case, receive a copy of the specific personal data processed along with processing details.",
    },
    {
      num: "02",
      name: "Right to Rectification (Article 16)",
      desc: "You have the right to obtain without undue delay the rectification of inaccurate personal data concerning you, including the right to have incomplete personal data completed.",
    },
    {
      num: "03",
      name: "Right to Erasure / 'Right to be Forgotten' (Article 17)",
      desc: "You have the right to request the erasure of your personal data when the data is no longer necessary in relation to the purposes for which they were collected or when you withdraw your consent.",
    },
    {
      num: "04",
      name: "Right to Restriction of Processing (Article 18)",
      desc: "You have the right to request restriction of processing when you contest the accuracy of the data, the processing is unlawful, or during the verification of legitimate ground objections.",
    },
    {
      num: "05",
      name: "Right to Data Portability (Article 20)",
      desc: "You have the right to receive the personal data concerning you in a structured, commonly used and machine-readable format, and have the right to transmit those data to another controller.",
    },
    {
      num: "06",
      name: "Right to Object (Article 21)",
      desc: "You have the right to object at any time, on grounds relating to your particular situation, to processing of personal data concerning you which is based on legitimate interests (Article 6(1)(f)).",
    },
    {
      num: "07",
      name: "Rights Related to Automated Decision-Making (Article 22)",
      desc: "We do not utilize fully automated decision-making or profiling algorithms that produce legal effects concerning you.",
    },
    {
      num: "08",
      name: "Right to Withdraw Consent (Article 7(3))",
      desc: "Where processing is based on consent, you have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.",
    },
  ];

  return (
    <LegalPageLayout
      kicker="REGULATORY RIGHTS"
      title="GDPR Rights & Requests"
      subtitle="A practical, transparent guide for individuals to exercise their fundamental data protection rights."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Intro */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">EU REGULATION 2016/679</span>
            <h2 className="font-display text-2xl text-text-primary">Direct Exercise of Your Statutory Rights</h2>
          </div>
          <p className="text-sm">
            Under Chapter III of the GDPR, European data subjects possess clear, actionable rights regarding their personal information. We provide direct, non-bureaucratic mechanisms to process and fulfill your requests promptly.
          </p>
        </section>

        {/* Rights Grid */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">RIGHTS INVENTORY</span>
            <h2 className="font-display text-2xl text-text-primary">Comprehensive Catalog of Rights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((r) => (
              <div
                key={r.num}
                className="bg-surface-primary border border-surface-secondary/80 p-6 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent">{r.num}</span>
                  <span className="text-text-secondary/60 uppercase tracking-widest text-[10px]">GDPR CHAPTER III</span>
                </div>
                <h3 className="font-display text-lg text-text-primary">{r.name}</h3>
                <p className="font-sans text-xs text-text-secondary/90 leading-relaxed font-light">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Process */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">HOW TO SUBMIT</span>
            <h2 className="font-display text-2xl text-text-primary">Submitting a Data Subject Request (DSR)</h2>
          </div>

          <div className="space-y-4 text-sm">
            <p>
              To initiate a request, email our compliance desk directly at{" "}
              <a href={`mailto:${contactInfo.email}?subject=GDPR%20Data%20Subject%20Request`} className="text-accent underline font-mono">
                {contactInfo.email}
              </a>{" "}
              with the subject line <strong className="text-text-primary font-mono text-xs font-normal">&ldquo;GDPR Data Subject Request&rdquo;</strong>.
            </p>

            <div className="p-4 border border-surface-secondary/70 bg-background/50 space-y-2 text-xs font-mono">
              <span className="text-accent block uppercase tracking-widest text-[10px]">REQUIRED INFORMATION FOR VERIFICATION:</span>
              <ul className="list-disc pl-5 space-y-1 text-text-secondary">
                <li>Your full name and contact email address used in past communications</li>
                <li>Specific right you wish to exercise (e.g. Access, Rectification, Erasure)</li>
                <li>Context of your interactions (e.g. general advisory inquiry, Jotform questionnaire)</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 text-xs">
              <span className="font-mono text-accent uppercase tracking-widest block text-[10px]">TIMELINES & HANDLING:</span>
              <p>
                In accordance with GDPR Article 12(3), requests are acknowledged within 5 business days and fulfilled within <strong>one calendar month</strong> of receipt. If requests are complex, the period may be extended by two further months with formal notification.
              </p>
              <p>
                Requests are handled free of charge unless manifestly unfounded or excessive.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
