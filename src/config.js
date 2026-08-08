/**
 * ─────────────────────────────────────────────────────────────
 *  WEDDING INVITATION — SITE CONFIG
 * ─────────────────────────────────────────────────────────────
 *  Every piece of client-specific content lives in this single
 *  file. To re-skin this template for a new couple, you should
 *  only ever need to edit the values below — no component code
 *  needs to change.
 *
 *  Swap `/music/song.mp3` and any asset paths for files placed
 *  in the `public/` folder.
 * ─────────────────────────────────────────────────────────────
 */

const config = {
  // ── Couple ──────────────────────────────────────────────
  couple: {
    brideFirstName: 'Anaya',
    brideFullName: 'Anaya Khan',
    groomFirstName: 'Zayan',
    groomFullName: 'Zayan Ahmed',
    // Shown inside the wax seal on the envelope, e.g. "Z & A"
    initials: 'Z & A',
    // Small monogram glyph shown above the initials (optional, keep short)
    monogram: '❦',
  },

  // ── Event ───────────────────────────────────────────────
  event: {
    eyebrow: 'Together with our families',
    // ISO date used by the countdown + calendar — keep the time zone in mind
    weddingDateISO: '2026-12-29T18:30:00',
    // Human-friendly strings shown around the site
    dayLabel: 'Sunday',
    dateLabel: '29 December 2025',
    timeLabel: '6:30 PM',
    occasion: 'We joyfully invite you to celebrate the Barat of our beloved',
    blessing: 'A joyful life together, forever',
    // Shown only on the envelope's reveal card (engagement-specific wording)
    badge: 'Save the Date',
    announcement: 'Together with joy in our hearts, we announce our engagement',
  },

  // ── Envelope artwork ────────────────────────────────────
  // Drop your high-quality 3D-rendered PNGs (transparent where needed)
  // into /public/assets and point these at them. Nothing else in
  // Envelope.jsx needs to change when you swap art direction.
  envelopeAssets: {
    // Full-bleed embossed floral / pearlescent backdrop behind everything
    backgroundTexture: '/assets/bg-texture.jpg',
    // The open envelope's inside/back panel (sits behind the card)
    envelopeBack: '/assets/envelope-back.png',
    // Transparent PNG of the bottom pocket — sits ON TOP of the card
    // to hide its lower half while the card is tucked inside
    envelopePocket: '/assets/envelope-pocket.png',
    // Transparent PNG of the top flap — this is the piece Framer Motion
    // rotates open. Art should be drawn as if hinged at its top edge.
    envelopeFlap: '/assets/envelope-flap.png',
    // Realistic wax seal, couple's initials are overlaid on top of this
    waxSeal: '/assets/wax-seal.png',
  },

  // ── Venue ───────────────────────────────────────────────
  venue: {
    name: 'The Royal Heritage',
    addressLine1: 'Canal Road, Lahore',
    addressLine2: 'Punjab, Pakistan',
    // Any standard Google Maps embed URL works here
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.813!2d74.3436!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzExLjAiTiA3NMKwMjAnMzcuMCJF!5e0!3m2!1sen!2s!4v1700000000000',
    mapLinkUrl: 'https://maps.google.com/?q=Canal+Road+Lahore+Punjab+Pakistan',
  },

  // ── Program (optional — shown if provided) ─────────────
  schedule: [
    { time: '5:30 PM', title: 'Guest Arrival', note: 'Welcome drinks & seating' },
    { time: '6:30 PM', title: 'Barat Ceremony', note: 'Main hall, ground floor' },
    { time: '8:00 PM', title: 'Dinner & Celebration', note: 'Garden terrace' },
  ],

  // ── Branding footer (agency credit — optional) ─────────
  studio: {
    name: 'Moment Maker',
    tagline: 'Crafting moments worth remembering',
  },

  // ── Music ───────────────────────────────────────────────
  music: {
    // Place the audio file inside /public/music and reference it from root
    src: '/music/song.mp3',
    title: 'Our Song',
    // Starts automatically the moment the envelope seal is clicked
    autoplayOnOpen: true,
    loop: true,
    defaultVolume: 0.5,
  },

  // ── RSVP (optional link/button — wire up to your own form/service) ──
  rsvp: {
    enabled: true,
    label: 'RSVP',
    href: 'mailto:rsvp@example.com?subject=Wedding%20RSVP',
  },
}

export default config
