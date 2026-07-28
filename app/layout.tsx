import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
