import { ticker } from '../data/portfolio'
export default function Ticker() {
  const row = (hidden) => <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
    {ticker.map((t) => <li key={t} className="flex items-center whitespace-nowrap text-sm font-extrabold uppercase tracking-wider text-bg sm:text-base">
      <span className="px-5 py-3">{t}</span><span className="text-lime" aria-hidden="true">✦</span></li>)}</ul>
  return <div className="ticker-wrap overflow-hidden bg-ink" role="region" aria-label="Technologies I work with">
    <div className="ticker">{row(false)}{row(true)}</div></div>
}
