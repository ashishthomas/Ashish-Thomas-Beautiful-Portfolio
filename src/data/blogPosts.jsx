// src/data/blogPosts.jsx
export const blogPosts = [
  {
    id: 1,
    title: "React 19.2 — What’s New and Why It’s a Game-Changer",
    date: "October 1, 2025",
    excerpt:
      "React 19.2 introduces major DX and performance improvements — including Actions API, Server Components stability, and smarter hydration.",
    image: "/images/1. React 19.2 Whats New and Why Its a Game Changer.png",
    content: `
    React 19.2 brings some of the biggest improvements since the introduction of Hooks.
    The update focuses on **developer experience**, **faster hydration**, and **simpler data mutations**.

    🔹 **1. Actions API (New Data Mutation Pattern)**
    The new \`useActionState\` and \`action\` utilities simplify async form submissions.
    Instead of handling loading, error, and success manually — React manages it for you.

    Example:
    \`\`\`jsx
    const [state, action] = useActionState(async (prev, formData) => {
      const res = await saveData(formData);
      return res.success ? "✅ Saved!" : "❌ Failed!";
    });

    <form action={action}>
      <input name="title" />
      <button type="submit">Save</button>
    </form>
    \`\`\`

    🔹 **2. Server Components Now Stable**
    React Server Components (RSC) are officially stable in 19.2.
    They allow rendering part of your UI on the server while keeping the rest interactive on the client — improving TTFB and performance.

    🔹 **3. Enhanced Hydration**
    React 19.2 optimizes hydration for streaming and concurrent rendering.
    It now supports *partial hydration* — React hydrates visible parts first for faster interactivity.

    🔹 **4. Built-in Asset Loading API**
    The new \`<link preload />\` and \`<img fetchpriority="high" />\` integrations make asset loading automatic in React 19.2, improving Lighthouse and Core Web Vitals.

    🔹 **5. New Compiler Under the Hood**
    The upcoming React Compiler helps eliminate unnecessary re-renders by analyzing dependency patterns at build time — without writing memo() everywhere.

    ⚡ **Bottom Line**
    React 19.2 focuses on *performance and simplicity*. 
    You get faster rendering, cleaner data flows, and a much smoother DX — setting the stage for React 20.

    🚀 If you haven’t upgraded yet, now’s the perfect time to explore what React 19.2 brings to your projects.
  `,
  },

  {
    id: 2,
    title: "Why I Moved from CRA to Vite: Performance Gains Explained",
    date: "September 10, 2025",
    excerpt:
      "Vite changed the way I build React apps. Here’s why it’s better than Create React App in every way.",
    image:
      "/images/2. Why I Moved from CRA to Vite Performance Gains Explain.png",
    content: `
      Switching from Create React App (CRA) to Vite was one of the best development decisions I made.
      Vite offers instant server startup, faster HMR, lighter builds and superior DX.
      I noticed project boot time drop from ~25s to under 1s.

      If you're still using CRA — try Vite. The migration takes minutes and the performance gains are huge.
    `,
  },

  {
    id: 3,
    title:
      "How I Improved Page Performance Using React Suspense + Lazy Loading",
    date: "September 02, 2025",
    excerpt:
      "Lazy loading reduces bundle size and improves page responsiveness. Here’s how I implemented it.",
    image:
      "/images/3. How I Improved Page Performance Using React Suspense + Lazy Loading.png",
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
    id: 4,
    title: "Tailwind vs Styled Components — What I Prefer and Why",
    date: "August 25, 2025",
    excerpt:
      "Both styling solutions are popular. Here's how I judge them depending on the project.",
    image:
      "/images/4. Tailwind vs Styled Components — What I Prefer and Why.png",
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
    id: 5,
    title: "State Management: When to Use Redux, Zustand, or Context API",
    date: "August 18, 2025",
    excerpt:
      "Choosing a state manager depends on app complexity. Here’s what works best for me.",
    image:
      "/images/5. State Management When to Use Redux, Zustand, or Cntext API.png",
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
    id: 6,
    title: "How I Optimized Images & Fonts to Boost Core Web Vitals",
    date: "August 10, 2025",
    excerpt:
      "A few simple optimizations took my Lighthouse score from 79 → 95.",
    image:
      "/images/6. How I Optimized Images & Fonts to Boost Core Web Vitals.png",
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
    id: 7,
    title: "React Query: The Missing Layer Between Frontend & API",
    date: "August 02, 2025",
    excerpt:
      "React Query transformed how I handled API calls — no more manual loaders, caching, or repeated fetch logic.",
    image:
      "/images/7. React Query The Missing Layer Between Frontend & API.png",
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
