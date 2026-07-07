# Agency Blog SaaS: Demo

A fabricated, interactive product tour of the `agency-blog-saas` project's
key features, built so the product can be seen working without exposing the
real system, which is private.

## Why this exists

`agency-blog-saas` is a production Django SaaS behind digitalise.agency,
serving real agency clients: AI blog generation, credits and subscriptions,
per-client editor roles, and PDF export. Its source is the agency's live
product, not just data that can be scrubbed, so it stays private. This demo
exists to give hiring panels something real to click through: the actual
feature set, walked through with fabricated data, alongside the real, live
content one actual configured client has already published.

## What it is

A static page with four main tabs mirroring the real product's core screens:
the AI Blog Generator, the Blog Library, Subscription Packages, and Client
Updates, plus an in-page article reader opened from any Blog Library card.
Submitting the generator form runs a scripted sequence (credit deduction, a
generating state, then a real post duplicated into the library). Nothing is
computed or called over a network anywhere.

## Features

- **AI Blog Generator with a random real-post autofill.** One "Autofill an
  example" button fills Topic/Description/Keywords with a randomly chosen
  real davonex.com post's actual title and excerpt (an actual configured
  client of the real production pipeline). Submitting then always produces
  that exact same real post as the result, so the outcome is deterministic
  and traceable, not a fresh invention each click.
- **Blog Library mirrors davonex.com/blog completely.** All 15 real, live
  posts from that actual client are stored locally: real titles, excerpts,
  dates, read times, hero images, full article bodies, and references, all
  fetched once and kept self-contained (no live request to davonex.com on
  page load or when a post is opened). Generating a post duplicates that
  exact real post into the library with a "Demo · duplicate" ribbon and a
  live "removes in mm:ss" countdown; it's replaced if you generate again, and
  automatically removed after 15 minutes either way.
- **Every post opens to a full in-page article**, real or demo: hero image,
  byline, full prose with tables and inline citations, and a real references
  list, styled after davonex.com's own article template. A provenance note at
  the bottom links back to the original davonex.com URL for real posts.
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
  indigo palette.

## Architecture

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no
backend, no network calls at runtime. `demo-data.js` holds `REAL_DAVONEX_POSTS`
(all 15 real posts: full body HTML, references, and a local image path per
post), `GENERATOR_PRESETS` (derived directly from those 15 posts, one per
post), and the rest of the fabricated tour data; `app.js` drives tab
switching, random autofill, the scripted generator sequence, the in-page
article reader, and the Blog Library's demo-card countdown/expiry logic;
`styles.css` uses davonex.com's public color, font, radius, and shadow values
and article-template layout (copied from its own live CSS and a real
published post) so the demo reads as a polished, deliberate product tour, per
the owner's direction for this specific demo. `assets/posts/` holds the 15
real hero images (downloaded once, resized locally) with a `CREDITS.md`
explaining their provenance.

## Setup

None. Open `index.html` in a browser, or serve the folder with any static
file server.

## Usage

Click "Autofill an example" on the AI Blog Generator to pick a random real
post, then submit to see it duplicated into the Blog Library with a
countdown. Click any card, real or demo, to read the full article in-page.

## Challenges

- **Making the "generate" outcome deterministic without a backend.** Random
  fabrication on every click would undercut the "same input, same output"
  premise a real generator implies. Deriving `GENERATOR_PRESETS` directly
  from `REAL_DAVONEX_POSTS` and tracking which preset was last autofilled
  means the exact same post is always the result of that specific autofill,
  matching the real pipeline's actual deterministic-per-brief behavior.
- **Sourcing real article content without breaking the self-contained, no-
  live-calls rule.** Rendering real posts in-page (not just linking out) meant
  fetching each post's full body and hero image once and storing them
  locally, rather than hotlinking davonex.com on every open.
- **Picking which real facts were safe to reuse.** The subscription tiers and
  the README's own published test/coverage numbers are real and safe to show
  verbatim; anything client-specific beyond davonex.com's own already-public
  blog content (the real testimonial client logos, any other real client
  name) is still excluded entirely.

## What I learned

Showing a real, already-public content library alongside clearly-labeled
fabricated duplicates turned out to be a stronger honesty pattern than either
inventing a fake library from scratch or only linking out to the real site:
visitors get to see genuine, shipped work and a working demo interaction in
the same place, with no ambiguity about which is which.

## What I'd do differently

A real client publishes more content every month; this 15-post snapshot will
drift out of date. A live version could re-sync periodically instead of a
static copy; skipped here to keep this demo's "no live calls" guarantee
airtight rather than adding the one exception that would break it.
