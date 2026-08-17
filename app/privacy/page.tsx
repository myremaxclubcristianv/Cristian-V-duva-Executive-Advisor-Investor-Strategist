import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { contactInfo } from "@/lib/content/contact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & GDPR Statement — Cristian Văduva",
  description: "Comprehensive GDPR data privacy policy explaining categories of personal data, processing purposes, legal bases, retention, and user rights.",
  alternates: {
    canonical: "https://cristianvaduva.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      kicker="DATA PROTECTION"
      title="Privacy Policy"
      subtitle="Strict data governance adhering to the European Union General Data Protection Regulation (Regulation (EU) 2016/679)."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Overview Banner */}
        <div className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">CORE PRINCIPLE</span>
            <h2 className="font-display text-2xl text-text-primary">Confidentiality by Architecture</h2>
          </div>
          <p className="text-sm">
            Cristian Văduva processes personal data strictly in accordance with principles of lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, and confidentiality under Regulation (EU) 2016/679.
          </p>
        </div>

        {/* Section 1: Data Controller */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 01</span>
            <h2 className="font-display text-2xl text-text-primary">1. Data Controller Identity & Contact</h2>
          </div>
          <p className="text-sm">
            The data controller responsible for the processing of personal data on this platform is:
          </p>
          <div className="p-5 border border-surface-secondary/70 bg-surface-primary font-mono text-xs space-y-2">
            <div><span className="text-accent">CONTROLLER:</span> <span className="text-text-primary">Cristian Văduva</span></div>
            <div><span className="text-accent">PRIMARY CONTACT EMAIL:</span> <a href={`mailto:${contactInfo.email}`} className="text-text-primary underline hover:text-accent">{contactInfo.email}</a></div>
            <div><span className="text-accent">LOCATION:</span> <span className="text-text-primary">Bucharest, Romania / European Union</span></div>
          </div>
        </section>

        {/* Section 2: Data Categories & Processing Purposes */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 02</span>
            <h2 className="font-display text-2xl text-text-primary">2. Categories of Data, Purposes & Legal Bases</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-surface-secondary/80">
              <thead className="bg-surface-primary text-text-primary font-mono uppercase tracking-wider border-b border-surface-secondary/80">
                <tr>
                  <th className="p-3 border-r border-surface-secondary/80">Processing Activity</th>
                  <th className="p-3 border-r border-surface-secondary/80">Data Categories</th>
                  <th className="p-3 border-r border-surface-secondary/80">Purpose</th>
                  <th className="p-3">GDPR Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-secondary/60 font-sans">
                <tr>
                  <td className="p-3 font-mono text-accent border-r border-surface-secondary/80">Direct Inquiries (Email / WhatsApp)</td>
                  <td className="p-3 border-r border-surface-secondary/80">Name, email address, telephone number, inquiry context</td>
                  <td className="p-3 border-r border-surface-secondary/80">Responding to strategic consultation and property advisory requests</td>
                  <td className="p-3 font-mono text-[11px]">Art. 6(1)(b) — Pre-contractual steps & Art. 6(1)(f) Legitimate Interests</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-accent border-r border-surface-secondary/80">Specialized Questionnaires (Jotform)</td>
                  <td className="p-3 border-r border-surface-secondary/80">Property specifications, investment criteria, contact details</td>
                  <td className="p-3 border-r border-surface-secondary/80">Structuring tailored acquisition dossiers and asset protection assessments</td>
                  <td className="p-3 font-mono text-[11px]">Art. 6(1)(a) — Explicit Consent & Art. 6(1)(b) Pre-contractual steps</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-accent border-r border-surface-secondary/80">Technical Server Logs</td>
                  <td className="p-3 border-r border-surface-secondary/80">IP address, browser user-agent, timestamp, requested URI</td>
                  <td className="p-3 border-r border-surface-secondary/80">Network security, DDoS defense, server stability</td>
                  <td className="p-3 font-mono text-[11px]">Art. 6(1)(f) — Legitimate Interests in infrastructure security</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-accent border-r border-surface-secondary/80">Local Preferences Storage</td>
                  <td className="p-3 border-r border-surface-secondary/80">Cookie consent status, motion preference</td>
                  <td className="p-3 border-r border-surface-secondary/80">Remembering user choices across browser sessions</td>
                  <td className="p-3 font-mono text-[11px]">Art. 6(1)(c) — Legal compliance (ePrivacy / GDPR consent proof)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Third-Party Processors */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 03</span>
            <h2 className="font-display text-2xl text-text-primary">3. Recipients & Third-Party Processors</h2>
          </div>
          <p className="text-sm">
            We do not sell, rent, or trade personal data. Data is processed only by necessary service providers under strict confidentiality:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-text-primary">Hosting & Infrastructure:</strong> Vercel / Cloudflare hosting platforms operating under Standard Contractual Clauses (SCCs).</li>
            <li><strong className="text-text-primary">Video Media Delivery:</strong> Google YouTube (privacy-enhanced embed configuration).</li>
            <li><strong className="text-text-primary">Form Processing:</strong> Jotform Inc. (EU data residency where configured for structured questionnaires).</li>
            <li><strong className="text-text-primary">Direct Messaging:</strong> WhatsApp (Meta Platforms) and Telegram for user-initiated confidential messaging.</li>
          </ul>
        </section>

        {/* Section 4: Data Retention */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 04</span>
            <h2 className="font-display text-2xl text-text-primary">4. Data Retention Period</h2>
          </div>
          <p className="text-sm">
            Inquiry communications are retained only for the duration required to handle the engagement or mandate. Pre-contractual consultations that do not lead to an active engagement are deleted within 24 months, unless longer retention is required by statutory European tax or commercial compliance regulations.
          </p>
        </section>

        {/* Section 5: Your Rights */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">SECTION 05</span>
            <h2 className="font-display text-2xl text-text-primary">5. User Rights Under GDPR</h2>
          </div>
          <p className="text-sm">
            Under GDPR Articles 15–22, you possess the right to access, rectify, erase (right to be forgotten), restrict, or object to the processing of your data, as well as the right to data portability.
          </p>
          <p className="text-sm">
            For detailed instructions on submitting a data subject request, consult our dedicated <Link href="/gdpr" className="text-accent underline hover:text-text-primary">GDPR Rights Guide</Link> or email <a href={`mailto:${contactInfo.email}`} className="text-accent underline hover:text-text-primary">{contactInfo.email}</a>.
          </p>
        </section>

        {/* Section 6: Supervisory Authority */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-6 space-y-3">
          <h3 className="font-display text-lg text-text-primary">Competent Supervisory Authority</h3>
          <p className="text-xs">
            If you consider that the processing of personal data relating to you infringes the GDPR, you have the right to lodge a complaint with a supervisory authority. In Romania, the national supervisory authority is:
          </p>
          <div className="p-4 border border-surface-secondary/70 bg-background/50 font-mono text-xs space-y-1 text-text-secondary/90">
            <div className="text-text-primary font-semibold">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</div>
            <div>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336, București, România</div>
            <div>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-accent underline">www.dataprotection.ro</a> | Email: anspdcp@dataprotection.ro</div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
