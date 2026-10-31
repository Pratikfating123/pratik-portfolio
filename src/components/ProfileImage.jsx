import { useState } from 'react'
import { profile } from '../data/portfolio'
export default function ProfileImage({ className = '', eager = false }) {
  const [ok, setOk] = useState(true)
  return <div className={`aspect-square overflow-hidden rounded-full bg-card ${className}`}>
    {ok ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="1000" height="1000" loading={eager ? 'eager' : 'lazy'} onError={() => setOk(false)} className="h-full w-full object-cover" />
      : <span className="grid h-full w-full place-items-center text-5xl font-extrabold" role="img" aria-label={`${profile.name} initials`}>{profile.initials}</span>}
  </div>
}
