import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/portfolio'
const { VITE_EMAILJS_SERVICE_ID: SID, VITE_EMAILJS_TEMPLATE_ID: TID, VITE_EMAILJS_PUBLIC_KEY: KEY } = import.meta.env
const configured = Boolean(SID && TID && KEY)
const empty = { name: '', email: '', subject: '', message: '' }
export default function ContactForm() {
  const [v, setV] = useState(empty), [err, setErr] = useState({}), [status, setStatus] = useState('idle')
  const validate = () => {
    const e = {}
    if (!v.name.trim()) e.name = 'Enter your name.'
    if (!v.email.trim()) e.email = 'Enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email, like name@example.com.'
    if (!v.subject.trim()) e.subject = 'Enter a subject.'
    if (!v.message.trim()) e.message = 'Enter a message.'
    return e
  }
  const submit = async (ev) => {
    ev.preventDefault()
    if (status === 'loading') return
    const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    if (!configured) { setStatus('unconfigured'); return }
    setStatus('loading')
    try {
      await emailjs.send(SID, TID, { from_name: v.name, reply_to: v.email, subject: v.subject, message: v.message }, { publicKey: KEY })
      setStatus('success'); setV(empty)
    } catch { setStatus('error') }
  }
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject || 'Portfolio enquiry')}&body=${encodeURIComponent(v.message)}`
  const f = (id, label, area) => {
    const C = area ? 'textarea' : 'input'
    return <div><label htmlFor={id} className="mb-1 block text-sm font-bold">{label}</label>
      <C id={id} name={id} type={area ? undefined : id === 'email' ? 'email' : 'text'} rows={area ? 5 : undefined} value={v[id]} onChange={(e) => setV({ ...v, [id]: e.target.value })}
        aria-invalid={Boolean(err[id])} aria-describedby={err[id] ? `${id}-err` : undefined} className="w-full rounded-xl border border-line bg-white px-3 py-2" />
      {err[id] && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-700">{err[id]}</p>}</div>
  }
  return <form onSubmit={submit} noValidate className="card space-y-3 p-4">
    {f('name', 'Name')}{f('email', 'Email')}{f('subject', 'Subject')}{f('message', 'Message', true)}
    <button disabled={status === 'loading'} className="rounded-full bg-ink px-5 py-2 font-bold text-bg transition hover:scale-105 active:scale-95 disabled:opacity-60">{status === 'loading' ? 'Sending…' : 'Send message'}</button>
    <div aria-live="polite" className="text-sm">
      {status === 'success' && <p className="font-bold text-green-800">Message sent. I’ll reply to your email.</p>}
      {status === 'error' && <p className="text-red-700">The message did not send. Try again, or <a className="underline" href={mailto}>email me directly</a>.</p>}
      {status === 'unconfigured' && <p className="text-red-700">Email delivery is not set up on this site, so nothing was sent. <a className="font-bold underline" href={mailto}>Open your email app instead</a>.</p>}
    </div>
  </form>
}
