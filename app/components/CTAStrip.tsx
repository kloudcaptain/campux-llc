import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// ── CTA STRIP ──────────────────────────────────────────────────────────────────
// Full-width call-to-action section that appears above the footer on the homepage.
// Edit the heading, body copy, and button labels/links below.
export default function CTAStrip() {
  return (
    <section className="bg-[#0d0d0d] border-t border-white/5 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* ── Heading — edit text here */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Ready to talk about your infrastructure?
        </h2>

        {/* ── Body copy — edit text here */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          We start every engagement with a discovery call — no cost, no commitment.
          Just an honest conversation about what you are dealing with and whether
          we are the right team to help.
        </p>

        {/* ── Buttons — edit label and href for each */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors duration-200"
          >
            Start the conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-8 py-4 text-sm font-semibold text-gray-300 hover:text-white hover:border-white/30 transition-colors duration-200"
          >
            See our client results
          </Link>
        </div>

      </div>
    </section>
  )
}
