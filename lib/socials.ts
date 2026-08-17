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
  // TODO: Verify exact Facebook and Instagram URLs from cristianvaduva.com
  // {
  //   platform: "facebook",
  //   url: "https://facebook.com/cristianvaduva",
  //   displayName: "Facebook",
  // },
  // {
  //   platform: "instagram",
  //   url: "https://instagram.com/cristianvaduva",
  //   displayName: "Instagram",
  // },
];

export const additionalSocials: SocialLink[] = [
  {
    platform: "telegram-contact",
    url: "https://t.me/CristianVaduva",
    displayName: "Direct Message",
  },
];

export const getSocialByPlatform = (platform: string): SocialLink | undefined => {
  return socialLinks.find((s) => s.platform === platform);
};
