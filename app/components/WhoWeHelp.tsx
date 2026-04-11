import React from "react"
import Link from "next/link"
import { Zap, BarChart3, Settings, Database, ArrowRight } from "lucide-react"

const audiences = [
  {
    Icon: Zap,
    label: "Startups scaling their infrastructure",
    detail: "Without breaking things as you grow.",
  },
  {
    Icon: BarChart3,
    label: "Growing businesses that need reliability",
    detail: "Structure and stability as your operations expand.",
  },
  {
    Icon: Settings,
    label: "Teams that want better visibility and automation",
    detail: "Less manual work, more confidence in delivery.",
  },
  {
    Icon: Database,
    label: "Organizations with sensitive or critical systems",
    detail: "Where security and uptime are non-negotiable.",
  },
]

export default function WhoWeHelp() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* Left text: 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
              Who We Work With
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Built for teams
              <br />
              <span className="text-gray-500">who can&apos;t afford to guess</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              We work with organizations where infrastructure is a business-critical concern —
              not a background function.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full transition-colors duration-200"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right audience cards: 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map(({ Icon, label, detail }) => (
              <div
                key={label}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/15 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
                </div>
                <p className="text-white font-semibold text-sm leading-snug mb-1.5">{label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
