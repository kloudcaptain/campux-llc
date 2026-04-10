import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "About",
  description:
    "ThomsUp is an enterprise IT managed services company, part of the Campux family of companies. We manage the infrastructure, security, and cloud environments that regulated industries and government programmes depend on.",
  alternates: { canonical: "https://thomsup.com/about" },
  openGraph: {
    title: "About ThomsUp — A Campux Company",
    description:
      "We operate the infrastructure others avoid thinking about — managed with documented SLAs, built for audit, and designed for organisations that cannot afford downtime.",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
