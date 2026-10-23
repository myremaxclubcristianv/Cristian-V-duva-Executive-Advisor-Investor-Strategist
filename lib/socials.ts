import { SocialLink } from "./types";

export const VERIFIED_SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/cristianvăduva",
  linkedinEncoded: "https://www.linkedin.com/in/cristianv%C4%83duva",
  youtube: "https://youtube.com/@CristianVaduvaCV",
  whatsapp: "https://wa.me/436509536345",
  telegramDirect: "https://t.me/CristianVaduva",
  telegramChannel: "https://t.me/capitalinvestcristianvaduva",
  instagram: "https://instagram.com/cristian_vaduva_cristianv",
  facebook: "https://www.facebook.com/CristianVaduvaCV",
  linktree: "https://linktr.ee/cristianvaduvarealestate",
  tiktok: "https://www.tiktok.com/@cristianvaduvacv",
  threads: "https://www.threads.net/@cristian_vaduva_cristianv",
  email: "contact@cristianvaduva.com",
  phoneAustria: "+43 650 953 6345",
  phoneRomania: "+40 767 110 439",
  canonicalSite: "https://cristianvaduva.com",
} as const;

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    url: VERIFIED_SOCIAL_LINKS.linkedin,
    displayName: "LinkedIn / Cristian Văduva",
  },
  {
    platform: "youtube",
    url: VERIFIED_SOCIAL_LINKS.youtube,
    displayName: "Official YouTube Channel",
  },
  {
    platform: "whatsapp",
    url: VERIFIED_SOCIAL_LINKS.whatsapp,
    displayName: "WhatsApp / Direct Desk",
  },
  {
    platform: "telegram",
    url: VERIFIED_SOCIAL_LINKS.telegramDirect,
    displayName: "Telegram / Direct",
  },
  {
    platform: "telegram-channel",
    url: VERIFIED_SOCIAL_LINKS.telegramChannel,
    displayName: "Telegram / Capital Invest",
  },
  {
    platform: "instagram",
    url: VERIFIED_SOCIAL_LINKS.instagram,
    displayName: "Instagram / @cristian_vaduva_cristianv",
  },
  {
    platform: "facebook",
    url: VERIFIED_SOCIAL_LINKS.facebook,
    displayName: "Facebook / CristianVaduvaCV",
  },
  {
    platform: "linktree",
    url: VERIFIED_SOCIAL_LINKS.linktree,
    displayName: "Linktree / Verified Directory",
  },
];

export const additionalSocials: SocialLink[] = [];

export const getSocialByPlatform = (platform: string): SocialLink | undefined => {
  return socialLinks.find((s) => s.platform === platform);
};
