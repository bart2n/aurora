# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page marketing/lead-gen site for "Skyflame" (Binghatti), a Dubai real-estate development. React 19 + Vite + Tailwind v4 frontend, with a small Express + MySQL backend for capturing inquiry leads and emailing the sales manager.

## Commands

```bash
npm run dev      # Vite dev server (frontend only, http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview the production build
npm run lint     # ESLint over the whole repo
npm run server   # Start the Express API + serve dist/ (http://localhost:5000)
npm start        # Alias for `npm run server`
```

There is no test suite in this repo.

To develop against the real API, run both processes: `npm run server` (port 5000) and `npm run dev` (port 5173) in separate terminals. Vite proxies `/api/*` to `http://localhost:5000` (see [vite.config.js](vite.config.js)).

The backend expects a `.env` file (not committed) with: `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`, `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, `EMAIL_PASS`, `MANAGER_EMAIL`, `PORT`. The MySQL schema (`leads` table) is defined in [db.sql](db.sql).

## Architecture

- **Frontend** ([src/App.jsx](src/App.jsx)) is a single stateful page composed of section components rendered in a fixed order (Navbar → Hero → Overview → Towers → Units → Amenities → Location → InquiryForm → Footer → ContactButtons), plus overlay modals (PhoneModal, CollectionModal, CategoryPlansModal, LegalModal, Notification). All modal/menu state lives in `App.jsx` and is passed down as props — there is no router, context, or global store.
- **Content is data-driven**: copy, images, and structured content (contact info, amenities list, hero image paths, tower "collections", unit type galleries) live in [src/constants/data.jsx](src/constants/data.jsx); legal copy lives in [src/constants/legalTexts.jsx](src/constants/legalTexts.jsx). Prefer editing these constants over hardcoding strings in components. Image paths are built with `` `${import.meta.env.BASE_URL}filename.ext` `` and reference files in [public/](public/).
- **Backend** ([server.js](server.js)) is a single-file Express app exposing `/api/features` (static JSON) and `/api/lead` (POST — validates against duplicate email/phone in `leads`, inserts the row via a `mysql2` pool, and fires an email to `MANAGER_EMAIL` via `nodemailer` without awaiting it). In production it also serves the built `dist/` folder and falls back to `index.html` for any unmatched route (SPA hosting).
- **Known frontend/backend mismatch**: [InquiryForm.jsx](src/components/InquiryForm.jsx) currently POSTs to `` `${import.meta.env.BASE_URL}api/lead.php` ``, while the Express route is `/api/lead` (no `.php`, and not prefixed by `BASE_URL`). Check which one is current before assuming the inquiry form works end-to-end against `server.js`.
- Styling is Tailwind v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 is config-less by default); animations use `framer-motion`; icons from `lucide-react`.
