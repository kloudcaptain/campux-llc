import type { Metadata } from "next";
import { fragment, pageMeta } from "@/app/lib/ported";

export const metadata: Metadata = pageMeta("services", "/services");

export default function ServicesPage() {
  return <div dangerouslySetInnerHTML={{ __html: fragment("services") }} />;
}
