import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Serif_Ethiopic } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const ethiopic = Noto_Serif_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Curated Fashion, Sourced from China to Ethiopia`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Eshi Gebeya",
    "Ethiopia fashion",
    "China to Ethiopia shipping",
    "women's clothing Ethiopia",
    "shoes",
    "jewelry",
    "Addis Ababa shopping",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Curated Fashion, Sourced from China to Ethiopia`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${ethiopic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
