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
| `src/_data/tech.js` | "Meet JD" section on the About page and the short strip on the home page. His photo (`jd-600/1200.webp`, plus `jd-face-200.webp` for the small home page circle) is cropped square with location data removed. |
| `src/assets/img/work/` | Before/after photos: square WebP at 600 and 1200 px, location data removed, license plates blurred. |
| `src/_includes/macros.njk` | Reusable page header and closing call-to-action banner. |
| `src/assets/css/site.css` | All styles. Brand colors (black, electric blue #0075DC, silver #C4C9CE) are at the top as CSS variables. Black header, heroes, dark sections and footer; white content sections. |
| `src/assets/img/` | Web-optimized logos and the social share card, made by `scripts/make_images.py` from the official RGB PNGs in `Branding/01 - Official Logo Files/RGB Version/PNG` (Official Brand Guidelines, Oct 2026). The originals are never edited; only these generated copies are trimmed and resized. Header = 03 Wordmark, home hero and footer = 01 Primary logo, share card = 02 Extended/Light on white. Favicon and app icons come from `Branding/03 - Digital & Social Assets/Favicon.png` via `scripts/make_icon.py`. |
| `src/assets/fonts/` | Montserrat variable font, the brand typeface (self-hosted, SIL Open Font License). |
| `netlify.toml` | Netlify build settings and cache headers. |

## Hosting notes

- Deploys: Netlify builds from the `main` branch (`npm run build`, publishes `_site`). Each production deploy uses Netlify credits, so batch changes and preview locally first.
- Quote form: Netlify Forms (form name `quote`), with an email notification set in the Netlify dashboard.
- Analytics: GA4 ID in `src/_data/site.js`; loads on the live domain only. Events: `generate_lead` (thank-you page) and `call_click` (phone links).
- Launch offer bar: `launchOffer` in `src/_data/site.js`. It shows "Opening November 8" before that date and "Now open" after, and disappears after the end date, so redeploy on those dates.

## Regenerating logos

```sh
# path/to/Branding = the brand folder with the official logo files
python3 scripts/make_images.py path/to/Branding src/assets/img
python3 scripts/make_icon.py path/to/Branding src
```

Requires Python with Pillow (`pip install pillow`).
