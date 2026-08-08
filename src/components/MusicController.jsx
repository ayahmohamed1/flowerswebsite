import { motion } from 'framer-motion'
import { Music2, Pause } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

/**
 * Fixed, bottom-right glass button that toggles the shared
 * background-music track. Visible once the envelope has been
 * opened (music has started, or the guest is free to start it).
 */
export default function MusicController({ visible = true }) {
  const { isPlaying, toggle } = useAudio()

  if (!visible) return null

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      aria-pressed={isPlaying}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold-light/60 bg-white/40 text-gold-ink shadow-pearl-sm backdrop-blur-md transition-colors hover:bg-white/60"
    >
      <motion.span
        className="absolute inset-0 rounded-full border border-gold-light/40"
        animate={isPlaying ? { scale: [1, 1.35], opacity: [0.5, 0] } : { scale: 1, opacity: 0 }}
        transition={{ duration: 1.8, repeat: isPlaying ? Infinity : 0, ease: 'easeOut' }}
      />
      {isPlaying ? (
        <Pause size={20} strokeWidth={1.5} />
      ) : (
        <Music2 size={20} strokeWidth={1.5} className={isPlaying ? '' : 'animate-shimmer'} />
      )}
    </motion.button>
  )
}
