// Ports the finished static pages in newcampux/campux-site-pages/site into
// body-fragment HTML files under app/_ported/, rewriting links to Next routes,
// swapping inlined base64 logos for /public assets, and marking the contact
// form so a client enhancer can wire it to /api/contact.
// Run: node scripts/port-newcampux.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "newcampux", "campux-site-pages", "site");
const OUT = path.join(ROOT, "app", "_ported");

const PAGES = [
  { file: "index", name: "home" },
  { file: "services", name: "services" },
  { file: "public-sector", name: "public-sector" },
  { file: "working-with-us", name: "working-with-us" },
  { file: "contact", name: "contact" },
  { file: "insights", name: "insights" },
  { file: "privacy", name: "privacy" },
  { file: "terms", name: "terms" },
  { file: "accessibility", name: "accessibility" },
  { file: "404", name: "not-found" },
];

const LINK_MAP = {
  "index.html": "/",
  "services.html": "/services",
  "public-sector.html": "/public-sector",
  "working-with-us.html": "/working-with-us",
  "contact.html": "/contact",
  "insights.html": "/insights",
  "privacy.html": "/privacy",
  "terms.html": "/terms",
  "accessibility.html": "/accessibility",
  "404.html": "/404",
};

function rewriteUrl(url) {
  // Absolute article links -> root-relative
  if (url.startsWith("https://campux.co/")) {
    return url.replace("https://campux.co", "");
  }
  // Leave external, mailto, tel, pure anchors, root-relative untouched
  if (/^(https?:|mailto:|tel:|#|\/)/.test(url)) return url;
  // Split file from anchor/query
  const m = url.match(/^([^#?]*)([#?].*)?$/);
  if (!m) return url;
  const [, filePart, rest = ""] = m;
  if (Object.prototype.hasOwnProperty.call(LINK_MAP, filePart)) {
    let base = LINK_MAP[filePart];
    // "/#firm" for index anchors, keep "/services#finops" for others
    if (base === "/" && rest) return "/" + rest; // -> "/#firm"
    return base + rest;
  }
  return url;
}

function extractMeta(head) {
  const title = (head.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "";
  const desc =
    (head.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/) ||
      [])[1] || "";
  return { title: decodeEntities(title.trim()), description: decodeEntities(desc.trim()) };
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ");
}

const meta = {};

for (const { file, name } of PAGES) {
  const raw = fs.readFileSync(path.join(SRC, `${file}.html`), "utf8");

  const head = raw.slice(0, raw.indexOf("</head>"));
  meta[name] = extractMeta(head);

  // Body inner
  let body = raw.slice(raw.indexOf("<body>") + 6, raw.indexOf("</body>"));

  // Drop any inline <script> (prefill/validation handled by React enhancer)
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Remove AI/dev footprints from the shipped markup:
  //  - HTML comments (section markers, SVG notes, TODO notes)
  //  - the dead "Book a call" button (href="#" placeholder) + its yellow tag
  //  - data-todo dev attributes
  body = body.replace(/<!--[\s\S]*?-->/g, "");
  body = body.replace(/<div class="book">[\s\S]*?<\/div>/g, "");
  body = body.replace(/\s*data-todo="[^"]*"/g, "");
  // Insights category filter uses href="#" (JS-driven). Point it at /insights so
  // there is no dead anchor and it degrades gracefully without JS.
  body = body.replace(
    /(<div class="filters">)([\s\S]*?)(<\/div>)/,
    (_m, a, inner, c) => a + inner.replace(/href="#"/g, 'href="/insights"') + c
  );

  // Swap photo-slot placeholders for the real photographs (shot list 01–04).
  const PHOTOS = {
    "1": {
      src: "/photo-01-whiteboard.jpg",
      alt: "Engineer at a whiteboard sketching a hub-and-spoke Azure landing zone",
    },
    "2": {
      src: "/photo-02-principals.jpg",
      alt: "Two Campux principals reviewing a printed architecture diagram across a table",
    },
    "3": {
      src: "/photo-03-hands.jpg",
      alt: "Close crop of hands on a keyboard with the Azure portal on screen",
    },
    "4": {
      src: "/photo-04-workspace.jpg",
      alt: "A cloud engineer's workspace with monitors and a desk",
    },
  };
  body = body.replace(
    /<div class="shot([^"]*)"[^>]*>\s*<div>[\s\S]*?PHOTO 0(\d)[\s\S]*?<\/div>\s*<\/div>/g,
    (full, cls, n) => {
      const p = PHOTOS[n];
      if (!p) return full;
      // 01 is the hero image (above the fold) — load it eagerly for LCP.
      const load =
        n === "1"
          ? 'fetchpriority="high" decoding="async"'
          : 'loading="lazy" decoding="async"';
      return `<img class="shot${cls}" src="${p.src}" alt="${p.alt}" ${load}>`;
    }
  );

  // Resolve owner-fact placeholders (confirmed decisions): Azure Government =
  // not yet / commercial only; insurance = being put in place; teaming partners
  // = none yet; unconfirmed registrations/vehicles = dropped.
  body = body
    // Home — commercial & compliance list
    .replace(
      '<li>Professional and cyber liability insurance <span class="todo-inline">[confirm carrier &amp; limits before publishing]</span>.</li>',
      ""
    )
    .replace(
      '<li>Azure Government experience <span class="todo-inline">[state honestly: yes / on request / not yet]</span>.</li>',
      "<li>Azure commercial today. Not yet operating in Azure Government.</li>"
    )
    // Public sector — Azure Government honesty
    .replace(
      /<span class="todo-inline">\[State honestly: production experience in Azure Government[\s\S]*?<\/span>/,
      "We work in Azure commercial today and do not yet have Azure Government or AWS GovCloud production experience. Where a contract requires it, we say so and team with a firm that holds the authorization."
    )
    // Public sector — drop the unconfirmed registrations/vehicles placeholder
    .replace(
      / ?<span class="todo-inline">\[Add each of these only once confirmed:[\s\S]*?<\/span>/,
      ""
    )
    // Working with us — retainer tier cell
    .replace(
      ' <span class="todo-inline">[roll over / do not roll over]</span>',
      " handled per the retainer scope"
    )
    // Working with us — insurance + Azure Government prose paragraph
    .replace(
      '<p>Professional and cyber liability insurance <span class="todo-inline">[carrier and limits]</span>. Azure Government experience <span class="todo-inline">[yes / on request / not yet]</span>. Least-privilege access, MFA, no standing credentials, access removed at close.</p>',
      "<p>Least-privilege access, MFA, no standing credentials, access removed at close. Professional and cyber liability coverage is being put in place; a certificate will be available before contract award. Azure commercial today; not yet operating in Azure Government.</p>"
    )
    // Working with us — remove teaming-partner clause (none yet)
    .replace(
      /, and surge capacity comes from vetted teaming partners disclosed in the proposal\. ?<span class="todo-inline">\[Delete the teaming-partner sentence if none exist yet\.\]<\/span>/,
      "."
    )
    // Working with us — FAQ answers
    .replace(
      '<span class="todo-inline">[Professional and cyber liability: carrier and limits, once confirmed.]</span>',
      "We are putting professional and cyber liability coverage in place. A certificate of insurance will be available before contract award."
    )
    .replace(
      '<span class="todo-inline">[State honestly: yes / on request / not yet.]</span>',
      "Not yet. We work in Azure commercial today. Where a contract requires Azure Government, we say so and team with a firm that holds the authorization."
    )
    // No standing teaming bench yet — reframe as arranged per opportunity.
    .replace(
      "Surge and specialist capacity through vetted teaming partners, disclosed in the proposal.",
      "Surge and specialist capacity arranged through teaming per opportunity, disclosed in the proposal."
    );

  // Resolve legal-page placeholders (privacy/terms/accessibility) with known
  // facts and conservative defaults. The "draft for legal review" note at the
  // top of each page stays, so counsel still signs off.
  const legalFixes = [
    [
      `Last updated: <span class="todo-inline">[month year]</span>`,
      "Last updated: August 2026",
    ],
    [
      `<span class="todo-inline">[Registered business address]</span>`,
      "Atlanta, Georgia",
    ],
    // privacy — sub-processors and log retention
    [
      `<span class="todo-inline">[State whether analytics is used. If none: "We do not run analytics or advertising trackers on this site."]</span>`,
      "We do not run analytics or advertising trackers on this site.",
    ],
    [
      `Form handling: <span class="todo-inline">[Formspree, or the provider Claude Code wires in]</span>`,
      "Form handling: a Cloudflare Worker that emails your message to us, delivered via Resend.",
    ],
    [
      `Call booking: <span class="todo-inline">[Microsoft Bookings / Calendly, if enabled]</span>`,
      "Call booking: no scheduling tool is used on this site.",
    ],
    [
      `Web hosting: <span class="todo-inline">[provider]</span>`,
      "Web hosting: Cloudflare.",
    ],
    [
      `Email: <span class="todo-inline">[Microsoft 365 / provider]</span>`,
      "Email: contact-form messages are delivered by Resend.",
    ],
    [
      `Fonts: <span class="todo-inline">[If Google Fonts remain, state: "Fonts are loaded from Google Fonts, which receives your IP address when the page loads." If self-hosted, delete this line.]</span>`,
      "Fonts: loaded from Google Fonts, which receives your IP address when the page loads.",
    ],
    [
      ` <span class="todo-inline">[Confirm this is still true after the form and booking tools are wired in.]</span>`,
      "",
    ],
    [
      `Server logs are kept for <span class="todo-inline">[30/90]</span>`,
      "Server logs are kept for 30",
    ],
    // terms
    [
      ` <span class="todo-inline">[If you adopt a standard data-protection addendum, reference it here.]</span>`,
      "",
    ],
    [`<span class="todo-inline">[six / twelve]</span>`, "twelve"],
    [
      `Unused hours <span class="todo-inline">[do / do not]</span> roll over.`,
      "Unused-hour handling is set out in each retainer scope.",
    ],
    // accessibility
    [
      `<span class="todo-inline">[After testing, list what is not yet right, for example: "The Services drop-down menu opens on hover and keyboard focus but does not yet announce its state to screen readers." If nothing is known, say "We have not yet completed a third-party audit."]</span>`,
      "We have not yet completed a third-party accessibility audit, so this list may not be complete.",
    ],
    [
      `<span class="todo-inline">[State how the site was tested: browser, screen reader, keyboard-only, and date. Name a third-party audit if one is done.]</span>`,
      "This site has not yet undergone formal third-party accessibility testing.",
    ],
    [
      `<span class="todo-inline">[hello@campux.co]</span>`,
      "hello@campux.co",
    ],
    // accessibility — fix the broken markdown-link artifact in the email line.
    [
      `<a href="mailto:hello@campux.co">hello@campux.co(mailto:hello@campux.co)</a>`,
      `<a href="mailto:hello@campux.co">hello@campux.co</a>`,
    ],
  ];
  for (const [find, repl] of legalFixes) body = body.replace(find, repl);

  // Strip internal "Note for the owner:" reminders that shipped in the legal
  // drafts (privacy, terms, accessibility). Never meant for public eyes.
  body = body.replace(
    /<p>Note for the owner:[^<]*<\/p>\s*/g,
    ""
  );

  // We are Azure commercial today — not operating in Azure Government. Remove
  // the positive Azure Government capability claims (kept the honest "not yet"
  // lines elsewhere). Owner decision: commercial only.
  body = body
    .replace(/commercial and Azure Government\./g, "commercial.")
    .replace(
      /Any US tenant: Azure commercial, Azure Government, AWS/g,
      "Any US tenant: Azure commercial, AWS"
    );

  // Add a "Compliance and controls" section to /public-sector (the gov audit's
  // biggest content gap). Frameworks the firm designs to — NIST 800-53/171 and
  // CJIS — framed as baselines and evidence, not certifications. No ATO claim.
  const complianceSection =
    '<section class="blocks"><div class="wrap">' +
    '<div class="head"><p class="kicker">Compliance and controls</p>' +
    "<h2>Built to the control baselines your auditor already uses</h2>" +
    '<p class="lede" style="margin-top:14px">We are not an authorizing body and we do not hold an ATO. We build your Azure environment to recognized control baselines, enforce them with Azure Policy, and hand you the evidence, so your compliance team starts from a documented position rather than a blank page.</p></div>' +
    '<div class="b3">' +
    "<div><h3>NIST SP 800-53</h3><p>Landing zones mapped to 800-53 rev 5 control families and enforced with the built-in Azure Policy regulatory-compliance initiatives, exported as compliance evidence.</p></div>" +
    "<div><h3>NIST SP 800-171</h3><p>For CUI environments, controls aligned to 800-171, with the policy state and configuration evidence your SSP and POA&amp;M need.</p></div>" +
    "<div><h3>CJIS Security Policy</h3><p>For Georgia state, local and law-enforcement work, we design to the CJIS Security Policy: advanced authentication, encryption in transit and at rest, audit logging, and personnel-screening controls.</p></div>" +
    "</div></div></section>";
  body = body.replace(
    /(<section class="blocks"><div class="wrap">\s*<div class="head"><p class="kicker">Registrations and vehicles<\/p>)/,
    complianceSection + "$1"
  );

  // Fix a mobile bug: the "four ways to engage" grid used an inline
  // grid-template-columns that overrode the responsive collapse. Use a class.
  body = body.replace(
    /<div class="b3" style="grid-template-columns:repeat\(4,1fr\)">/g,
    '<div class="b3 four">'
  );

  // Correct the published phone number.
  body = body
    .replace(/tel:\+14707184440/g, "tel:+17707505856")
    .replace(/470-718-4440/g, "770-750-5856");

  // Public location is metro-only by owner preference (full street address
  // stays in SAM.gov, not on the site). Drop the address placeholder.
  body = body.replace(
    /Atlanta metro, Georgia <span class="todo-inline">\[registered business address\]<\/span>/g,
    "Atlanta, Georgia"
  );

  // No set-aside certifications yet — remove the placeholder (owner's call).
  body = body.replace(
    /\s*<span class="todo-inline">\[Set-aside status once certified\.\]<\/span>/g,
    ""
  );

  // Strip the internal reminder note on the entity sheet's Ownership row.
  body = body.replace(
    /<small>Add SBA \/ WOSB \/ DBE only once certified\.<\/small>/g,
    ""
  );

  // Mission & vision — human, non-mercenary; sits in "The firm" section before
  // the bios (purpose before people). Only the home fragment has .roles.
  const missionVision =
    '<div class="mv">' +
    "<p><strong>Our mission.</strong> To help people with their technology, and to do it well enough that they want us to stay.</p>" +
    "<p><strong>Our vision.</strong> Long relationships with the people we help, built on work they can trust and keep.</p>" +
    "</div>";
  body = body.replace(
    '<div class="roles">',
    missionVision + '<div class="roles">'
  );

  // Simplify the founder bios (role-only, no cert dump), drop the
  // "names/portraits" note, and keep the firm photos hidden for now.
  // Reversible: restore the original roles block / photos in the source.
  const simpleRoles =
    '<div class="roles">' +
    "<div class=\"role\"><strong>Principal engineer</strong><span>Cloud platform engineer with 10 years in IT, much of it in regulated environments. Builds and secures cloud platforms and hands them over to your team.</span></div>" +
    "<div class=\"role\"><strong>Co-founder, operations &amp; compliance</strong><span>Experience across compliance-heavy environments. Keeps engagements documented, compliant, and on track.</span></div>" +
    "</div>";
  body = body
    .replace(/<div class="roles">[\s\S]*?<\/div>\s*<\/div>/, simpleRoles)
    .replace(
      /<p class="small"[^>]*>Names, portraits and direct lines are shared at first conversation\.<\/p>/,
      ""
    )
    .replace(/<div class="photos">[\s\S]*?<\/div>/, "");

  // Slim the homepage "Public sector" band: drop the doubled kicker and replace
  // the full entity sheet with a compact identifier panel that links to the
  // dedicated /public-sector page (which keeps the full sheet). HOME ONLY —
  // /public-sector must keep its full sheet.
  if (name === "home") {
    body = body.replace(
      /<p class="kicker">Public sector<\/p>\s*<h2>Public sector<\/h2>/,
      "<h2>Public sector</h2>"
    );
    const compactSheet =
      '<div class="sheet">' +
      "<h3>Campux LLC</h3>" +
      '<p class="sub">Georgia small business · SAM.gov active · founded 2024</p>' +
      "<table>" +
      "<tr><td>UEI</td><td>LZHNRGY8U3L8</td></tr>" +
      "<tr><td>CAGE</td><td>22GL8</td></tr>" +
      "<tr><td>NAICS</td><td>541512 · 541519 · 611420</td></tr>" +
      "</table>" +
      '<div class="foot"><span>Verify at sam.gov → Entity search → UEI</span><a class="link" href="/public-sector#capability">Full capability statement</a></div>' +
      "</div>";
    body = body.replace(
      /<div class="sheet">[\s\S]*?<\/div>\s*<\/div>/,
      compactSheet
    );
  }

  // Swap the two inlined base64 logos: 1st = header (dark), 2nd = footer (white)
  let logoIdx = 0;
  body = body.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/g, () => {
    logoIdx += 1;
    return logoIdx === 1 ? "/campux-logo.png" : "/campux-logo-white.png";
  });

  // Rewrite internal links
  body = body.replace(/\b(href|src|action)="([^"]*)"/g, (full, attr, url) => {
    if (attr === "action") return `${attr}="/api/contact"`;
    return `${attr}="${rewriteUrl(url)}"`;
  });

  // Mark the contact form for the client enhancer (keep the form markup intact)
  body = body.replace(
    /<form class="cform"[^>]*>/,
    '<form class="cform" data-contact-form novalidate>'
  );

  // Wire the generated capability-statement PDF as a direct download and drop
  // the "[attach the PDF]" placeholder. Runs AFTER link rewriting, so hrefs are
  // already /contact form. (Regenerate the PDF: npm run capability-statement)
  const pdfBtn =
    '<a class="btn btn-primary" href="/campux-capability-statement.pdf" download>Download capability statement (PDF)</a>';
  body = body
    .replace(
      /<a class="btn btn-primary" href="[^"]*need=Federal[^"]*">Request capability statement \(PDF\)<\/a> <span class="todo-inline"[^>]*>\[attach the PDF and link it directly here\]<\/span>/,
      pdfBtn
    )
    .replace(
      '<a class="btn btn-primary" href="/contact">Request capability statement (PDF)</a>',
      pdfBtn
    );

  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `${name}.html`), body.trim() + "\n", "utf8");
  console.log(`ported ${file}.html -> app/_ported/${name}.html`);
}

fs.writeFileSync(path.join(OUT, "meta.json"), JSON.stringify(meta, null, 2), "utf8");
console.log("wrote app/_ported/meta.json");

// Shared chrome partials (used by the insights article template, which is
// React-rendered rather than a ported static page). Derived from the home
// fragment so header/footer stay byte-identical to every other page.
const home = fs.readFileSync(path.join(OUT, "home.html"), "utf8");
let header = home.slice(0, home.indexOf("</header>") + "</header>".length);
// Mark Insights as the active nav item on article pages.
header = header.replace(
  /<a href="\/insights" data-nav="insights">/,
  '<a href="/insights" data-nav="insights" class="active">'
);
const footer = home.slice(home.indexOf("<footer"), home.indexOf("</footer>") + "</footer>".length);
fs.writeFileSync(path.join(OUT, "chrome-header-insights.html"), header + "\n", "utf8");
fs.writeFileSync(path.join(OUT, "chrome-footer.html"), footer + "\n", "utf8");
console.log("wrote chrome partials");
