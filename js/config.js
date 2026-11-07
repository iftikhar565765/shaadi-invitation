/* ═══════════════════════════════════════════════════════════════
   AMORIS · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "amoris",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Elowen",                    // SAMPLE
    partnerTwo: "Finnian",                   // SAMPLE
    initials:  "E · F",                      // SAMPLE — used on seals & monograms
    namesLine: "Elowen & Finnian"            // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
           The sample below = 19 June 2027, 4:30 PM, GMT-4 (EDT).
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-06-19T16:30:00-04:00",                                        // EDIT
    endIso: "2027-06-19T23:00:00-04:00",                                     // EDIT — end of the celebration
    display: "Saturday, 19 June 2027 · half past four in the afternoon",      // EDIT
    zoneLabel: "",                                                           // EDIT — optional note for guests abroad, e.g. "EDT"
    words: "Saturday · The Nineteenth of June · Two Thousand Twenty-Seven",  // EDIT
    numerals: "19 · 06 · 2027",                                              // EDIT
    eventTitle: "Elowen & Finnian — Wedding"                                 // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Rose Garden at Evermore Manor",          // SAMPLE
    address: "Evermore Manor, Hudson Valley, New York", // SAMPLE
    mapsQuery: "",                               // optional Maps search override
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Elowen & Finnian · 19 June 2027 — Wedding Invitation",
    pageDescription: "Elowen and Finnian request the pleasure of your company in the rose gardens of Evermore Manor — ribbons, roses and one perfect afternoon, on Saturday the nineteenth of June 2027. Open your invitation.",
    socialTitle: "Elowen & Finnian — An Invitation · 19.06.2027",
    socialDescription: "Roses, ribbons and a happily ever after — you are cordially invited.",
    navStory: "Story",
    navDetails: "Details",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Details",
    menuPalette: "The Palette",
    menuWeddingDay: "The Wedding Day",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Note",
    openingEyebrow: "You are cordially invited to the wedding of",
    openingHint: "Touch the doors to enter",
    openButton: "Enter the Celebration",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    invitationEyebrow: "Together with their families",
    invitationLead: "request the honour of your presence at the celebration of their marriage — an afternoon of roses, ribbons and dancing until the stars come out.",
    invitationVenueSuffix: "· Hudson Valley",
    storyKicker: "№ 02 · Their Story",
    storyTitle: "Once upon",
    storyTitleScript: "a time",
    storyParagraphOne: "Every love story deserves a beautiful beginning, and ours began quietly — a garden full of roses, one shared swing, and a first conversation that outlasted the rain.",
    storyParagraphTwo: "Six years, two cities and a thousand small kindnesses later, we are writing our next chapter in the oldest language we know — love. Nothing would mean more than to have you beside us when we do.",
    storyQuote: "Whatever our souls are made of, his and mine are the same.",
    storyQuoteLabel: "— Emily Brontë, read aloud beneath the roses on our first walk home",
    storyNote: "chapter the first, and all the rest",
    storyNoteCredit: "— scribbled in the margin of a storybook, on our first trip",
    storyCaptionOne: "the beginning",
    storyCaptionTwo: "always, us",
    storyCaptionFour: "the long path",
    storyAside: "and they lived",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "an afternoon of roses & first dances",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "№ 04 · The Particulars",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Details",
    detailsIntro: "The day, at a glance.",
    ceremonyLabel: "The Ceremony",
    ceremonyTime: "Half past four",
    ceremonyNote: "Vows in the rose garden as the string quartet plays.",
    receptionLabel: "The Reception",
    receptionTime: "Eight o'clock",
    receptionNote: "Dinner and dancing in the orangery, until the last candle gutters.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Garden formal",
    particularsAttireNote: "Afternoon dress with a flourish of rose gold and blush is most welcome.",
    particularsCarriagesLabel: "The Carriages",
    particularsCarriagesTime: "At one o'clock",
    particularsCarriagesNote: "The last candle dims as the nightingales begin.",
    paletteKicker: "№ 05 · The Colours of the Day",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "Blush petal and dusty rose, ivory silk and rose gold, a whisper of sage — the colours of the celebration.",
    dressCodeLabel: "Attire · Evening Dress",
    dressCodeTitle: "Garden formal",
    dressCodeNote: "Blush, ivory and a flourish of rose gold are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "№ 06 · The Celebration",
    weddingDayTitleFirst: "The Wedding",
    weddingDayTitleSecond: "Day",
    venueKicker: "№ 07 · The Place",
    venueDescription: "A rose-crowned garden estate beyond the city — swings beneath the old oaks, ribbon-lined paths through the roses, and a candlelit orangery glowing with wishes for one unforgettable afternoon.",
    venueCeremonyLabel: "Ceremony",
    venueCeremonyText: "in the rose garden, as the quartet plays",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & dancing in the orangery",
    mapButton: "View Location",
    rsvpKicker: "№ 08 · Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Eleanor Whitmore",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Allergies, intolerances, or dishes to avoid",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, well wishes…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "№ 09 · The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "“I do”",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. We cannot wait to celebrate with you beneath the roses and the evening stars — an afternoon straight out of a love story.",
    footerTagline: "A rose, a vow, a happily ever after."
  },

  palette: [
    { name: "Blush Petal",   color: "#E8B9C4" },
    { name: "Dusty Rose",    color: "#CDA3B0" },
    { name: "Rose Gold",     color: "#C18A70" },
    { name: "Sage Leaf",     color: "#B0BAA6" },
    { name: "Ivory Silk",    color: "#FFFCFA" }
  ],
  theme: "twilight",
  themeColors: {},
  fonts: {
    editorial: "prata",
    display: "cormorant",
    script: "greatVibes",
    hand: "shadowsIntoLight",
    body: "jost"
  },

  /* ── Wedding-day moments — SAMPLE words for the wedding programme.
     Use one short word per entry; an empty list hides the section. */
  moments: ["Gathering", "The Vows", "The Feast", "Toasts", "The First Dance", "Roses & Ribbons", "Carriages"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 2,
    deadline: "the first of May, 2027"             // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The exact hour is still being written between the pages — see the details below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
