import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Türkçe karakterler (ş, ğ, İ, ı…) latin-ext alt kümesinde bulunur.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "MammaPrint Türkiye",
    template: "%s | MammaPrint Türkiye",
  },
  description:
    "MammaPrint 70 gen nüks riski ve BluePrint 80 gen moleküler alt tipleme testleri hakkında hasta ve sağlık profesyonelleri için güvenilir bilgiler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
