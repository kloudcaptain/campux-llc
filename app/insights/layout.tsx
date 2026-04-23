import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering insights on infrastructure, security, DevOps, and the craft of building software that holds up under real conditions. Written by practitioners, relevant to decision-makers.",
  alternates: { canonical: "https://campux.co/insights" },
  openGraph: {
    title: "Campux Insights — Engineering Perspectives Worth Reading",
    description:
      "Honest takes on infrastructure, deployment, security, and the craft of building software that holds up under real conditions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campux Insights — Engineering Perspectives Worth Reading",
    description:
      "Honest takes on infrastructure, deployment, security, and the craft of building software that holds up under real conditions.",
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
