import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import EnterpriseServicesGrid from "./components/EnterpriseServicesGrid"
import TrustSection from "./components/TrustSection"
import CTAStrip from "./components/CTAStrip"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  alternates: { canonical: "https://thomsup.com" },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="services">
        <EnterpriseServicesGrid />
      </section>
      <TrustSection />
      <CTAStrip />
      <Footer />
    </>
  )
}
