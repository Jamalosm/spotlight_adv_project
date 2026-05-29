import type { Metadata } from "next";

import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Upcoming from "@/components/Upcoming";
import CTA from "@/components/CTA";
import HomeContact from "@/components/HomeContact";
import { createSocialMetadata } from "@/lib/site";

const description =
  "Spotlight Advertising provides premium outdoor advertising, billboard branding, transit media, bus shelter ads, airport ads, and OOH marketing solutions across India.";

export const metadata: Metadata = {
  ...createSocialMetadata({
    title: "Spotlight Advertising | Outdoor Advertising Agency",
    description,
    path: "/",
  }),
};

export default function Home() {
  return (
    <>
       <Hero />
      <WhatWeDo />
      <Upcoming />
      <CTA />
    
      <HomeContact />
    </>
  );
}
