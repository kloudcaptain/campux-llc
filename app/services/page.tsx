import type { Metadata } from "next"
import Link from "next/link"
import Nav from "../components/Nav"

export const metadata: Metadata = {
  title: "Azure Cloud Consulting & IT Training | Atlanta, GA",
  description:
    "Cloud architecture and migration, DevSecOps and automation, cloud FinOps, and IT training — Azure engineering and training done by people who've run it in production.",
  alternates: { canonical: "https://campux.co/services" },
  openGraph: {
    title: "Azure Cloud Consulting & IT Training | Campux",
    description: "Cloud architecture and migration, DevSecOps and automation, cloud FinOps, and IT training and curriculum development.",
    url: "https://campux.co/services",
    type: "website",
  },
}

const serif = "var(--font-dm-serif), Georgia, serif"

const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

const services = [
  {
    number: "01",
    name: "Cloud Architecture & Migration",
    headline: "Azure landing zones, built to scale.",
    body: [
      "Azure landing zones, tenant migrations, and hybrid connectivity — architected around your actual growth path, not a generic template. Infrastructure as code with Bicep and Terraform means every environment is version-controlled and repeatable.",
      "Migrations are planned around dependency mapping and rehearsed cutovers, so the environment you land on is the one you designed — not whatever survived the move.",
    ],
    detail: "Azure landing zone design. Tenant-to-tenant migration. Hybrid connectivity (ExpressRoute, VPN gateways). Infrastructure as code with Bicep and Terraform.",
  },
  {
    number: "02",
    name: "DevSecOps & Automation",
    headline: "Security built into the pipeline, not bolted on after.",
    body: [
      "CI/CD pipelines with SAST/DAST integration and policy-as-code mean security checks run automatically on every change, not as a manual gate before release.",
      "Microsoft Defender for Cloud and Zero Trust baselines are configured as part of the platform build, not layered on after something goes wrong.",
    ],
    detail: "CI/CD pipeline design. SAST/DAST integration. Policy-as-code. Microsoft Defender for Cloud configuration. Zero Trust baseline implementation.",
  },
  {
    number: "03",
    name: "Cloud FinOps & Cost Optimization",
    headline: "Spend that maps to what you actually use.",
    body: [
      "Spend analysis and right-sizing identify where cost and usage have drifted apart. Serverless migration and governance guardrails keep them aligned as the environment scales.",
      "The goal is predictable spend with visibility into what is driving it — not a one-time cost-cutting exercise that drifts back within a quarter.",
    ],
    detail: "Cloud spend analysis. Resource right-sizing. Serverless migration. Budget alerts and governance guardrails.",
  },
  {
    number: "04",
    name: "IT Training & Curriculum Development",
    headline: "Teams that can run what we help you build.",
    body: [
      "Instructor-led Azure and DevOps training with hands-on lab environments — built around your team's actual tooling and workflows, not a generic vendor course.",
      "Curriculum is custom-developed per engagement, so training time goes toward the skills your team will actually use.",
    ],
    detail: "Instructor-led Azure and DevOps training. Hands-on lab environment design. Custom curriculum development for teams.",
  },
]

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 18, lineHeight: 1.6, color: '#fff', background: bg, minHeight: '100vh' }}>

      <Nav active="services" />

      {/* HERO */}
      <section className="rsp-section" style={{ maxWidth: 1320, margin: '0 auto', padding: '100px 48px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>What we do</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: 32, maxWidth: 760 }}>
          Four disciplines.<br /><em style={{ opacity: 0.5 }}>One operational team.</em>
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 560, fontWeight: 300 }}>
          Azure engineering and training, done by people who&apos;ve run it in production. Small, senior, hands-on.
        </p>
      </section>

      {/* SERVICES */}
      <section className="rsp-section" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px 160px' }}>
        {services.map((svc) => (
          <div key={svc.number} className="rsp-service-row" style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '0 64px', paddingTop: 64, paddingBottom: 64, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
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
        <div className="rsp-grid-2" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
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
