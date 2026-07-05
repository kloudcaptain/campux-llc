'use client'

import { useState } from 'react'

const serif = "var(--font-dm-serif), Georgia, serif"
const fieldBase = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '13px 16px', fontSize: 15, color: 'white', fontFamily: 'inherit', outline: 'none' } as const
const labelBase = { fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.55)' }

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      source: 'contact',
      firstName: String(data.get('firstName') || ''),
      lastName: String(data.get('lastName') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      message: String(data.get('message') || ''),
      urgency: String(data.get('urgency') || ''),
      company_url: String(data.get('company_url') || ''),
    }

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        setStatus('error')
        return
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 12, padding: 48, textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#4ade80" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <p style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: 'white', marginBottom: 12, letterSpacing: '-0.01em' }}>Message received.</p>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>We will respond within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={labelBase}>First name</label>
          <input name="firstName" type="text" required style={fieldBase} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={labelBase}>Last name</label>
          <input name="lastName" type="text" required style={fieldBase} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={labelBase}>Work email</label>
        <input name="email" type="email" required style={fieldBase} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={labelBase}>Company</label>
        <input name="company" type="text" style={fieldBase} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={labelBase}>What are you running?</label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Describe your environment — on-prem, cloud, hybrid, compliance obligations, team size, what is keeping you up at night."
          style={{ ...fieldBase, resize: 'vertical' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={labelBase}>How urgent is this?</label>
        <select name="urgency" style={{ ...fieldBase, background: 'rgba(10,6,14,0.95)', color: 'rgba(255,255,255,0.8)', appearance: 'none' }}>
          <option value="">Select one</option>
          <option value="urgent">Something is broken right now</option>
          <option value="weeks">We need to act within weeks</option>
          <option value="planning">We are planning ahead, not on fire</option>
          <option value="exploring">Early stage, just exploring</option>
        </select>
      </div>

      {status === 'error' && (
        <p role="alert" style={{ fontSize: 14, color: '#ff8a65', margin: 0 }}>
          Something went wrong sending the message. Please email <a href="mailto:victor@campux.co" style={{ color: '#ff8a65', textDecoration: 'underline' }}>victor@campux.co</a> directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{ background: 'white', color: '#111', border: 'none', padding: '16px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer', fontFamily: 'inherit', letterSpacing: '-0.01em', alignSelf: 'flex-start', opacity: status === 'sending' ? 0.6 : 1 }}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
