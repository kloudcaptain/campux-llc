export const metadata = {
  title: "Privacy Policy — ThomsUp",
  description: "How ThomsUp collects, uses, and protects information submitted through thomsup.com.",
}

const sections = [
  {
    number: "1",
    title: "Who This Applies To",
    content: [
      `ThomsUp is an independent boutique cloud and DevOps consulting firm based in the United States. This policy covers thomsup.com — the informational website for our consulting practice.`,
      `This site does not support user accounts, subscriptions, or payment processing. The only data collected is what you voluntarily submit through the contact form, what Google Analytics records about site usage, and what Calendly collects if you choose to book a consultation call.`,
    ],
  },
  {
    number: "2",
    title: "What We Collect and Why",
    content: [
      `Contact form submissions. When you submit the contact form, we collect your name, company, email address, and message. We use this information solely to respond to your inquiry. We do not add you to any mailing list or share your information with third parties.`,
      `Analytics. We use Google Analytics 4 to understand how the site is used — which pages are visited, how long visitors stay, and what type of device they are using. IP addresses are anonymized. This data is not used for advertising and is not linked to any personally identifiable information. GA4 retains data for 14 months by default.`,
      `Calendly. If you choose to book a consultation call via the Calendly scheduling tool on this site, Calendly collects your name and email address directly. That data is governed by Calendly's own privacy policy, not this one. ThomsUp does not receive or store your Calendly booking data independently of what Calendly provides.`,
    ],
  },
  {
    number: "3",
    title: "What We Do Not Do",
    content: [
      `We do not sell your data to anyone, for any reason.`,
      `We do not use your data for advertising — not on this site, not through retargeting, not through any third-party ad network.`,
      `We do not share your information with any third party beyond Google Analytics (anonymized usage data) and Calendly (if you choose to book a call). There are no data brokers, marketing platforms, or CRM systems receiving your information from this site.`,
    ],
  },
  {
    number: "4",
    title: "How Long We Keep Your Data",
    content: [
      `Contact form submissions are kept only as long as needed to respond to your inquiry and, if applicable, to conduct the engagement you requested. Once no longer needed, they are deleted.`,
      `Google Analytics data is retained for 14 months, which is GA4's default retention period. You can opt out of GA4 tracking using the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout, or by declining analytics cookies when the cookie banner appears on your first visit.`,
    ],
  },
  {
    number: "5",
    title: "Your Rights",
    content: [
      `You can request access to or deletion of any personal information ThomsUp holds about you by contacting us through the form on this site. We will respond within a reasonable time.`,
      `California residents: ThomsUp does not sell personal information as defined under the California Consumer Privacy Act (CCPA).`,
      `EU/EEA residents: ThomsUp is a US-based firm and does not operate a formal GDPR compliance program. However, we handle data minimally and will make reasonable efforts to accommodate deletion or access requests from individuals in the EU or EEA.`,
    ],
  },
  {
    number: "6",
    title: "Security",
    content: [
      `We take reasonable technical and organizational measures to protect the information submitted through this site. Form submissions are transmitted over HTTPS. We do not store sensitive data beyond what is necessary.`,
      `No method of transmission over the internet is completely secure. We cannot guarantee absolute security, and we do not represent that the site is free from all vulnerabilities.`,
    ],
  },
  {
    number: "7",
    title: "Changes to This Policy",
    content: [
      `If we make material changes to this policy, the "Last updated" date at the top of this page will reflect that. We recommend checking this page periodically if data handling practices are important to your decision to contact us.`,
    ],
  },
  {
    number: "8",
    title: "Contact",
    content: [
      `If you have questions about how ThomsUp handles your data, contact us through the form on this site. We will respond within one business day.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12 pb-12 border-b border-white/10">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">
              Last updated: 11 April 2026
            </p>
          </div>

          {/* Intro */}
          <div className="mb-12 bg-[#1a1a1a] border border-cyan-500/20 rounded-xl p-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              This policy describes what information thomsup.com collects, why we collect it, and what we do with it.
              We collect the minimum necessary to respond to inquiries and understand how the site is used.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.number} id={`section-${section.number}`}>
                <h2 className="text-xl font-semibold text-white mb-4">
                  <span className="text-cyan-400 mr-3">{section.number}.</span>
                  {section.title}
                </h2>
                <div className="space-y-4 pl-8">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-10 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              Questions about this policy? Contact us through the form on this site.
            </p>
          </div>

        </div>
    </div>
  )
}
