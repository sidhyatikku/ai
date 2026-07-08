# AI by Sidhya Tikku

> A curated gallery of AI-generated imagery by Sidhya Tikku — live at [ai.sidhyatikku.com](https://ai.sidhyatikku.com)

---

## About the Project

**AI by Sidhya Tikku** is a personal AI art gallery — a living, evolving collection of images generated through AI tools, shaped by Sidhya's eye for composition, culture, and visual storytelling.

The site is intentionally minimal. No clutter, no distractions — just the work. Images are presented in a full-screen slideshow that auto-advances every six seconds, letting the gallery breathe at its own pace. A grid view is available for browsing the full collection at a glance.

The header doubles as a functional object: it displays live local times across five cities — New York, Delhi, Paris, Dubai, and Tokyo — a quiet nod to the global lens that runs through the work itself.

Every interaction on the site is measured. Page views, gallery navigation, scroll depth, time on page, and tab visibility are all tracked via Google Analytics 4 and Microsoft Clarity, capturing the full picture of how people move through the collection.

---

## What's Inside

| File | Purpose |
|---|---|
| `index.html` | Main entry point — markup, meta tags, analytics |
| `main.js` | Gallery logic — slideshow, grid view, GA4 events |
| `time.js` | Live clock display across five time zones |
| `css/main.css` | All styling |
| `img/export/HQ/` | Full-resolution AI-generated image library (170+ images) |

---

## Features

**Slideshow Mode**
- Full-screen, auto-advancing gallery with 6-second intervals
- Manual navigation via left/right controls
- Auto-advance pauses when the browser tab is hidden, resuming on return

**Grid View**
- Browse the entire collection at once
- Click any image to jump directly to it in the slideshow
- Scroll depth tracked at 25%, 50%, 75%, and 100%

**Live City Clocks**
- Real-time display of local times in NYC, DEL, PAR, DXB, and TOK

**Analytics**
- Google Analytics 4 (`G-K698KSCEP1`) — event-level tracking for all interactions
- Microsoft Clarity (`xjfnli2tqm`) — session recordings, heatmaps, and rage click detection

---

## Analytics Events Tracked

| Event | Trigger |
|---|---|
| `page_view` | Page load |
| `gallery_navigate` | Manual left/right navigation |
| `gallery_auto_advance` | Auto-slide every 6 seconds (tab visible only) |
| `view_mode_change` | Toggle between slideshow and grid view |
| `grid_image_click` | Clicking an image in grid view |
| `grid_scroll_depth` | Scrolling to 25%, 50%, 75%, 100% of grid |
| `outbound_link_click` | Clicking the "Website" link |
| `time_on_page` | User reaches 30s, 60s, and 120s milestones |
| `page_visibility_change` | Tab hidden or brought back into focus |

---

## About Sidhya Tikku

Sidhya Tikku is an award-winning Creative Technologist based in New York City. He graduated from **Parsons School of Design** with a degree in Communication Design and also attended **Cornell Tech** for Product Strategy and Management. He works at the intersection of design, product, AI, data, strategy, and marketing — bridging the technical and the creative.

Outside of work, Sidhya runs, shoots film, cooks, follows Formula 1, and plays soccer.

**Work**
- Product Strategy + Design at a Stealth AI Startup (2024–Present), New York City
- Product Intern, DTC Technology at NBCUniversal (2023–2024), New York City
- Design Intern at (RED) (2022), New York City

**Recognition**
- Google Code-in Grand Prize Winner
- Adobe Design Achievement Awards, Semifinalist
- Indigo Design Awards Gold and Silver (2x) Winner
- NYCxDesign Graduate Showcase, Shortlist
- Arts Thread Global Creative Showcase, Shortlist
- Emerging Leader Award, Parsons School of Design

---

## Links

| | |
|---|---|
| Website | [sidhyatikku.com](https://sidhyatikku.com) |
| AI Gallery | [ai.sidhyatikku.com](https://ai.sidhyatikku.com) |
| LinkedIn | [linkedin.com/in/sidhyatikku](https://www.linkedin.com/in/sidhyatikku) |
| X (Twitter) | [x.com/sidhyatikku](https://x.com/sidhyatikku) |
| Email | [mail@sidhyatikku.com](mailto:mail@sidhyatikku.com) |

---

*Built and maintained by Sidhya Tikku. All AI-generated images are original works.*
