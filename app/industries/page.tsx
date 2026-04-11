import Link from "next/link"
import { Heart, TrendingUp, ShoppingCart, Cpu, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Industries",
  description:
    "ThomsUp works with healthcare providers, financial services firms, retail operations, and SaaS platforms — wherever infrastructure reliability and security are non-negotiable.",
  openGraph: {
    title: "Industries — ThomsUp",
    description:
      "Infrastructure and security engineering for healthcare, financial services, retail, and SaaS — built around the constraints that actually matter in your sector.",
    type: "website",
  },
  alternates: { canonical: "https://thomsup.com/industries" },
}

// ─── Industry definitions ─────────────────────────────────────────────────────

const industries = [
  {
    Icon: Heart,
    name: "Healthcare",
    tagline: "Infrastructure that clinicians trust and compliance teams approve",
    body: "Patient care depends on systems that are fast, available, and tightly controlled. We design network architectures and access policies that meet HIPAA technical safeguards without adding friction to clinical workflows.",
    metric: "8.3s → 90ms average query time",
    caseStudyLabel: "Zero Trust for a 12-facility healthcare network",
  },
  {
    Icon: TrendingUp,
    name: "Financial Services",
    tagline: "Auditability built in — not assembled at quarter-end",
    body: "Compliance obligations in financial services don't pause between audits. We implement Policy as Code frameworks that enforce SOC 2 and ISO 27001 controls continuously, so evidence gathering takes hours instead of weeks.",
    metric: "6 weeks → 4 hrs audit cycle",
    caseStudyLabel: "Compliance automation for a mid-market investment firm",
  },
  {
    Icon: ShoppingCart,
    name: "Retail & E-Commerce",
    tagline: "Scales for peak, costs nothing during quiet",
    body: "Seasonal traffic spikes shouldn't require six-week procurement cycles or a war room on Black Friday. We build auto-scaling infrastructure that handles 4x normal peak and costs proportionally less when demand is low.",
    metric: "99.97% uptime post-migration",
    caseStudyLabel: "Cloud migration for a 400-store national retailer",
  },
  {
    Icon: Cpu,
    name: "SaaS & Technology",
    tagline: "Ship faster without waking anyone at 3am",
    body: "When a monolith becomes a bottleneck for three squads and a four-hour deploy, the architecture needs to change. We decompose, containerise, and rebuild CI/CD pipelines so teams can ship independently and confidently.",
    metric: "4 hrs → 12 min deployment time",
    caseStudyLabel: "Microservices migration for a B2B SaaS platform",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Page header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
          Industries We Serve
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          We know your constraints
          <br />
          <span className="text-gray-500">because we&apos;ve worked inside them</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Every sector has non-negotiables — regulatory requirements, uptime expectations,
          data access rules. We don&apos;t treat these as complications. We treat them as design inputs.
        </p>
      </div>

      {/* ── Industry cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industries.map(({ Icon, name, tagline, body, metric, caseStudyLabel }) => (
            <div
              key={name}
              className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.07)]"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 mb-6">
                <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
              </div>

              {/* Name + tagline */}
              <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
              <p className="text-cyan-400/80 text-sm font-medium mb-4">{tagline}</p>

              {/* Body */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{body}</p>

              {/* Metric */}
              <div className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Client outcome</p>
                <p className="text-white font-semibold text-sm">{metric}</p>
              </div>

              {/* Case study link */}
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 group-hover:gap-3 transition-all duration-200"
              >
                {caseStudyLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA banner ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-10 sm:p-14 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">
              Work with us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your sector has specific requirements.
              <br />
              <span className="text-gray-400">We&apos;ve already accounted for them.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Tell us what you&apos;re working on. We&apos;ll tell you whether we&apos;ve seen it before
              and what worked.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold text-sm hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
