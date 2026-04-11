import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import PositioningStrip from "./components/PositioningStrip"
import EnterpriseServicesGrid from "./components/EnterpriseServicesGrid"
import OutcomesSection from "./components/OutcomesSection"
import SolutionsStrip from "./components/SolutionsStrip"
import WhoWeHelp from "./components/WhoWeHelp"
import SecuritySection from "./components/SecuritySection"
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
      <PositioningStrip />
      <section id="services">
        <EnterpriseServicesGrid />
      </section>
      <OutcomesSection />
      <SolutionsStrip />
      <WhoWeHelp />
      <SecuritySection />
      <TrustSection />
      <CTAStrip />
      <Footer />
    </>
  )
}
