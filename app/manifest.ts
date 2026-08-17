import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Executive — Cristian Văduva",
    short_name: "Cristian Văduva",
    description: "Executive advisor and entrepreneur focused on real estate, investments, insurance, AI and business intelligence.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
