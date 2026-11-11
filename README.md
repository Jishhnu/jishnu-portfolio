# Jishnu Gopikrishnan — Portfolio (Next.js)

Next.js (App Router) + TypeScript. No UI library: the design is plain CSS in `app/globals.css`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Change the content

Everything you read on the page lives in one file: `data/portfolio.ts`
(email, phone, roles, skills, timeline, projects).
The portrait is `public/jishnu.jpg`: replace the file to change the photo.

## Host it (free)

**Vercel** (easiest)
1. Push this folder to a GitHub repository.
2. Go to vercel.com, choose **Add New > Project**, import the repository and click **Deploy**.
3. Optional: add an environment variable `NEXT_PUBLIC_SITE_URL` set to your final address
   (for example `https://jishnu.vercel.app`) so link previews on WhatsApp and LinkedIn show your photo.

## What is where

| Path | What it does |
| --- | --- |
| `app/layout.tsx` | Page title, description, link preview, fonts, saved light/dark theme |
| `app/page.tsx` | Puts the sections in order |
| `components/Loader.tsx` | 0–100% loading screen |
| `components/Header.tsx` | Menu, local time, pull-cord theme switch |
| `components/Hero.tsx`, `RoleCard.tsx`, `PortraitStage.tsx` | Intro, flip-board roles, tilting portrait with floating badges |
| `components/Doors.tsx` | Animated skill doors (auto-open, icons, glow) |
| `components/Timeline.tsx` | Timeline that draws itself on scroll |
| `components/Reveal.tsx` | Scroll fade-in used across the page |
| `components/Contact.tsx` | Gmail compose button (recipient only) and call button |

Animations switch off automatically for visitors who have "reduce motion" turned on.
