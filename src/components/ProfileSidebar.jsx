import ProfileImage from './ProfileImage'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { profile, education, certifications } from '../data/portfolio'
export default function ProfileSidebar() {
  const row = (Icon, label, href) => <li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex min-w-0 items-center gap-3 py-1.5 text-sm hover:underline">
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-lime"><Icon size={15} aria-hidden="true" /></span><span className="break-all">{label}</span></a></li>
  return <aside aria-label="Profile" className="space-y-6">
    <div className="relative h-40 w-40"><span aria-hidden="true" className="absolute -left-2 -top-2 h-14 w-14 rounded-2xl bg-lime" /><ProfileImage className="relative h-40 w-40" /></div>
    <div>
      <p className="pill mb-3">{profile.headline}</p>
      <p className="text-4xl font-extrabold leading-tight">{profile.name}</p>
      <p className="mt-3 text-sm text-mute">{profile.intro}</p>
    </div>
    <ul className="card p-4">
      {row(Mail, profile.email, `mailto:${profile.email}`)}
      {row(Github, 'github.com/Pratikfating123', profile.github)}
      {row(Linkedin, 'LinkedIn profile', profile.linkedin)}
      {profile.showPhone && row(Phone, profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`)}
      {profile.location && <li className="flex items-center gap-3 py-1.5 text-sm"><span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-lime"><MapPin size={15} aria-hidden="true" /></span>{profile.location}</li>}
    </ul>
    <div className="hidden lg:block">
      <h2 className="mb-2 text-lg font-extrabold">Education</h2>
      <div className="card space-y-3 p-4">{education.slice(0, 2).map((e) => <div key={e.degree}><span className="pill">{e.years}</span><p className="mt-1 text-sm font-bold">{e.degree}</p><p className="text-xs text-mute">{e.school}</p></div>)}</div>
    </div>
    <div>
      <h2 className="mb-2 text-lg font-extrabold">Certifications</h2>
      <ul className="card space-y-2 p-4">{certifications.map((c) => <li key={c.name} className="text-sm font-bold">{c.name}{c.issuer && <span className="block text-xs font-normal text-mute">{c.issuer}</span>}</li>)}</ul>
    </div>
  </aside>
}
