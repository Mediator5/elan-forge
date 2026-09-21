# ÉLAN FORGE — Strength With Purpose

A modern, motion-driven marketing site for Élan Forge: fitness, mentorship and community.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**,
with a **nodemailer + Gmail** membership form.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your Gmail credentials
npm run dev                  # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

> This project is a Node app, not PHP — XAMPP/Apache will not serve it directly.
> Run `npm run dev` (or `npm run build && npm start`) and open the port Next reports.

---

## Email setup (nodemailer + Gmail)

1. Enable **2-Step Verification** on the Google account: https://myaccount.google.com/security
2. Create an **App Password**: https://myaccount.google.com/apppasswords
   → *Mail* → *Other (Custom name)* → `Elan Forge` → copy the 16 characters.
3. Fill `.env.local`:

| Variable | Meaning |
| --- | --- |
| `GMAIL_USER` | The Gmail address that sends mail |
| `GMAIL_APP_PASSWORD` | 16-character App Password (no spaces) |
| `MAIL_FROM` | Display name + the same Gmail address |
| `MAIL_TO` | Inbox that receives membership requests |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | `smtp.gmail.com` / `465` / `true` |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site |

Your normal Google password will **not** work — Gmail requires an App Password.

What happens on submit (`POST /api/contact`):

1. Input is validated and lightly rate-limited (5 requests / 10 min per IP).
2. A branded notification is sent to `MAIL_TO`, with `Reply-To` set to the lead.
3. A branded auto-reply is sent to the person who submitted the form.

---

## Structure

```
src/
  app/
    page.tsx              Home
    philosophy/           Brand direction, MOVE · MENTOR · BELONG · BUILD
    training/             The Pressure Method™
    mentorship/           Mentor Circle
    schedule/             The Weekly Rhythm
    impact/               Rep For A Reason + Legacy Vision
    join/                 Membership form
    api/contact/route.ts  nodemailer endpoint
  components/
    Hero, Navbar, Footer, CTABand, JoinForm, Logo
    Motion.tsx            Reveal, Stagger, SplitWords, Parallax, Counter, ScrollProgress
    UI.tsx                Button, SectionHeading, Art, Marquee, Chain, PageHero
  lib/
    content.ts            All site copy as data
    images.ts             Unsplash image ids + URL builder
    mailer.ts             Gmail transport
    email-templates.ts    Branded HTML emails
```

## Brand tokens

| Token | Hex | Meaning |
| --- | --- | --- |
| `forest` | `#1B3A2B` | strength, growth, grounding |
| `cream` | `#F5EFE3` | warmth, humanity, balance |
| `gold` | `#C2A15A` | excellence, legacy, purpose |

Type: **Fraunces** (display) + **Inter** (UI), loaded from Google Fonts.
Imagery is served from Unsplash via `next/image` (allow-listed in `next.config.mjs`).

Motion respects `prefers-reduced-motion`.
