import React from "react"
import { Cloud, ShieldCheck, Zap, Target } from "lucide-react"

const pillars = [
  {
    icon: Cloud,
    title: "Built for Modern Cloud",
    description:
      "We work natively in Azure and AWS using proven, scalable patterns — not vendor-agnostic abstractions that add complexity without clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Mindset",
    description:
      "Everything we build is designed to reduce risk — not introduce it. Security is a design input, not a post-deployment concern.",
  },
  {
    icon: Zap,
    title: "Automation-Driven Approach",
    description:
      "Less manual work, fewer errors, faster delivery. We automate what should be automated and document what needs to be understood.",
  },
  {
    icon: Target,
    title: "Direct, Practical Execution",
    description:
      "No layers, no fluff — just focused engineering that gets results. You work directly with the people doing the work.",
  },
]

export default function TrustSection() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
            Why ThomsUp
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Why Teams Choose
            <br />
            <span className="text-gray-500">to Work With Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We are an independent engineering firm — not a reseller, not a staffing agency.
            The standard we hold ourselves to is the same regardless of company size.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-7 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/15 border border-cyan-500/20 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-base mb-3 group-hover:text-cyan-50 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Industry strip */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">
            Engagements across
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "Healthcare & Life Sciences",
              "Financial Services",
              "Retail & E-Commerce",
              "B2B SaaS",
              "Regulated Industries",
              "Professional Services",
            ].map((industry) => (
              <span key={industry} className="text-sm text-gray-500">
                {industry}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
