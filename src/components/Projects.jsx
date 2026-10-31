import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
const BG = { 'Full-Stack': 'bg-lime', 'AI & Machine Learning': 'bg-plum text-white', Cybersecurity: 'bg-ink text-lime', IoT: 'bg-ember' }
function Card({ p }) {
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  return <motion.article layout whileHover={{ y: -4 }} className="card group flex flex-col overflow-hidden shadow-sm hover:shadow-lg">
    <div aria-hidden="true" className={`relative grid h-32 place-items-center overflow-hidden ${BG[p.categories[0]] || 'bg-lime'}`}>
      <span className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-white/30 transition-transform duration-500 group-hover:scale-125" />
      <span className="relative text-xl font-extrabold transition-transform duration-500 group-hover:scale-110">{p.categories[0]}</span>
    </div>
    <div className="flex flex-1 flex-col p-4">
      <p className="text-xs font-bold uppercase text-mute">{p.categories.join(" · ")}</p>
      <h3 className="mt-1 text-lg font-extrabold leading-snug">{p.title}</h3>
      <p className="mt-1 text-sm">{p.description}</p>
      <p className="mt-2 text-sm text-mute"><strong className="text-ink">Problem:</strong> {p.problem}</p>
      <details className="mt-2 text-sm"><summary className="cursor-pointer font-bold">Key features</summary>
        <ul className="ml-4 mt-1 list-disc space-y-1 text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></details>
      <ul className="mt-3 flex flex-wrap gap-1.5">{p.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
      <div className="mt-auto flex gap-3 pt-4">
        {p.github && <a href={p.github} {...ext} className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-sm font-bold text-bg"><Github size={14} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>}
        {p.live && <a href={p.live} {...ext} className="inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1.5 text-sm font-bold"><ExternalLink size={14} aria-hidden="true" />Live demo</a>}
      </div>
    </div>
  </motion.article>
}
export default function Projects() {
  const cats = useMemo(() => ['All Projects', ...new Set(projects.flatMap((p) => p.categories))], [])
  const [cat, setCat] = useState(cats[0])
  const shown = projects.filter((p) => cat === cats[0] || p.categories.includes(cat))
  return <>
    <div role="group" aria-label="Filter projects" className="mb-4 flex flex-wrap gap-2">
      {cats.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
        className={`rounded-full border border-line px-3 py-1.5 text-sm font-bold transition active:scale-95 ${cat === c ? 'bg-lime' : 'bg-white hover:bg-lime'}`}>{c}</button>)}
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{shown.map((p) => <Card key={p.title} p={p} />)}</div>
  </>
}
