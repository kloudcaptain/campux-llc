import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, FileText, Users, Award } from "lucide-react"

const principles = [
  {
    icon: FileText,
    title: "Documentation is not optional",
    body: "Every environment we manage produces documentation that reflects its actual state — not its intended state. Runbooks, topology diagrams, failover procedures, and change records exist because operations depend on them, not because an audit asked for them.",
  },
  {
    icon: Shield,
    title: "Security is structural, not procedural",
    body: "Controls that depend on someone remembering to apply them are not controls. We design environments where security requirements are enforced by the system — at the pipeline, at the infrastructure layer, at the access boundary — so that compliance is a continuous state, not a periodic review.",
  },
  {
    icon: Users,
    title: "Accountability without ambiguity",
    body: "When something goes wrong, you should know exactly who is responsible, what they are doing, and when resolution is expected. We operate under documented SLAs with defined escalation paths — not as a formality, but because operational accountability is the foundation of the relationship.",
  },
  {
    icon: Award,
    title: "Tested, not assumed",
    body: "A backup that has never been restored is an assumption. A failover that has never been tested is a hope. We treat untested capabilities as capabilities that do not yet exist, and we schedule the testing that converts assumptions into evidence.",
  },
]

const differentiators = [
  "Documented SLAs with defined RTO and RPO targets, agreed before engagement",
  "Infrastructure as Code at the foundation — every resource version-controlled and auditable",
  "Policy-as-Code compliance enforcement across cloud and hybrid environments",
  "Quarterly operational reviews with written recommendations and evidence packs",
  "Alignment to ISO 27001, SOC 2, HIPAA, PCI-DSS, NIST, and Cyber Essentials",
  "Government security framework experience including data classification and accreditation support",
]

const audiences = [
  {
    segment: "Startups and growth-stage companies",
    copy: "Early infrastructure decisions compound. The architecture choices made in your first year shape the cost, complexity, and security posture you carry into Series B and beyond. We work with founding and growth-stage teams to build environments that scale cleanly — without the technical debt that forms when speed is the only priority.",
  },
  {
    segment: "Enterprise and Fortune-class organisations",
    copy: "Large organisations face a specific infrastructure challenge: sprawl. Cloud accounts without governance, on-premises hardware without documentation, legacy systems nobody has read in years. We take an estate-wide view, prioritise the highest-risk gaps, and bring the operational discipline that enterprise environments require but rarely have.",
  },
  {
    segment: "Government and regulated sectors",
    copy: "Government technology programmes carry obligations that commercial environments do not — data sovereignty, access audit trails, procurement compliance, and the public accountability that follows when something goes wrong. We design and operate to these requirements from the start, not as an afterthought when accreditation is approaching.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">

          {/* Company badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 mb-8">
            <span className="text-gray-400 text-xs tracking-widest uppercase">ThomsUp</span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-cyan-400 text-xs tracking-widest uppercase">A Campux Company</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            We operate the infrastructure
            <br />
            <span className="text-gray-400">others avoid thinking about.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-6">
            ThomsUp is an enterprise IT managed services company, part of the Campux family of companies. We manage the environments that regulated industries, government programmes, and high-growth companies depend on — not as a background service, but as a managed operational function with documented accountability.
          </p>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Infrastructure becomes visible at the worst possible moment: during an incident, an audit, or a board question that nobody can answer. We make it visible before that — through documentation, testing, and the operational discipline that prevents the call nobody wants to make at 3am.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors"
            >
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-300 hover:text-white hover:border-white/30 transition-colors"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </div>

      {/* ── What we are ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="border-t border-white/8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Managed IT operations, not infrastructure reselling</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The distinction matters. We are not a hosting provider, a cloud reseller, or a break-fix support desk. We are an operational partner — the team responsible for ensuring that your infrastructure estate is reliable, documented, secure, and aligned with your obligations at all times, not only when something is wrong.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                That means we own the outcomes, not just the tasks. We do not submit a ticket and wait. We monitor proactively, respond with defined SLAs, escalate with documented paths, and review quarterly with written recommendations that reflect the current state of your environment rather than a generic health report.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We work across server infrastructure, cloud environments, network engineering, database management, and security operations — as individual service lines or as an integrated managed IT function, depending on what your organisation needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-5">What you can expect from us</h2>
              <ul className="space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Principles ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">How we work</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            These are not values statements. They are the operational commitments that define how ThomsUp engages with every client environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-[#111] border border-white/8 rounded-xl p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 mb-5">
                  <Icon className="w-4.5 h-4.5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ThomsUp / Campux ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 mb-6">
            <span className="text-cyan-400 text-xs tracking-widest uppercase">Part of the Campux Group</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-5">
            ThomsUp &mdash; built on the principle that enterprise infrastructure deserves serious operational management.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-5">
            Founded as part of the Campux family of companies, ThomsUp was built around a specific observation: most organisations treat infrastructure management as an operational afterthought — something that runs in the background until it demands to be the only concern.
          </p>
          <p className="text-gray-400 leading-relaxed mb-5">
            We exist because that approach is genuinely dangerous at scale. An infrastructure estate that is not actively managed does not stay in the condition it was provisioned in. It accumulates configuration drift, deferred patches, undocumented dependencies, and untested failover paths — quietly, until the accumulation becomes visible through an incident.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our engagement model is built on written accountability, regular reporting, and the expectation that you should never have to wonder what state your environment is in. We are the operational partner that enterprise and government organisations rely on with the same confidence they expect from their own internal teams.
          </p>
        </div>
      </div>

      {/* ── Who we work with ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">The organisations we work with</h2>
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

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/services"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">What we do</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Six service lines — infrastructure, security, cloud, database, networking, and integrated managed IT
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Explore services <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/solutions"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Results</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Client outcomes across healthcare, financial services, retail, and government
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              See case studies <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Start here</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Talk to our team — no obligation, no sales playbook, just a direct conversation about your environment
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Get in touch <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </div>

    </div>
  )
}
