import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshit Saxena - Full Stack Developer",
  description:
    "Full Stack Developer passionate about crafting seamless interfaces with TypeScript, React, and Node.js.",
  authors: [{ name: "Harshit Saxena" }],
  openGraph: {
    title: "Harshit Saxena - Full Stack Developer",
    description:
      "Full Stack Developer passionate about crafting seamless interfaces with TypeScript, Next.js and Node.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@harshitsaxena",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}