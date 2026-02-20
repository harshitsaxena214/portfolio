import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit Saxena — Full Stack Developer",
  description:
    "Full Stack Developer passionate about crafting seamless interfaces with TypeScript, React, and Node.js.",
  authors: [{ name: "Harshit Saxena" }],
  openGraph: {
    title: "Harshit Saxena — Full Stack Developer",
    description:
      "Full Stack Developer passionate about crafting seamless interfaces with TypeScript, React, and Node.js.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
