# Zharfan Hakim — Portfolio

Personal portfolio website for Zharfan Hakim, Full-Stack Engineer.

## About

This portfolio showcases selected professional work, AI-powered applications,
and full-stack products. It is designed for Japanese recruiters and engineering
managers, with English and Japanese content.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Structure

- `app/page.tsx` — Home page with Hero, Selected Work, Experience, Stack, Approach, About, and Contact sections.
- `app/work/[project]/page.tsx` — Case study pages for Blueprint Analysis, Chakra Reader, and Sake World.
- `components/layout/` — Header, Footer, and LocaleProvider.
- `components/sections/` — Homepage sections.
- `components/work/` — Project card and case study components.
- `lib/` — Content data (`projects.ts`, `site.ts`), types, and metadata utilities.

## Notes

- Minimal, typography-driven design with a monochrome/restrained palette.
- Subtle motion that supports comprehension, not the main attraction.
- English first with Japanese support.
- No skill percentages, generic copy, or decorative animations.
