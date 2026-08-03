# Pandit Vinay Tiwari Website

A production-ready static website for Pandit Vinay Tiwari, a North Indian Vedic priest based in Pune. The site presents puja services, kathas, yagyas, sanskar ceremonies, contact details, a Web3Forms enquiry flow, and a coming-soon sacred store.

## Live Site Structure

The site is built from standalone `.dc.html` pages using the bundled `support.js` runtime.

| Page | Purpose |
| --- | --- |
| `index.html` | Root entry point that redirects to the home page. |
| `Home.dc.html` | Main landing page with hero, services preview, Bhagwat Katha highlight, seasonal booking prompts, store teaser, and final CTA. |
| `Services.dc.html` | Interactive categorized services catalog for pujas, yagyas, kathas, sanskars, and ancestral rites. |
| `About.dc.html` | Pandit Ji profile and service principles. |
| `Store.dc.html` | Coming-soon sacred store page for puja items and samagri. |
| `Contact.dc.html` | Phone, WhatsApp, address, map, and enquiry form. |
| `Nav.dc.html` | Shared navigation and booking drawer component. |
| `Footer.dc.html` | Shared footer with contact and service links. |

## Production Features

- Responsive desktop and mobile layouts.
- Page-specific titles and meta descriptions.
- Favicon included as `favicon.svg`.
- Optimized key image asset for faster loading.
- Relative asset paths for safer static hosting.
- Web3Forms-powered enquiry form.
- Local Playwright smoke test covering major pages on desktop and mobile.

## Tech Stack

- Static HTML files with `.dc.html` components.
- Bundled DC runtime in `support.js`.
- React loaded by the runtime from CDN.
- Playwright for production smoke checks.
- Sharp used as a dev dependency for image optimization.

## Project Layout

```text
.
|-- index.html
|-- Home.dc.html
|-- Services.dc.html
|-- About.dc.html
|-- Store.dc.html
|-- Contact.dc.html
|-- Nav.dc.html
|-- Footer.dc.html
|-- support.js
|-- assets/
|-- screenshots/
|-- scripts/
|   `-- production-smoke.mjs
|-- package.json
`-- README.md
```

## Local Preview

Install dependencies:

```bash
npm install
```

Start a static server from the project root:

```bash
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/index.html
```

## Smoke Testing

The smoke test expects the static server to be running on port `4173`.

```bash
npm run smoke
```

The test checks:

- `index.html`
- `Home.dc.html`
- `Services.dc.html`
- `About.dc.html`
- `Store.dc.html`
- `Contact.dc.html`

Across desktop and mobile viewports it verifies:

- HTTP `200` responses.
- Page titles.
- No broken images.
- No browser console or page errors.
- No failed network requests.
- No horizontal overflow.

Generated smoke screenshots are written to `screenshots/smoke-*.png` and ignored by git.

## Contact Form

The enquiry form in `Contact.dc.html` submits to Web3Forms:

```text
https://api.web3forms.com/submit
```

Before final public launch, submit one real enquiry from the deployed domain and confirm the email reaches the intended inbox.

## Deployment Notes

This is a static site and can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static hosting provider.

For production hosting:

- Serve from the repository root.
- Ensure `index.html` is the default document.
- Keep `support.js` and `assets/` available at the same relative paths.
- Configure HTTPS.
- After the final domain is known, add absolute canonical URLs and a sitemap if search indexing is important.

## Production Checklist

- Run `npm run smoke` before shipping.
- Confirm the deployed site opens from `/`.
- Confirm all nav links work on mobile and desktop.
- Submit a real contact form test.
- Confirm phone and WhatsApp links open correctly on mobile.
- Confirm the Google Maps embed loads on the deployed domain.
- Confirm the store should remain marked as "Coming soon".

## Maintenance

Common edits:

- Services and category content: `Services.dc.html`
- Contact number, address, and form fields: `Contact.dc.html`, `Nav.dc.html`, `Footer.dc.html`
- Hero and homepage sections: `Home.dc.html`
- Store teaser/categories: `Store.dc.html`
- Shared navigation: `Nav.dc.html`
- Shared footer: `Footer.dc.html`

When updating visual assets, keep image sizes web-friendly. Large full-width images should generally stay below 500 KB when possible.
