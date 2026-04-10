import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Operations",
  description:
    "Continuous security monitoring, threat response, and compliance alignment for organisations where a breach is not a recoverable event.",
  alternates: { canonical: "https://thomsup.com/services/security" },
  openGraph: {
    title: "Security Operations — ThomsUp",
    description:
      "Security is not a product you buy and deploy. It is a practice you maintain. We help organisations build and sustain the security posture their environment and obligations require.",
  },
}

const capabilities = [
  "Continuous threat monitoring across cloud, on-premises, and hybrid environments",
  "Vulnerability assessment and prioritised remediation planning",
  "Policy as Code implementation — ISO 27001, SOC 2, HIPAA, PCI-DSS controls as executable rules",
  "Automated compliance evidence generation and audit pack preparation",
  "Incident response planning, tabletop exercises, and live response support",
  "Identity and access management review and hardening",
  "Security configuration baseline enforcement across your infrastructure estate",
  "Third-party risk assessment for vendors and supply chain dependencies",
  "Security awareness programme design for non-technical staff",
]

const audiences = [
  {
    segment: "Startups & growth-stage companies",
    copy: "Security debt compounds. A startup that ships fast and secures later often discovers, at Series B or at a customer due-diligence review, that the shortcuts taken in year one now represent significant remediation cost. We help early-stage companies build security practices that scale with them — without requiring a full-time security hire they can't yet justify.",
  },
  {
    segment: "Enterprise & regulated industries",
    copy: "For organisations under SOC 2, ISO 27001, HIPAA, or PCI-DSS obligations, compliance cannot be a manual process at scale. We implement policy enforcement that is structural rather than procedural — controls that execute automatically rather than depending on someone remembering to check. The result is a posture that satisfies auditors and actually reflects your production environment.",
  },
  {
    segment: "Government & public sector",
    copy: "A security incident affecting public data carries consequences that commercial breaches do not — loss of public trust, statutory notification obligations, and scrutiny that extends beyond the organisation. We align security controls to government frameworks including Cyber Essentials, NIST, and ISO 27001, and produce the documentation your CISO, legal team, and oversight bodies expect.",
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
              <Shield className="w-4.5 h-4.5 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Security Operations</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            Security is not something
            <br />
            <span className="text-gray-400">you buy once and deploy.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Most organisations have security products. Fewer have security practices. The difference shows up in audits, in incident response, and in the gap between what your controls say they do and what they actually do under pressure. We close that gap.
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
              See compliance case studies
            </Link>
          </div>
        </div>
      </div>

      {/* ── What we deliver ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="border-t border-white/8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">What security operations actually involves</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Purchasing an endpoint detection tool is not the same as having an endpoint security programme. The tool is the easy part. The hard part is knowing what it's telling you, having a process for when it fires, and ensuring it's correctly configured against your specific environment rather than the defaults it ships with.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We work across the full security operations cycle — from baseline assessment and control implementation, to continuous monitoring and incident response. Our deliverables are things your auditors can review and your leadership team can act on, not dashboard screenshots that look reassuring without telling you much.
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

      {/* ── Compliance frameworks ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-xl font-semibold text-white mb-6">Frameworks we work to</h2>
        <div className="flex flex-wrap gap-3">
          {["ISO 27001", "SOC 2 Type II", "HIPAA", "PCI-DSS", "Cyber Essentials", "NIST CSF", "CIS Controls", "GDPR"].map((f) => (
            <span
              key={f}
              className="text-sm px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* ── Who it's for ── */}
      <div className="bg-[#0d0d0d] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">Security that matches your obligations — not someone else's</h2>
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
              How we reduced a financial firm's compliance cycle from six weeks to four hours
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/blog/policy-as-code-enterprise"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">From the blog</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Policy as Code: How Enterprises Enforce Compliance at Scale
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-500 mt-2">
              Read more <ArrowRight className="w-3 h-3" />
            </span>
          </Link>

          <Link
            href="/services/infrastructure"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Related service</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Infrastructure — secure environments start with a well-managed foundation
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
