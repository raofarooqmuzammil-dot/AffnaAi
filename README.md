# Affnaai — AI Receptionist Marketing Site

A production-grade Next.js 14 marketing site for Affnaai, including a **live AI chat demo powered by Claude**, a simulated WhatsApp booking flow, a sample voice call transcript, and an interactive ROI calculator.

---

## Quick start

You'll need [Node.js 18+](https://nodejs.org/) installed.

```bash
# 1. Install dependencies
npm install

# 2. Set up your environment variables
cp .env.local.example .env.local
# Then edit .env.local and paste in your Anthropic API key

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're live.

---

## Getting your Anthropic API key (required for live chat demo)

The live chat demo on `/demo` actually talks to Claude. To make it work:

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up (it's free to create an account)
3. Add billing — most demos cost a fraction of a cent per conversation
4. Create an API key under **Settings → API Keys**
5. Paste it into `.env.local`:

```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

**Important:** This key stays on the server — it's never exposed to the browser. The `/api/chat` route uses it to talk to Anthropic on behalf of the visitor.

---

## Project structure

```
affnaai/
├── app/
│   ├── layout.jsx          # Root layout with navbar/footer + fonts
│   ├── page.jsx            # Home page
│   ├── globals.css         # Design tokens + base styles
│   ├── not-found.jsx       # 404 page
│   ├── api/
│   │   ├── chat/route.js   # Live AI chat backend (Anthropic API)
│   │   └── contact/route.js# Contact form submission stub
│   ├── how-it-works/
│   ├── demo/               # All 3 demos + ROI calculator
│   ├── pricing/
│   ├── integrations/
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── industries/
│   │   ├── page.jsx        # Overview
│   │   ├── cleaning/
│   │   ├── dental/
│   │   ├── salons/
│   │   ├── real-estate/
│   │   └── hvac/
│   └── blog/
│       ├── page.jsx        # Index
│       └── [slug]/         # Dynamic post pages
├── components/             # All reusable UI
│   ├── ChatDemo.jsx        # Live AI chat
│   ├── WhatsAppDemo.jsx    # Scripted WhatsApp simulator
│   ├── VoiceDemo.jsx       # Sample call player
│   ├── ROICalculator.jsx
│   ├── PricingCards.jsx
│   ├── BeforeAfter.jsx
│   ├── IndustryTemplate.jsx
│   ├── IntegrationsGrid.jsx
│   ├── FAQAccordion.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Logo.jsx
├── lib/
│   ├── industries.js       # 5 industry data records
│   └── blog-posts.js       # 3 seed blog posts (inline content)
└── public/
```

---

## Editing common things

### Pricing
`components/PricingCards.jsx` — change tier prices, features, founding offer copy.

### Adding a new industry
1. Add an entry to `lib/industries.js`
2. Create `app/industries/[your-slug]/page.jsx` (copy one of the existing ones)
3. It'll appear automatically in the navbar dropdown + overview

### Adding a blog post
Edit `lib/blog-posts.js` and add a new object. The slug becomes the URL: `/blog/your-slug`. Content uses a minimal markdown-ish syntax (`## headings`, `**bold**`, `- bullets`).

### The chat receptionist's personality
The system prompt that defines the AI receptionist's behaviour is in `app/api/chat/route.js`. Edit the `SYSTEM_PROMPT` constant to change the company name, tone, services, pricing, or booking rules.

### Voice demo script
The transcript is in `components/VoiceDemo.jsx` (the `TRANSCRIPT` constant). To replace this with a real audio recording later:
1. Record audio of the script using ElevenLabs, a real receptionist, or yourself
2. Save the file as `public/voice-demo.mp3`
3. Replace the visual waveform with a real `<audio>` element

---

## Wiring up the contact form

The form currently logs to the server console. To connect it to your inbox / CRM, edit `app/api/contact/route.js` and replace the `console.log` with one of:

- **Email:** Use [Resend](https://resend.com) or [Postmark](https://postmarkapp.com) — install their SDK and add a `transactionalSend()` call
- **CRM:** POST to your HubSpot / GoHighLevel webhook
- **Spreadsheet:** POST to a Zapier or Make.com webhook that writes to Google Sheets
- **Database:** Insert into Supabase, Neon, or any Postgres instance

---

## Deploying

### Vercel (recommended — by the makers of Next.js)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Add `ANTHROPIC_API_KEY` under **Settings → Environment Variables**
4. Click deploy. You'll have a live URL in ~60 seconds.

### Other hosts
This is a standard Next.js 14 App Router project — it'll deploy to Netlify, Railway, Render, Cloudflare Pages (with the Next-on-Pages adapter), or any Node.js host. Just make sure `ANTHROPIC_API_KEY` is set as a server-side environment variable.

---

## Design system

If you ever want to tweak the look:
- **Colors:** `tailwind.config.js` → `theme.extend.colors`
- **Fonts:** `app/layout.jsx` (Google Fonts loaded via `next/font`)
- **Base CSS:** `app/globals.css` (custom utility classes like `.btn-primary`, `.card`, `.chip-glow`)

Current accent: **electric cyan #22D3EE** on near-black #050507.

---

## Stack

- **Framework:** Next.js 14 (App Router, JavaScript)
- **Styling:** Tailwind CSS 3.4
- **AI:** Anthropic SDK (Claude Haiku 4.5 for the demo — fastest and cheapest)
- **Fonts:** Bricolage Grotesque (display) + Geist (body) + Geist Mono (technical)

Built to be edited, not rebuilt. Have fun.
