import { Heart } from 'lucide-react'
import config from '../config'
import Reveal from './Reveal'
import CountdownTimer from './CountdownTimer'
import { buildMonthGrid } from '../utils/calendar'

export default function CalendarCountdown() {
  const { cells, targetDay, monthName, year, weekdays } = buildMonthGrid(config.event.weddingDateISO)

  return (
    <section className="relative overflow-hidden bg-silk px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-sand/60 blur-3xl" />
      </div>

      <Reveal className="relative mx-auto max-w-md text-center">
        <p className="label-caps text-xs text-gold-ink">Save the date</p>
        <div className="gold-rule mx-auto my-5 w-10" />
        <p className="font-script text-4xl text-gold">{config.couple.monogram}</p>

        <div className="mt-8 rounded-3xl border border-white/70 bg-white/50 p-6 shadow-pearl backdrop-blur-md sm:p-8">
          <p className="font-display text-xl text-ink">
            {monthName} {year}
          </p>

          <div className="mt-6 grid grid-cols-7 gap-y-3">
            {weekdays.map((wd) => (
              <span key={wd} className="text-[10px] uppercase tracking-wider text-ink-faint">
                {wd}
              </span>
            ))}

            {cells.map((day, idx) => {
              const isTarget = day === targetDay
              return (
                <div key={idx} className="relative flex h-9 items-center justify-center">
                  {day && (
                    <>
                      {isTarget && (
                        <Heart
                          className="absolute h-8 w-8 text-gold"
                          strokeWidth={1.25}
                          aria-hidden
                        />
                      )}
                      <span
                        className={
                          isTarget
                            ? 'relative z-10 font-display text-sm font-medium text-gold-ink'
                            : 'relative z-10 text-sm text-ink-soft'
                        }
                      >
                        {day}
                      </span>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          <p className="mt-6 text-xs italic text-ink-soft">{config.event.blessing}</p>
        </div>

        <div className="mt-10">
          <p className="label-caps mb-5 text-xs text-gold-ink">Counting down to forever</p>
          <CountdownTimer targetISO={config.event.weddingDateISO} />
        </div>
      </Reveal>
    </section>
  )
}
