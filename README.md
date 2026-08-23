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
- **Contact form** — appointment booking via Formspree, with automatic WhatsApp fallback when no endpoint is configured.
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

- **`lib/clinic.ts`** — clinic name, phone, WhatsApp, email, address, opening hours, map embed, social links, site URL, Formspree endpoint, and Google reviews URL.
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

This is a fully static site (no server-side data or auth), so it deploys easily anywhere. Example on Vercel:

```bash
vercel
```

Make sure `siteUrl` in `lib/clinic.ts` matches the deployed domain so the canonical URL, sitemap, and structured data are correct.
