import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Network, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Network Engineering",
  description:
    "Software-defined networks designed with explicit redundancy, documented failover paths, and traffic segmentation built for enterprise and government connectivity requirements.",
  alternates: { canonical: "https://thomsup.com/services/networking" },
  openGraph: {
    title: "Network Engineering — ThomsUp",
    description:
      "Network failures are the silent disruption of distributed systems. We design networks with documented redundancy, tested failover, and the segmentation that modern security requires.",
  },
}

const capabilities = [
  "Network architecture design — topology, segmentation, and redundancy documented from the start",
  "Software-defined networking (SDN) and SD-WAN design and implementation",
  "Zero-trust network architecture replacing flat, implicitly trusted internal networks",
  "Redundant uplinks with documented failover paths and tested switchover procedures",
  "Traffic segmentation — separating workloads, environments, and access tiers at the network layer",
  "VPN and secure remote access design for distributed teams and hybrid working",
  "Network performance monitoring with baseline-calibrated alerting",
  "BGP and routing configuration for multi-site and multi-provider environments",
  "Network access control lists, firewall rule review, and policy documentation",
  "Wireless network design for office, campus, and industrial environments",
]

const audiences = [
  {
    segment: "Startups with distributed infrastructure",
    copy: "Cloud-native does not mean network-free. Even fully cloud-hosted products need careful thought about how traffic flows between services, how environments are separated, and how access to sensitive workloads is controlled at the network layer. We design and document this from the start, so you are not retrofitting segmentation after a security review flags the flat network.",
  },
  {
    segment: "Multi-site enterprises",
    copy: "A network that connects multiple offices, data centres, and cloud environments is only as reliable as its least-documented redundancy path. We audit, redesign where necessary, and produce the network documentation — topology diagrams, failover procedures, change records — that your operations team and auditors both expect but rarely find in good condition.",
  },
  {
    segment: "Government & critical infrastructure",
    copy: "Government network environments carry obligations around data classification, privileged access paths, and the physical and logical separation of networks handling sensitive information. We design to these requirements, align to relevant government security frameworks, and produce the documentation suitable for security accreditation and oversight review.",
  },
]

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10">
              <Network className="w-4.5 h-4.5 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Network Engineering</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.08] mb-6">
            Networks that hold together
            <br />
            <span className="text-gray-400">when everything else is under pressure.</span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
            Network failures are rarely dramatic. They are slow. A routing table that converges incorrectly after a link failure. A misconfigured firewall rule that silently drops traffic for one class of user. A flat network architecture that means a compromised endpoint has a clear path to everything else. The damage is done before anyone understands the shape of the problem.
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
              <h2 className="text-3xl font-bold text-white mb-5">Designed for reliability and security simultaneously</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The flat internal network is a legacy of a time when the perimeter was considered the boundary of trust. That model was always imperfect. In a world where remote access is routine, cloud environments are part of the estate, and third-party integrations connect to internal systems, it is genuinely dangerous.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Zero-trust networking is not a product you buy — it is an architectural principle: never assume that a request is legitimate because of where it came from on the network. Every connection is authenticated, every access path is documented and deliberate, and lateral movement within the network requires explicit permission rather than the absence of a block.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We design networks that are both resilient and segmented — where redundancy paths are documented and tested, and where the blast radius of a compromised endpoint or misconfigured rule is contained by design rather than luck.
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
          <h2 className="text-2xl font-bold text-white mb-12">Every organisation has a network. Not all of them are documented.</h2>
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
              Zero-trust architecture across 12 healthcare facilities — HIPAA compliant, zero downtime
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
            href="/services/security"
            className="group block bg-[#111] border border-white/8 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Related service</p>
            <p className="text-white text-sm font-medium mb-1 group-hover:text-cyan-50 transition-colors">
              Security Operations — network design is the foundation; security operations keeps it sound
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
