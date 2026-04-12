import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Database, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Database Management",
  description:
    "Fully managed database operations with high availability, point-in-time recovery, and automated failover. Your data, exactly as you left it — even when something goes wrong.",
  alternates: { canonical: "https://thomsup.com/services/database" },
  openGraph: {
    title: "Database Management — ThomsUp",
    description:
      "The backup that was never tested is not a backup. We manage your database layer with the rigour that irreplaceable data deserves.",
  },
}

const capabilities = [
  "High-availability configuration with synchronous replication and automated failover",
  "Point-in-time recovery tested to documented recovery time and recovery point objectives",
  "Performance monitoring, query analysis, and index optimisation",
  "Database migration planning and execution — with rollback procedures agreed before go-live",
  "Encryption at rest and in transit, key rotation, and access audit logging",
  "Capacity planning based on growth projections and current utilisation patterns",
  "Read replica deployment to reduce primary load for analytics and reporting workloads",
  "Cross-region disaster recovery configuration and regular failover testing",
  "Database version lifecycle management — no more running EOL engines in production",
]

const engines = [
  "PostgreSQL", "MySQL", "MariaDB", "Microsoft SQL Server",
  "Amazon Aurora", "Amazon RDS", "MongoDB", "Redis",
  "Elasticsearch / OpenSearch", "Google Cloud SQL", "Azure SQL",
]

const audiences = [
  {
    segment: "Startups & product companies",
    copy: "A database failure at the wrong moment is an existential event for an early-stage company. Data loss, extended downtime, or a corrupted migration can undo months of customer trust that took years to build. We implement the HA configurations, tested backup procedures, and migration strategies that mean database operations are something you never have to think about.",
  },
  {
    segment: "Financial services & healthcare",
    copy: "Regulated industries face database obligations that go beyond keeping the lights on — data integrity attestations, retention periods, access audit trails, encryption standards, and the ability to produce specific records on demand for regulatory review. We configure and manage database environments to these standards, with the documentation to prove it.",
  },
  {
    segment: "Enterprise & government",
    copy: "Enterprise database estates are often sprawling, heterogeneous, and under-documented. Legacy engines on end-of-life versions sit alongside modern managed services, connected by scripts nobody has read in three years. We take an estate-wide view, prioritise the highest-risk gaps, and produce a managed, documented environment that your team can actually understand.",
  },
]

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
              <Database className="w-4.5 h-4.5 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Database Management</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            The backup that was never tested
            <br />
            <span className="text-gray-400">is not a backup.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Your database is where the irreplaceable things live — customer records, transaction history, operational data your business cannot reconstruct. Most organisations treat database management as a background concern until the moment it demands to be the only concern. We manage it with the rigour that irreplaceable data deserves, before you need us to.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="border-t border-white/8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">What rigorous database management looks like</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The difference between a database that is configured for high availability and one that is genuinely highly available is whether the failover has been tested under realistic conditions. A replica that exists but has never been promoted is an assumption, not a capability.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We configure database environments to documented recovery objectives — RTO and RPO targets agreed with you in writing — and test against those targets on a schedule. When something goes wrong, the procedure is already known, practised, and faster than it would be if the incident were the first time anyone had thought about it.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We also manage the less dramatic but equally important ongoing work: performance tuning, version lifecycle, capacity planning, and the query patterns that gradually erode performance until someone notices.
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

      {/* ── Engines ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-xl font-semibold text-white mb-6">Database engines we manage</h2>
        <div className="flex flex-wrap gap-3">
          {engines.map((e) => (
            <span
              key={e}
              className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/3 text-gray-400"
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      {/* ── Who it's for ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Your data deserves to be treated that way</h2>
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
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Case study</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Query times from 8.3 seconds to 90ms — healthcare network database migration across 12 facilities
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
            href="/services/cloud"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Related service</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Cloud Services — managed cloud environments where your database layer runs
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
