# Wedding Invitation — React Template

A premium, mobile-first wedding invitation site: click-to-open envelope
with a wax seal, background music, a fluid glass invitation card, a
pearl calendar + live countdown, and an embedded venue map.

## 1. Setup

```bash
npm create vite@latest wedding-invite -- --template react
cd wedding-invite
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react
npx tailwindcss init -p
```

Then copy every file from this project over the freshly scaffolded one
(overwrite `tailwind.config.js`, `postcss.config.js`, `index.html`,
and everything under `src/`).

```bash
npm run dev
```

## 2. Customizing for a new client

Edit **`src/config.js`** only. It contains:

- Couple names + initials (shown in the wax seal)
- Wedding date/time (drives the countdown + calendar)
- Venue name, address, and Google Maps embed URL
- Background music file path
- Optional event schedule and RSVP link

No component files need to change for a standard re-skin.

## 3. Adding the background music

Drop an MP3 into `public/music/` (e.g. `public/music/song.mp3`) and
point `config.music.src` at `/music/song.mp3`. The track starts the
instant the guest taps the wax seal — this satisfies browser autoplay
policies because it's triggered by a real user gesture. The floating
button bottom-right lets guests pause/resume at any time.

## 4. Swapping the map

`config.venue.mapEmbedUrl` accepts any standard Google Maps "Embed a
map" iframe `src` URL (Google Maps → Share → Embed a map → copy the
`src` attribute).

## 5. Structure

```
src/
  config.js              ← all client data lives here
  App.jsx                ← envelope → invitation flow
  context/AudioContext.jsx
  hooks/useCountdown.js
  utils/calendar.js
  components/
    Envelope.jsx          Hero: wax seal + opening animation
    MusicController.jsx   Floating glass play/pause button
    InvitationCard.jsx    Names + event summary (glass card)
    CalendarCountdown.jsx Pearl calendar + live countdown
    CountdownTimer.jsx    Days/Hours/Min/Sec ticker
    VenueMap.jsx           Address + schedule + Google Map
    Footer.jsx
    Reveal.jsx             Scroll-reveal wrapper
```

## 6. Design tokens

Colors, fonts, shadows, and background gradients are all defined in
`tailwind.config.js` under `theme.extend` — adjust the `gold`, `sand`,
`cream`, and `blush` palette there to retint the whole site at once.
