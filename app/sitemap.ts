import type { MetadataRoute } from "next";

import { routes, siteConfig } from "@/lib/site";

const lastModified = new Date("2026-05-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
