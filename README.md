# Alpha Technology Partners website

Marketing site for Alpha Technology Partners (ATP): software modernization, replacing legacy SaaS, and custom builds for small and mid-sized businesses.

Next.js (App Router) + TypeScript, plain CSS on top of the brand kit tokens.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
```

## Where things live

- `app/page.tsx`: all page copy (hero, problems, services, process, comparison, FAQ, contact).
- `app/globals.css`: layout and components.
- `app/brand/`: `tokens.css` and fonts copied from the brand kit. Edit `tokens.json` in the kit and regenerate rather than changing values here.
- `public/brand/`: the `a.` mark (SVG + PNG). `app/icon.svg` is the favicon. The header/footer lockup is the mark plus live text in `components/Logo.tsx`.
- `lib/site.ts`: site name, URL and contact email. **Update before launch.**

## Before launch

- Set the real domain in `lib/site.ts` (info@ and support@ addresses are built from it).
- The contact form opens the visitor's email client (no backend). Swap `components/ContactForm.tsx` for a form service or a Route Handler when ready.
- The process timelines and FAQ figures are illustrative. Check they match how you sell.
