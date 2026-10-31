import Reveal from './Reveal'
const hl = (t) => <span className="rounded-lg bg-lime px-2">{t}</span>
export default function Intro() {
  return <section aria-labelledby="intro-h" className="mx-auto max-w-4xl px-4 py-16 text-center">
    <Reveal>
      <h2 id="intro-h" className="text-3xl font-extrabold leading-tight sm:text-5xl">Building Smart Solutions Through {hl('Code')}, {hl('AI')} &amp; {hl('Technology')}.</h2>
      <p className="mx-auto mt-5 max-w-2xl text-mute">From passwordless login and ML-based URL threat detection to IoT dashboards and full-stack apps, I build projects that combine Python, databases and cloud tools, backed by hands-on IT support experience.</p>
      <a href="#projects" className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-bold text-bg transition hover:scale-105 active:scale-95">View Projects</a>
    </Reveal></section>
}
