import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive TV & Studio — Cristian Văduva",
  description: "Official 4K broadcasts, macroeconomic analyses, in-depth walkthroughs of elite European residences, and private negotiation case studies.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/tv",
  },
  openGraph: {
    title: "Executive TV & Studio — Cristian Văduva",
    description: "Official 4K broadcasts, macroeconomic analyses, in-depth walkthroughs of elite European residences, and private negotiation case studies.",
    locale: "en_US",
    type: "website",
  },
};

export default function TVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
