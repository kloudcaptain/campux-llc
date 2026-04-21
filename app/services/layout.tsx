import type { Metadata } from "next"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed infrastructure, security operations, cloud services, database management, and network engineering — six service lines, one operational standard.",
  alternates: { canonical: "https://thomsup.com/services" },
  openGraph: {
    title: "Services — ThomsUp",
    description:
      "Enterprise IT services managed to documented SLAs. Infrastructure, security, cloud, database, and networking — built for organisations that cannot afford the alternative.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — ThomsUp",
    description:
      "Enterprise IT services managed to documented SLAs. Infrastructure, security, cloud, database, and networking.",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
