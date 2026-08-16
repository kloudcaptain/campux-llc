import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";

export const metadata: Metadata = pageMeta("public-sector", "/public-sector");

export default function PublicSectorPage() {
  return <div dangerouslySetInnerHTML={{ __html: fragment("public-sector") }} />;
}
