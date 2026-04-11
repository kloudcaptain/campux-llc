export const metadata = {
  title: "Terms of Service — ThomsUp",
  description: "Terms governing use of the ThomsUp website at thomsup.com.",
}

const sections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: [
      `By accessing or using thomsup.com, you agree to these Terms of Service. If you do not agree, please do not use the site.`,
      `These terms govern your use of this website only. They do not constitute a client engagement agreement. Any consulting engagement with ThomsUp is governed by a separate written agreement between ThomsUp and the client.`,
    ],
  },
  {
    number: "2",
    title: "Who We Are",
    content: [
      `ThomsUp is an independent boutique cloud and DevOps consulting firm based in the United States. We provide Azure and AWS architecture, DevOps automation, CI/CD pipelines, cloud migration, cloud security, and AI security services to startups, SaaS companies, growing businesses, enterprise teams, and public sector clients.`,
      `ThomsUp is not affiliated with any government agency. Services are provided to commercial and public sector clients on an independent basis.`,
    ],
  },
  {
    number: "3",
    title: "Informational Use Only",
    content: [
      `The content on this site — including service descriptions, case studies, insights articles, and industry pages — is provided for general informational purposes. It does not constitute professional advice specific to your situation.`,
      `If you need advice on cloud architecture, security, DevOps, or infrastructure specific to your environment, contact ThomsUp directly through the contact form on this site. We are happy to discuss your situation before any engagement begins.`,
    ],
  },
  {
    number: "4",
    title: "Acceptable Use",
    content: [
      `You agree to use this site only for lawful purposes. You must not attempt to gain unauthorized access to any part of the site or its underlying infrastructure, introduce malicious code, scrape content at scale, or use the site in any way that could damage or impair its operation.`,
      `This site does not support user accounts, subscriptions, or financial transactions. There is no account to create or protect on your behalf.`,
    ],
  },
  {
    number: "5",
    title: "Intellectual Property",
    content: [
      `All content on this site — including copy, design, structure, and original written work — is owned by ThomsUp. You may not reproduce, redistribute, or republish any content from this site without written permission.`,
      `Linking to thomsup.com from another website is permitted without prior approval, provided the link does not misrepresent ThomsUp or present our content in a misleading context.`,
    ],
  },
  {
    number: "6",
    title: "Disclaimer of Warranties",
    content: [
      `This site is provided as-is. ThomsUp makes no warranties, express or implied, regarding the accuracy, completeness, or fitness for any particular purpose of the content on this site.`,
      `We do not guarantee uninterrupted access to the site and are not liable for any downtime, errors, or technical issues that may occur.`,
    ],
  },
  {
    number: "7",
    title: "Limitation of Liability",
    content: [
      `To the maximum extent permitted by applicable law, ThomsUp is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on any content found here.`,
      `This includes, without limitation, damages from decisions made based on informational content on this site. For advice specific to your situation, engage ThomsUp directly.`,
    ],
  },
  {
    number: "8",
    title: "Governing Law",
    content: [
      `These Terms of Service are governed by the laws of the State of Georgia, United States, without regard to conflict of law provisions.`,
      `Any disputes arising from use of this site that cannot be resolved informally shall be subject to the exclusive jurisdiction of the courts of the State of Georgia.`,
    ],
  },
  {
    number: "9",
    title: "Disclaimer",
    content: [
      `ThomsUp is an independent consulting firm and is not affiliated with any government agency. Services are provided to commercial and public sector clients on an independent basis.`,
    ],
  },
  {
    number: "10",
    title: "Changes to These Terms",
    content: [
      `ThomsUp may update these terms from time to time. The "Last updated" date at the top of this page reflects when the most recent changes were made. Continued use of the site after changes are posted constitutes acceptance of the updated terms.`,
    ],
  },
  {
    number: "11",
    title: "Contact",
    content: [
      `If you have questions about these terms, contact us through the form on this site. We will respond within one business day.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-sm">
            Last updated: 11 April 2026
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 bg-[#1a1a1a] border border-cyan-500/20 rounded-xl p-6">
          <p className="text-gray-300 text-sm leading-relaxed">
            These terms govern your use of thomsup.com. They cover the website only — not client engagements,
            which are handled under separate written agreements. If you have questions before engaging our
            services, reach out through the contact form.
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
            Questions about these terms? Contact us through the form on this site.
          </p>
        </div>
      </div>
    </div>
  )
}
