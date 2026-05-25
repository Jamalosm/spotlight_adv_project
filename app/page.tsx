import type { Metadata } from "next";

import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Upcoming from "@/components/Upcoming";
import CTA from "@/components/CTA";
import HomeContact from "@/components/HomeContact";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
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
