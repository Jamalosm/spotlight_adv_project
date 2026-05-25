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
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
