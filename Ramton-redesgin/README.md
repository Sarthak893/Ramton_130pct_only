# Ramton React

Vite + React + React Router version of the Ramton homepage & about page.

## Setup
```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Structure
- src/components/Navbar.jsx, Footer.jsx  — shared across routes
- src/pages/Home.jsx, About.jsx          — route components
- src/hooks/useReveal.js                 — scroll-reveal animation hook
- src/index.css                          — all styles (same design system as the static version)
- src/App.jsx                            — routes ("/" and "/about") + scroll-to-hash handling

Deploy the `dist/` folder to Vercel (or just connect the repo — Vercel auto-detects Vite).
