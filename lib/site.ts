export const siteConfig = {
  name: "Spotlight Advertising",
  shortName: "Spotlight OOH",
  description:  "Premium Outdoor Advertising, Billboard Branding, Transit Media and OOH Advertising Solutions.",

  url: "https://spotlightooh.com",
  ogImage: "https://spotlightooh.com/Bb.png",
  email: "contact@spotlightooh.com",
  phoneDisplay: "+91 85258 67890",
  phoneHref: "+918525867890",
  whatsappNumber: "918525867890",
  navItems: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Advertisers", path: "/advertisers" },
    { name: "Property Owners", path: "/property" },
    { name: "Contact", path: "/contact" },
  ],
} as const;

export const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/advertisers", priority: 0.9 },
  { path: "/property", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
] as const;

export function absoluteUrl(path = "/") {
  if (path === "/") {
    return siteConfig.url;
  }

  return new URL(path, siteConfig.url).toString();
}

export function createSocialMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = absoluteUrl(path);

  return {
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
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
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
