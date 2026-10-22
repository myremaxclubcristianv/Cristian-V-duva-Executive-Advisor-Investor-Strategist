import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Buyer's Dossier: Pre-Acquisition Criteria & Verification | Executive",
  description:
    "The essential methodological guide for evaluating prime residential real estate: 7 structured chapters to eliminate technical, legal, and cadastral risks.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/ghid-cumparator",
  },
  openGraph: {
    title: "The Buyer's Dossier: Pre-Acquisition Criteria & Verification | Cristian Văduva",
    description:
      "A structured 7-chapter methodological due diligence guide for prime residential property acquisitions.",
    url: "https://executive.cristianvaduva.com/ghid-cumparator",
    type: "website",
    locale: "en_US",
  },
};

export default function GhidCumparatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
