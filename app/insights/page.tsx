import { blogPosts } from "@/app/data/blog"
import InsightsClient from "./InsightsClient"

export const metadata = {
  title: "Insights — Infrastructure, Security & DevOps",
  description:
    "Operational thinking on infrastructure, security, cloud, and DevOps — written by engineers who manage these systems daily, not content teams. No filler, no trend pieces.",
  alternates: { canonical: "https://capux.co/insights" },
  openGraph: {
    title: "Insights — Infrastructure, Security & DevOps | Campux",
    description:
      "Operational thinking on infrastructure, security, and DevOps from engineers who manage these systems daily.",
    url: "https://capux.co/insights",
    type: "website",
  },
}

export default function InsightsPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return <InsightsClient posts={sorted} />
}
