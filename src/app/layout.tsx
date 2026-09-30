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
  metadataBase: new URL("https://www.bloombyana.pt"),
  title: "BLOOM by Ana · Arte Floral — Póvoa de Varzim",
  description:
    "Ateliê de arte floral na Póvoa de Varzim: casamentos, ramos de noiva, tiaras, eventos e flores preservadas. Criações personalizadas, flor a flor.",
  keywords: [
    "arte floral",
    "ateliê floral",
    "casamentos",
    "flores preservadas",
    "buquê de noiva",
    "tiaras florais",
    "Póvoa de Varzim",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/bloom/logo-bloom.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "BLOOM by Ana",
    title: "BLOOM by Ana · Arte Floral — Póvoa de Varzim",
    description:
      "Ateliê de arte floral na Póvoa de Varzim: casamentos, ramos de noiva, tiaras, eventos e flores preservadas. Criações personalizadas, flor a flor.",
    locale: "pt_PT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BLOOM by Ana — arte floral na Póvoa de Varzim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOOM by Ana · Arte Floral — Póvoa de Varzim",
    description:
      "Ateliê de arte floral na Póvoa de Varzim: casamentos, ramos de noiva, tiaras, eventos e flores preservadas. Criações personalizadas, flor a flor.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "name": "BLOOM by Ana",
  "url": "https://www.bloombyana.pt/",
  "image": "https://www.bloombyana.pt/og-image.jpg",
  "logo": "https://www.bloombyana.pt/images/bloom/logo-bloom.png",
  "telephone": "+351919113667",
  "email": "ana-monica.lima@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Tenente Valadim 82",
    "addressLocality": "Póvoa de Varzim",
    "addressCountry": "PT",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:30",
      "closes": "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "14:30",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:30",
    },
  ],
  "sameAs": [
    "https://www.instagram.com/bloomby_anaportugal_/",
    "https://wa.me/351919113667",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
