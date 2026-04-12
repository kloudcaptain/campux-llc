export const metadata = {
  title: "Cookie Policy — ThomsUp",
  description: "What cookies thomsup.com uses and why.",
}

const cookies = [
  { name: "_ga",              provider: "Google Analytics", purpose: "Distinguishes unique users",           duration: "2 years"  },
  { name: "_ga_[ID]",         provider: "Google Analytics", purpose: "Maintains session state for GA4",     duration: "2 years"  },
  { name: "_gid",             provider: "Google Analytics", purpose: "Distinguishes unique users",           duration: "24 hours" },
  { name: "__cf_bm",          provider: "Calendly / Cloudflare", purpose: "Bot protection for Calendly",    duration: "30 min"   },
  { name: "calendly_session", provider: "Calendly",         purpose: "Required for scheduling to function", duration: "Session"  },
]

const sections = [
  {
    number: "1",
    title: "What Cookies Are",
    content: [
      `Cookies are small text files stored on your device when you visit a website. This site uses a small number of cookies for two specific purposes: analytics (understanding how the site is used) and scheduling functionality (Calendly). That is all.`,
    ],
  },
  {
    number: "3",
    title: "Why We Use These Cookies",
    content: [
      `Google Analytics cookies allow us to understand which pages are visited, how visitors navigate the site, and what devices they use. This helps us improve the site. IP addresses are anonymized. Analytics data is not used for advertising or shared with ad networks.`,
      `Calendly cookies are required for the scheduling tool to work. If you choose to book a consultation call, Calendly needs these cookies to function. If you do not use the scheduling tool, these cookies have no effect.`,
    ],
  },
  {
    number: "4",
    title: "How to Opt Out",
    content: [
      `Analytics opt-out: You can prevent Google Analytics from recording your visit by installing the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout. You can also decline analytics cookies when the cookie consent banner appears on your first visit.`,
      `Browser settings: Most browsers allow you to block or delete cookies through their privacy or security settings. Blocking analytics cookies does not affect your ability to use this site. Blocking Calendly cookies will prevent the scheduling tool from working, but everything else on the site remains fully functional.`,
    ],
  },
  {
    number: "5",
    title: "Cookie Consent",
    content: [
      `This site displays a cookie consent banner on first visit. Google Analytics only loads after you accept analytics cookies. Calendly's functional cookies are loaded only if you interact with the scheduling tool.`,
      `You can change your cookie preferences at any time by clearing your browser cookies and revisiting the site.`,
    ],
  },
  {
    number: "6",
    title: "What We Do Not Use",
    content: [
      `There are no advertising cookies on this site. No tracking pixels. No remarketing or retargeting. No third-party marketing platforms. The only third-party cookies are Google Analytics and Calendly, both described above.`,
    ],
  },
  {
    number: "7",
    title: "Changes to This Policy",
    content: [
      `If we add or change cookies on this site, we will update this page and the "Last updated" date. We recommend checking this page if cookie handling is important to your use of the site.`,
    ],
  },
  {
    number: "8",
    title: "Contact",
    content: [
      `If you have questions about cookies on this site, contact us through the form on this site.`,
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-12 pb-12 border-b border-white/10">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-400 text-sm">
              Last updated: 11 April 2026
            </p>
          </div>

          {/* Intro */}
          <div className="mb-12 bg-[#1a1a1a] border border-cyan-500/20 rounded-xl p-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              This site uses a small number of cookies. There are no advertising cookies, no tracking pixels, and no
              marketing platforms. Just analytics to understand how the site is used, and functional cookies
              for the Calendly scheduling tool.
            </p>
          </div>

          {/* Section 2: cookie table */}
          <div className="mb-10" id="section-2">
            <h2 className="text-xl font-semibold text-white mb-4">
              <span className="text-cyan-400 mr-3">2.</span>
              Cookies in Use
            </h2>
            <div className="pl-8">
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/4">
                      <th className="text-left px-5 py-3 text-gray-400 font-medium">Cookie</th>
                      <th className="text-left px-5 py-3 text-gray-400 font-medium">Provider</th>
                      <th className="text-left px-5 py-3 text-gray-400 font-medium">Purpose</th>
                      <th className="text-left px-5 py-3 text-gray-400 font-medium whitespace-nowrap">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.map((row, i) => (
                      <tr
                        key={row.name}
                        className={i < cookies.length - 1 ? "border-b border-white/8" : ""}
                      >
                        <td className="px-5 py-3.5 text-cyan-400 font-mono text-xs">{row.name}</td>
                        <td className="px-5 py-3.5 text-gray-400">{row.provider}</td>
                        <td className="px-5 py-3.5 text-gray-400">{row.purpose}</td>
                        <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Remaining sections */}
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
              Questions about cookies? Contact us through the form on this site.
            </p>
          </div>

        </div>
    </div>
  )
}
