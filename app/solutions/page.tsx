import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Managed IT Solutions — Migration, Compliance & Recovery",
  description:
    "From legacy migration to compliance uplift and incident recovery — specific infrastructure problems with specific answers, from a team that has seen them before.",
  alternates: { canonical: "https://capux.co/solutions" },
  openGraph: {
    title: "Managed IT Solutions — Migration, Compliance & Recovery | Campux",
    description: "Specific infrastructure problems. Specific answers. Legacy migration, compliance uplift, incident recovery, cloud governance.",
    url: "https://capux.co/solutions",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

const solutions = [
  {
    tag: "Legacy Migration",
    headline: "Moving off infrastructure that should have been retired three years ago.",
    body: "Most legacy migration projects fail on the same two things: no agreed runbook for the cutover, and a backup that has never been tested at scale. We design migrations that are rehearsed before the maintenance window opens — not improvised during it. Every service has a documented rollback path. Every dependency is mapped before we touch production.",
    outcome: "Live cutovers with no unplanned downtime. Documented architecture that reflects actual state — not the original design intent.",
  },
  {
    tag: "Compliance Uplift",
    headline: "Getting to ISO 27001, SOC 2, or PCI-DSS without burning out your team.",
    body: "Compliance programmes fail when they are treated as a project with an end date. The audit passes, the evidence pack gets filed, and six months later the environment has drifted. We approach compliance as a control state — implemented structurally, tested continuously, and maintained between audits. Policy-as-Code means misconfigured resources fail before they deploy. The evidence stream is continuous.",
    outcome: "Framework alignment that holds year-round. Evidence packs that satisfy auditors the first time. No emergency sprints before the audit date.",
  },
  {
    tag: "Incident Recovery",
    headline: "You had an incident. Now you need to understand what happened and stop it recurring.",
    body: "Post-incident work is where most organisations stop too early. The immediate cause gets patched, the post-mortem gets filed, and the contributing factors stay in place. We conduct structured post-incident reviews and implement the controls that address the systemic risk — not just the surface failure. Missing runbooks, untested backups, gaps in monitoring coverage all get tracked to closure.",
    outcome: "Root cause analysis with remediation tracked to completion. Controls that address contributing factors, not just the trigger.",
  },
  {
    tag: "Infrastructure Consolidation",
    headline: "Three suppliers, four monitoring tools, and no single point of accountability.",
    body: "Fragmented infrastructure management is a reliable way to ensure incidents fall through gaps. Each supplier owns a slice, each has its own SLA, and when something spans two of them — which incidents always do — nobody owns it. We consolidate fragmented environments into a single managed function: one SLA, one escalation path, one quarterly review covering the whole estate.",
    outcome: "Single operational function across server, cloud, network, and security. Quarterly written reviews with clear ownership and recommendations.",
  },
  {
    tag: "Cloud Cost & Governance",
    headline: "Your cloud bill grew faster than your infrastructure did.",
    body: "Cloud cost problems are almost always governance problems: no resource tagging, no account boundaries, no automated controls on what engineers can deploy. We implement multi-account structures, tagging enforcement, budget alerts, and drift detection that catches over-provisioned resources before they compound. Cost optimisation is a side effect of running the environment properly.",
    outcome: "Predictable cloud spend with automated governance. Drift detected and remediated continuously. IAM boundaries that prevent the next uncontrolled deployment.",
  },
  {
    tag: "Security Posture Review",
    headline: "You want to know what is actually exposed before someone tells you.",
    body: "A security posture review is not a penetration test. It is a structured assessment of your attack surface, detection capability, and the gap between your documented controls and what is actually running. We produce a written report with findings ranked by operational risk — not severity scores that need translating — and a remediation roadmap ordered by impact.",
    outcome: "Written assessment with findings mapped to operational risk. Remediation roadmap with prioritised actions. Retested after remediation to confirm closure.",
  },
]

export default function SolutionsPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, color: '#fff', background: bg, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 300, background: 'rgba(10,6,14,0.9)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="rsp-nav-inner" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto', marginRight: 56 }}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.04em' }}>Campux</span>
          </Link>
          <div className="rsp-nav-links" style={{ display: 'flex', gap: 4, flex: 1 }}>
            <Link href="/services" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Services</Link>
            <Link href="/industries" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Sectors</Link>
            <Link href="/insights" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Insights</Link>
            <Link href="/about" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>About</Link>
          </div>
          <Link href="/contact" className="btn-dark rsp-nav-links" style={{ padding: '9px 22px', fontSize: 14 }}>Talk to our team</Link>
          <details className="mob-menu-toggle">
            <summary aria-label="Open menu"><svg width="18" height="14" viewBox="0 0 18 14" fill="none"><rect y="0" width="18" height="2" rx="1" fill="currentColor"/><rect y="6" width="18" height="2" rx="1" fill="currentColor"/><rect y="12" width="18" height="2" rx="1" fill="currentColor"/></svg></summary>
            <div className="mob-menu-overlay">
              <div style={{ height: 72, display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}><svg width="24" height="24" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="13" height="13" rx="3" fill="white"/><rect x="20" y="3" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="3" y="20" width="13" height="13" rx="3" fill="white" opacity="0.4"/><rect x="20" y="20" width="13" height="13" rx="3" fill="white"/></svg><span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em', color: 'white' }}>Campux</span></Link>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 32, gap: 4 }}>
                {([['/', 'Home'], ['/services', 'Services'], ['/industries', 'Sectors'], ['/insights', 'Insights'], ['/about', 'About']] as [string,string][]).map(([href, label]) => (
                  <Link key={href} href={href} style={{ fontSize: 28, fontFamily: 'var(--font-dm-serif),Georgia,serif', fontWeight: 400, color: 'white', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', letterSpacing: '-0.02em' }}>{label}</Link>
                ))}
                <Link href="/contact" style={{ marginTop: 32, display: 'block', background: 'white', color: '#111', padding: '16px 24px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Get in touch</Link>
              </div>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO */}
      <section className="rsp-section" style={{ maxWidth: 1320, margin: '0 auto', padding: '100px 48px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>What we solve</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 32, maxWidth: 760 }}>
          Specific problems.<br /><em style={{ opacity: 0.5 }}>Specific answers.</em>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 540, fontWeight: 300 }}>
          Most infrastructure problems are not unique. The environment is, but the failure modes are not. Here is how we approach the ones we encounter most often.
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="rsp-section" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 120px' }}>
        <div className="rsp-solutions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {solutions.map((sol) => (
            <div key={sol.tag} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '40px 40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.14)', padding: '4px 10px', borderRadius: 4, alignSelf: 'flex-start' }}>{sol.tag}</span>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.02em', color: 'white', margin: 0 }}>{sol.headline}</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.8, margin: 0 }}>{sol.body}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, marginTop: 'auto' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', marginBottom: 10 }}>Outcome</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{sol.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#141414', padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="rsp-solutions-cta" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 20 }}>
              Got a specific problem?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440 }}>
              Describe what you are dealing with. We will tell you whether we have seen it before — and what we did about it.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 340 }}>
            <Link href="/contact" style={{ display: 'block', background: 'white', color: '#111', padding: '18px 28px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center', letterSpacing: '-0.01em' }}>Get in touch</Link>
            <Link href="/services" style={{ display: 'block', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)', padding: '18px 28px', borderRadius: 10, fontSize: 15, fontWeight: 500, textAlign: 'center' }}>See our services</Link>
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
