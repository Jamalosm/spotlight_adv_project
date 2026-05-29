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

export const metadata: Metadata = {
  metadataBase: new URL("https://spotlightooh.com"),

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
    canonical: "https://spotlightooh.com",
  },

  openGraph: {
    title: "Spotlight Advertising",
    description:
      "Premium Outdoor Advertising & Branding Solutions.",
    url: "https://spotlightooh.com",
    siteName: "Spotlight Advertising",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/Bb.png",
        width: 1200,
        height: 630,
        alt: "Spotlight Advertising",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spotlight Advertising",
    description:
      "Premium Outdoor Advertising & Branding Solutions.",
    images: ["/Bb.png"],
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
