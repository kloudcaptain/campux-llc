import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Managed Infrastructure & Security Services",
  description:
    "Server infrastructure, cloud environments, security operations, network engineering, and database management — operated as one accountable team. No handoffs. No gaps.",
  alternates: { canonical: "https://campux.co/services" },
  openGraph: {
    title: "Managed Infrastructure & Security Services | Campux",
    description: "Six fully managed service lines operated as one team. One SLA, one quarterly review, one escalation path.",
    url: "https://campux.co/services",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"

const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

const services = [
  {
    number: "01",
    name: "Server Infrastructure",
    headline: "We run the servers. Properly.",
    body: [
      "On-premises, colocation, hybrid — full operational ownership. Provisioning, patching, monitoring, change records, and runbooks that reflect actual state, not original design intent. Every server estate we manage has documented procedures, patch compliance tracked to schedule, and a change history that survives staff turnover.",
      "When something fails at 2am, there is a current document to follow — not someone's memory of how it used to work. That is the standard we hold ourselves to across every environment we manage.",
    ],
    detail: "Bare metal, VMware, Hyper-V, Proxmox. Hardware lifecycle management. Colocation coordination. Patch management with defined SLAs.",
  },
  {
    number: "02",
    name: "Cloud Environments",
    headline: "Infrastructure as Code. Not as improvisation.",
    body: [
      "AWS, Azure, GCP — every resource version-controlled, every change tracked, every configuration auditable against a known baseline. Drift is caught and remediated before it causes an incident, not discovered during a post-mortem. IAM boundaries and multi-account structures are designed in from the start, not bolted on when the access model breaks.",
      "We implement automated compliance scanning, cost controls, and resource governance that keeps your cloud estate manageable. What engineers can deploy is defined by policy, not by whether someone senior is paying attention.",
    ],
    detail: "Terraform, Bicep, CloudFormation. Multi-account structures. Cost governance. Drift detection and automated remediation. IAM and access boundary management.",
  },
  {
    number: "03",
    name: "Security Operations",
    headline: "Compliance as a state, not a season.",
    body: [
      "ISO 27001, SOC 2, HIPAA, PCI-DSS, NIST, Cyber Essentials — we align your environment to the frameworks you need to pass and maintain that alignment year-round. Not just in the six weeks before an audit. Controls are structural where possible: Policy-as-Code means misconfigured resources fail before they deploy, generating a continuous evidence stream.",
      "Audit preparation becomes a matter of hours rather than weeks. We do not deliver a report and move on. We manage the security posture as an ongoing function and track remediation to completion.",
    ],
    detail: "Vulnerability management. Continuous compliance scanning. Security incident response. Evidence pack production. Framework alignment across ISO, SOC 2, HIPAA, PCI-DSS, NIST, Cyber Essentials.",
  },
  {
    number: "04",
    name: "Network Engineering",
    headline: "Designed for your obligations, not templated from someone else's.",
    body: [
      "We design, implement, and manage enterprise networks with your specific security and regulatory requirements as the starting point — not a generic template from a previous engagement. SD-WAN, firewall architecture, segmentation, and access control are built to your actual operational reality, then managed with full documentation and ongoing support.",
      "Networks we operate have topology diagrams that reflect current routing, not the original design intent. Firewall rules have owners and review dates. Access policy is testable. Nothing about it is a black box.",
    ],
    detail: "SD-WAN. Firewall management (Fortinet, Palo Alto, pfSense, Cisco). Network segmentation and micro-segmentation. VLAN architecture. NAC. VPN and remote access.",
  },
  {
    number: "05",
    name: "Database Management",
    headline: "Backup that gets tested. Recovery that works when you need it.",
    body: [
      "We manage relational and NoSQL database operations with a focus on what actually matters during an incident: backup integrity, tested recovery procedures, and failover paths that function under real pressure. RTO and RPO targets are agreed before we start — not estimated after something breaks. We test restores on a schedule and document the results.",
      "If the last restore test was more than a quarter ago, that is not a backup strategy. It is a backup habit. We run the procedure before the incident, not during it.",
    ],
    detail: "PostgreSQL, MySQL, SQL Server, MongoDB, Redis. Backup and recovery planning. Restore testing. Performance monitoring and query optimisation. Replication and high availability.",
  },
  {
    number: "06",
    name: "Integrated Managed IT",
    headline: "Everything under one contract. One team. One place to call.",
    body: [
      "All five service lines operating as a single managed function. One SLA, one quarterly review, one escalation path. For organisations that want infrastructure genuinely off their plate — not distributed across three suppliers, each owning a third of the failure and pointing at each other when something spans two of them.",
      "We replace or augment internal infrastructure teams, handle the operational work so engineers can focus on product, and produce written quarterly reviews covering what happened, what we recommend, and what we are watching.",
    ],
    detail: "Full-scope managed service. Dedicated account management. Monthly reporting. Quarterly operational reviews with written recommendations. On-call coverage to agreed SLAs.",
  },
]

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, color: '#fff', background: bg, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 300, background: 'rgba(10,6,14,0.9)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto', marginRight: 56 }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.04em' }}>Campux</span>
          </Link>
          <div style={{ display: 'flex', gap: 4, flex: 1 }}>
            <Link href="/services" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'white', background: 'rgba(255,255,255,0.08)' }}>Services</Link>
            <Link href="/industries" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Sectors</Link>
            <Link href="/insights" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Insights</Link>
            <Link href="/about" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>About</Link>
          </div>
          <Link href="/contact" className="btn-dark" style={{ padding: '9px 22px', fontSize: 14 }}>Talk to our team</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '100px 48px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>What we do</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 32, maxWidth: 760 }}>
          Six disciplines.<br /><em style={{ opacity: 0.5 }}>One operational team.</em>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 560, fontWeight: 300 }}>
          Not a helpdesk. Not a consultant with slides. We operate infrastructure and own what happens to it — server estates, cloud environments, networks, databases, and security posture, managed as a single function.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 160px' }}>
        {services.map((svc) => (
          <div key={svc.number} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '0 64px', paddingTop: 64, paddingBottom: 64, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ paddingTop: 6 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>{svc.number}</span>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>{svc.name}</p>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 28, color: 'white' }}>{svc.headline}</h2>
              {svc.body.map((p, pi) => (
                <p key={pi} style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
              ))}
            </div>
            <div style={{ paddingTop: 50 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 28 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', marginBottom: 14 }}>What this covers</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>{svc.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: '#141414', padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 20 }}>
              Talk about your environment.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440 }}>
              No obligation. A direct conversation about what you are running, what needs attention, and whether we are the right fit to manage it.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 340 }}>
            <Link href="/contact" style={{ display: 'block', background: 'white', color: '#111', padding: '18px 28px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center', letterSpacing: '-0.01em' }}>Get in touch</Link>
            <Link href="/insights" style={{ display: 'block', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)', padding: '18px 28px', borderRadius: 10, fontSize: 15, fontWeight: 500, textAlign: 'center' }}>Read our thinking</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#141414', padding: '40px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.35"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.35"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.04em', color: 'white' }}>Campux</span>
          </Link>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)' }}>© 2026 Campux. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/terms" className="link-muted" style={{ fontSize: 12 }}>Terms</Link>
            <Link href="/privacy-policy" className="link-muted" style={{ fontSize: 12 }}>Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
