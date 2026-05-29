import ContactSection from "@/components/ContactSection";
import { createSocialMetadata } from "@/lib/site";

const description =
  "Contact Spotlight Advertising for outdoor advertising opportunities, partnerships, and premium billboard placements.";

export const metadata = {
  title: "Contact",
  description,
  ...createSocialMetadata({
    title: "Contact | Spotlight Advertising",
    description,
    path: "/contact",
  }),
};

export default function ContactPage() {
  return <ContactSection />;
}
