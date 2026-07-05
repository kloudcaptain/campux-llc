import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing Campux managed infrastructure and security operations services.",
  alternates: { canonical: "https://campux.co/terms" },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

const sections = [
  {
    title: "Services",
    content: "Campux provides Azure cloud consulting, migration, DevSecOps, cloud FinOps, and IT training services ('Services') as described in the applicable statement of work or service agreement ('Agreement') entered into between Campux and the client. These Terms and Conditions ('Terms') apply to all Services unless expressly superseded by a written Agreement signed by both parties.",
  },
  {
    title: "Engagement and Scope",
    content: "The scope of Services delivered by Campux is defined in each individual Agreement. Campux will not undertake work outside the agreed scope without written authorization. Any changes to scope, including additions, removals, or modifications to managed environments, must be agreed in writing before implementation. Verbal instructions to expand scope are not binding on Campux.",
  },
  {
    title: "Client Obligations",
    content: "Clients are required to provide Campux with timely access to systems, documentation, and personnel necessary to deliver the agreed Services. Where client delays obstruct service delivery, Campux is not liable for resulting failures to meet agreed service levels. Clients are responsible for ensuring that Campux is informed of all regulatory obligations, compliance frameworks, and data classification requirements applicable to their environments prior to engagement commencement.",
  },
  {
    title: "Confidentiality",
    content: "Both parties agree to treat all information received from the other as confidential and not to disclose it to third parties without prior written consent, except as required by law or regulation. Campux implements technical and organizational controls to protect client environment data and credentials. These controls are described in the applicable Data Processing Agreement where regulated data is involved.",
  },
  {
    title: "Intellectual Property",
    content: "Campux retains ownership of all methodologies, tooling, processes, and documentation frameworks developed independently of the client engagement. Client-specific configuration, runbooks, and documentation produced as part of the agreed Services are the property of the client and will be transferred upon termination of the Agreement in a format agreed between both parties.",
  },
  {
    title: "Liability",
    content: "Campux's liability in connection with any claim arising from the Services is limited to the total fees paid in the three months preceding the event giving rise to the claim. Campux is not liable for indirect, consequential, or incidental losses, including loss of revenue, loss of data, or loss of business opportunity, whether or not Campux was advised of the possibility of such losses. Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.",
  },
  {
    title: "Service Levels",
    content: "Service level commitments, including response times, resolution targets, and uptime obligations, are defined in the applicable Service Level Agreement ('SLA'). Where no SLA exists, Campux will use reasonable endeavours to deliver Services in a timely and professional manner. Service level credits, where applicable, are the exclusive remedy for service level failures and do not affect the limitation of liability clause above.",
  },
  {
    title: "Termination",
    content: "Either party may terminate an Agreement by providing written notice as specified in that Agreement. Campux may terminate with immediate effect if a client fails to pay undisputed invoices within thirty days of the due date, or if the client breaches these Terms in a material way and fails to remedy the breach within fourteen days of written notice. Upon termination, Campux will provide reasonable transition assistance as agreed between both parties.",
  },
  {
    title: "Governing Law",
    content: "These Terms and any Agreements incorporating them are governed by the laws of the State of Delaware, United States. Both parties submit to the exclusive jurisdiction of the courts of the State of Delaware, United States for any dispute arising under or in connection with these Terms.",
  },
  {
    title: "Changes to These Terms",
    content: "Campux may update these Terms from time to time. Where updates materially affect ongoing service engagements, Campux will provide written notice at least thirty days before the updated Terms take effect. Continued use of Campux Services after that date constitutes acceptance of the updated Terms.",
  },
]

export default function TermsPage() {
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
            <Link href="/government" className="link-nav" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Government</Link>
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
                {([['/', 'Home'], ['/services', 'Services'], ['/government', 'Government'], ['/insights', 'Insights'], ['/about', 'About']] as [string,string][]).map(([href, label]) => (
                  <Link key={href} href={href} style={{ fontSize: 28, fontFamily: 'var(--font-dm-serif),Georgia,serif', fontWeight: 400, color: 'white', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', letterSpacing: '-0.02em' }}>{label}</Link>
                ))}
                <Link href="/contact" style={{ marginTop: 32, display: 'block', background: 'white', color: '#111', padding: '16px 24px', borderRadius: 10, fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Get in touch</Link>
              </div>
            </div>
          </details>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="rsp-section" style={{ maxWidth: 860, margin: '0 auto', padding: '100px 48px 120px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>Legal</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>Terms &amp; Conditions</h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 72 }}>Last updated: April 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {sections.map((section, i) => (
            <div key={section.title} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40, paddingBottom: 40 }}>
              <h2 style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: 16, color: 'white' }}>{i + 1}. {section.title}</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.70)', lineHeight: 1.85, margin: 0 }}>{section.content}</p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40, marginTop: 0 }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
            Questions about these Terms should be directed to <a href="mailto:victor@campux.co" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>victor@campux.co</a>. Campux is incorporated in the United States.
          </p>
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
            <Link href="/terms" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Terms</Link>
            <Link href="/privacy-policy" className="link-muted" style={{ fontSize: 12 }}>Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
