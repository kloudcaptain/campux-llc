#!/usr/bin/env python3
"""CAMPUX LLC Capability Statement — one-page federal-standard layout.
Regenerable: update CAGE constant when DLA assigns it, rerun."""

from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

# ---- editable data ----
CAGE = "22GL8"
UEI = "LZHNRGY8U3L8"
EMAIL = "victor@campux.co"
PHONE = "(470) 718-4440"
SITE = "campux.co"

# ---- palette (site-consistent) ----
INK = HexColor("#1a1114")        # near-black plum
EMBER = HexColor("#d1490f")      # brand ember orange
VIOLET = HexColor("#3b1f47")     # deep violet
PAPER = HexColor("#ffffff")
FAINT = HexColor("#6b5f66")
RULE = HexColor("#e4dcd7")
CHIPBG = HexColor("#f6efe9")

W, H = letter
M = 0.55 * inch  # margin

styles = {
    "h2": ParagraphStyle("h2", fontName="Times-Bold", fontSize=12.5,
                         textColor=EMBER, spaceAfter=4, leading=15),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=8.6,
                           textColor=INK, leading=12.2, alignment=TA_LEFT),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=8.6,
                             textColor=INK, leading=12.0, leftIndent=10,
                             bulletIndent=0, spaceAfter=3.5),
    "svc": ParagraphStyle("svc", fontName="Helvetica", fontSize=8.6,
                          textColor=INK, leading=12.0, spaceAfter=4.5),
    "datalabel": ParagraphStyle("dl", fontName="Helvetica-Bold", fontSize=7.2,
                                textColor=white, leading=10),
    "dataval": ParagraphStyle("dv", fontName="Helvetica", fontSize=8.4,
                              textColor=white, leading=11.6),
}

OUTPUT_PATH = Path(__file__).resolve().parent.parent / "public" / "campux-capability-statement.pdf"

c = canvas.Canvas(str(OUTPUT_PATH), pagesize=letter)
c.setTitle("CAMPUX LLC Capability Statement")
c.setAuthor("CAMPUX LLC")
c.setSubject("Capability Statement — Azure Cloud Consulting & IT Training")

# ================= header band =================
band_h = 1.28 * inch
c.setFillColor(INK)
c.rect(0, H - band_h, W, band_h, stroke=0, fill=1)
# ember accent bar
c.setFillColor(EMBER)
c.rect(0, H - band_h - 4, W, 4, stroke=0, fill=1)

# logo mark (four squares, echoing site logo)
lx, ly, s, g = M, H - 0.62 * inch, 8, 2.5
c.setFillColor(white)
c.rect(lx, ly, s, s, stroke=0, fill=1)
c.rect(lx + s + g, ly + s + g - s, s, s, stroke=0, fill=1)
c.setFillColor(EMBER)
c.rect(lx, ly + s + g, s, s, stroke=0, fill=1)
c.setFillColor(white)
c.rect(lx + s + g, ly + s + g, s, s, stroke=0, fill=1)

c.setFillColor(white)
c.setFont("Times-Bold", 24)
c.drawString(M + 0.38 * inch, H - 0.60 * inch, "CAMPUX LLC")
c.setFont("Helvetica", 9.6)
c.setFillColor(HexColor("#e8ddd6"))
c.drawString(M + 0.38 * inch, H - 0.80 * inch,
             "Azure Cloud Consulting & IT Training  ·  Atlanta, GA  ·  Founded 2024")
c.setFont("Helvetica-Bold", 11)
c.setFillColor(white)
c.drawRightString(W - M, H - 0.42 * inch, "CAPABILITY STATEMENT")
c.setFont("Helvetica", 8.6)
c.setFillColor(HexColor("#e8ddd6"))
c.drawRightString(W - M, H - 0.60 * inch, EMAIL)
c.drawRightString(W - M, H - 0.74 * inch, PHONE)
c.drawRightString(W - M, H - 0.88 * inch, SITE)

top = H - band_h - 4 - 0.18 * inch

# ================ two columns =================
col_gap = 0.32 * inch
left_w = (W - 2 * M - col_gap) * 0.56
right_w = (W - 2 * M - col_gap) * 0.44
right_x = M + left_w + col_gap

def para(text, style, x, y, w):
    p = Paragraph(text, style)
    _, ph = p.wrap(w, 5 * inch)
    p.drawOn(c, x, y - ph)
    return y - ph

y = top
# ---- CORE COMPETENCIES ----
y = para("Core Competencies", styles["h2"], M, y, left_w) - 2
svcs = [
    ("Cloud Architecture &amp; Migration",
     "Azure landing zones, tenant migrations, hybrid connectivity, and infrastructure as code with Bicep and Terraform."),
    ("DevSecOps &amp; Automation",
     "CI/CD pipelines, SAST/DAST integration, policy-as-code, Microsoft Defender for Cloud, Zero Trust baselines."),
    ("Cloud FinOps &amp; Cost Optimization",
     "Spend analysis, right-sizing, serverless migration, governance guardrails."),
    ("IT Training &amp; Curriculum Development",
     "Instructor-led Azure and DevOps training, hands-on lab environments, custom curriculum for teams."),
]
for name, desc in svcs:
    y = para(f"<b>{name}.</b>  {desc}", styles["svc"], M, y, left_w) - 3

y -= 6
# ---- PRINCIPAL EXPERIENCE ----
y = para("Principal Experience", styles["h2"], M, y, left_w) - 1
y = para("Work led by our principal engineer includes:",
         ParagraphStyle("intro", parent=styles["body"], textColor=FAINT,
                        fontSize=8.2, spaceAfter=3), M, y, left_w) - 4
exp = [
    "Tenant-to-tenant migration of <b>150+ applications</b> for a national distributor — secure landing zones, dependency mapping, zero-loss cutover",
    "<b>80% Azure SQL cost reduction</b> via serverless migration in a FinOps engagement",
    "AKS platform builds, Zero Trust baselines, and compliance-aligned IaC across HIPAA, GDPR, and PCI-DSS environments",
    "<b>34 production-context hands-on labs</b> authored for Azure Data Factory training",
]
for e in exp:
    y = para(f"•&nbsp;&nbsp;{e}", styles["bullet"], M, y, left_w) - 2

y -= 6
# ---- DIFFERENTIATORS ----
y = para("Differentiators", styles["h2"], M, y, left_w) - 1
diffs = [
    "<b>Senior from day one.</b> No account layers, no handoffs — the engineer who scopes the work delivers it.",
    "<b>Infrastructure as code, always.</b> Everything we build is versioned, repeatable, and documented. You own the code and can run it without us.",
    "<b>Teach as we go.</b> Every engagement transfers knowledge — runbooks, walkthroughs, and training so your team operates what we build.",
]
for d in diffs:
    y = para(f"•&nbsp;&nbsp;{d}", styles["bullet"], M, y, left_w) - 2

# =============== right column ===============
# COMPANY DATA card
card_top = top
card_h = 3.12 * inch
c.setFillColor(VIOLET)
c.roundRect(right_x, card_top - card_h, right_w, card_h, 8, stroke=0, fill=1)
c.setFillColor(EMBER)
c.rect(right_x, card_top - 3, right_w, 3, stroke=0, fill=1)

pad = 0.16 * inch
dy = card_top - pad - 2
def datarow(label, value, dy, vw=right_w - 2 * pad):
    dy = para(label.upper(), styles["datalabel"], right_x + pad, dy, vw) - 1
    dy = para(value, styles["dataval"], right_x + pad, dy, vw) - 7
    return dy

dy = datarow("Company Data", "", dy)
dy += 5
dy = datarow("UEI", UEI, dy)
dy = datarow("CAGE Code", CAGE, dy)
dy = datarow("Primary NAICS", "541512 — Computer Systems Design Services", dy)
dy = datarow("Additional NAICS", "541511 · 541519 · 611420", dy)
dy = datarow("Business Type",
             "Small Business · Minority-Owned · Black American Owned", dy)
dy = datarow("Registrations", "SAM.gov (registered) · Atlanta, GA · Founded 2024", dy)

# CREDENTIALS card
cred_top = card_top - card_h - 0.22 * inch
cred_h = 1.62 * inch
c.setFillColor(CHIPBG)
c.roundRect(right_x, cred_top - cred_h, right_w, cred_h, 8, stroke=0, fill=1)
cy = cred_top - pad - 2
cy = para("Principal Credentials",
          ParagraphStyle("ch", parent=styles["h2"], fontSize=11), 
          right_x + pad, cy, right_w - 2 * pad) - 2
creds = ("M.S. Cybersecurity &amp; Information Assurance · CompTIA Security+ · "
         "Pentest+ · CySA+ · ITIL v4 · AZ-305 (in progress) · DP-700 (in progress)")
cy = para(creds, ParagraphStyle("cred", parent=styles["body"], fontSize=8.4,
          leading=12.4), right_x + pad, cy, right_w - 2 * pad)

# CONTACT card
con_top = cred_top - cred_h - 0.22 * inch
con_h = 1.30 * inch
c.setFillColor(INK)
c.roundRect(right_x, con_top - con_h, right_w, con_h, 8, stroke=0, fill=1)
ky = con_top - pad - 2
ky = para("Contact", ParagraphStyle("kh", parent=styles["h2"], fontSize=11,
          textColor=white), right_x + pad, ky, right_w - 2 * pad) - 2
contact = (f"<b>Victor Thomson</b>, Managing Partner<br/>"
           f"{EMAIL}<br/>{PHONE}<br/>https://{SITE}/government")
ky = para(contact, ParagraphStyle("kv", parent=styles["dataval"], fontSize=8.8,
          leading=13), right_x + pad, ky, right_w - 2 * pad)

# =============== footer =================
c.setStrokeColor(RULE)
c.setLineWidth(0.8)
c.line(M, 0.62 * inch, W - M, 0.62 * inch)
c.setFont("Helvetica", 7.2)
c.setFillColor(FAINT)
c.drawString(M, 0.46 * inch,
             "CAMPUX LLC · Azure cloud consulting and IT training · Lilburn (Atlanta), GA")
c.drawRightString(W - M, 0.46 * inch, f"{SITE} · {EMAIL} · {PHONE}")

c.save()
print(f"Wrote {OUTPUT_PATH}")
