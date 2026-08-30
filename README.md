# Eshi Gebeya — Portfolio Site

Modern portfolio for **Eshi Gebeya** (eshigebeya.com) — curated women's clothing, shoes & jewelry sourced from China to Ethiopia. Built with Next.js, Tailwind CSS v4 and shadcn/ui.

## Develop

```bash
npm install
npm run dev
```

## Deploy (GoDaddy / any static host)

```bash
npm run build
```

This generates a static site in the `out/` folder. Upload the **contents** of `out/` to your domain's web root (`public_html`) via GoDaddy cPanel → File Manager (or FTP), and eshigebeya.com is live.

## Customize

Everything brand-related lives in one file: `src/lib/site.ts`

| What | Where |
| --- | --- |
| Telegram / Instagram links | `site.socials` in `src/lib/site.ts` (currently `t.me/eshigebeya`, `instagram.com/eshigebeya`) |
| Logo | Drop the file in `public/` (e.g. `public/logo.svg`) and set `site.logoSrc = "/logo.svg"` — until then a monogram placeholder is shown |
| Site name / description / domain | `src/lib/site.ts` |
| Colors & fonts | `src/app/globals.css` (ivory / espresso / gold palette) |

## Structure

- `src/app/page.tsx` — page composition
- `src/components/` — sections: `site-header`, `hero`, `marquee`, `collections`, `how-it-works`, `showcase`, `about`, `contact-cta`, `site-footer`
- `src/components/ui/` — shadcn/ui primitives (add more with `npx shadcn add <component>`)

## Roadmap

The site is structured so the showcase/collections can later become real product listings when Eshi Gebeya evolves into a full e-commerce store.
