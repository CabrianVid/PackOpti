# PackOpti

> Pack smarter. Ship cheaper. Waste less.

Marketing site for PackOpti — built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script              | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Local dev server (hot reload)                    |
| `npm run build`     | Production build                                 |
| `npm run start`     | Run the production build locally                 |
| `npm run lint`      | ESLint (Next.js config + Prettier integration)   |
| `npm run typecheck` | `tsc --noEmit`                                   |
| `npm run format`    | Prettier write (Tailwind class-order plugin on)  |

## Folder map

```
.
├── public/images/             Static assets (logo, dashboard screenshot).
├── src/
│   ├── app/                   Next.js App Router entry (layout, page, globals.css).
│   ├── components/
│   │   ├── layout/            TopNav, Footer.
│   │   ├── sections/          One file per page section.
│   │   ├── animations/        HeroPackAnimation (pure CSS 3D).
│   │   ├── modals/            ContactSalesProvider + ContactSalesModal (Radix).
│   │   └── ui/                Button, ContactSalesButton.
│   └── lib/design-tokens.ts   Brand tokens as TS constants.
├── legacy/                    Archived original (code.html, animation prototype).
├── tailwind.config.ts         Color / font / spacing tokens (single source of truth).
└── .cursor/
    ├── agents/web-designer.md            Project subagent.
    └── skills/optibox-design-system/     Design-system skill.
```

## Design system

All brand tokens, component conventions, modal/CTA rules, and animation rules are documented in [`.cursor/skills/optibox-design-system/SKILL.md`](.cursor/skills/optibox-design-system/SKILL.md). Read it before adding or changing any visual element. The `web-designer` subagent under [`.cursor/agents/web-designer.md`](.cursor/agents/web-designer.md) is configured to consult that skill automatically.

## Contact Sales modal

Any CTA that should open the contact-sales dialog uses `<ContactSalesButton>` from `src/components/ui/ContactSalesButton.tsx`. The provider is mounted once in `src/app/layout.tsx`, so the button works from anywhere in the tree.
