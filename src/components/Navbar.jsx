import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile, nav } from '../data/portfolio'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  const link = (n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} aria-current={active === n.toLowerCase() ? 'true' : undefined}
    className={`rounded-full px-3 py-1.5 text-sm font-bold transition hover:bg-lime ${active === n.toLowerCase() ? 'bg-lime' : ''}`}>{n}</a>
  const dl = <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-bg transition hover:scale-105 active:scale-95"><Download size={16} aria-hidden="true" />Download Resume</a>
  return <header className="sticky top-0 z-40 border-b border-line bg-bg">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="#home" className="rounded-full bg-lime px-3 py-1 text-lg font-extrabold" aria-label={`${profile.name}, back to top`}>{profile.initials}</a>
      <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">{nav.map(link)}</nav>
      <div className="hidden lg:block">{dl}</div>
      <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-line px-4 pb-4 pt-2 lg:hidden">{nav.map(link)}<div className="pt-2">{dl}</div></nav>}
  </header>
}
