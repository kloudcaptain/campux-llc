import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";

export const metadata: Metadata = pageMeta("working-with-us", "/working-with-us");

export default function WorkingWithUsPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: fragment("working-with-us") }} />
  );
}
