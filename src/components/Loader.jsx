import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
export default function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => { const t = setTimeout(() => setShow(false), 900); return () => clearTimeout(t) }, [])
  return <AnimatePresence>{show && <motion.div key="l" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} aria-hidden="true" className="fixed inset-0 z-[60] grid place-items-center bg-bg">
    <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full bg-lime px-6 py-3 text-4xl font-extrabold">{profile.initials}</motion.span></motion.div>}</AnimatePresence>
}
