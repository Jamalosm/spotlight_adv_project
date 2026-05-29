import AdvertisersSection from "@/components/AdvertisersSection";
import { createSocialMetadata } from "@/lib/site";

const description =
  "Premium outdoor advertising placements for brands that need stronger visibility and recall across Chennai.";

export const metadata = {
  title: "Advertisers",
  description,
  ...createSocialMetadata({
    title: "Advertisers | Spotlight Advertising",
    description,
    path: "/advertisers",
  }),
};

export default function AdvertisersPage() {
  return <AdvertisersSection />;
}
