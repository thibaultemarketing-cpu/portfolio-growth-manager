import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { siteConfig } from "@/data/content";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thibault-gomez.fr"),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: [
    "Growth Manager",
    "Responsable Marketing Digital",
    "e-commerce B2C",
    "SEO",
    "Amazon Ads",
    "CRO",
    "Data BI",
    "Thibault GOMEZ",
    "marketing digital Toulon",
    "acquisition organique",
    "stratégie full-funnel",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    type: "website",
    locale: "fr_FR",
    siteName: "Thibault GOMEZ — Portfolio Growth Manager",
    images: [
      {
        url: siteConfig.images.hero,
        width: 600,
        height: 720,
        alt: "Thibault GOMEZ — Growth Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.images.hero],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thibault GOMEZ",
  jobTitle: "Growth Manager",
  description: siteConfig.meta.description,
  url: "https://www.thibault-gomez.fr",
  email: siteConfig.email,
  sameAs: [siteConfig.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulon",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Growth Marketing",
    "SEO",
    "Amazon Ads",
    "E-commerce B2C",
    "CRO",
    "Data Analytics",
    "Marketing Automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/scy8osg.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
