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

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
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
