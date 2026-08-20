"use client";

import { useEffect } from "react";

// Progressively enhances the ported static contact form (`form[data-contact-form]`).
// The form markup comes verbatim from the finished design; this wires it to the
// Cloudflare Worker at /api/contact, prefills ?need / ?sector, validates required
// fields, and renders success/error inline (no alert()).
export default function ContactEnhancer({
  source = "contact",
}: {
  source?: "home" | "contact";
}) {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>(
      "form[data-contact-form]"
    );
    if (!form) return;

    const select = (name: string) =>
      form.querySelector<HTMLSelectElement>(`select[name="${name}"]`);

    // Prefill from query params by matching option text.
    const q = new URLSearchParams(window.location.search);
    const setOption = (el: HTMLSelectElement | null, value: string | null) => {
      if (!el || !value) return;
      const norm = (s: string) => s.replace(/\s+/g, " ").trim().toLowerCase();
      for (const opt of Array.from(el.options)) {
        if (norm(opt.text) === norm(value)) {
          opt.selected = true;
          return;
        }
      }
    };
    setOption(select("need"), q.get("need"));
    setOption(select("sector"), q.get("sector"));

    // Status line
    let statusEl = form.querySelector<HTMLParagraphElement>(".form-status");
    if (!statusEl) {
      statusEl = document.createElement("p");
      statusEl.className = "form-status small";
      statusEl.setAttribute("role", "status");
      statusEl.style.margin = "0";
      form.querySelector(".factions")?.appendChild(statusEl);
    }

    let sending = false;
    const onSubmit = async (e: Event) => {
      e.preventDefault();
      if (sending) return;

      const field = (name: string) =>
        form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="${name}"]`
        );

      // Required: name, org, email, message
      const missingLabels: Record<string, string> = {
        name: "your name",
        org: "your organization",
        email: "your email",
        message: "a short note about your environment",
      };
      for (const key of ["name", "org", "email", "message"]) {
        const el = field(key);
        if (!el || !el.value.trim()) {
          el?.focus();
          if (el) el.style.borderColor = "#B23A2E";
          if (statusEl) {
            statusEl.style.color = "#B23A2E";
            statusEl.textContent = `Please add ${missingLabels[key]} before sending.`;
          }
          return;
        }
      }

      const val = (name: string) => field(name)?.value.trim() || "";
      const messageParts = [
        val("message"),
        "",
        val("phone") ? `Phone: ${val("phone")}` : "",
        val("sector") || select("sector")?.value
          ? `Sector: ${val("sector") || select("sector")?.value}`
          : "",
        select("need")?.value ? `Looking for: ${select("need")?.value}` : "",
      ].filter(Boolean);

      const payload = {
        source,
        name: val("name"),
        email: val("email"),
        company: val("org"),
        message: messageParts.join("\n"),
        company_url: val("_gotcha"),
      };

      sending = true;
      const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const btnText = btn?.textContent;
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }
      if (statusEl) {
        statusEl.textContent = "";
        statusEl.style.color = "";
      }

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("send_failed");
        form.reset();
        if (statusEl) {
          statusEl.style.color = "var(--blue-deep)";
          statusEl.textContent =
            "Message received. A person replies within one business day.";
        }
      } catch {
        if (statusEl) {
          statusEl.style.color = "#B23A2E";
          statusEl.innerHTML =
            'Something went wrong. Please email <a href="mailto:victor@campux.co">victor@campux.co</a> directly.';
        }
      } finally {
        sending = false;
        if (btn) {
          btn.disabled = false;
          if (btnText) btn.textContent = btnText;
        }
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, [source]);

  return null;
}
