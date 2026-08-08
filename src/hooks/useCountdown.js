import { useEffect, useState } from 'react'

/**
 * Ticks down to a target ISO date string.
 * Returns { days, hours, minutes, seconds, isPast }
 */
export function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime()

  const getRemaining = () => {
    const now = Date.now()
    const diff = target - now
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds, isPast: false }
  }

  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemaining())
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetISO])

  return remaining
}
