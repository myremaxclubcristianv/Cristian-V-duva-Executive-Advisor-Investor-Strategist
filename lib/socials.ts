import { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/cristianvaduva",
    displayName: "LinkedIn",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@CristianVaduvaCV",
    displayName: "YouTube",
  },
  {
    platform: "linktree",
    url: "https://linktr.ee/cristianvaduvarealestate",
    displayName: "Linktree",
  },
  {
    platform: "whatsapp",
    url: "https://wa.me/436509536345",
    displayName: "WhatsApp",
  },
  {
    platform: "telegram",
    url: "https://t.me/capitalinvestcristianvaduva",
    displayName: "Telegram",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/CristianVaduvaCV",
    displayName: "Facebook",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/cristian_vaduva_cristianv",
    displayName: "Instagram",
  },
  {
    platform: "threads",
    url: "https://www.threads.net/@cristian_vaduva_cristianv",
    displayName: "Threads",
  },
  {
    platform: "tiktok",
    url: "https://www.tiktok.com/@cristianvaduvacv",
    displayName: "TikTok",
  },
  {
    platform: "twitter",
    url: "https://twitter.com/cristianvaduvaa",
    displayName: "X (Twitter)",
  },
];

export const additionalSocials: SocialLink[] = [];

export const getSocialByPlatform = (platform: string): SocialLink | undefined => {
  return socialLinks.find((s) => s.platform === platform);
};
