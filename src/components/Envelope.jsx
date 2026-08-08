import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import config from '../config'
import { useAudio } from '../context/AudioContext'

export default function Envelope({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false)
  const { play } = useAudio()
  
  const art = config.envelopeAssets
  
  const openEnvelopeImage = '/assets/env.png' 
  const closedEnvelopeImage = '/assets/en.png' 
  
  const { couple, event } = config

  const handleOpen = () => {
    if (isOpen) return
    setIsOpen(true)
    if (config.music.autoplayOnOpen) play()
    setTimeout(() => onOpened?.(), 2200)
  }

  return (
    <div
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#FDFBF7] bg-cover bg-center px-6"
      style={{ backgroundImage: `url('${art.backgroundTexture}')` }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#FDFBF7]/40 backdrop-blur-sm" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <p className="label-caps mb-2 text-xs text-[#B1935C] drop-shadow-sm uppercase tracking-widest">
          {isOpen ? 'The invitation' : 'You are invited'}
        </p>
        <div className="gold-rule mb-10 w-16" style={{ backgroundColor: '#B1935C' }} />

        {/* المسرح الرئيسي للمشهد */}
        <div className="relative flex items-center justify-center w-full min-h-[450px]">
          
          {/* ========================================================= */}
          {/* 1. الظرف المغلق */}
          {/* ========================================================= */}
          <motion.div
            className="absolute flex items-center justify-center w-full"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: isOpen ? 0 : 1, 
              scale: isOpen ? 1.05 : 1, 
              pointerEvents: isOpen ? 'none' : 'auto' 
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative w-full max-w-[360px]">
              <img
                src={closedEnvelopeImage}
                alt="Closed Envelope"
                draggable={false}
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: 'darken' }}
              />
              
              {/* 
                زرار الضغط الشامل: يغطي مساحة الظرف بالكامل 
                بحيث يفتح بمجرد النقر في أي جزء عليه
              */}
              <motion.button
                type="button"
                onClick={handleOpen}
                aria-label="Open the invitation"
                className="absolute inset-0 w-full h-full cursor-pointer z-20 bg-transparent border-none outline-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </motion.div>


          {/* ========================================================= */}
          {/* 2. الظرف المفتوح والبطاقة */}
          {/* ========================================================= */}
          <motion.div
            className="absolute flex items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              scale: isOpen ? 1 : 0.95, 
              pointerEvents: isOpen ? 'auto' : 'none' 
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: isOpen ? 0.2 : 0 }}
          >
            <div className="relative w-full max-w-[380px]" style={{ aspectRatio: '1 / 1.1' }}>
              <img
                src={openEnvelopeImage}
                alt="Open Envelope"
                aria-hidden
                draggable={false}
                className="absolute inset-0 z-10 h-full w-full select-none object-contain drop-shadow-2xl"
              />

              {/* بطاقة الدعوة */}
              <motion.div
                className="absolute z-20 flex flex-col items-center justify-center bg-white shadow-md rounded-sm px-2 py-4"
                style={{
                  left: '20%',
                  right: '20%',
                  top: '38%',
                  bottom: '22%',
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: isOpen ? 0.6 : 0 }}
              >
                <p className="label-caps text-[7px] text-[#B1935C] uppercase tracking-[0.25em]">
                  {event.badge || "SAVE THE DATE"}
                </p>
                <p className="mt-3 font-display text-xl sm:text-2xl leading-tight text-[#3A342C]">
                  {couple.groomFirstName}
                  <span className="mx-1.5 font-script text-lg sm:text-xl text-[#B1935C]">&amp;</span>
                  {couple.brideFirstName}
                </p>
                <p className="mx-auto mt-2 text-center max-w-[90%] text-[8px] sm:text-[9px] italic leading-relaxed text-[#5A544C]">
                  {event.announcement || "Together with joy in our hearts, we announce our engagement"}
                </p>
                <p className="mt-3 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#B1935C]">
                  {event.dateLabel || "29 DECEMBER 2025"}
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.p
          className="mt-8 text-xs uppercase tracking-[0.2em] text-[#B1935C]/70"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          tap anywhere on the envelope to open
        </motion.p>
      </div>
    </div>
  )
}