import type { Metadata } from "next"
import HomePageClient from "./components/HomePageClient"

export const metadata: Metadata = {
  title: "Campux — Managed Infrastructure & Security Operations | US",
  description:
    "US-based managed infrastructure and security operations. We run your servers, cloud environments, networks, databases, and compliance posture — one team, one contract, no handoffs.",
  alternates: { canonical: "https://campux.co" },
  openGraph: {
    title: "Campux — Managed Infrastructure & Security Operations | US",
    description:
      "US-based managed infrastructure and security operations. Server estates, cloud environments, networks, databases, and compliance posture — operated as one accountable function.",
    url: "https://campux.co",
    type: "website",
  },
}

export default function Home() {
  return <HomePageClient />
}
