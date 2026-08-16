import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";

export const metadata: Metadata = pageMeta("privacy", "/privacy");

export default function PrivacyPage() {
  return <div dangerouslySetInnerHTML={{ __html: fragment("privacy") }} />;
}
