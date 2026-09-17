# 🎬 MovieExplorer

A responsive Movie/Show Explorer built with **React + Vite + Tailwind CSS**, using the free **[TVMaze API](https://www.tvmaze.com/api)** as the data source.

Built on the same project setup pattern as [Next-Level-Weather-App](https://github.com/Apollo-Level2-Web-Dev/Next-Level-Weather-App) (Vite + React template, ESLint config) — extended here with `react-router-dom`, Tailwind CSS, a service layer for API calls, and custom hooks for data fetching.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run eslint
```

No API key is required — TVMaze's public API is free and unauthenticated.

---

## 🗂️ Project Structure

```
src/
├── components/        # Reusable, presentation-focused UI pieces
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroBanner.jsx
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── MovieModal.jsx
│   ├── Loader.jsx
│   └── EmptyState.jsx
├── pages/              # Route-level views
│   ├── Home.jsx         # Navbar + Hero + Footer
│   └── Movies.jsx        # Search + Grid + Modal
├── hooks/              # Reusable stateful logic
│   ├── useShows.js       # fetch + loading + error state
│   └── useDebounce.js    # debounces the search input
├── services/           # All network calls live here, isolated from UI
│   └── showService.js    # getAllShows / searchShows / getShowById
├── App.jsx             # Routing (react-router-dom)
├── main.jsx            # Entry point
└── index.css           # Tailwind directives + small global tweaks
```

**Why this structure?** Components stay dumb and reusable, pages compose
them, hooks own state/side-effects, and `services/` is the only layer
that knows about `fetch` and the TVMaze base URL — so swapping APIs
later only touches one file.

---

## ✅ Feature Checklist (from assignment spec)

- **Home Page** — Navbar with brand + nav links + CTA, Hero banner with
  gradient background, heading, description and CTA button, Footer with
  app name/copyright/links.
- **Movie Listing Page (`/movies`)** — Search bar (debounced, hits
  `GET /search/shows?q=`) with the grid updating live; falls back to
  `GET /shows` for the default browse view. Responsive CSS Grid
  (1 → 2 → 3 → 4 columns).
- **Movie Details Modal** — Opens on "See Details", shows backdrop,
  title, rating, release date, genres, and overview. Closable via the
  `✕` button, the `Close` button, clicking the backdrop, or `Esc`.
- **Responsive Design** — Single column + stacked layout on mobile,
  3–4 column grid on desktop, touch-friendly buttons throughout.

---

## 🔌 API Endpoints Used

| Purpose        | Endpoint                              |
| -------------- | -------------------------------------- |
| Browse all     | `GET /shows?page=0`                    |
| Search by name | `GET /search/shows?q=:query`           |
| Show details   | `GET /shows/:id?embed=cast` (optional) |

---

## 🛠️ Tech Stack

- React 18 + Vite
- React Router DOM (Home / Movies routes)
- Tailwind CSS (custom cinema-dark theme + gold accent)
- TVMaze REST API
