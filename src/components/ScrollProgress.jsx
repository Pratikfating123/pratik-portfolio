import { motion, useScroll, useSpring } from 'framer-motion'
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div aria-hidden="true" style={{ scaleX, transformOrigin: '0 0' }} className="fixed left-0 top-0 z-50 h-1 w-full bg-lime2" />
}
