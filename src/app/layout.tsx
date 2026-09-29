import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLOOM by Ana · Arte Floral — Póvoa de Varzim",
  description:
    "Ateliê de arte floral em Póvoa de Varzim. Casamentos, eventos, ramos de noiva, tiaras e flores preservadas — criações florais personalizadas, flor a flor. Marcações pelo WhatsApp.",
  keywords: [
    "arte floral",
    "ateliê floral",
    "casamentos",
    "flores preservadas",
    "buquê de noiva",
    "tiaras florais",
    "Póvoa de Varzim",
  ],
  icons: {
    icon: "/images/bloom/logo-bloom.png",
  },
};

const googleFontsHref =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&family=Marcellus&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Fontes carregadas no cliente (com fallback serif/sans no CSS) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={googleFontsHref} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
