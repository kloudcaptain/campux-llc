import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";
import ContactEnhancer from "@/app/components/ContactEnhancer";

export const metadata: Metadata = pageMeta("home", "/");

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: fragment("home") }} />
      <ContactEnhancer source="home" />
    </>
  );
}
