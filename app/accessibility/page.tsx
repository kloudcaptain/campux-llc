import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";

export const metadata: Metadata = pageMeta("accessibility", "/accessibility");

export default function AccessibilityPage() {
  return <div dangerouslySetInnerHTML={{ __html: fragment("accessibility") }} />;
}
