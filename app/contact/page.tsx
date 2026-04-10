"use client"

import React, { useState } from "react"
import { Mail, Clock, ArrowRight, Check, ShieldCheck } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject || "ThomsUp Enquiry")
    window.open(`mailto:project@thomsup.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s talk about
            <br />
            <span className="text-gray-400">what you&apos;re dealing with</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you have a specific technical problem or you are evaluating providers
            for a future engagement — we respond to every serious enquiry within one business day
            and we review it properly before replying.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#1a1a1a] border border-cyan-500/30 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-cyan-500/15 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-7 h-7 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">Your email client should have opened</h2>
                <p className="text-gray-400 mb-8">
                  If it did not open automatically, send your message directly to{" "}
                  <a href="mailto:project@thomsup.com" className="text-cyan-400 hover:underline">
                    project@thomsup.com
                  </a>
                  . We look forward to hearing from you.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", subject: "", message: "" }) }}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Full name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Work email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select a topic</option>
                    <option value="Infrastructure Modernisation" className="bg-[#1a1a1a]">Infrastructure Modernisation</option>
                    <option value="Security & Compliance" className="bg-[#1a1a1a]">Security & Compliance</option>
                    <option value="Cloud Architecture" className="bg-[#1a1a1a]">Cloud Architecture</option>
                    <option value="DevOps & CI/CD" className="bg-[#1a1a1a]">DevOps & CI/CD</option>
                    <option value="General Enquiry" className="bg-[#1a1a1a]">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about the challenge you are facing, the scale of your environment, and any constraints that are relevant."
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors"
                >
                  Send message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email us directly</h3>
              <p className="text-gray-400 text-sm mb-4">
                For direct correspondence, RFPs, or if you prefer not to use the form.
              </p>
              <a
                href="mailto:project@thomsup.com"
                className="text-cyan-400 text-sm font-medium hover:underline"
              >
                project@thomsup.com
              </a>
            </div>

            <div className="bg-[#1a1a1a] border border-cyan-500/20 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-3">Our commitment</h3>
              <ul className="space-y-2.5">
                {[
                  "No unsolicited follow-up after initial reply",
                  "NDA available before any detailed discussion",
                  "Written summary of approach before engagement",
                  "No lock-in without mutual agreement on scope",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Response time</h3>
              <p className="text-gray-400 text-sm">
                We respond to every serious enquiry within one business day. Complex technical
                questions may take slightly longer as we review them properly before replying.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-7">
              <h3 className="text-white font-semibold mb-4">What to include</h3>
              <ul className="space-y-3">
                {[
                  "The nature of the challenge you are facing",
                  "The approximate scale of your environment",
                  "Any hard constraints on timeline or technology",
                  "Whether you have an existing team or need full delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-7">
              <h3 className="text-white font-semibold mb-4">What happens next</h3>
              <ol className="space-y-4">
                {[
                  { step: "1", text: "We review your message and confirm receipt within one business day." },
                  { step: "2", text: "A technical lead reaches out to clarify scope and arrange a discovery call." },
                  { step: "3", text: "We provide a written summary of our proposed approach before any engagement begins." },
                ].map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-semibold flex items-center justify-center mt-0.5">{step}</span>
                    <span className="text-gray-400 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
