# Alpha Technology Partners website

Marketing site for Alpha Technology Partners (ATP): software modernization, replacing legacy SaaS, and custom builds for small and mid-sized businesses.

Next.js (App Router) + TypeScript, plain CSS on top of the brand kit tokens.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` to test the contact form locally.

## Where things live

- `app/page.tsx`: all page copy (hero, problems, services, process, comparison, FAQ, contact).
- `app/globals.css`: layout and components.
- `app/brand/`: `tokens.css` and fonts copied from the brand kit. Edit `tokens.json` in the kit and regenerate rather than changing values here.
- `public/brand/`: the `a.` mark (SVG + PNG). `app/icon.svg` is the favicon. The header/footer lockup is the mark plus live text in `components/Logo.tsx`.
- `lib/site.ts`: site name, domain, and the info@ / support@ addresses. **Update before launch.**
- `app/api/contact/route.ts`: the contact form endpoint. Sends the submission to info@ through [Resend](https://resend.com), with Reply-To set to the visitor.

## Before launch

- Set the real domain in `lib/site.ts` (info@ and support@ addresses are built from it).
- Contact form email (Resend):
  1. Create a Resend account and add your domain under **Domains**. Add the DNS records it gives you and wait for it to show as verified.
  2. Create an API key and set `RESEND_API_KEY` in your hosting environment (for example Vercel → Project → Settings → Environment Variables).
  3. Submissions are sent from `website@<domain>` to `info@<domain>`. Override with `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` if needed.
- The site needs a host that runs Next.js server routes (Vercel, Netlify, etc.), not static-only hosting.
- The process timelines and FAQ figures are illustrative. Check they match how you sell.
