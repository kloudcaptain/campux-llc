import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";
import InsightsFilter from "@/app/components/InsightsFilter";

export const metadata: Metadata = pageMeta("insights", "/insights");

export default function InsightsPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: fragment("insights") }} />
      <InsightsFilter />
    </>
  );
}
