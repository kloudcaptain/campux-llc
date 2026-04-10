import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Server, Shield, Cloud, Database, Network, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed infrastructure, security operations, cloud services, database management, and network engineering — six service lines, one operational standard.",
  alternates: { canonical: "https://thomsup.com/services" },
  openGraph: {
    title: "Services — ThomsUp",
    description:
      "Enterprise IT services managed to documented SLAs. Infrastructure, security, cloud, database, and networking — built for organisations that cannot afford the alternative.",
  },
}

const services = [
  {
    icon: Server,
    name: "Server Infrastructure",
    slug: "infrastructure",
    tagline: "The environment that never needs explaining.",
    description:
      "Dedicated and virtualised server infrastructure managed to documented SLAs. Proactive capacity planning, 24/7 monitoring calibrated to your baseline, patch management across your full estate, and incident response with agreed RTO targets — before you need them.",
    capabilities: [
      "Documented SLAs covering availability, response time, and escalation paths",
      "24/7 monitoring with alert thresholds calibrated to your baseline",
      "Patch management and OS lifecycle across the full estate",
      "Quarterly infrastructure reviews with written recommendations",
    ],
  },
  {
    icon: Shield,
    name: "Security Operations",
    slug: "security",
    tagline: "Security is not something you buy once and deploy.",
    description:
      "Continuous threat monitoring, vulnerability management, and compliance alignment across cloud, on-premises, and hybrid environments. We implement controls that are structural rather than procedural — enforced by the system, not by someone remembering to check.",
    capabilities: [
      "Continuous threat monitoring across cloud and hybrid environments",
      "Policy-as-Code enforcement for ISO 27001, SOC 2, HIPAA, PCI-DSS",
      "Automated compliance evidence generation and audit pack preparation",
      "Incident response planning and live response support",
    ],
  },
  {
    icon: Cloud,
    name: "Cloud Services",
    slug: "cloud",
    tagline: "Moving to the cloud is just the beginning.",
    description:
      "Multi-cloud and hybrid architecture, phased migration, and ongoing managed operations across AWS, Azure, and GCP. Infrastructure as Code at the foundation, cost governance built in, and compliance guardrails enforced at the infrastructure layer — not reviewed manually after the fact.",
    capabilities: [
      "Architecture design across AWS, Azure, and GCP built for your workload",
      "Phased migration with documented cutover plans and zero-downtime strategies",
      "Infrastructure as Code — every resource version-controlled and auditable",
      "Cost governance with tagging standards, budget alerts, and monthly reporting",
    ],
  },
  {
    icon: Database,
    name: "Database Management",
    slug: "database",
    tagline: "The backup that was never tested is not a backup.",
    description:
      "Fully managed database operations with high availability, point-in-time recovery, and automated failover — tested against documented RTO and RPO targets. Performance monitoring, query optimisation, migration planning, and version lifecycle management across 11 major database engines.",
    capabilities: [
      "High-availability with synchronous replication and automated failover",
      "Point-in-time recovery tested to documented recovery objectives",
      "Database migration planning and execution with agreed rollback procedures",
      "Version lifecycle management across PostgreSQL, MySQL, SQL Server, MongoDB, and more",
    ],
  },
  {
    icon: Network,
    name: "Network Engineering",
    slug: "networking",
    tagline: "Networks that hold together when everything else is under pressure.",
    description:
      "Software-defined networks designed with explicit redundancy, documented failover paths, and zero-trust segmentation. From SD-WAN and BGP configuration to network access control and wireless design — every architecture decision is documented and every failover path is tested.",
    capabilities: [
      "Zero-trust network architecture replacing flat, implicitly trusted environments",
      "Redundant uplinks with documented and tested failover procedures",
      "SD-WAN and software-defined networking design and implementation",
      "Network performance monitoring with baseline-calibrated alerting",
    ],
  },
]

const engagementPrinciples = [
  "Written SLAs with defined availability, response time, and escalation commitments — agreed before engagement begins",
  "Infrastructure as Code as the operational baseline — every resource defined, every change tracked",
  "Quarterly written reviews covering performance, incidents, recommendations, and forward planning",
  "Compliance alignment to your specific framework obligations, not a generic security checklist",
  "Transparent escalation paths — you always know who is responsible and what they are doing",
  "Evidence packs for audit and accreditation, produced continuously rather than assembled under pressure",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest block mb-6">
            Services
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            Everything your infrastructure
            <br />
            <span className="text-gray-400">requires. Nothing it doesn&apos;t.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-6">
            Five service lines, managed to a single operational standard: documented, tested, and accountable. Whether you need a single managed service or an integrated IT operations partner, the engagement model is the same — written SLAs, regular reporting, and engineers who treat your environment as if it were their own.
          </p>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            We work across infrastructure, security, cloud, database, and networking — independently or as an integrated function, depending on what your organisation actually needs.
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
              See client outcomes
            </Link>
          </div>
        </div>
      </div>

      {/* ── Service cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="border-t border-white/8 pt-16 space-y-8">
          {services.map(({ icon: Icon, name, slug, tagline, description, capabilities }) => (
            <div
              key={slug}
              className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 lg:p-10 hover:border-white/12 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left: summary */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
                      <Icon className="w-4.5 h-4.5 text-cyan-400" />
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{name}</span>
                  </div>

                  <p className="text-white text-xl font-semibold mb-4 leading-snug">{tagline}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Full service overview <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right: capability highlights */}
                <ul className="space-y-3 pt-1">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How we engage ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">How every engagement works</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Regardless of which service line you engage, the operational standard is consistent. We do not offer different levels of rigour for different clients — every environment is managed to the same documentation, testing, and reporting requirements.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Engagement begins with a documented baseline assessment of your current environment — what exists, what is configured correctly, what is not, and what represents the highest operational risk. From that baseline, we produce a prioritised programme of work and agree the ongoing managed service scope.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You receive quarterly written reviews, monthly reporting where relevant, and direct access to the engineers managing your environment — not a support desk. When something requires attention, you know before we tell you.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              {engagementPrinciples.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Framework compliance strip ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-5">Frameworks we align to</p>
        <div className="flex flex-wrap gap-3">
          {[
            "ISO 27001", "SOC 2 Type II", "HIPAA", "PCI-DSS",
            "Cyber Essentials", "NIST CSF", "NIST 800-53", "CIS Controls",
            "GDPR", "ITIL", "FedRAMP-aligned",
          ].map((f) => (
            <span
              key={f}
              className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/3 text-gray-400"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/contact"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Start here</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Talk to our team — we will scope the engagement and baseline your environment before any commitment
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Get in touch <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/solutions"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Client results</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              How we reduced a financial firm&apos;s compliance cycle from six weeks to four hours
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              See case studies <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/about"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">About ThomsUp</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              ThomsUp &mdash; A Campux Company. Who we are, how we work, and why operational accountability is non-negotiable.
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
