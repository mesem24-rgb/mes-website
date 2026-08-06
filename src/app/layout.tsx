import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MES",
  alternateName: "Meaningful Empowering Solutions",
  url: "https://www.mes-solutions.dev",
  email: "contact@mes-solutions.dev",
  founder: {
    "@type": "Person",
    name: "Michael Sullivan",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Gulfport",
    },
    {
      "@type": "AdministrativeArea",
      name: "Mississippi Gulf Coast",
    },
  ],
  description:
    "MES builds custom websites, workflow applications, and practical software solutions for businesses.",
  knowsAbout: [
    "Custom website development",
    "Workflow applications",
    "Business process improvement",
    "Internal business tools",
    "Software consulting",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mes-solutions.dev"),

  title: {
    default: "MES | Custom Websites & Workflow Software",
    template: "%s | MES",
  },

  description:
    "MES builds custom websites, workflow applications, and practical software solutions for businesses in Gulfport and across the Mississippi Gulf Coast.",

  applicationName: "MES",

  authors: [
    {
      name: "Michael Sullivan",
    },
  ],

  creator: "Michael Sullivan",

  keywords: [
    "custom software development",
    "business websites",
    "workflow applications",
    "workflow automation",
    "internal business tools",
    "software consulting",
    "Gulfport Mississippi web developer",
    "Mississippi Gulf Coast web design",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "MES",
    title: "MES | Software Built Around Your Business",
    description:
      "Thoughtful guidance, collaborative design, and software built around the way your business actually works.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MES — Meaningful. Empowering. Solutions.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MES | Software Built Around Your Business",
    description:
      "Thoughtful guidance, collaborative design, and software built around the way your business actually works.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
  <html lang="en">
    <body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {children}
      <Analytics />
    </body>
  </html>
);
}
