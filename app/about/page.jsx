import AboutSection from "@/components/AboutSection";
import { createSocialMetadata } from "@/lib/site";

const description =
  "Learn how Spotlight Advertising creates high-impact outdoor advertising placements across Chennai.";

export const metadata = {
  title: "About Us",
  description,
  ...createSocialMetadata({
    title: "About Us | Spotlight Advertising",
    description,
    path: "/about",
  }),
};

export default function AboutPage() {
  return <AboutSection />;
}
