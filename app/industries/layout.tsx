import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "ThomsUp works with healthcare providers, financial services firms, retail operations, and SaaS platforms — wherever infrastructure reliability and security are non-negotiable.",
  alternates: { canonical: "https://thomsup.com/industries" },
  openGraph: {
    title: "Industries — ThomsUp",
    description:
      "Infrastructure and security engineering for healthcare, financial services, retail, and SaaS — built around the constraints that actually matter in your sector.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries — ThomsUp",
    description:
      "Infrastructure and security engineering for healthcare, financial services, retail, and SaaS.",
  },
}

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
