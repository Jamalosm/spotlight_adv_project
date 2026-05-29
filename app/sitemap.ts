import type { MetadataRoute } from "next";

import { absoluteUrl, routes } from "@/lib/site";

const lastModified = new Date("2026-05-29");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
