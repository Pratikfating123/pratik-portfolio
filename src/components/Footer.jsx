import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolio'
export default function Footer() {
  return <footer className="mt-10 border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm">
      <div><p className="font-bold">© {new Date().getFullYear()} {profile.name}</p><p className="text-mute">Open to entry-level roles in IT operations, cloud and digital workplace.</p></div>
      <div className="flex items-center gap-3">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:-translate-y-1"><Github /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:-translate-y-1"><Linkedin /></a>
        <a href="#home" className="inline-flex items-center gap-1 rounded-full bg-lime px-3 py-1.5 font-bold"><ArrowUp size={14} aria-hidden="true" />Back to top</a>
      </div>
    </div></footer>
}
