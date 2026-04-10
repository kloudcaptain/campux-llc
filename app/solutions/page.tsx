import { caseStudies } from "@/app/data/caseStudies"
import Link from "next/link"
import { ArrowRight, Search, FileText, Wrench, BarChart2 } from "lucide-react"

export const metadata = {
  title: "Solutions",
  description: "Client engagements across retail, financial services, healthcare, and SaaS — showing how ThomsUp solves real infrastructure, security, and cloud challenges with measurable results.",
  alternates: { canonical: "https://thomsup.com/solutions" },
  openGraph: {
    title: "ThomsUp Solutions — Client Engagements & Results",
    description: "Real engagements, real constraints, real outcomes. See how ThomsUp approaches enterprise infrastructure and security challenges.",
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Client Engagements</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Real problems.
            <br />
            <span className="text-gray-400">Documented results.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Each engagement below reflects a real client, a real constraint, and a measurable outcome.
            Organisation names are anonymised by agreement — the numbers are not.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Card header */}
              <div className="p-8 sm:p-10 border-b border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Case Study {String(idx + 1).padStart(2, "0")} · {study.industry}
                    </p>
                    <h2 className="text-2xl font-bold text-white">{study.client}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">{study.summary}</p>
              </div>

              {/* Problem / Solution / Result */}
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Problem</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.problem}</p>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Solution</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Result</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.result}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="px-8 sm:px-10 py-6 border-t border-white/5 bg-[#0d0d0d]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl font-bold text-cyan-400 mb-1">{m.value}</p>
                      <p className="text-xs text-gray-500">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement process */}
        <div className="mt-20 mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
          <div className="max-w-3xl mb-10">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A structured engagement process</h2>
            <p className="text-gray-400 leading-relaxed">
              Every engagement follows a consistent four-phase methodology. This gives your procurement and technical teams
              a clear line of sight from initial scoping through to measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                phase: "01",
                title: "Discovery",
                description: "We document your current environment, identify constraints, and agree on measurable success criteria before any work begins.",
              },
              {
                icon: FileText,
                phase: "02",
                title: "Scoping",
                description: "A detailed statement of work is produced, covering deliverables, timelines, responsibilities, and escalation paths.",
              },
              {
                icon: Wrench,
                phase: "03",
                title: "Delivery",
                description: "Implementation proceeds against the agreed scope, with regular status updates and documented change control for any scope adjustments.",
              },
              {
                icon: BarChart2,
                phase: "04",
                title: "Review",
                description: "Post-delivery, we validate outcomes against the agreed criteria and provide documentation suitable for internal audit and compliance records.",
              },
            ].map(({ icon: Icon, phase, title, description }) => (
              <div key={phase} className="bg-[#111] border border-white/10 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded-full px-2.5 py-0.5">{phase}</span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-link to blog */}
        <div className="mt-16 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#111] border border-white/8 rounded-2xl p-8">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Further reading</p>
              <h3 className="text-white font-semibold text-lg mb-3">
                The thinking behind the work
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Our blog covers the engineering principles and trade-offs behind the approaches used in these engagements — deployment strategy, compliance as code, zero-trust architecture, and more.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Read the blog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[#111] border border-white/8 rounded-2xl p-8">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Start here</p>
              <h3 className="text-white font-semibold text-lg mb-3">
                Facing a similar challenge?
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                We are happy to review your situation before any engagement begins — no obligation, no sales pressure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors"
              >
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
