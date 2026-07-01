# cristianchiorescu.com

Personal site for **Cristian Chiorescu — Forward-Deployed AI Engineer**.

A fast, accessible, dark-first portfolio built to showcase independent AI work
(agentic systems, MCP integrations, AI developer tooling) and drive contact.

## Tech

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- Tailwind CSS v4 · [next-themes](https://github.com/pacocoursey/next-themes) · lucide-react
- Dynamic OG image via `next/og`, JSON-LD, sitemap & robots
- Deployed on Vercel

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

## Structure

```
src/
├── app/                # routes, layout, metadata, OG image, sitemap, robots
│   └── projects/       # project case studies
├── components/         # UI primitives, sections, site chrome
└── content/            # typed site content (copy, projects, skills)
```

Content is data-driven — edit the files in `src/content/` to update copy,
projects, and skills without touching components.
