export const industries = [
  {
    slug: "cleaning",
    name: "Cleaning Companies",
    short: "Cleaning",
    icon: "🧽",
    tagline: "Stop losing recurring contracts to slow replies.",
    pain: "Most cleaning leads come in after-hours from referrals and ads. By the time you call back, they've already booked someone else.",
    solution:
      "Affnaai answers instantly on WhatsApp, web chat, and missed calls — qualifies the job (sqft, frequency, address), and books an estimate or recurring slot directly in your calendar.",
    stats: [
      { label: "Average response time", before: "6h 22m", after: "12 seconds" },
      { label: "Leads converted to estimates", before: "18%", after: "47%" },
      { label: "After-hours bookings recovered", before: "$0", after: "$3,800/mo" },
    ],
    samplePrompts: [
      "Need a deep clean for a 3-bed before Saturday",
      "Do you do move-out cleaning?",
      "Quote for weekly office cleaning, ~2,000 sqft",
    ],
    channels: ["WhatsApp", "Web chat", "Missed call text-back", "Instagram DM"],
  },
  {
    slug: "dental",
    name: "Dental Clinics",
    short: "Dental",
    icon: "🦷",
    tagline: "Fill the chair, even when reception is closed.",
    pain: "Patients call after work, on lunch breaks, or weekends. Voicemails go unanswered, and they call the next clinic on Google.",
    solution:
      "Affnaai handles routine appointment booking, reschedules, and reminders — and transfers anything sensitive (pain, emergencies, insurance details) to your team during open hours.",
    stats: [
      { label: "After-hours calls answered", before: "0%", after: "100%" },
      { label: "No-show rate (with reminders)", before: "18%", after: "6%" },
      { label: "Slots filled from waitlist", before: "Manual", after: "Automatic" },
    ],
    samplePrompts: [
      "Can I book a cleaning for next Tuesday?",
      "I need to reschedule my appointment on the 14th",
      "Do you accept [insurance provider]?",
    ],
    channels: ["Phone (voice AI)", "WhatsApp", "Web chat", "SMS reminders"],
  },
  {
    slug: "salons",
    name: "Salons & Spas",
    short: "Salons",
    icon: "💇",
    tagline: "Every Instagram DM becomes a booking.",
    pain: "Stylists can't answer DMs and SMS while they're with clients. Hot leads from Instagram and TikTok cool off in hours.",
    solution:
      "Affnaai replies on Instagram DM, WhatsApp, and SMS within seconds — asks the right questions (service, stylist, length), and slots them straight into the booking app.",
    stats: [
      { label: "DM-to-booking conversion", before: "9%", after: "34%" },
      { label: "Time staff spends messaging", before: "2h/day", after: "0h" },
      { label: "Weekend bookings", before: "Lost", after: "Captured" },
    ],
    samplePrompts: [
      "How much for a balayage on long hair?",
      "Do you have anything Saturday afternoon?",
      "Can I book a couples massage for our anniversary?",
    ],
    channels: ["Instagram DM", "WhatsApp", "Web chat", "SMS"],
  },
  {
    slug: "real-estate",
    name: "Real Estate Agencies",
    short: "Real Estate",
    icon: "🏠",
    tagline: "Be the first agent to reply. Win the listing.",
    pain: "In real estate, the agent who responds in 5 minutes wins. Anything slower and the lead has moved on to three other agents.",
    solution:
      "Affnaai responds instantly to inquiries from listing sites, web forms, and social — qualifies budget, location, timeline — and books a viewing or a call with you.",
    stats: [
      { label: "Lead response time", before: "47 min", after: "30 seconds" },
      { label: "Inquiries reaching a viewing", before: "12%", after: "38%" },
      { label: "After-hours lead capture", before: "Lost", after: "Booked" },
    ],
    samplePrompts: [
      "Is the 2-bed on Maple still available?",
      "Looking for rentals under $2,500 near downtown",
      "Can I see the property this weekend?",
    ],
    channels: ["WhatsApp", "Web chat", "SMS", "Email follow-up"],
  },
  {
    slug: "hvac",
    name: "HVAC Companies",
    short: "HVAC",
    icon: "❄️",
    tagline: "Heatwave doesn't wait for business hours.",
    pain: "When AC dies in July or heat goes out in January, customers call whoever picks up. After-hours = lost emergency jobs at premium rates.",
    solution:
      "Affnaai answers 24/7, triages emergency vs routine, captures address and equipment details, and dispatches based on your on-call schedule.",
    stats: [
      { label: "After-hours emergency capture", before: "31%", after: "98%" },
      { label: "Avg job ticket from AI-booked calls", before: "$340", after: "$520" },
      { label: "Dispatch time", before: "Manual", after: "Automatic" },
    ],
    samplePrompts: [
      "My AC just stopped working, can someone come today?",
      "Need a quote for a new furnace install",
      "Annual maintenance — do you have anything next week?",
    ],
    channels: ["Phone (voice AI)", "WhatsApp", "Web chat", "Missed call text-back"],
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
