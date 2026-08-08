import config from '../config'

export default function Footer() {
  return (
    <footer className="bg-cream px-6 pb-28 pt-10 text-center">
      <div className="gold-rule mx-auto mb-6 w-10" />
      <p className="font-script text-2xl text-gold">{config.couple.initials}</p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-ink-faint">
        {config.studio.name} · {config.studio.tagline}
      </p>
    </footer>
  )
}
