# Aarogya Dental Clinic — Website

A fast, static marketing website for a small dental clinic in Gokarneshwor, Kathmandu. Built with Next.js (App Router), React 19, TypeScript and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript 5
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Geist Sans

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description                      |
| -------------- | -------------------------------- |
| `npm run dev`  | Start the development server     |
| `npm run build`| Build for production             |
| `npm run start`| Serve the production build       |
| `npm run lint` | Lint with ESLint                 |

## Features

- **Multi-branch support** — two clinic branches (Gokarneshwor & Boudha) with independent contact info, doctors, testimonials, and gallery. Branch choice persists in localStorage.
- **Light / dark theme** — toggle with system preference detection, persisted in localStorage.
- **SEO** — Open Graph, Twitter cards, JSON-LD structured data (Schema.org `Dentist`), robots.txt, and auto-generated sitemap.
- **Contact form** — appointment booking via a secure, per-IP rate-limited `/api/appointment` route (Nodemailer SMTP) with a custom branded HTML email. If email is not configured or delivery fails, the API returns an error and the form directs patients to WhatsApp.
- **Mobile contact bar** — fixed bottom bar with one-tap Call and WhatsApp buttons.
- **Scroll-reveal animations** — IntersectionObserver-based with `prefers-reduced-motion` respect.
- **Responsive design** — mobile-first with a sticky navbar and hash-based section navigation.

## Project Structure

```
dental-clinic/
├── app/                       # Next.js App Router pages & layouts
│   ├── services/              # Services listing and [slug] detail pages
│   └── layout.tsx             # Root layout, SEO metadata, JSON-LD
├── components/                # React components (Navbar, Hero, ContactForm, etc.)
├── data/                      # Static content (services, doctors, FAQs, gallery)
├── lib/                       # Clinic config (clinic.ts) and helpers
├── public/images/             # WebP images
└── package.json
```

## Editing Content

All content lives in `lib/clinic.ts` and the `data/` directory — no component edits needed for routine updates.

- **`lib/clinic.ts`** — clinic name, phone, WhatsApp, email, address, opening hours, map embed, social links, site URL, and Google reviews URL. SMTP credentials live in `.env.local` (never committed).
- **`data/services.ts`** — the services grid plus the dedicated service detail pages (`/services/<slug>`). Each service has a `slug`, short `description`, and detail fields: `longDescription`, `whatToExpect`, `benefits` and `pricingNote`.
- **`data/doctor.ts`** — doctor profiles organized by branch (hidden until `showDoctors` is set to `true`).
- **`data/testimonials.ts`** — patient reviews organized by branch (hidden until `showTestimonials` is set to `true`).
- **`data/faq.ts`** — the FAQ accordion.
- **`data/gallery.ts`** and **`data/hero.ts`** — image paths for the gallery and hero slideshow.
- **`data/stats.ts`** — statistics numbers.

Images live in `public/images/` (WebP).

### Multi-Branch Content

Each data file supports branch-specific content. The site ships with two branches (Gokarneshwor and Boudha). To update content for a branch, edit the corresponding entry in the data file. The currently selected branch is stored in localStorage and can be switched via the floating branch button.

## SEO

- `app/robots.ts` — robots.txt
- `app/sitemap.ts` — sitemap.xml
- `app/icon.png` — favicon
- `app/layout.tsx` — metadata, Open Graph, Twitter card, and `Dentist` structured data (JSON-LD)

## Deployment

The site is fully static except for the `/api/appointment` route, which sends appointment emails via Nodemailer over SMTP.

### Environment Variables

SMTP credentials live in `.env.local` locally (never committed). On your host (e.g. Vercel), set them through the dashboard or CLI (`vercel env add <NAME>`):

| Variable            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `SMTP_HOST`         | SMTP server hostname                                  |
| `SMTP_PORT`         | SMTP port (`587` default; use `465` for implicit TLS) |
| `SMTP_USER`         | SMTP username (also used as the email "From" address) |
| `SMTP_PASS`         | SMTP password                                         |
| `APPOINTMENT_EMAIL` | Inbox that receives appointment requests              |

If any variable is missing, the API returns `503` and the form directs patients to WhatsApp instead.

### Behaviour & Fallbacks

- **Rate limiting** — submissions are limited to 5 per IP per 15 minutes. The limiter is in-memory, so on serverless platforms the limit applies per instance.
- **Email failure fallback** — if the email provider fails, the validated request is logged to the server logs (`[appointment] UNDELIVERED appointment request`) for manual recovery, and the patient is shown a message pointing to WhatsApp/phone.

Deploy example on Vercel:

```bash
vercel
```

Make sure `siteUrl` in `lib/clinic.ts` matches the deployed domain so the canonical URL, sitemap, and structured data are correct.
