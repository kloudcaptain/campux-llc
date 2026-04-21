import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Client engagements across retail, financial services, healthcare, and SaaS — showing how ThomsUp solves real infrastructure, security, and cloud challenges with measurable results.",
  alternates: { canonical: "https://thomsup.com/solutions" },
  openGraph: {
    title: "ThomsUp Solutions — Client Engagements & Results",
    description:
      "Real engagements, real constraints, real outcomes. See how ThomsUp approaches enterprise infrastructure and security challenges.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThomsUp Solutions — Client Engagements & Results",
    description:
      "Real engagements, real constraints, real outcomes. See how ThomsUp approaches enterprise infrastructure challenges.",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
