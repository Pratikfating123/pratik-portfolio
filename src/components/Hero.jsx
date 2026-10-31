import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import ProfileImage from './ProfileImage'
import { profile } from '../data/portfolio'
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 70])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  return <section id="home" ref={ref} aria-label="Introduction" className="relative overflow-hidden">
    <motion.div aria-hidden="true" style={{ y: y1 }} className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-plum opacity-25 blur-3xl" />
    <motion.div aria-hidden="true" style={{ y: y2 }} className="absolute bottom-0 right-40 h-64 w-64 rounded-full bg-ember opacity-25 blur-3xl" />
    <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-lime opacity-40 blur-3xl" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
      <motion.div variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }} initial="hidden" animate="show">
        <motion.p variants={item} className="pill tracking-widest">HELLO, I’M</motion.p>
        <motion.h1 variants={item} className="mt-3 break-words text-4xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl">{profile.name}</motion.h1>
        <motion.p variants={item} className="mt-3 text-2xl font-extrabold sm:text-4xl"><span className="bg-lime px-2">Full-Stack</span> Developer</motion.p>
        <motion.p variants={item} className="mt-2 text-lg font-bold text-mute sm:text-xl">Building Intelligent Digital Experiences</motion.p>
        <motion.p variants={item} className="mt-4 max-w-xl text-sm leading-relaxed text-mute sm:text-base">{profile.intro}</motion.p>
        <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
          <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-bg">View My Projects <ArrowUpRight size={18} aria-hidden="true" /></motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lime px-6 py-3 font-bold"><MessageCircle size={18} aria-hidden="true" />Let’s Connect</motion.a>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <span aria-hidden="true" className="absolute -left-3 top-6 h-16 w-16 rounded-2xl bg-lime" />
        <span aria-hidden="true" className="absolute -right-2 bottom-8 h-12 w-12 rounded-full bg-ink" />
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative rounded-full border-4 border-ink shadow-xl">
          <ProfileImage eager />
        </motion.div>
      </motion.div>
    </div>
  </section>
}
