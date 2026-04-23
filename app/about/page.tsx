import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Campux — UK Managed Infrastructure & Security",
  description:
    "We take operational ownership of server estates, cloud environments, networks, and security posture. Not a helpdesk. Not a consultant. We own the outcome. UK-based since 2018.",
  alternates: { canonical: "https://capux.co/about" },
  openGraph: {
    title: "About Campux — UK Managed Infrastructure & Security",
    description: "UK-based managed infrastructure and security operations firm. We own the outcome, not just the activity.",
    url: "https://capux.co/about",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

export default function AboutPage() {
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
            <Link href="/industries" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Sectors</Link>
            <Link href="/insights" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Insights</Link>
            <Link href="/about" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, color: 'white', background: 'rgba(255,255,255,0.08)' }}>About</Link>
          </div>
          <Link href="/contact" className="btn-dark" style={{ padding: '9px 22px', fontSize: 14 }}>Talk to our team</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '100px 48px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>About Campux</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 40, maxWidth: 800 }}>
          We run infrastructure.<br /><em style={{ opacity: 0.5 }}>That is the whole job.</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 24, fontWeight: 300 }}>
              Campux is a managed infrastructure and security operations firm. We take operational ownership of the environments others struggle to run consistently — server estates, cloud infrastructure, networks, databases, and security posture.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              We work with regulated industries, government programmes, and companies scaling past the point where informal infrastructure management still works. The common thread is that downtime carries real consequences — financial, regulatory, or reputational — and the organisation needs someone who takes the infrastructure function as seriously as the core business.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
              We are not a consultancy that delivers a report and leaves. We manage environments on an ongoing basis, produce written quarterly reviews, and take accountability for the operational outcomes.
            </p>
          </div>
          <div style={{ paddingTop: 8 }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>What we are not</p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.8 }}>Not a helpdesk. Not a break-fix support desk. Not a cloud reseller. Not an IT recruiter. Not a consulting firm that delivers recommendations and bills hours. We manage infrastructure. That means we own the outcome.</p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Where we work</p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.8 }}>UK and internationally. Healthcare, financial services, retail, government, and regulated technology companies. Organisations from Series A to enterprise — where the common factor is that infrastructure is critical and needs to be managed properly.</p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Compliance</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['ISO 27001', 'SOC 2', 'PCI-DSS', 'HIPAA', 'NIST', 'Cyber Essentials'].map(b => (
                  <span key={b} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.16)', padding: '4px 10px', borderRadius: 4 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ background: '#141414', padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>How we work</p>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(36px, 4vw, 58px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: 72 }}>
            A few things we believe.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {[
              {
                title: "Documentation is not optional.",
                body: "Every environment we manage has runbooks, topology diagrams, change records, and failover procedures that reflect actual state. Not what was intended when the system was built. What is actually running now. When an incident happens, there is a document to follow."
              },
              {
                title: "Tested recovery, not assumed recovery.",
                body: "We test failover and restore procedures on a schedule. If a backup has not been restored to confirm it works, it is not a backup — it is a file. We run the drill before the incident, not during it."
              },
              {
                title: "One point of accountability.",
                body: "When something goes wrong, there should be one team to call. Not three suppliers each owning a third of the failure. We operate as a single function with one SLA, one quarterly review, and one escalation path."
              },
            ].map(p => (
              <div key={p.title} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
                <h3 style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: 16, color: 'white' }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 48px', borderTop: '1px solid rgba(255,255,255,0.06)', background: '#141414' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>Want to talk about your environment?</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480 }}>We will tell you honestly whether we are the right fit — and if we are not, we will say so.</p>
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
