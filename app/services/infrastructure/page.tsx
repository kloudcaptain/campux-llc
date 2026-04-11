import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Server, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Server Infrastructure",
  description:
    "Dedicated and virtualised server infrastructure managed to documented SLAs. Built for organisations where uptime is a commercial obligation, not an aspiration.",
  alternates: { canonical: "https://thomsup.com/services/infrastructure" },
  openGraph: {
    title: "Server Infrastructure — ThomsUp",
    description:
      "Purpose-built server environments managed to documented SLAs. Proactive capacity management, redundant configurations, and engineers who monitor before you have to call.",
  },
}

const capabilities = [
  "Dedicated and virtualised server provisioning, sized to actual workload requirements",
  "Documented SLAs covering availability, response time, and escalation paths",
  "Proactive capacity planning — before headroom runs out, not after",
  "24/7 monitoring with alert thresholds calibrated to your baseline, not generic defaults",
  "Patch management and OS lifecycle across your entire estate",
  "Incident response with defined RTO and RPO targets agreed in writing",
  "Hardware failure remediation including vendor liaison and replacement coordination",
  "Quarterly infrastructure reviews with written recommendations",
]

const audiences = [
  {
    segment: "Startups & scale-ups",
    copy: "You are building a product, not a server estate. We provision, monitor, and manage the environment so your engineering team stays focused on what ships revenue — not what keeps the lights on. Reliable infrastructure from day one means you never have to rebuild trust with customers after an outage you weren't ready for.",
  },
  {
    segment: "Mid-market & enterprise",
    copy: "Aging on-premises hardware, undocumented configurations, and on-call rotations held together by tribal knowledge are infrastructure debt with a deadline. We take ownership of the environment, produce the documentation your auditors expect, and bring predictability to a part of your stack that has historically run on hope.",
  },
  {
    segment: "Government & public sector",
    copy: "Public sector infrastructure carries obligations that commercial environments do not — data residency, audit trails, procurement compliance, and the accountability that comes with public trust. We work to documented standards, produce written evidence of controls, and treat your infrastructure with the seriousness that public service demands.",
  },
]

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
              <Server className="w-4.5 h-4.5 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Infrastructure</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            The server environment
            <br />
            <span className="text-gray-400">that never needs explaining.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Most infrastructure problems aren't hardware problems. They're attention problems — environments that were provisioned correctly and then left to accumulate risk in the gaps between incidents. We close those gaps before they open.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors"
            >
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-300 hover:text-white hover:border-white/30 transition-colors"
            >
              See client results
            </Link>
          </div>
        </div>
      </div>

      {/* ── What we deliver ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="border-t border-white/8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">What managed infrastructure actually means</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Managed infrastructure is not hosting. It is the ongoing practice of keeping a server environment reliable, documented, and ready for what comes next — including the things you haven't anticipated yet.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We take ownership of the environment. That means monitoring it as if it were our own, maintaining it to the standard your SLAs require, and giving you the written documentation to prove it — whether that's for an internal audit, a procurement review, or a new CTO who wants to understand what they've inherited.
              </p>
            </div>

            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Who it's for ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Built for organisations that can't afford the alternative</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map(({ segment, copy }) => (
              <div key={segment} className="border-l-2 border-cyan-500/30 pl-6">
                <h3 className="text-white font-semibold mb-3">{segment}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cross-links ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/solutions"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Case studies</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              How we migrated a 400-store retail chain to AWS with zero planned downtime
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/insights/the-infrastructure-nobody-thinks-about"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">From our insights</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              The Infrastructure Nobody Thinks About (Until It's 3am)
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/services/networking"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Related service</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Network Engineering — the layer that connects your infrastructure to everything else
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Learn more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </div>

    </div>
  )
}
