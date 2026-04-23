import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sectors We Serve — Healthcare, Finance & Government",
  description:
    "Managed infrastructure for regulated industries — healthcare, financial services, government, retail, and technology. HIPAA, PCI-DSS, ISO 27001, Cyber Essentials Plus.",
  alternates: { canonical: "https://capux.co/industries" },
  openGraph: {
    title: "Sectors We Serve — Healthcare, Finance & Government | Campux",
    description: "Managed infrastructure for regulated industries where downtime carries real consequences.",
    url: "https://capux.co/industries",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"

const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

const sectors = [
  {
    number: "01",
    name: "Healthcare & Life Sciences",
    headline: "Clinical systems don't get a maintenance window during a ward handover.",
    body: [
      "We manage healthcare infrastructure with HIPAA, HL7, and FHIR compliance built into the architecture from the start — not applied retroactively when an audit surfaces the gap. EHR systems, medical device integrations, and telehealth platforms each carry different availability and data residency requirements. We design environments that handle the clinical load and produce the compliance evidence when the auditors arrive.",
      "The obligation is not just to pass a framework. It is to keep systems available when clinical decisions depend on them, and to protect patient data in a way that holds up under scrutiny — not just on paper.",
    ],
    standards: ['HIPAA', 'HL7 FHIR', 'ISO 27001', 'Cyber Essentials'],
  },
  {
    number: "02",
    name: "Financial Services",
    headline: "Regulated, audited, and expected to be available without exception.",
    body: [
      "Financial infrastructure sits at the intersection of three things that do not forgive mistakes: real-time transaction processing, strict regulatory oversight, and customers who notice a two-minute outage. We manage environments built to PCI-DSS, FCA guidance, and SOX requirements, with change management that is auditable by design — not reconstructed after the fact.",
      "Every change to production is tracked, reviewed, and documented against a change record. Quarterly reviews cover what happened, what we caught before it escalated, and what we are currently watching. The paper trail exists before anyone asks for it.",
    ],
    standards: ['PCI-DSS', 'SOC 2', 'ISO 27001', 'FCA guidance'],
  },
  {
    number: "03",
    name: "Government & Public Sector",
    headline: "Security obligations set by framework, not by preference.",
    body: [
      "Government infrastructure carries requirements that commercial environments do not. Data classification, network separation, Cyber Essentials Plus, and the expectation that systems remain available during periods when they are most politically visible. We work with government programmes and public sector bodies where the security and availability obligations are fixed — and the consequences of failure are public.",
      "We understand procurement constraints, can operate within existing supplier structures, and produce the documentation that internal assurance teams need to sign off. We are not here to own the politics. We are here to own the infrastructure.",
    ],
    standards: ['Cyber Essentials Plus', 'ISO 27001', 'NIST', 'IL2/IL3'],
  },
  {
    number: "04",
    name: "Retail & E-commerce",
    headline: "Peak season is not the time to discover a capacity problem.",
    body: [
      "Retail infrastructure has two modes: normal operation and peak season. We manage environments sized and tested for the highest load — with auto-scaling that has been validated under real traffic patterns, not theoretical projections made during a planning meeting. Payment processing, inventory systems, and warehouse integrations are all critical paths with no tolerance for degradation.",
      "We manage the full stack with PCI-DSS compliance, CDN configuration, and monitoring that surfaces a failing checkout flow before customers report it. The post-mortem after a peak outage is an expensive document. We try not to need it.",
    ],
    standards: ['PCI-DSS', 'ISO 27001', 'SOC 2'],
  },
  {
    number: "05",
    name: "Technology Companies",
    headline: "You built the product. We run everything underneath it.",
    body: [
      "Scaling technology companies reach a point where the infrastructure function is doing everything at once: on-call coverage, compliance prep, security operations, capacity planning, incident response. Something always gets deprioritised. Usually security. We take the operational work off engineering teams so they can focus on product, not firefighting.",
      "We integrate with existing tooling, operate inside deployment pipelines, and produce the documentation that makes SOC 2 and ISO 27001 audits a matter of hours — not a panic sprint every twelve months. We do not compete with your product engineers. We give them back the time they were spending on infrastructure.",
    ],
    standards: ['SOC 2', 'ISO 27001', 'Cyber Essentials'],
  },
]

export default function IndustriesPage() {
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
            <Link href="/services" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Services</Link>
            <Link href="/industries" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'white', background: 'rgba(255,255,255,0.08)' }}>Sectors</Link>
            <Link href="/insights" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Insights</Link>
            <Link href="/about" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>About</Link>
          </div>
          <Link href="/contact" className="btn-dark" style={{ padding: '9px 22px', fontSize: 14 }}>Talk to our team</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '100px 48px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>Who we work with</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 32, maxWidth: 760 }}>
          Sectors where<br /><em style={{ opacity: 0.5 }}>downtime has a cost.</em>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 560, fontWeight: 300 }}>
          We work in regulated industries and high-stakes operational environments. The common thread is not the sector — it is that infrastructure failure carries consequences the organisation cannot absorb.
        </p>
      </section>

      {/* SECTORS */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 160px' }}>
        {sectors.map((sector) => (
          <div key={sector.number} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '0 64px', paddingTop: 64, paddingBottom: 64, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ paddingTop: 6 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>{sector.number}</span>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>{sector.name}</p>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, color: 'white' }}>{sector.headline}</h2>
              {sector.body.map((p, pi) => (
                <p key={pi} style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
              ))}
            </div>
            <div style={{ paddingTop: 50 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 28 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', marginBottom: 16 }}>Compliance frameworks</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {sector.standards.map(s => (
                    <span key={s} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.16)', padding: '4px 10px', borderRadius: 4 }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: '#141414', padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>Your sector, your obligations.</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>Tell us what you are running. We will tell you what we can do with it — and whether we are the right fit.</p>
          </div>
          <Link href="/contact" style={{ display: 'block', background: 'white', color: '#111', padding: '16px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>Get in touch</Link>
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
