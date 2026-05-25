export const siteConfig = {
  name: "Spotlight Advertising",
  shortName: "Spotlight OOH",
  description: "Premium Outdoor Advertising",
  url: "https://spotlightooh.com",
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
