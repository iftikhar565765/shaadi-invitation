/* ═══════════════════════════════════════════════════════════════
   SHAADI · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "shaadi",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Meera",                     // SAMPLE
    partnerTwo: "Aarav",                     // SAMPLE
    initials:  "M · A",                      // SAMPLE — used on seals & monograms
    namesLine: "Meera & Aarav"               // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
           The sample below = 20 November 2027, 8:30 PM, IST.
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-11-20T20:30:00+05:30",                                        // EDIT
    endIso: "2027-11-21T01:00:00+05:30",                                     // EDIT — end of the celebration
    display: "Saturday, 20 November 2027 · half past eight in the evening",   // EDIT
    zoneLabel: "IST",                                                        // EDIT — optional note for guests abroad
    words: "Saturday · The Twentieth of November · Two Thousand Twenty-Seven", // EDIT
    numerals: "20 · 11 · 2027",                                              // EDIT
    eventTitle: "Meera & Aarav — Wedding"                                    // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Peacock Court at Rajwada Palace",     // SAMPLE
    address: "Rajwada Palace, Amber Road, Jaipur, Rajasthan", // SAMPLE
    mapsQuery: "",                               // optional Maps search override
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Meera & Aarav · 20 November 2027 — Indian Wedding Invitation",
    pageDescription: "Meera and Aarav request the honour of your presence at the Peacock Court at Rajwada Palace, Jaipur — three days of haldi, mehndi, music and sacred vows beneath the marigolds, on Saturday the twentieth of November 2027. Open your invitation.",
    socialTitle: "Meera & Aarav — An Invitation · 20.11.2027",
    socialDescription: "Marigolds, mehndi and a happily ever after — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Celebrations",
    menuPalette: "The Palette",
    menuWeddingDay: "The Festivities",
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
    invitationLead: "request the honour of your presence at the celebration of their marriage — three days of haldi, mehndi, music and sacred vows beneath the marigolds.",
    invitationVenueSuffix: "· Jaipur",
    storyKicker: "№ 02 · Their Story",
    storyTitle: "A tale written",
    storyTitleScript: "in the stars",
    storyParagraphOne: "Every great love story deserves a grand beginning, and ours began at a friend's sangeet — a shared plate of jalebis, one borrowed shawl, and a conversation that outlasted the whole playlist.",
    storyParagraphTwo: "Six years, two cities and a thousand cups of chai later, we are writing our next chapter in the oldest language we know — love. Nothing would mean more than to have you beside us when we do.",
    storyQuote: "Where there is love, there is life.",
    storyQuoteLabel: "— Mahatma Gandhi, a line we return to again and again",
    storyNote: "chapter the first, and all the rest",
    storyNoteCredit: "— scribbled on a train ticket from Jaipur to Udaipur",
    storyCaptionOne: "the first namaste",
    storyCaptionTwo: "the sangeet spark",
    storyCaptionFour: "the seven steps",
    storyAside: "and they lived",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "three days of colour, song & sacred vows",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "№ 04 · The Celebrations",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Events",
    detailsIntro: "Three days of festivity, at a glance.",
    haldiLabel: "The Haldi",
    haldiTime: "Saturday, eleven in the morning",
    haldiNote: "A golden bath of turmeric, songs and blessings in the garden courtyard.",
    mehndiLabel: "The Mehndi",
    mehndiTime: "Friday, four in the afternoon",
    mehndiNote: "Henna, dholak songs and dance as the bride's hands are adorned.",
    ceremonyLabel: "The Sangeet Night",
    ceremonyTime: "Friday, half past seven",
    ceremonyNote: "An evening of music and family performances — bring your dancing shoes.",
    receptionLabel: "The Pheras & Varmala",
    receptionTime: "Saturday, half past eight",
    receptionNote: "Seven vows around the sacred fire within the mandap, as the shehnai plays.",
    feastLabel: "The Reception",
    feastTime: "Sunday, seven in the evening",
    feastNote: "A grand feast, the first dance and celebrations in the durbar hall.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Indian festive",
    particularsAttireNote: "Lehengas, sherwanis and jewel tones are most welcome — bright and joyous.",
    particularsCarriagesLabel: "The Carriages",
    particularsCarriagesTime: "At midnight",
    particularsCarriagesNote: "The last diya dims as the dhol falls quiet.",
    paletteKicker: "№ 05 · The Colours of the Day",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "Marigold gold and sindoor red, rani pink and peacock emerald, zari shimmer on sandalwood ivory — the colours of the celebration.",
    dressCodeLabel: "Attire · Indian Festive",
    dressCodeTitle: "Bright & joyous",
    dressCodeNote: "Lehengas, sherwanis, sarees and jewel tones are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "№ 06 · The Celebrations",
    weddingDayTitleFirst: "The wedding",
    weddingDayTitleSecond: "festivities",
    venueKicker: "№ 07 · The Place",
    venueDescription: "A palace court carved in marble and gold — marigold torans over the jharokhas, a mandap dressed in jasmine and roses, and courtyards glowing with the light of a thousand diyas.",
    venueCeremonyLabel: "Ceremony",
    venueCeremonyText: "in the mandap, as the shehnai plays",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & dancing in the durbar courtyard",
    mapButton: "View Location",
    rsvpKicker: "№ 08 · Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Kavya Sharma",
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
    rsvpDietaryPlaceholder: "Vegetarian, Jain, vegan, allergies…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, blessings…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "№ 09 · The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "the first phera",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. We cannot wait to celebrate with you beneath the marigolds and the desert stars — three days straight out of a love story.",
    footerTagline: "A garland, a vow, a happily ever after."
  },

  palette: [
    { name: "Marigold Gold",  color: "#E3A23C" },
    { name: "Sindoor Red",    color: "#9C2B35" },
    { name: "Rani Pink",      color: "#C4406E" },
    { name: "Peacock Emerald",color: "#2F6B52" },
    { name: "Zari Gold",      color: "#C9922E" },
    { name: "Sandalwood Ivory", color: "#FBF3E4" }
  ],
  theme: "marigold",
  themeColors: {},
  fonts: {
    editorial: "rozhaOne",
    display: "cormorant",
    script: "greatVibes",
    hand: "shadowsIntoLight",
    body: "jost"
  },

  /* ── Wedding festivities — SAMPLE words for the programme.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Haldi", "The Mehndi", "The Sangeet", "The Baraat", "The Varmala", "The Pheras", "The Feast", "The Bidaai"],

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
    deadline: "the first of October, 2027"         // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The muhurat is still being finalised — see the celebrations below.",
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
