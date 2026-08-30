/**
 * Single source of truth for brand + links.
 * When the logo file is ready, drop it in /public (e.g. /public/logo.svg)
 * and set `logoSrc` below — every placement updates automatically.
 */
export const site = {
  name: "Eshi Gebeya",
  nameAmharic: "እሺ ገበያ",
  url: "https://eshigebeya.com",
  description:
    "Eshi Gebeya curates women's clothing, shoes and jewelry from trusted suppliers in China — and sources anything else you need on request — delivered across Ethiopia.",
  logoSrc: "/eshigebeya_logo.jpeg" as string | null,
  socials: {
    telegram: "https://t.me/eshigebeya",
    instagram: "https://instagram.com/eshigebeya",
  },
  // Order CTAs open direct message threads
  messages: {
    telegram: "https://t.me/eshigebeya",
    instagram: "https://ig.me/m/eshigebeya",
  },
  nav: [
    { label: "Collections", href: "#collections" },
    { label: "How It Works", href: "#how" },
    { label: "Showcase", href: "#showcase" },
    { label: "About", href: "#about" },
  ],
};
