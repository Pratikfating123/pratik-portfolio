import { MotionConfig, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Intro from './components/Intro'
import ProfileSidebar from './components/ProfileSidebar'
import SectionHeading from './components/SectionHeading'
import Reveal from './components/Reveal'
import ScrollProgress from './components/ScrollProgress'
import Projects from './components/Projects'
import TechShowcase from './components/TechShowcase'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { profile, experience, education } from './data/portfolio'
const Section = ({ id, title, children }) => <section id={id} aria-labelledby={`${id}-h`} className="mb-10"><Reveal><SectionHeading id={`${id}-h`}>{title}</SectionHeading>{children}</Reveal></section>
export default function App() {
  return <MotionConfig reducedMotion="user">
    <Loader /><ScrollProgress /><Navbar />
    <main>
      <Hero /><Ticker /><Intro />
      <div className="mx-auto max-w-6xl px-4 pb-6"><Section id="projects" title="Featured projects"><Projects /></Section></div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[320px_1fr]">
        <ProfileSidebar />
        <div className="min-w-0">
          <Section id="profile" title="Profile"><div className="card space-y-3 p-5 text-sm leading-relaxed">{profile.about.map((t) => <p key={t}>{t}</p>)}</div></Section>
          <Section id="skills" title="Technology & skills"><TechShowcase /></Section>
          <Section id="experience" title="Work experience"><div className="space-y-3">{experience.map((x) => <motion.article key={x.org + x.dates} whileHover={{ y: -2 }} className="card p-5">
            <div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="text-lg font-extrabold">{x.title}</h3><p className="text-sm font-bold">{x.org}</p>{x.note && <p className="text-sm text-mute">{x.note}</p>}</div><span className="pill">{x.dates}</span></div>
            <ul className="ml-4 mt-3 list-disc space-y-1 text-sm text-mute">{x.points.map((p) => <li key={p}>{p}</li>)}</ul></motion.article>)}</div></Section>
          <Section id="education" title="Education"><div className="grid gap-3 sm:grid-cols-2">{education.map((e) => <div key={e.degree} className="card p-4"><span className="pill">{e.years}</span><h3 className="mt-2 font-extrabold">{e.degree}</h3><p className="text-sm text-mute">{e.school}</p>{e.score && <p className="mt-1 text-sm">{e.score}</p>}</div>)}</div></Section>
          <Section id="contact" title="Contact">
            <p className="mb-3 text-sm text-mute">Email <a className="font-bold text-ink underline" href={`mailto:${profile.email}`}>{profile.email}</a> or use the form.</p><ContactForm /></Section>
        </div>
      </div>
    </main>
    <Footer />
  </MotionConfig>
}
