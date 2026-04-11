import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Cloud, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Cloud Services",
  description:
    "Multi-cloud and hybrid cloud architecture, migration, and ongoing operational management across AWS, Azure, and GCP — built with cost governance and compliance guardrails from the start.",
  alternates: { canonical: "https://thomsup.com/services/cloud" },
  openGraph: {
    title: "Cloud Services — ThomsUp",
    description:
      "Moving to the cloud is not a destination. Managed cloud operations is the part nobody talks about before they get there. We handle it.",
  },
}

const capabilities = [
  "Cloud architecture design across AWS, Azure, and GCP — built for your workload, not a generic template",
  "Phased cloud migration with documented cutover plans and zero-downtime strategies",
  "Multi-cloud and hybrid environment management with unified operational visibility",
  "Infrastructure as Code (Terraform, Pulumi) — every resource defined, version-controlled, and reviewable",
  "Cost governance with tagging standards, budget alerts, and monthly spend reports",
  "Compliance guardrails enforced at the infrastructure layer — not manually reviewed after the fact",
  "Auto-scaling configuration calibrated to actual traffic patterns",
  "Cloud-native backup, disaster recovery, and cross-region failover design",
  "Reserved instance and savings plan optimisation to reduce cloud spend without reducing reliability",
]

const providers = [
  { name: "Amazon Web Services", short: "AWS", services: "EC2, EKS, RDS, Aurora, S3, CloudFront, Lambda, IAM, Config, GuardDuty" },
  { name: "Microsoft Azure", short: "Azure", services: "AKS, Azure SQL, Blob Storage, Active Directory, Defender for Cloud, Policy" },
  { name: "Google Cloud Platform", short: "GCP", services: "GKE, Cloud SQL, BigQuery, Cloud Armor, Security Command Center" },
]

const audiences = [
  {
    segment: "Startups scaling fast",
    copy: "The cloud architecture that gets you to your first thousand customers is rarely the one that gets you to your first hundred thousand. We design environments that scale cleanly without requiring a full rebuild — and help you avoid the technical debt that forms when growth happens faster than infrastructure planning.",
  },
  {
    segment: "Enterprises migrating from on-premises",
    copy: "Cloud migrations fail when they are treated as lift-and-shift projects. Moving a workload to the cloud without rearchitecting it for cloud-native operations typically produces higher costs and lower reliability than what it replaced. We design migrations that take the opportunity to do it right, with cutover plans your operations team can execute without anxiety.",
  },
  {
    segment: "Government & regulated sectors",
    copy: "Cloud adoption in government and regulated industries carries requirements that consumer cloud architectures were not designed to meet — data sovereignty, separation of duties, audit logging to a defined retention standard, and procurement compliance. We design cloud environments to these requirements from the start, rather than retrofitting controls onto an architecture built without them.",
  },
]

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
              <Cloud className="w-4.5 h-4.5 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Cloud Services</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            Moving to the cloud
            <br />
            <span className="text-gray-400">is just the beginning.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Cloud migration gets the attention. Cloud operations is where the actual work is. Once your workloads are running in AWS, Azure, or GCP, someone has to manage them, govern the costs, enforce the security controls, and keep the architecture aligned with how your business actually works. That's what we do.
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
              See migration case studies
            </Link>
          </div>
        </div>
      </div>

      {/* ── What we deliver ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="border-t border-white/8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">What a managed cloud environment looks like</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A cloud environment without governance is an environment where the costs drift upward, the configurations drift from their documented state, and the security controls that were correct at deployment become progressively less correct as the environment evolves. Governance is not paperwork. It is the set of automated and documented practices that keep the environment aligned with your intentions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We manage cloud environments with Infrastructure as Code at the foundation — every resource defined, every change tracked, every deviation detectable. You get the visibility to understand your environment and the documentation to explain it to anyone who needs to understand it.
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

      {/* ── Providers ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-xl font-semibold text-white mb-6">Cloud providers we manage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {providers.map(({ name, short, services }) => (
            <div key={short} className="bg-[#111] border border-white/8 rounded-xl p-6">
              <p className="text-cyan-400 text-sm font-semibold mb-1">{short}</p>
              <p className="text-white font-medium mb-3">{name}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{services}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Who it's for ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Cloud that matches your trajectory, not a template</h2>
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
              4x peak load capacity, 42% cost reduction — how we migrated a national retailer to AWS
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/insights/best-deployment-strategy"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">From our insights</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              We've Decided This Is the Best Deployment Strategy
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/services/database"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Related service</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Database Management — your data layer, managed with the same rigour as your infrastructure
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
