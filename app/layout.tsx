import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description:
    "Spotlight Advertising provides premium outdoor advertising, billboard branding, transit media, bus shelter ads, airport ads, and OOH marketing solutions across India.",
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  areaServed: [
    {
      "@type": "City",
      name: "Chennai",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      areaServed: "IN",
      availableLanguage: "en",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Spotlight Advertising | Outdoor Advertising Agency",
    template: "%s | Spotlight Advertising",
  },

  description:
    "Spotlight Advertising provides premium outdoor advertising, billboard branding, transit media, bus shelter ads, airport ads, and OOH marketing solutions across India.",

  keywords: [
    "Spotlight Advertising",
    "OOH Advertising",
    "Outdoor Advertising",
    "Billboard Advertising",
    "Transit Advertising",
    "Airport Advertising",
    "Bus Shelter Advertising",
    "Advertising Agency Chennai",
  ],

  applicationName: "Spotlight Advertising",

  alternates: {
    canonical: `${siteConfig.url}/`,
  },

  openGraph: {
    title: "Spotlight Advertising",
    description:
      "Premium Outdoor Advertising & Branding Solutions.",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spotlight Advertising",
    description:
      "Premium Outdoor Advertising & Branding Solutions.",
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd }}
        />
      </head>
      <body
        className={`
          ${sora.className}
          bg-black
          text-white
          min-h-screen
          flex
          flex-col
          antialiased
        `}
      >

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-grow overflow-hidden">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
