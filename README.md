# Kunal Pasad — Personal Portfolio

A modern, responsive personal portfolio built with Vite, React, and TypeScript. It showcases projects, experience, skills, and contact information using a library of reusable UI components and small, tasteful animations.

Live demo
- https://kunalpasad.vercel.app

Key features
- Sectioned single‑page site: Home, About, Experience, Projects, Services, Skills, Contact
- Responsive and accessible components
- Reusable UI primitives under `src/components/ui`
- Lightweight scroll/entry animations via custom hooks in `src/hooks`
- Tailwind CSS for fast, consistent styling

Tech stack
- Vite (dev server + build)
- React + TypeScript
- Tailwind CSS + PostCSS
- Optional runtimes: npm, pnpm, or Bun

Quick Start

Prerequisites
- Node.js 18+ or Bun

Install (npm)
```bash
npm install
```

Run development server
```bash
npm run dev
```

Build for production and preview
```bash
npm run build
npm run preview
```

If you prefer Bun
```bash
bun install
bun run dev
```

Project structure (high level)
- `src/` — application source
	- `src/components/` — page sections and shared components (About, Contact, Hero, Projects, etc.)
	- `src/components/ui/` — UI primitives and controls
	- `src/pages/` — route pages (`Index.tsx`, `NotFound.tsx`)
	- `src/hooks/` — custom hooks (`useScrollAnimation`, `use-mobile`, etc.)
	- `src/assets/` — images and static assets
- `public/` — static files served as-is
- `tailwind.config.ts`, `postcss.config.js`, `vite.config.ts` — build and styling config

Deployment
- Recommended: Vercel or Netlify for zero-config deployments (connect your repo and point to the default build command `npm run build`).
- GitHub Pages: build to `dist/` and deploy with a GitHub Action or `gh-pages` if desired.

Customizing the site
- Update content and layout in `src/pages/Index.tsx` and the components in `src/components/`.
- Replace or add assets in `public/` and `src/assets/`.
- Modify Tailwind tokens in `tailwind.config.ts` and styles in `src/index.css`.

Adding projects
- Add project data (you may keep a JSON, TS file, or add directly to the components) and update the `Projects` component in `src/components/Projects.tsx`.

Development tips
- Use your browser devtools and Vite's fast refresh for quick iteration.
- Keep UI primitives in `src/components/ui/` to encourage reuse.

Contributing
- This repo is maintained as a personal portfolio.

Contact
- Author: Kunal Pasad
- GitHub: https://github.com/PasadKunal
