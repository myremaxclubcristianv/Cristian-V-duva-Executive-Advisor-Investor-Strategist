import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Broadcasts & Media Archive — Cristian Văduva",
  description: "Official video commentary, property masterclasses, market analysis briefings, and architectural photography.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/media",
  },
  openGraph: {
    title: "Executive Broadcasts & Media Archive — Cristian Văduva",
    description: "Official video commentary, property masterclasses, market analysis briefings, and architectural photography.",
    locale: "en_US",
    type: "website",
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
