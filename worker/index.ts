interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  RESEND_API_KEY: string
}

interface ContactPayload {
  source?: string
  firstName?: string
  lastName?: string
  name?: string
  email?: string
  company?: string
  message?: string
  urgency?: string
  company_url?: string
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    // Canonical host: force https://campux.co (no www, no http) so Google sees
    // one URL per page instead of duplicate www/http variants.
    if (url.hostname !== "campux.co" || url.protocol !== "https:") {
      url.hostname = "campux.co"
      url.protocol = "https:"
      url.port = ""
      return Response.redirect(url.toString(), 301)
    }

    // Permanent redirects: routes renamed in the newcampux redesign, and three
    // insights articles that were unpublished during curation (301 -> /insights).
    const redirectTarget = REDIRECTS[stripSlash(url.pathname)]
    if (redirectTarget) {
      url.pathname = redirectTarget
      return Response.redirect(url.toString(), 301)
    }

    // Old WordPress site is gone. Return 410 (not 404) for its legacy URLs so
    // Google drops them from the index immediately instead of re-crawling dead
    // pages for months. Only matches known-old paths — never a current route.
    if (isLegacyUrl(url.pathname)) {
      return new Response("Gone", {
        status: 410,
        headers: { "Content-Type": "text/plain" },
      })
    }

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}

// Routes renamed / articles unpublished in the newcampux redesign.
// Keys are path without trailing slash; values are the new destination.
const REDIRECTS: Record<string, string> = {
  "/government": "/public-sector",
  "/about": "/",
  "/privacy-policy": "/privacy",
  "/insights/ai-is-the-new-junior-developer": "/insights",
  "/insights/best-time-to-ship-code": "/insights",
  "/insights/is-your-environment-truly-agile": "/insights",
}

function stripSlash(pathname: string): string {
  return pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname
}

// Legacy WordPress URLs from the previous site on this domain. These 404 today;
// 410 tells Google they are permanently gone.
const LEGACY_EXACT = new Set([
  "/digital-marketing-agency-augusta",
  "/find-vetted-talents",
  "/business-internship",
  "/seo-training-in-lagos-nigeria",
  "/how-lucrative-is-digital-marketing-in-nigeria",
  "/sitemap_index.xml",
  "/page-sitemap.xml",
  "/post-sitemap.xml",
  "/category-sitemap.xml",
])

const LEGACY_PREFIXES = [
  "/shop-2/",
  "/shop/",
  "/course-category/",
  "/courses/",
  "/product/",
  "/product-category/",
  "/category/",
  "/tag/",
  "/author/",
  "/wp-content/",
  "/wp-admin/",
  "/wp-includes/",
  "/wp-json/",
]

function isLegacyUrl(pathname: string): boolean {
  const path = pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname
  if (LEGACY_EXACT.has(path)) return true
  return LEGACY_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return jsonResponse({ error: "invalid_json" }, 400)
  }

  if (body.company_url && body.company_url.trim() !== "") {
    return jsonResponse({ ok: true })
  }

  const email = (body.email || "").trim()
  const message = (body.message || "").trim()

  if (!email || !email.includes("@") || message.length < 5) {
    return jsonResponse({ error: "missing_fields" }, 400)
  }

  const source = body.source === "home" ? "home" : "contact"
  const name = body.firstName
    ? `${body.firstName} ${body.lastName || ""}`.trim()
    : body.name || "(not provided)"

  const text = [
    `Source: ${source} page`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${body.company || "(not provided)"}`,
    body.urgency ? `Urgency: ${body.urgency}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n")

  const subject = `New ${source} form: ${name === "(not provided)" ? email : name}`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Campux Forms <forms@campux.co>",
      to: ["victor@campux.co"],
      reply_to: email,
      subject,
      text,
    }),
  })

  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text())
    return jsonResponse({ error: "send_failed" }, 502)
  }

  return jsonResponse({ ok: true })
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}
