import { motion } from 'framer-motion'
import { Code2, LayoutTemplate, Server, Database, ShieldCheck, Cloud, Wrench } from 'lucide-react'
import { techGroups } from '../data/portfolio'
const icons = { code: Code2, layout: LayoutTemplate, server: Server, db: Database, shield: ShieldCheck, cloud: Cloud, tool: Wrench }
const box = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const it = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }
export default function TechShowcase() {
  return <motion.div variants={box} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} className="grid gap-3 sm:grid-cols-2">
    {techGroups.map((g) => { const I = icons[g.icon]; return <motion.div key={g.group} variants={it} whileHover={{ y: -3 }} className="card p-4">
      <h3 className="mb-2 flex items-center gap-2 font-extrabold"><span className="grid h-8 w-8 place-items-center rounded-full bg-lime"><I size={16} aria-hidden="true" /></span>{g.group}</h3>
      <ul className="flex flex-wrap gap-1.5">{g.items.map((i) => <li key={i} className="tag">{i}</li>)}</ul></motion.div> })}
  </motion.div>
}
