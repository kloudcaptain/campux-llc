import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ThomsUp collects, uses, and protects personal data on thomsup.com.",
  alternates: { canonical: "https://thomsup.com/privacy-policy" },
  robots: { index: false },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
