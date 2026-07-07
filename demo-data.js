// Fabricated demo data. No live API calls, no real client data anywhere in this file.

// REAL_DAVONEX_POSTS: a static, hand-copied snapshot of the real, live, public
// post list from davonex.com/blog (an actual configured client of the real
// production pipeline) as of 2026-07-07 — titles, excerpts, dates, and read
// times are copied verbatim, not fabricated. No image is hotlinked from
// davonex.com anywhere in this demo (that would be a live third-party request
// on every page load); each card uses a labeled placeholder instead. "Read the
// real post" links open the real davonex.com URL directly, a normal outbound
// link, not a fetch this demo performs.
const REAL_DAVONEX_POSTS = [
  { slug: "track-ai-search-sales-e-commerce-attribution-guide-2026", title: "Track AI Search Sales: E-Commerce Attribution Guide (2026)", excerpt: "Learn how to track AI search sales for e-commerce. Stop relying on vanity metrics and attribute real revenue to ChatGPT and Google AI today.", date: "Jul 2026", read_time: "5 min read" },
  { slug: "how-to-get-chatgpt-to-recommend-your-e-commerce-store-2026", title: "How to Get ChatGPT to Recommend Your E-Commerce Store (2026)", excerpt: "Learn how to get your e-commerce store recommended by ChatGPT. Optimize your schema, product feeds, and content for AI search engines today.", date: "Jul 2026", read_time: "6 min read" },
  { slug: "how-to-build-e-commerce-product-comparisons-for-ai-2026", title: "How to Build E-Commerce Product Comparisons for AI (2026)", excerpt: "Learn how to structure e-commerce product comparisons for AI to get cited by ChatGPT and Google. Optimize your 'vs' pages to drive premium sales.", date: "Jul 2026", read_time: "5 min read" },
  { slug: "google-ads-vs-aeo-best-e-commerce-roi-in-2026", title: "Google Ads vs AEO: Best E-Commerce ROI in 2026", excerpt: "Compare Google Ads vs AEO for premium e-commerce. Discover why renting traffic is squeezing margins and how to build compounding, owned AI visibility.", date: "Jul 2026", read_time: "7 min read" },
  { slug: "aeo-for-designer-lighting-2026-organic-sales-guide", title: "AEO for Designer Lighting: 2026 Organic Sales Guide", excerpt: "Learn how to use AEO for designer lighting to get recommended by ChatGPT and Google AI without paid ads. Book a call to build your organic engine.", date: "Jul 2026", read_time: "6 min read" },
  { slug: "how-care-and-setup-guides-capture-ai-search-traffic-2026", title: "How Care and Setup Guides Capture AI Search Traffic (2026)", excerpt: "Learn how care and setup guides help capture AI search traffic. See how structured, question-based content earns citations from ChatGPT and Google AI.", date: "Jun 2026", read_time: "5 min read" },
  { slug: "what-is-answer-engine-optimization-for-e-commerce-2026", title: "What is Answer Engine Optimization for E-Commerce (2026)?", excerpt: "Answer Engine Optimization explained for e-commerce: what it is, how it differs from SEO, and why premium stores need it to get recommended by AI.", date: "Jun 2026", read_time: "6 min read" },
  { slug: "how-to-track-organic-e-commerce-sales-2026-roi-guide", title: "How to Track Organic E-Commerce Sales: 2026 ROI Guide", excerpt: "A practical guide to tracking organic e-commerce sales and proving real ROI, instead of guessing at which content actually drives revenue.", date: "Jun 2026", read_time: "6 min read" },
  { slug: "writing-ecommerce-buying-guides-for-ai-search-2026", title: "Writing Ecommerce Buying Guides for AI Search (2026)", excerpt: "Learn how to write e-commerce buying guides that AI search engines actually cite, with direct-answer structure and comparison formatting.", date: "Jun 2026", read_time: "5 min read" },
  { slug: "buying-guides-for-ecommerce-seo-best-formats-2026", title: "Buying Guides for Ecommerce SEO: Best Formats (2026)", excerpt: "The buying-guide formats that perform best for e-commerce SEO in 2026, and how to structure them for both classic search and AI answer engines.", date: "Jun 2026", read_time: "5 min read" },
  { slug: "optimize-ecommerce-product-pages-for-answer-engines-2026", title: "Optimize Ecommerce Product Pages for Answer Engines (2026)", excerpt: "How to optimize e-commerce product pages so answer engines can actually extract and cite your data, from schema to synchronized availability.", date: "Jun 2026", read_time: "6 min read" },
  { slug: "aeo-vs-seo-for-e-commerce-2026-premium-brand-guide", title: "AEO vs SEO for E-Commerce: 2026 Premium Brand Guide", excerpt: "AEO vs SEO for premium e-commerce brands: what each actually optimizes for, and why 2026 stores need both working together.", date: "Jun 2026", read_time: "7 min read" },
  { slug: "seo-vs-paid-ads-for-e-commerce-lowering-cac-in-2026", title: "SEO vs Paid Ads for E-Commerce: Lowering CAC in 2026", excerpt: "A cost comparison of SEO vs paid ads for e-commerce customer acquisition, and how to actually lower CAC in 2026 instead of just renting more traffic.", date: "May 2026", read_time: "6 min read" },
  { slug: "aeo-vs-seo-for-e-commerce-2026-premium-store-guide", title: "AEO vs SEO for E-Commerce: 2026 Premium Store Guide", excerpt: "A premium store's guide to AEO vs SEO in 2026: where they overlap, where they diverge, and which to prioritize first.", date: "May 2026", read_time: "6 min read" },
  { slug: "aeo-for-electronics-retailers-get-ai-recommendations-2026", title: "AEO for Electronics Retailers: Get AI Recommendations (2026)", excerpt: "How electronics retailers can use AEO to get recommended by ChatGPT and Google AI, from spec-sheet schema to comparison content.", date: "May 2026", read_time: "6 min read" }
];

// GENERATOR_PRESETS: autofill options for the Topic/Description/Keywords form.
// Their input values are the real davonex.com post topics above (titles and
// excerpts copied verbatim into topic/description), since davonex.com is an
// actual client this real pipeline serves; keywords are derived from each
// post's own title. Picking one and generating adds exactly one fabricated
// demo post to the Blog Library for 15 minutes (see app.js), clearly marked,
// never a claim that the real pipeline generated it live.
const GENERATOR_PRESETS = [
  {
    id: "chatgpt-recommend",
    chip: "How to Get ChatGPT to Recommend Your Store",
    topic: "How to Get ChatGPT to Recommend Your E-Commerce Store (2026)",
    description: "Learn how to get your e-commerce store recommended by ChatGPT. Optimize your schema, product feeds, and content for AI search engines today.",
    keywords: "ai search recommendations, chatgpt shopping, product schema, answer engine optimization"
  },
  {
    id: "aeo-designer-lighting",
    chip: "AEO Organic Sales Guide",
    topic: "AEO for Designer Lighting: 2026 Organic Sales Guide",
    description: "Learn how to use AEO for designer lighting to get recommended by ChatGPT and Google AI without paid ads. Book a call to build your organic engine.",
    keywords: "answer engine optimization, organic ai visibility, designer lighting seo"
  },
  {
    id: "google-ads-vs-aeo",
    chip: "Google Ads vs AEO",
    topic: "Google Ads vs AEO: Best E-Commerce ROI in 2026",
    description: "Compare Google Ads vs AEO for premium e-commerce. Discover why renting traffic is squeezing margins and how to build compounding, owned AI visibility.",
    keywords: "google ads vs aeo, ecommerce roi, paid ads alternative"
  },
  {
    id: "buying-guides",
    chip: "Writing Buying Guides for AI",
    topic: "Writing Ecommerce Buying Guides for AI Search (2026)",
    description: "Learn how to write e-commerce buying guides that AI search engines actually cite, with direct-answer structure and comparison formatting.",
    keywords: "buying guide content, ai search citations, comparison page structure"
  }
];

const DEMO = {
  credits: 1200,
  packages: [
    { name: "Basic", price: "$9.99/mo", credits: "500 credits", note: "Perfect for individuals and small projects" },
    { name: "Pro", price: "$24.99/mo", credits: "1,500 credits", note: "Great for growing businesses", featured: true },
    { name: "Enterprise", price: "$79.99/mo", credits: "5,000 credits", note: "For high-volume content creators" }
  ],
  client: {
    name: "Aurora Fitness Co. (invented, illustrative client)",
    updates: [
      { date: "2026-06-01", text: "Published 4 blog posts this month, all indexed within 48 hours." },
      { date: "2026-05-15", text: "Organic traffic up 12% month over month across the blog." },
      { date: "2026-05-01", text: "Completed keyword research refresh for Q2 content plan." }
    ]
  },
  facts: {
    tests: "132/132 tests passing",
    coverage: "56% coverage",
    stack: "Django 4.2, PostgreSQL 18, Docker, Gunicorn, nginx"
  }
};
