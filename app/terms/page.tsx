import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";

export const metadata: Metadata = pageMeta("terms", "/terms");

export default function TermsPage() {
  return <div dangerouslySetInnerHTML={{ __html: fragment("terms") }} />;
}
