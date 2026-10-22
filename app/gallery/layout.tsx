import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Visual Monograph — Cristian Văduva",
  description: "Curated photographic monograph encompassing official portraits, ultra-prime European residences in Bucharest and Monaco, private advisory salons, and cross-border operations.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/gallery",
  },
  openGraph: {
    title: "Executive Visual Monograph — Cristian Văduva",
    description: "Curated photographic monograph encompassing official portraits, ultra-prime European residences in Bucharest and Monaco, private advisory salons, and cross-border operations.",
    locale: "en_US",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
