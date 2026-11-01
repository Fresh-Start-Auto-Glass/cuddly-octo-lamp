# Fresh Start Auto Glass website

Static site built with [Eleventy](https://www.11ty.dev/). Output is plain HTML and CSS. The only JavaScript is the small Google Analytics snippet in `base.njk`, which runs only on the live domain. Hosted on Netlify.

## Run it locally

```sh
npm install
npm start        # dev server at http://localhost:8080, reloads on save
npm run build    # writes the finished site to _site/
```

Needs Node 18 or newer.

## Where things are

| Path | What it is |
|---|---|
| `src/_data/site.js` | Business facts: phone, email, hours, service cities, nav. Change these here and every page updates. |
| `src/_data/schema.js` | Structured data (JSON-LD) that search engines and AI assistants read. Built from `site.js`. |
| `src/_includes/base.njk` | Shared page layout: head tags, header, footer. |
| `src/index.njk` | Home page. Each page sets its own `seoTitle` and `metaDescription` at the top. |
| `src/services.njk`, `service-area.njk`, `faq.njk`, `about.njk`, `contact.njk`, `thanks.njk` | The other pages. `thanks` is where the quote form lands (hidden from search). |
| `src/city.njk` + `src/_data/cities.js` | One landing page per priority city. Add a city to `cities.js` and its page appears. |
| `src/_data/faqs.js` | FAQ questions and answers. Feeds both the FAQ page and its structured data. |
| `src/our-work.njk` + `src/_data/work.js` | "Our work" before/after gallery. Each pair in `work.js` has a caption and alt text; `featured: true` also shows it on the home page (keep 3). |
| `src/_data/tech.js` | "Meet JD" section on the About page and the short strip on the home page. JD approved the copy. His photo (`jd-600/1200.webp`, plus `jd-face-200.webp` for the small home page circle) is cropped from `~/Desktop/Business/jd_profile_photo.HEIC` with location data removed. |
| `src/assets/img/work/` | Before/after photos: square WebP at 600 and 1200 px, location data removed, license plates blurred. Originals are in `~/Desktop/Business/Photos/originals`. |
| `src/_includes/macros.njk` | Reusable page header and closing call-to-action banner. |
| `src/assets/css/site.css` | All styles. Brand colors (black, electric blue #0075DC, silver #C4C9CE) are at the top as CSS variables. Black header, heroes, dark sections and footer; white content sections. |
| `src/assets/img/` | Web-optimized logos and the social share card, made by `scripts/make_images.py` from the official RGB PNGs in `~/Desktop/Business/Branding/01 - Official Logo Files/RGB Version/PNG` (Official Brand Guidelines, Oct 2026). The originals are never edited; only these generated copies are trimmed and resized. Header = 03 Wordmark, home hero and footer = 01 Primary logo, share card = 02 Extended/Light on white. Favicon and app icons come from `Branding/03 - Digital & Social Assets/Favicon.png` via `scripts/make_icon.py`. |
| `src/assets/fonts/` | Montserrat variable font, the brand typeface (self-hosted, SIL Open Font License). |
| `netlify.toml` | Netlify build settings and cache headers. |

## Before launch

- [x] Phone: (972) 482-0224, JD's business line, set in `src/_data/site.js` (also in the schema)
- [x] Hours: Mon to Fri 8 to 6, Sat 8 to 2 (confirmed Nov 1, 2026)
- [x] Workmanship warranty terms: in the FAQ (approved by JD, Nov 1, 2026)
- [x] "Insured" claims: policies bound; Louis OK'd the copy (Nov 1, 2026)
- [ ] Netlify plan: switch to Personal and turn on auto recharge (team billing settings in Netlify; off by default). If credits run out without it, Netlify pauses the whole site with a "Site not available" page until the next billing cycle. Each production deploy costs 15 of the 1,000 monthly credits, so batch changes and preview locally first.
- [ ] Netlify: turn on form detection, then add an email notification for the "quote" form to info@freshstartautoglass.com, and send a test quote
- [ ] Connect the domain in Netlify, keeping the Google Workspace MX (email) records unchanged
- [ ] Google Search Console: verify the domain with a DNS TXT record at Namecheap, then submit https://freshstartautoglass.com/sitemap.xml
- [x] Google Analytics (GA4): G-85HQ70Z167, set in `site.js` (Nov 1, 2026). Live site only. Events: `generate_lead` (thank-you page) and `call_click` (tel: links). After launch, mark both as key events in GA4 Admin > Events.

## Regenerating logos

```sh
python3 scripts/make_images.py ~/Desktop/Business/Branding src/assets/img
python3 scripts/make_icon.py ~/Desktop/Business/Branding src
```

Requires Python with Pillow (`pip install pillow`).
