import PropertySection from "@/components/PropertySection";
import { createSocialMetadata } from "@/lib/site";

const description =
  "Partner with Spotlight Advertising to turn high-visibility buildings and land into outdoor media revenue assets.";

export const metadata = {
  title: "Property Owners",
  description,
  ...createSocialMetadata({
    title: "Property Owners | Spotlight Advertising",
    description,
    path: "/property",
  }),
};

export default function PropertyPage() {
  return <PropertySection />;
}
