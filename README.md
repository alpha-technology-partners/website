# Alphas Consulting Group website

Marketing site for ACG: software modernization, replacing legacy SaaS, and custom builds for small and mid-sized businesses.

Next.js (App Router) + TypeScript, plain CSS on top of the ACG brand kit tokens.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
```

## Where things live

- `app/page.tsx`: all page copy (hero, problems, services, process, comparison, FAQ, contact).
- `app/globals.css`: layout and components.
- `app/brand/`: `tokens.css` and fonts copied from the brand kit. Edit `tokens.json` in the kit and regenerate rather than changing values here.
- `public/brand/`: logo SVGs. `app/icon.svg` is the favicon (the `a.` mark).
- `lib/site.ts`: site name, URL and contact email. **Update before launch.**

## Before launch

- Set the real domain and email in `lib/site.ts`.
- The contact form opens the visitor's email client (no backend). Swap `components/ContactForm.tsx` for a form service or a Route Handler when ready.
- The hero "example stack" figures and process timelines are illustrative. Check they match how you sell.
