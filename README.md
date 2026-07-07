# Agency Blog SaaS — Demo

A fabricated, interactive product tour of the `agency-blog-saas` project's
key features, built so the product can be seen working without exposing the
real system, which is private.

## Why this exists

`agency-blog-saas` is a production Django SaaS behind digitalise.agency,
serving real agency clients: AI blog generation, credits and subscriptions,
per-client editor roles, and PDF export. Its source is the agency's live
product, not just data that can be scrubbed, so it stays private. This demo
exists to give hiring panels something real to click through: the actual
feature set, walked through with fabricated data.

## What it is

A single static page with four tabs mirroring the real product's core
screens: the AI Blog Generator, the Blog Library, Subscription Packages, and
Client Updates. Submitting the generator form runs a scripted sequence
(credit deduction, a generating state, then a new post appearing in the
library) — nothing is computed or called over a network anywhere.

## Features

- **AI Blog Generator with real autofill examples.** Four chips above the form
  autofill the Topic/Description/Keywords fields with real davonex.com post
  topics and excerpts (an actual configured client of the real production
  pipeline), copied verbatim, then run the same scripted credit-deduction and
  generation sequence as before.
- **Blog Library mirrors davonex.com/blog.** By default it shows all 15 real,
  live posts from that actual client (titles, excerpts, dates, and read times
  copied verbatim, no davonex.com image hotlinked, each linking to the real
  URL). Generating a post adds exactly one fabricated demo card to the top of
  that list with a live "removes in mm:ss" countdown, replaced if you generate
  again, and automatically removed after 15 minutes either way. "Export PDF"
  still works on that demo card while it's present.
- Subscription Packages using the real, already-published, non-client-specific
  tier data (Basic $9.99/mo for 500 credits, Pro $24.99/mo for 1,500, Enterprise
  $79.99/mo for 5,000) and a redemption code field.
- Client Updates for one invented, illustrative client ("Aurora Fitness Co.",
  fictional; the real product's actual client testimonials and logos are
  intentionally excluded here).
- Styled after davonex.com's real, public design system (blue/navy palette,
  Space Grotesk font, eyebrow labels, card hover-lift with a top accent bar,
  arrow-animated buttons, sticky blurred nav), per an explicit owner direction
  to match that site's look for this demo rather than digitalise.agency's own
  indigo palette. This is presentation only: the visual design language any
  visitor's browser already renders, not any site's private server code,
  auth, or billing logic, none of which is part of this demo.

## Architecture

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no
backend, no network calls at runtime. `demo-data.js` holds `GENERATOR_PRESETS`
(the autofill chip data, sourced from real davonex.com topics),
`REAL_DAVONEX_POSTS` (a static snapshot of the real post list), and the rest of
the fabricated tour data; `app.js` drives tab switching, preset autofill, the
scripted generator/export sequence, and the Blog Library's demo-card
countdown/expiry logic; `styles.css` uses davonex.com's public color, font, radius, and shadow
values and component patterns (copied from its own live CSS, since that's
just visual design language every visitor's browser already renders) so the
demo reads as a polished, deliberate product tour rather than a generic
mockup, per the owner's direction for this specific demo.

## Setup

None. Open `index.html` in a browser, or serve the folder with any static
file server.

## Usage

Click through the four tabs. Optionally click an autofill chip on the
generator, then submit the form to see the scripted generation sequence; the
new post appears at the top of the Blog Library tab with a live countdown,
alongside all 15 real davonex.com posts.

## Challenges

- **Picking which real facts were safe to reuse.** The subscription tiers and
  the README's own published test/coverage numbers are real and safe to show
  verbatim; anything client-specific (the real testimonial client logos, any
  real client name) had to be excluded entirely rather than fabricated
  a replacement that could be mistaken for one of them.
- **Making the generator flow feel real without a backend.** The three-stage
  status sequence (checking credits, generating, saving) is timed to feel like
  a real async job rather than an instant fake success.
- **Following a specific styling direction rather than the product's own
  brand.** The owner asked for this demo to match davonex.com's design system
  specifically, not digitalise.agency's own indigo palette; the fabricated
  content (features, copy, tiers) still describes the real agency-blog-saas
  product, just presented in a different, deliberately chosen visual style.

## What I learned

Reusing a product's real, already-public facts (pricing tiers, test counts)
alongside clearly-labeled fabricated content (the demo client, the demo posts)
is a cleaner way to keep a demo honest than either fabricating everything or
trying to scrub a real client dataset down to "safe."

## What I'd do differently

A real, rendered blog post preview (not just a library row) would show off the
generation quality more directly. Skipped here to keep the four core flows
complete rather than adding a fifth, partially-built one.
