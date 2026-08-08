import { useCountdown } from '../hooks/useCountdown'

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

export default function CountdownTimer({ targetISO }) {
  const remaining = useCountdown(targetISO)

  if (remaining.isPast) {
    return <p className="text-center font-script text-3xl text-gold-ink">The celebration has begun</p>
  }

  return (
    <div className="flex items-stretch justify-center gap-3 sm:gap-5">
      {UNITS.map((unit, i) => (
        <div key={unit.key} className="flex items-center">
          <div className="flex w-16 flex-col items-center rounded-2xl border border-gold-light/50 bg-white/50 py-3 shadow-pearl-sm backdrop-blur-sm sm:w-20">
            <span className="font-display text-2xl tabular-nums text-ink sm:text-3xl">
              {String(remaining[unit.key]).padStart(2, '0')}
            </span>
            <span className="label-caps mt-1 text-[9px] text-gold-ink">{unit.label}</span>
          </div>
          {i < UNITS.length - 1 && <span className="mx-1.5 pb-4 font-display text-lg text-gold-light sm:mx-2">:</span>}
        </div>
      ))}
    </div>
  )
}
