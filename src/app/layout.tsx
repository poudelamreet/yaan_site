import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Yaan Enterprise | Premium IT Services in Nepal",
  description: "Building Digital Solutions for Modern Businesses. Yaan Enterprise helps startups and enterprises transform ideas into scalable digital products.",
  keywords: ["IT company in Nepal", "Software company Nepal", "Web development Nepal", "Mobile app development Nepal", "AI solutions Nepal"],
};

import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} light antialiased`}>
      <body className="min-h-full bg-background text-text overflow-x-hidden">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
