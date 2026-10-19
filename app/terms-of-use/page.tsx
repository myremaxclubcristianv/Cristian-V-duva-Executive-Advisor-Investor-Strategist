import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Cristian Văduva",
  description: "Terms and conditions governing the access and usage of Cristian Văduva and AiX Media digital platforms.",
  alternates: {
    canonical: "https://cristianvaduva.com/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout
      kicker="GOVERNANCE"
      title="Terms of Use"
      subtitle="Standard terms and contractual conditions governing access to this digital platform and its editorial intelligence."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Section 1: Acceptance */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 01</span>
            <h2 className="font-display text-2xl text-text-primary">1. Agreement to Terms</h2>
          </div>
          <p className="text-sm">
            By accessing or browsing this website (<span className="text-text-primary font-mono">cristianvaduva.com</span>), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use, our{" "}
            <Link href="/privacy" className="text-accent underline">
              Privacy Policy
            </Link>
            , and our{" "}
            <Link href="/disclaimer" className="text-accent underline">
              Disclaimer
            </Link>
            . If you do not agree with these terms, you must discontinue platform use immediately.
          </p>
        </section>

        {/* Section 2: Permitted Use */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 02</span>
            <h2 className="font-display text-2xl text-text-primary">2. Permitted & Prohibited Use</h2>
          </div>
          <p className="text-sm">
            You may use the platform solely for lawful, personal, and professional informational purposes. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Engage in automated data extraction, bulk scraping, or harvesting without explicit authorization.</li>
            <li>Attempt to probe, scan, or breach platform security architecture or API endpoints.</li>
            <li>Misrepresent your identity or credentials when submitting strategic consultation inquiries.</li>
            <li>Use platform intelligence to engage in market manipulation or unlawful commercial actions.</li>
          </ul>
        </section>

        {/* Section 3: Intellectual Property */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 03</span>
            <h2 className="font-display text-2xl text-text-primary">3. Intellectual Property Rights</h2>
          </div>
          <p className="text-sm">
            All text, photographic works, architectural designs, brand emblems, and software code are the exclusive property of Cristian Văduva or licensed third parties. No license or title is transferred through your usage of the platform.
          </p>
        </section>

        {/* Section 4: No Financial / Advisory Contract Created */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 04</span>
            <h2 className="font-display text-2xl text-text-primary">4. No Advisory Relationship Created</h2>
          </div>
          <p className="text-sm">
            Accessing this website or communicating with the executive desk via email, WhatsApp, or contact forms does not establish a formal client-advisor relationship, fiduciary duty, or binding real estate representation until a formal private advisory agreement is executed in writing.
          </p>
        </section>

        {/* Section 5: Limitation of Liability */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 05</span>
            <h2 className="font-display text-2xl text-text-primary">5. Limitation of Liability</h2>
          </div>
          <p className="text-sm">
            To the maximum extent permitted by applicable European and Romanian law, Cristian Văduva and affiliates shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of, or inability to use, information provided on this platform.
          </p>
        </section>

        {/* Section 6: Governing Law */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-6 space-y-2">
          <h3 className="font-display text-lg text-text-primary">Governing Law & Jurisdiction</h3>
          <p className="text-xs">
            These Terms of Use are governed by the laws of Romania and the European Union. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts of Bucharest, Romania.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
