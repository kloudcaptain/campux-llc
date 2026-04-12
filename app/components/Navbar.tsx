"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Server, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// ── NAV LINKS ──────────────────────────────────────────────────────────────────
// Edit the desktop + mobile navigation items here.
// Order determines left-to-right display order on desktop.
const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
]

function isLinkActive(href: string, pathname: string) {
  return pathname === href || pathname.startsWith(href + "/")
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pillShape, setPillShape] = useState("rounded-full")
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (isOpen) {
      setPillShape("rounded-2xl")
    } else {
      closeTimer.current = setTimeout(() => setPillShape("rounded-full"), 280)
    }
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current) }
  }, [isOpen])

  return (
    <header
      className={cn(
        // Centering: span full viewport width, auto margins center the content
        "fixed top-5 left-0 right-0 z-50 mx-auto",
        "flex flex-col items-stretch",
        "px-5 py-2.5",
        "border transition-all duration-300",
        // Width: near-full on mobile, shrink to content on desktop
        "w-[calc(100%-2rem)] sm:w-fit",
        pillShape,
        scrolled
          ? "bg-[#0d0d0d]/90 border-white/15 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_0_1px_rgba(6,182,212,0.06)]"
          : "bg-[#1a1a1a]/55 border-white/10 backdrop-blur-md"
      )}
    >
      {/* ── Main row ── */}
      <div className="flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/15">
            <Server className="w-3.5 h-3.5 text-cyan-400" strokeWidth={2} />
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">ThomsUp</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden sm:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200",
                  active
                    ? "text-white bg-white/8"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-cyan-100 transition-colors duration-200 shrink-0"
        >
          Talk to Us
        </Link>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden ml-auto flex h-7 w-7 items-center justify-center rounded-md text-gray-300 hover:text-white hover:bg-white/8 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-280 ease-in-out",
          isOpen ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0 pointer-events-none"
        )}
      >
        <div className="h-px bg-white/8 mb-3" />
        <nav className="flex flex-col gap-0.5 mb-3">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors duration-150",
                  active
                    ? "text-cyan-400 bg-cyan-500/8"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <Link
          href="/contact"
          className="block w-full text-center px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-cyan-100 transition-colors"
        >
          Talk to Us
        </Link>
      </div>
    </header>
  )
}
