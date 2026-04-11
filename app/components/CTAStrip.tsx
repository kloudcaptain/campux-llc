import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTAStrip() {
  return (
    <section className="bg-[#0d0d0d] border-t border-white/5 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-5">
          Get Started
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Build Systems You Can Rely On
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re scaling, migrating, or fixing what&apos;s already there —
          we&apos;ll help you do it right. No discovery fees. No commitment to start the conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors duration-200"
          >
            Request a Consultation
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
