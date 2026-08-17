import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy & Technical Storage — Cristian Văduva",
  description: "Transparent inventory of cookies and local browser storage technologies used across Cristian Văduva platforms.",
  alternates: {
    canonical: "https://cristianvaduva.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalPageLayout
      kicker="STORAGE & PRIVACY"
      title="Cookie Policy"
      subtitle="Complete transparency regarding technical storage, browser preferences, and zero invasive ad-tracking."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Intro */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">ZERO AD-TRACKING POLICY</span>
            <h2 className="font-display text-2xl text-text-primary">What Technologies We Use</h2>
          </div>
          <p className="text-sm">
            This platform does not deploy third-party advertising cookies, behavioral tracking pixels, or fingerprinting scripts. We utilize only strictly necessary session indicators, local browser storage for user preferences, and privacy-enhanced embedded media delivery.
          </p>
        </section>

        {/* Technical Storage Inventory Table */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">TECHNICAL INVENTORY</span>
            <h2 className="font-display text-2xl text-text-primary">Storage & Cookie Registry</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-surface-secondary/80">
              <thead className="bg-surface-primary text-text-primary font-mono uppercase tracking-wider border-b border-surface-secondary/80">
                <tr>
                  <th className="p-3 border-r border-surface-secondary/80">Identifier</th>
                  <th className="p-3 border-r border-surface-secondary/80">Provider</th>
                  <th className="p-3 border-r border-surface-secondary/80">Category</th>
                  <th className="p-3 border-r border-surface-secondary/80">Purpose</th>
                  <th className="p-3 border-r border-surface-secondary/80">Duration</th>
                  <th className="p-3">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-secondary/60 font-sans">
                <tr>
                  <td className="p-3 font-mono text-accent border-r border-surface-secondary/80">aix_cookie_consent_v1</td>
                  <td className="p-3 border-r border-surface-secondary/80">First-Party (localStorage)</td>
                  <td className="p-3 border-r border-surface-secondary/80 font-mono text-[10px] text-accent">Strictly Necessary</td>
                  <td className="p-3 border-r border-surface-secondary/80">Stores the user&apos;s cookie consent preferences across visits</td>
                  <td className="p-3 border-r border-surface-secondary/80">Persistent (1 Year)</td>
                  <td className="p-3 font-mono text-[10px]">Art. 6(1)(c) Compliance</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-accent border-r border-surface-secondary/80">__Secure-*, GPS, VISITOR_INFO1_LIVE</td>
                  <td className="p-3 border-r border-surface-secondary/80">Google YouTube</td>
                  <td className="p-3 border-r border-surface-secondary/80 font-mono text-[10px]">Third-Party (Media)</td>
                  <td className="p-3 border-r border-surface-secondary/80">Delivers official YouTube broadcasts with privacy-enhanced controls when user plays video</td>
                  <td className="p-3 border-r border-surface-secondary/80">Session to 6 Months</td>
                  <td className="p-3 font-mono text-[10px]">Art. 6(1)(a) Consent / Interaction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Control */}
        <section className="space-y-4">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">CONTROL</span>
            <h2 className="font-display text-2xl text-text-primary">How to Manage & Revoke Preferences</h2>
          </div>
          <p className="text-sm">
            You can modify your consent settings at any time by clicking the <strong className="text-text-primary font-mono text-xs">Cookie Preferences</strong> link in the footer of any page or by clearing your browser storage.
          </p>
          <p className="text-sm">
            Additionally, all modern browsers allow you to block or delete cookies entirely via your browser settings (Chrome, Safari, Firefox, Edge).
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
