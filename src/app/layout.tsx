import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrchesAI - AI Agent Automation untuk Bisnis Indonesia",
  description: "Sistem otomasi custom berbasis AI Agent yang menghemat 20+ jam per minggu. Integrase WhatsApp, Instagram, Tokopedia, dan 15+ platform lainnya. Fokus ke strategi bisnis, biarkan AI handle repetitive tasks.",
  keywords: "AI automation, AI agent, business automation, WhatsApp automation, Indonesia, chatbot, workflow automation",
  authors: [{ name: "OrchesAI" }],
  openGraph: {
    title: "OrchesAI - AI Agent Automation untuk Bisnis Indonesia",
    description: "Hemat 20+ jam per minggu dengan sistem otomasi AI custom",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrchesAI - AI Agent Automation",
    description: "Sistem otomasi custom berbasis AI Agent untuk bisnis Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
