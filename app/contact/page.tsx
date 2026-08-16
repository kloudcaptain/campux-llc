import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";
import ContactEnhancer from "@/app/components/ContactEnhancer";

export const metadata: Metadata = pageMeta("contact", "/contact");

export default function ContactPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: fragment("contact") }} />
      <ContactEnhancer source="contact" />
    </>
  );
}
