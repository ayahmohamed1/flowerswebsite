import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AudioProvider } from './context/AudioContext'
import Envelope from './components/Envelope'
import MusicController from './components/MusicController'
import InvitationCard from './components/InvitationCard'
import CalendarCountdown from './components/CalendarCountdown'
import VenueMap from './components/VenueMap'
import Footer from './components/Footer'

export default function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <AudioProvider>
      <div className="min-h-screen bg-cream">
        <AnimatePresence mode="wait">
          {!isOpened && (
            <motion.div
              key="envelope"
              exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
              className="fixed inset-0 z-50"
            >
              <Envelope onOpened={() => setIsOpened(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {isOpened && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <InvitationCard />
            <CalendarCountdown />
            <VenueMap />
            <Footer />
          </motion.main>
        )}

        <MusicController visible={isOpened} />
      </div>
    </AudioProvider>
  )
}
