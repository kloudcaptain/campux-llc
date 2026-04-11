import React from "react"
import Link from "next/link"
import { ArrowRight, TrendingDown, Rocket, Activity, ShieldCheck, Eye } from "lucide-react"

const outcomes = [
  {
    Icon: TrendingDown,
    headline: "Reduce unnecessary cloud spend",
    body: "Identify waste, right-size resources, and make your infrastructure costs predictable and efficient.",
  },
  {
    Icon: Rocket,
    headline: "Deploy faster with automated pipelines",
    body: "Eliminate manual steps and ship with confidence through reliable, repeatable CI/CD workflows.",
  },
  {
    Icon: Activity,
    headline: "Improve system uptime and performance",
    body: "Architecture designed for resilience — not just for normal conditions, but for the moments that matter.",
  },
  {
    Icon: ShieldCheck,
    headline: "Strengthen your security posture from day one",
    body: "Security built into every layer — access controls, monitoring, and compliance wired in from the start.",
  },
  {
    Icon: Eye,
    headline: "Gain visibility and control over your infrastructure",
    body: "Know what's running, what it costs, and how it's behaving — without hunting through dashboards.",
  },
]

export default function OutcomesSection() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: headline block */}
          <div className="lg:sticky lg:top-32">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
              Outcomes
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Real Results,
              <br />
              <span className="text-gray-500">Not Just Services</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Every engagement is structured around measurable outcomes — not activity metrics
              or ticket counts. Here is what working with us actually produces.
            </p>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full transition-colors duration-200"
            >
              See client results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: outcome cards */}
          <div className="flex flex-col gap-4">
            {outcomes.map(({ Icon, headline, body }) => (
              <div
                key={headline}
                className="group flex gap-5 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/15 border border-cyan-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 group-hover:text-cyan-50 transition-colors">
                    {headline}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
