import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
