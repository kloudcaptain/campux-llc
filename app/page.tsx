import type { Metadata } from "next"
import HomePageClient from "./components/HomePageClient"

export const metadata: Metadata = {
  title: "Azure Cloud Consulting & IT Training | Atlanta, GA",
  description:
    "Atlanta-based Azure cloud consulting and IT training firm. We design, secure, and optimize Azure environments — and teach teams to run them. Founded 2024. Small, senior, hands-on.",
  alternates: { canonical: "https://campux.co" },
  openGraph: {
    title: "Azure Cloud Consulting & IT Training | Atlanta, GA",
    description:
      "Atlanta-based Azure cloud consulting and IT training firm. We design, secure, and optimize Azure environments — and teach teams to run them.",
    url: "https://campux.co",
    type: "website",
  },
}

export default function Home() {
  return <HomePageClient />
}
