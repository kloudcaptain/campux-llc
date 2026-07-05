// Regenerates public/campux-capability-statement.pdf from scripts/capability-statement.html.
// Edit the HTML template (e.g. when the CAGE code arrives), then run:
//   npm run capability-statement
//
// Uses a local Chromium-based browser's headless print-to-pdf rather than adding
// a Puppeteer/Playwright dependency just for a one-page PDF.

import { execFileSync } from "node:child_process"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const inputHtml = path.join(__dirname, "capability-statement.html")
const outputPdf = path.join(root, "public", "campux-capability-statement.pdf")

const candidates = [
  process.env.CAMPUX_BROWSER_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/microsoft-edge",
].filter(Boolean)

const browser = candidates.find((p) => existsSync(p))

if (!browser) {
  console.error(
    "No Chromium-based browser found (checked Edge/Chrome default install paths).\n" +
    "Set CAMPUX_BROWSER_PATH to a Chromium/Edge/Chrome executable and retry."
  )
  process.exit(1)
}

const fileUrl = "file:///" + inputHtml.replace(/\\/g, "/")

execFileSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${outputPdf}`,
    "--print-to-pdf-no-header",
    "--no-margins",
    fileUrl,
  ],
  { stdio: "inherit" }
)

console.log(`Wrote ${path.relative(root, outputPdf)}`)
