import React from "react"
import Link from "next/link"
import { ShieldCheck, Check, ArrowRight } from "lucide-react"

const points = [
  "Secure architecture from day one — not patched in later",
  "Controlled access and identity management across every environment",
  "Continuous monitoring and proactive risk reduction",
  "DevSecOps practices built into every delivery pipeline",
]

export default function SecuritySection() {
  return (
    <section className="bg-[#0d0d0d] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0a0a14] border border-white/10 p-10 sm:p-16">

          {/* Background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-400 mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Security
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Security isn&apos;t an add-on.
                <br />
                <span className="text-gray-500">It&apos;s the foundation.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We integrate security into every layer of your infrastructure — from initial
                architecture decisions to ongoing operational practices. Not as a checklist.
                As a design principle.
              </p>
              <Link
                href="/services/security"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full transition-colors duration-200"
              >
                Explore security services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 bg-white/4 border border-white/8 rounded-xl px-5 py-4"
                >
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-cyan-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
