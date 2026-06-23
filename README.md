## Filem Apik – React Movie Info App

A movie search and details app built with React, consuming the OMDb API to let users search films and view detailed information (director, writer, genre, plot, rating, poster) in a modal overlay.

**Key features:**

- Live movie search via OMDb API with Enter-key and button-triggered queries
- Redux Toolkit for global state (search results, selected movie)
- TanStack Query (React Query) for data fetching, caching, and loading/error states
- Custom star-rating display converted from IMDb's 10-point scale
- Modal-style detail view with click-outside-to-close behavior
- Responsive grid layout (Bootstrap) for search results

**Tech stack:** React 18, Redux Toolkit, React Redux, TanStack Query, React Bootstrap, Vite

**Purpose:** Built to practice integrating a real external API into a React app, alongside global state management (Redux) and modern data-fetching patterns (React Query), rather than just local `useState`/`useEffect` fetching
