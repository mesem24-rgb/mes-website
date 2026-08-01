import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MES | Software Built Around Your Business",
    template: "%s | MES",
  },

  description:
    "MES helps businesses improve workflows, clarify technology needs, and build thoughtful websites, internal tools, and custom software.",

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
    "workflow automation",
    "internal business tools",
    "software consulting",
    "Gulfport Mississippi software developer",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
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

  icons: {
  icon: "/favicon.ico",
  apple: "/icons/apple-touch-icon.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
