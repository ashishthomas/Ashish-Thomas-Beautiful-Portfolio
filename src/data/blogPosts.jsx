// src/data/blogPosts.jsx
export const blogPosts = [
  {
    id: 1,
    title: "Why I Moved from CRA to Vite: Performance Gains Explained",
    date: "September 10, 2025",
    excerpt:
      "Vite changed the way I build React apps. Here’s why it’s better than Create React App in every way.",
    image:
      "/images/1. Why I Moved from CRA to Vite Performance Gains Explain.png",
    content: `
      Switching from Create React App (CRA) to Vite was one of the best development decisions I made.
      Vite offers instant server startup, faster HMR, lighter builds and superior DX.
      I noticed project boot time drop from ~25s to under 1s.

      If you're still using CRA — try Vite. The migration takes minutes and the performance gains are huge.
    `,
  },

  {
    id: 2,
    title:
      "How I Improved Page Performance Using React Suspense + Lazy Loading",
    date: "September 02, 2025",
    excerpt:
      "Lazy loading reduces bundle size and improves page responsiveness. Here’s how I implemented it.",
    image:
      "/images/2. How I Improved Page Performance Using React Suspense + Lazy Loading.png",
    content: `
      Large bundles slow down pages, especially on low bandwidth networks.
      I used React.lazy + Suspense to load heavy components only when required.

      Example use cases:
      ✅ Dashboard charts loaded on demand
      ✅ Modal content loaded when opened
      ✅ Admin panel loaded on navigation

      Result? Time-to-interactive improved by ~40% and Lighthouse score increased.
    `,
  },

  {
    id: 3,
    title: "Tailwind vs Styled Components — What I Prefer and Why",
    date: "August 25, 2025",
    excerpt:
      "Both styling solutions are popular. Here's how I judge them depending on the project.",
    image:
      "/images/3. Tailwind vs Styled Components — What I Prefer and Why.png",
    content: `
      Tailwind helps me build fast with utility-driven classes. Perfect for quick UI iteration.
      Styled Components gives more flexibility for component-level styling and is better for design systems.

      My take:
      - Tailwind → Rapid UI dev, simpler, predictable styling
      - Styled Components → Better isolation, theming + reusable patterns

      For most personal + startup projects, Tailwind is my go-to.
    `,
  },

  {
    id: 4,
    title: "State Management: When to Use Redux, Zustand, or Context API",
    date: "August 18, 2025",
    excerpt:
      "Choosing a state manager depends on app complexity. Here’s what works best for me.",
    image:
      "/images/4. State Management When to Use Redux, Zustand, or Cntext API.png",
    content: `
      Not every app needs Redux. Most small-to-medium apps work well with Context API or Zustand.

      ✅ Zustand — Small, simple, scalable; great DX
      ✅ Redux Toolkit — Powerful, predictable, enterprise structure
      ✅ Context API — Lightweight, good for global theme/auth

      Recommendation:
      - Simple UI state → Context
      - Mid-scale dashboards → Zustand
      - Large enterprise → Redux Toolkit
    `,
  },

  {
    id: 5,
    title: "How I Optimized Images & Fonts to Boost Core Web Vitals",
    date: "August 10, 2025",
    excerpt:
      "A few simple optimizations took my Lighthouse score from 79 → 95.",
    image:
      "/images/5. How I Optimized Images & Fonts to Boost Core Web Vitals.png",
    content: `
      Performance isn't just about code — assets matter too.

      Key optimizations:
      ✅ Used next-gen images (WebP)
      ✅ Added lazy loading for media
      ✅ Reduced custom fonts → used system fonts
      ✅ Preloaded important assets
      ✅ Used responsive image sets

      Result:
      LCP and CLS drastically improved, boosting SEO and UX.
    `,
  },
  {
    id: 6,
    title: "React Query: The Missing Layer Between Frontend & API",
    date: "August 02, 2025",
    excerpt:
      "React Query transformed how I handled API calls — no more manual loaders, caching, or repeated fetch logic.",
    image:
      "/images/6. React Query The Missing Layer Between Frontend & API.png",
    content: `
    Before React Query, I used useEffect + fetch/axios for every API request.
    It worked, but managing loading states, caching, refetching & background updates required boilerplate.

    After moving to React Query:
    ✅ Automatic caching & data syncing
    ✅ Request deduplication
    ✅ Refetch-on-focus keeps UI fresh
    ✅ Built-in retry + error states
    ✅ Supports infinite queries & pagination

    It's now my default API data tool unless the project requires a global enterprise store like Redux Toolkit.
  `,
  },
];
