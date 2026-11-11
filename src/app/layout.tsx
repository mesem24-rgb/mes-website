import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";

import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mes-solutions.dev/#organization",

  name: "MES Solutions",
  alternateName: "Meaningful Empowering Solutions",

  url: "https://www.mes-solutions.dev",
  email: "michael@mes-solutions.dev",

  logo: "https://www.mes-solutions.dev/images/og-image.png",

  founder: {
    "@type": "Person",
    name: "Michael Sullivan",
  },

  description:
    "MES Solutions is a Gulfport, Mississippi software development business providing custom websites, website optimization, SEO, AI search visibility, workflow automation, and business software solutions.",

  areaServed: [
    {
      "@type": "City",
      name: "Gulfport",
    },
    {
      "@type": "AdministrativeArea",
      name: "Mississippi Gulf Coast",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],

  knowsAbout: [
    "Business website development",
    "Website performance optimization",
    "Technical search engine optimization",
    "AI search optimization",
    "Custom software development",
    "CRM development",
    "Workflow automation",
    "Business process improvement",
    "Internal business applications",
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
        {children}

        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xy9vkwzpru");
          `}
        </Script>
      </body>
    </html>
  );
}