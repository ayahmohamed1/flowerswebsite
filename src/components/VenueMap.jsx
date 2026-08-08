import { MapPin } from 'lucide-react'
import config from '../config'
import Reveal from './Reveal'

export default function VenueMap() {
  const { venue, event, schedule } = config

  return (
    <section className="embossed-paper relative overflow-hidden px-6 py-24 sm:py-32">
      <Reveal className="relative mx-auto max-w-lg text-center">
        <p className="label-caps text-xs text-gold-ink">Join us at</p>
        <div className="gold-rule mx-auto my-5 w-10" />

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-light bg-white/70 shadow-pearl-sm">
          <MapPin size={22} strokeWidth={1.25} className="text-gold-ink" />
        </div>

        <h2 className="mt-6 font-display text-3xl text-ink sm:text-4xl">{venue.name}</h2>
        <p className="mt-2 text-sm text-ink-soft">{venue.addressLine1}</p>
        <p className="text-sm text-ink-soft">{venue.addressLine2}</p>
        <p className="mt-3 text-xs uppercase tracking-widest text-gold-ink">
          {event.dayLabel}, {event.dateLabel} · {event.timeLabel}
        </p>

        {schedule?.length > 0 && (
          <div className="mx-auto mt-10 max-w-xs space-y-4 text-left">
            {schedule.map((item) => (
              <div key={item.title} className="flex items-start gap-4 border-b border-gold-light/30 pb-4 last:border-none">
                <span className="w-16 shrink-0 pt-0.5 text-xs uppercase tracking-wide text-gold-ink">{item.time}</span>
                <div>
                  <p className="font-display text-base text-ink">{item.title}</p>
                  <p className="text-xs text-ink-soft">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* الزر الجديد الذي يحل محل الخريطة */}
        <div className="mt-12 flex justify-center">
          <a
            href={venue.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative inline-flex items-center gap-2 overflow-hidden 
              rounded-full border border-[#B1935C] bg-transparent 
              px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-[#B1935C] 
              transition-all duration-300 ease-in-out
              hover:bg-[#B1935C] hover:text-white hover:shadow-lg
            `}
          >
            <MapPin size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>click here for location</span>
          </a>
        </div>

      </Reveal>
    </section>
  )
}