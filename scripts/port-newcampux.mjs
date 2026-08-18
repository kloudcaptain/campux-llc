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
