import React from "react"
import { Shield, Clock, FileCheck } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Security-first by design",
    description:
      "Every engagement is structured around documented controls, not assumptions. ISO 27001 alignment, SOC 2 readiness, and HIPAA technical safeguards are built into how we work — not bolted on later.",
  },
  {
    icon: Clock,
    title: "Accountability over availability",
    description:
      "We respond to every serious enquiry within one business day and deliver against written scopes of work. You always know what we committed to, and whether we delivered it.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready from day one",
    description:
      "Our engagements produce documentation suitable for internal audit, procurement review, and regulatory evidence. Government and enterprise buyers can account for every decision we made together.",
  },
]

export default function TrustSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
            Why organisations choose NexCore
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for buyers who need to justify the decision
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are a startup CTO, an enterprise procurement team, or a government
            technology officer — the standard we hold ourselves to is the same.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
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
              "Government & Public Sector",
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
