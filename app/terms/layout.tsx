import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the ThomsUp website at thomsup.com.",
  alternates: { canonical: "https://thomsup.com/terms" },
  robots: { index: false },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
