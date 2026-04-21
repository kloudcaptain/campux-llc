import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about how ThomsUp uses cookies on thomsup.com.",
  alternates: { canonical: "https://thomsup.com/cookie-policy" },
  robots: { index: false },
}

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
