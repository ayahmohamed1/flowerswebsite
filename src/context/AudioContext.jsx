import { createContext, useContext, useRef, useState, useCallback } from 'react'
import config from '../config'

const AudioCtx = createContext(null)

export function AudioProvider({ children }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const play = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    el.play()
      .then(() => {
        setIsPlaying(true)
        setHasStarted(true)
      })
      .catch(() => {
        // Autoplay can still be blocked in rare cases — controller lets the guest retry manually
        setIsPlaying(false)
      })
  }, [])

  const pause = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    el.pause()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback(() => {
    if (isPlaying) pause()
    else play()
  }, [isPlaying, play, pause])

  return (
    <AudioCtx.Provider value={{ isPlaying, hasStarted, play, pause, toggle }}>
      <audio ref={audioRef} src={config.music.src} loop={config.music.loop} preload="auto" />
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio must be used within an AudioProvider')
  return ctx
}
