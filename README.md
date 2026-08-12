# Aarogya Dental Clinic — Website

A fast, static marketing website for a small dental clinic in Gokarneshwor, Kathmandu. Built with Next.js (App Router), React 19, TypeScript and Tailwind CSS v4.

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

## Editing Content

All content lives in `lib/clinic.ts` and the `data/` directory — no component edits needed for routine updates.

- **`lib/clinic.ts`** — clinic name, phone, WhatsApp, email, address, opening hours, map embed, social links, site URL, Formspree endpoint, and Google reviews URL.
- **`data/services.ts`** — the services grid.
- **`data/doctor.ts`** — doctor profiles (hidden until `showDoctors` is set to `true`).
- **`data/testimonials.ts`** — Google Maps reviews to showcase. Paste real reviews (quote, reviewer name, star rating, plus optional time and review link); section hidden until `showTestimonials` is set to `true`.
- **`data/faq.ts`** — the FAQ accordion.
- **`data/gallery.ts`** and **`data/hero.ts`** — image paths for the gallery and hero slideshow.

Images live in `public/images/` (WebP).

### Before going live (TODO items)

Search the codebase for `TODO` to find everything still to fill in:

1. Replace `siteUrl` in `lib/clinic.ts` with the real domain.
2. Add real opening hours in `lib/clinic.ts` (the site falls back to "contact us" until then).
3. Refine the street address.
4. Add a free Formspree endpoint to enable the contact form (until then, the form opens WhatsApp with the details pre-filled).
5. Add the Google Business reviews URL.
6. Fill in real doctor profiles and patient testimonials, then set `showDoctors` / `showTestimonials` to `true`.
7. Set an honest `priceRange` in the structured data in `app/layout.tsx`.
8. Add Facebook/Instagram links.

## SEO

- `app/robots.ts` — robots.txt
- `app/sitemap.ts` — sitemap.xml
- `app/icon.svg` — favicon
- `app/layout.tsx` — metadata, Open Graph, Twitter card, and `Dentist` structured data (JSON-LD)

## Deployment

This is a fully static site (no server-side data or auth), so it deploys easily anywhere. Example on Vercel:

```bash
vercel
```

Make sure `siteUrl` in `lib/clinic.ts` matches the deployed domain so the canonical URL, sitemap, and structured data are correct.
