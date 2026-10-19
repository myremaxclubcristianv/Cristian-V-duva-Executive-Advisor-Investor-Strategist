import { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/cristianvaduva",
    displayName: "LinkedIn / Cristian Văduva",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@CristianVaduvaCV",
    displayName: "Official YouTube Channel",
  },
  {
    platform: "whatsapp",
    url: "https://wa.me/436509536345",
    displayName: "WhatsApp / Direct Desk",
  },
  {
    platform: "telegram",
    url: "https://t.me/CristianVaduva",
    displayName: "Telegram / Direct",
  },
  {
    platform: "telegram-channel",
    url: "https://t.me/capitalinvestcristianvaduva",
    displayName: "Telegram / Capital Invest",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/cristian_vaduva_cristianv",
    displayName: "Instagram / @cristian_vaduva_cristianv",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/CristianVaduvaCV",
    displayName: "Facebook / CristianVaduvaCV",
  },
];

export const additionalSocials: SocialLink[] = [];

export const getSocialByPlatform = (platform: string): SocialLink | undefined => {
  return socialLinks.find((s) => s.platform === platform);
};
