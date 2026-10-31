import { motion } from 'framer-motion'
export default function SectionHeading({ id, children }) {
  return <div className="mb-4 flex items-center gap-3">
    <h2 id={id} className="text-xl font-extrabold sm:text-2xl">{children}</h2>
    <motion.span aria-hidden="true" className="h-1.5 rounded-full bg-lime" initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
  </div>
}
