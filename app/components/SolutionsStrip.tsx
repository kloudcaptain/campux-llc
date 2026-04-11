import React from "react"
import Link from "next/link"
import { ArrowUpRight, GitBranch, Lock, DollarSign, ArrowRight } from "lucide-react"

const solutions = [
  {
    Icon: ArrowUpRight,
    title: "Cloud Migration & Modernization",
    body: "Transition to the cloud with a clear, structured approach that minimizes risk and downtime.",
  },
  {
    Icon: GitBranch,
    title: "DevOps Automation",
    body: "Build pipelines that enable faster releases, fewer errors, and consistent delivery.",
  },
  {
    Icon: Lock,
    title: "Secure Cloud Architecture",
    body: "Design infrastructure with security built in — not added later.",
  },
  {
    Icon: DollarSign,
    title: "Cost Optimization",
    body: "Identify waste, optimize resources, and make your cloud spend predictable and efficient.",
  },
]

export default function SolutionsStrip() {
  return (
    <section className="bg-[#0d0d0d] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
            Solutions
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Built Around
              <br />
              <span className="text-gray-500">Real Problems</span>
            </h2>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors shrink-0"
            >
              View all client results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutions.map(({ Icon, title, body }) => (
            <Link
              key={title}
              href="/solutions"
              className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.06)] block"
            >
              <div className="absolute top-6 right-6 w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/15 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-cyan-50 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
