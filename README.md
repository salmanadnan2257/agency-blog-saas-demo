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

- AI Blog Generator form with a scripted credit-deduction and generation
  sequence, matching the real product's flow and copy.
- Blog Library with an "Export PDF" action per post (scripted, no real file
  is produced).
- Subscription Packages using the real, already-published, non-client-specific
  tier data (Basic $9.99/mo for 500 credits, Pro $24.99/mo for 1,500, Enterprise
  $79.99/mo for 5,000) and a redemption code field.
- Client Updates for one invented, illustrative client ("Aurora Fitness Co.",
  fictional; the real product's actual client testimonials and logos are
  intentionally excluded here).
- Styled with the real, public design tokens (primary color, font, button
  shape, card radius and shadow) read directly off this project's own Django
  templates' static CSS, since this SaaS *is* digitalise.agency's live site.
  This is presentation only: the visual design language every visitor's
  browser already renders, not the site's private server code, auth, or
  billing logic, none of which is part of this demo.

## Architecture

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no
backend, no network calls. `demo-data.js` holds the fabricated tour data;
`app.js` drives tab switching and the scripted generator/export sequences;
`styles.css` uses the real site's public color, font, radius, and shadow
values (copied from its own static CSS, since that's just visual design
language every visitor's browser already renders) so the demo reads as a
genuine tour of the real product, not a generic mockup. The real site loads
'Inter' from Google Fonts; this demo stays fully self-contained and offline,
so it falls back to the closest system font instead of fetching that
externally.

## Setup

None. Open `index.html` in a browser, or serve the folder with any static
file server.

## Usage

Click through the four tabs. Submit the generator form to see the scripted
generation sequence; the new post appears highlighted in the Blog Library tab.

## Challenges

- **Picking which real facts were safe to reuse.** The subscription tiers and
  the README's own published test/coverage numbers are real and safe to show
  verbatim; anything client-specific (the real testimonial client logos, any
  real client name) had to be excluded entirely rather than fabricated
  a replacement that could be mistaken for one of them.
- **Making the generator flow feel real without a backend.** The three-stage
  status sequence (checking credits, generating, saving) is timed to feel like
  a real async job rather than an instant fake success.
- **Matching the real brand without exposing the real repo.** The primary
  color, font, and card/button shapes are the actual values from the private
  repo's own static CSS, since those are public the moment anyone visits the
  real site; using them here is different from linking or embedding the
  private repo's server code, auth flow, or billing logic.

## What I learned

Reusing a product's real, already-public facts (pricing tiers, test counts)
alongside clearly-labeled fabricated content (the demo client, the demo posts)
is a cleaner way to keep a demo honest than either fabricating everything or
trying to scrub a real client dataset down to "safe."

## What I'd do differently

A real, rendered blog post preview (not just a library row) would show off the
generation quality more directly. Skipped here to keep the four core flows
complete rather than adding a fifth, partially-built one.
