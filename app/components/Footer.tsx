import React from "react"
import Link from "next/link"
import { Server, Globe, Rss, ExternalLink, Mail } from "lucide-react"

// ── FOOTER LINK COLUMNS ────────────────────────────────────────────────────────
// Edit the nav columns shown in the footer.
// To add a column: add a new object with title + links array.
// To add a link: add { name: "Label", href: "/path" } to any links array.
// href can be internal ("/about") or external ("https://...").
const sections = [
  {
    title: "Services",
    links: [
      { name: "Infrastructure", href: "/services/infrastructure" },
      { name: "Security", href: "/services/security" },
      { name: "Cloud", href: "/services/cloud" },
      { name: "Database", href: "/services/database" },
      { name: "Networking", href: "/services/networking" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "Industries", href: "/industries" },
      { name: "Insights", href: "/insights" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
]

const socialLinks = [
  { Icon: Globe, href: "#", label: "Website" },
  { Icon: Rss, href: "#", label: "Insights" },
  { Icon: ExternalLink, href: "#", label: "Docs" },
  { Icon: Mail, href: "#", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              <span className="text-white font-semibold text-lg tracking-wide">ThomsUp</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Enterprise infrastructure, security, and cloud services — built for organisations
              that can't afford downtime.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-cyan-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-xs text-gray-600 leading-relaxed max-w-2xl">
          We are an independent consulting firm and are not affiliated with any government agency.
          Services are provided to commercial and public sector clients.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} ThomsUp &middot; A Campux Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cyan-400 transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">Terms</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors duration-200">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
