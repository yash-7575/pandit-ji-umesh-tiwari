# Vedic Pandit Website Template

A complete, production-ready website for a Vedic priest / pandit. Built with the DC (Design Component) runtime — no build step required. Just fill in the placeholders, drop in photos, and deploy.

---

## 1. How to Customize This Template

Follow these steps in order:

**Step 1 — Global find-and-replace (do this first)**

Open your code editor and run a global find-and-replace across the entire project folder for each placeholder listed in Section 2 below.

In VS Code: `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac) → enable "Search across files"

**Step 2 — Replace photos** (see Section 3)

**Step 3 — Update the contact form** (see Section 2 — `[WEB3FORMS_KEY]`)

**Step 4 — Deploy** (see Section 4)

**Step 5 — Connect your domain** (see Section 5)

---

## 2. Complete Placeholder Reference

Replace every placeholder below with real client data.

| Placeholder | What to fill in | Where it appears |
|---|---|---|
| `[PANDIT_NAME]` | Full name, e.g. `Pandit Rajesh Sharma` | Nav, Footer, all page titles, About, Home, Contact |
| `[INITIAL]` | One Devanagari letter (name initial), e.g. `र` for Rajesh | Nav logo circle, Footer logo circle |
| `[CITY_NAME]` | City of service, e.g. `Mumbai` | All pages — headings, meta, trust strip |
| `[PHONE_NUMBER]` | Phone with country code, e.g. `+91 98765 43210` | Nav drawer, Contact page, Footer |
| `[WHATSAPP_NUMBER]` | WhatsApp number digits only (no spaces/+), e.g. `919876543210` | Nav drawer, Contact page (`wa.me/` links) |
| `[WEBSITE_URL]` | Domain without `https://`, e.g. `panditrajeshsharma.com` | sitemap.xml, Contact form subject line |
| `[FULL_ADDRESS]` | Full postal address — appears twice (Contact page + Footer) | Contact page, Footer |
| `[GBP_LINK]` | Google Business Profile or Google Maps share URL | Contact page map link |
| `[RATING]` | Google / overall rating, e.g. `4.8` | Home hero, trust strip |
| `[X]+` | Years of experience OR ceremony count, e.g. `12` | Home trust strip (appears as `[X]+ years`, `[X]+ families`) |
| `[AREA_EXAMPLE]` | A local neighbourhood name for the form placeholder, e.g. `Andheri` | Contact enquiry form |
| `[YEAR]` | Current year, e.g. `2026` | Footer copyright |
| `[WEB3FORMS_KEY]` | Web3Forms access key — free at web3forms.com | Contact form script |

### How to get `[WHATSAPP_NUMBER]`

Take the phone number, remove the `+`, and keep all digits.
Example: `+91 98765 43210` → `919876543210`
The link becomes: `https://wa.me/919876543210`

### How to get `[WEB3FORMS_KEY]`

1. Go to [web3forms.com](https://web3forms.com)
2. Enter the client's email address
3. Copy the access key you receive
4. Paste it as the value for `[WEB3FORMS_KEY]` in `Contact.dc.html`

The form will then send all enquiries to that email address.

### Google Maps embed

In `Contact.dc.html`, find the placeholder div that says:
```
Replace with Google Maps embed for [FULL_ADDRESS]
```

Replace the entire `<div>` with an `<iframe>` embed from Google Maps:
1. Go to maps.google.com → search the client's address
2. Click Share → Embed a map → Copy HTML
3. Paste the `<iframe>` in place of the placeholder div, keeping the outer `<a>` tag

---

## 3. Images to Replace

### Personal photos — MUST replace

These placeholder divs appear where the pandit's photo should go.

| Location in HTML | File to add | Recommended size |
|---|---|---|
| Home page hero (right column) | e.g. `assets/panditji-main.jpg` | Portrait, min 800×1000px, 4:5 ratio |
| Home page About teaser (left column) | e.g. `assets/panditji-about.jpg` | Square, min 800×800px |
| About page intro (left column) | e.g. `assets/panditji-portrait.jpg` | Portrait, min 700×875px, 4:5 ratio |

**How to replace a placeholder:**

1. Add the image file to the `assets/` folder
2. Find the `<div>` that says `Add Pandit Ji Photo Here` in the HTML
3. Replace the entire `<div>` with:

```html
<img src="./assets/panditji-main.jpg"
     alt="[PANDIT_NAME] performing a ritual"
     style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;">
```

**Photo tips:**
- Use warm, well-lit photos showing the pandit performing a ritual
- Avoid plain passport-style photos — action shots work best
- For the hero image, head-to-waist framing in ritual attire works well
- JPEG format, under 500KB each (compress at tinypng.com if needed)

### Generic ritual images — keep as-is

These are already included in `assets/` and cover all service cards, seasonal sections, and store items:

`shanti-puja.png` · `office-puja.jpg` · `yagya.png` · `bhagwat-katha.jpg` · `vivah-sanskar.png` · `rudraksh.png` · `tulsimala.png` · `devghar.png` · `yantra.png` · `radha-krishna.png` · `brass-puja-thali.png` · `shravan-hero.jpg` · `neelkanth.jpg` · `sawan-somvar.jpg` · `rudrabhishek.jpg` · `parthiv-shivling.jpg` · `mangala-gauri.jpg`

### Optional — Social share image

Add `assets/og-image.jpg` (1200×630px) and insert inside each page's `<helmet>`:
```html
<meta property="og:image" content="https://[WEBSITE_URL]/assets/og-image.jpg">
<meta property="og:title" content="[PANDIT_NAME] | Vedic Priest in [CITY_NAME]">
```

---

## 4. How to Deploy on Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository** → select your repo
3. Leave all settings as defaults — no framework to select, no build command needed
4. Click **Deploy**

Vercel assigns a `.vercel.app` preview URL within ~30 seconds.

### Step 3 — Test all routes

The `vercel.json` file maps clean URLs to the correct files. After deploying, verify these all open correctly:

- `/` → Home
- `/about` → About page
- `/services` → Services catalog
- `/contact` → Contact + enquiry form
- `/store` → Sacred Store
- `/shravan` → Shravan landing page

---

## 5. How to Connect a Custom Domain

### Step 1 — Add domain in Vercel

1. Open your Vercel project → **Settings** → **Domains**
2. Type the domain (e.g. `panditrajeshsharma.com`) → click **Add**
3. Vercel shows you DNS records to add

### Step 2 — Update DNS at your registrar

**Option A — Use Vercel nameservers (easiest)**

If your registrar allows nameserver changes, point your domain to Vercel's nameservers. Vercel will handle all DNS automatically.

**Option B — Add individual DNS records**

Add these at your domain registrar:
- `A` record: `@` → `76.76.21.21`
- `CNAME` record: `www` → `cname.vercel-dns.com`

### Step 3 — Wait for propagation

DNS changes take 5–60 minutes (occasionally up to 48 hours). Once live, HTTPS is provisioned automatically — no configuration needed.

### Step 4 — Update sitemap.xml

Replace `[WEBSITE_URL]` in `sitemap.xml` with the real domain, then submit in Google Search Console:
`https://panditrajeshsharma.com/sitemap.xml`

---

## 6. Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. **Add property** → Domain → enter the domain
3. Verify via **HTML tag**: copy the `<meta name="google-site-verification" ...>` tag
4. Paste it inside the `<helmet>` of `Home.dc.html`
5. Deploy, then click **Verify** in Search Console

---

## 7. Running Locally

The site uses `fetch()` to load components and will not work opened as a `file://` URL. Serve it over HTTP instead:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080/Home.dc.html`

---

## Project Structure

```
/
├── Home.dc.html               # Landing page
├── About.dc.html              # Pandit biography
├── Services.dc.html           # Full services catalog (tabbed)
├── Contact.dc.html            # Contact details + enquiry form
├── Store.dc.html              # Sacred items store (coming soon)
├── Shravan.dc.html            # Seasonal Shravan landing page
├── Nav.dc.html                # Shared navigation component
├── Footer.dc.html             # Shared footer component
├── HeroExplorations.dc.html   # Design scratchpad — not production
├── support.js                 # DC runtime — do not edit
├── favicon.svg                # Om symbol favicon — generic, keep as-is
├── sitemap.xml                # Update domain before going live
├── vercel.json                # URL routing — do not edit
├── package.json               # Project metadata
└── assets/                    # All images
```

---

## Design Reference (for any custom tweaks)

| Role | Value |
|---|---|
| Page background | `#fffbeb` |
| Primary red | `#991b1b` |
| Amber / gold | `#d97706` |
| Amber border | `#f5d997` |
| Warm amber text | `#b45309` |
| Text dark | `#1c1917` |
| Text muted | `#57534e`, `#78716c` |
| Footer background | `#2b1110` |
| Heading font | Playfair Display (Google Fonts) |
| Body font | Inter (Google Fonts) |
| Max content width | `1200px` |
| Horizontal page padding | `40px` (desktop), `24px` (tablet), `16px` (mobile) |
