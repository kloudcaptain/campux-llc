import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ThomsUp. We respond to every serious enquiry within one business day — whether you have a specific technical problem or are evaluating providers for a future engagement.",
  alternates: { canonical: "https://thomsup.com/contact" },
  openGraph: {
    title: "Contact ThomsUp",
    description:
      "Start a conversation about your infrastructure. No obligation, no sales pressure — just an honest discussion about what you are dealing with.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
