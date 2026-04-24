import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Campux collects, uses, and protects personal data under applicable US privacy law in connection with its managed infrastructure and security operations services.",
  alternates: { canonical: "https://campux.co/privacy-policy" },
  robots: { index: false, follow: false },
}

const serif = "var(--font-dm-serif), Georgia, serif"
const bg = "radial-gradient(ellipse 100% 50% at 8% 6%, rgba(200,75,20,0.55) 0%, transparent 46%), radial-gradient(ellipse 60% 38% at 92% 22%, rgba(140,28,80,0.55) 0%, transparent 42%), radial-gradient(ellipse 80% 62% at 50% 58%, rgba(50,16,65,0.75) 0%, transparent 52%), #0a0610"

const sections = [
  {
    title: "Who we are",
    content: "Campux is a managed infrastructure and security operations firm registered in the United States. We are the data controller for personal data collected through this website and in connection with our services. You can contact us at project@campux.co.",
  },
  {
    title: "What we collect and why",
    content: "When you contact us through this website, we collect the information you submit: name, email address, company name, and any details you provide about your environment or requirements. We use this information solely to respond to your enquiry and to assess whether we can help. We do not add you to mailing lists without your explicit consent. If you subscribe to our Insights newsletter, we collect your email address to send you new posts. You can unsubscribe at any time.",
  },
  {
    title: "Lawful basis for processing",
    content: "We process contact enquiry data on the basis of legitimate interests — specifically, responding to inbound requests from prospective clients. We process newsletter subscriber data on the basis of consent. Where we process data in connection with an active service engagement, we do so under a contract. We do not rely on legitimate interests where your interests or rights override ours.",
  },
  {
    title: "Service delivery and client data",
    content: "In the course of delivering managed infrastructure services, Campux may process personal data on behalf of clients — for example, data held within client systems that we manage. In these cases, Campux acts as a data processor and the client acts as the data controller. The terms governing this processing are set out in the applicable Data Processing Agreement. Campux implements appropriate technical and organisational controls to protect client data and does not use client data for any purpose other than delivering the agreed services.",
  },
  {
    title: "Data sharing",
    content: "We do not sell personal data. We do not share personal data with third parties for marketing purposes. We may share data with service providers who assist us in operating this website or delivering our services — for example, our email provider, hosting infrastructure, or CRM tools. These providers are bound by data processing agreements and are not permitted to use the data for any purpose other than providing their service to us. We may disclose data if required to do so by law or to protect the rights, property, or safety of Campux, our clients, or others.",
  },
  {
    title: "Retention",
    content: "We retain contact enquiry data for up to two years from the date of the enquiry, or until you ask us to delete it. Newsletter subscriber data is retained until you unsubscribe. Data held in connection with active service engagements is retained for the duration of the engagement and for a further period as required by applicable legal or regulatory obligations. When data is no longer needed, we delete or anonymise it.",
  },
  {
    title: "Cookies",
    content: "This website uses only essential cookies required for the site to function. We do not use tracking cookies, advertising cookies, or third-party analytics that collect personal data. No cookie consent banner is displayed because no non-essential cookies are set.",
  },
  {
    title: "Your rights",
    content: "Under applicable US privacy law, you have the right to access personal data we hold about you, to correct inaccurate data, to request erasure, to restrict processing, and to data portability. You also have the right to object to processing based on legitimate interests. To exercise any of these rights, contact us at project@campux.co. We will respond within thirty days.",
  },
  {
    title: "International transfers",
    content: "We store and process data primarily within the United States. Where data is transferred outside the US — for example, to a service provider with infrastructure in another country — we ensure that appropriate safeguards are in place, including standard contractual clauses and applicable data transfer mechanisms.",
  },
  {
    title: "Changes to this policy",
    content: "We may update this Privacy Policy from time to time. Where changes are material, we will post a notice on this website. The date at the top of this page reflects the most recent revision. We encourage you to review this policy periodically.",
  },
]

export default function PrivacyPolicyPage() {
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

      {/* CONTENT */}
      <section className="rsp-section" style={{ maxWidth: 860, margin: '0 auto', padding: '100px 48px 120px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>Legal</p>
        <h1 style={{ fontFamily: serif, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>Privacy Policy</h1>
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
            Privacy enquiries: <a href="mailto:project@campux.co" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>project@campux.co</a>. You may also write to us at our registered address. Campux is incorporated in the United States.
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
            <Link href="/terms" className="link-muted" style={{ fontSize: 12 }}>Terms</Link>
            <Link href="/privacy-policy" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
