# BYB Films

Production-ready marketing site for BYB Films — Next.js 14 (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis smooth scroll, and React Three Fiber for the 3D showcase.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Replacing placeholder media

All placeholder images live in `public/media/*.svg` (generated frames with labels). Every project's media is defined in [src/lib/projects.ts](src/lib/projects.ts) — replace `thumbnail`, `heroImage`, `heroVideo`, `images`, `screenshots`, and `video` with real asset paths (JPG/PNG/WebP/AVIF for stills, MP4/WebM for video). No component changes are required; sizes and aspect ratios are handled by the layout.

To add a new project, add an entry to the `projects` array in `src/lib/projects.ts` — it will automatically appear in `/work`, the homepage "Recent Work" section, and get its own `/work/[slug]` case-study page with SEO metadata and prev/next navigation.

## Structure

- `src/components` — Navbar, MobileMenu, Hero, About, Services, Team, WorkFilter, ProjectCard, ProjectGallery, ThreeDShowcase, ContactForm, Footer, CustomCursor, PageTransition, SmoothScroll, RevealText, CinematicMedia
- `src/app` — route pages (`/`, `/services`, `/work`, `/work/[slug]`, `/connect`), `sitemap.ts`, `robots.ts`
- `src/lib` — `projects.ts` (project data), `types.ts`, `utils.ts` (services/team/socials copy)

## CMS migration

`src/lib/projects.ts` exports a typed `Project[]` array and `getProjectBySlug` / `getAdjacentProjects` helpers. To connect a CMS (Sanity, Strapi, WordPress headless), replace the static array with a fetch call that returns data matching the `Project` type in `src/lib/types.ts` — no page or component code needs to change.

## Known follow-ups

- `npm audit` flags advisories in Next.js 14's bundled sub-dependencies (postcss, etc.). The project is pinned to the latest patched Next 14.2.x release; a future migration to Next 15 would close the remaining bundled advisories but requires a compatibility pass and is left as a deliberate follow-up rather than bundled into this build.
- Real showreel/project video files, 3D assets and team photography should replace the SVG placeholders in `public/media/` before launch.
