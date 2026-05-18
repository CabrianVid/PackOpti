---
name: optibox-design-system
description: OptiBox marketing-site design system — brand tokens (colors, fonts, spacing), component inventory under `src/components/`, section composition patterns, CTA/modal rules, and animation rules. Use whenever editing or adding sections, components, animations, or styles in the OptiBox Next.js app.
disable-model-invocation: true
---

# OptiBox Design System

Source of truth for the OptiBox marketing site (Next.js 15 + TS + Tailwind). Read this before any design or component change.

## 1. Brand tokens

All tokens live in [`tailwind.config.ts`](../../../tailwind.config.ts) and are mirrored as TS constants in [`src/lib/design-tokens.ts`](../../../src/lib/design-tokens.ts). **Never introduce new hex values.**

### Core colors

| Role                   | Token class                  | Hex       |
| ---------------------- | ---------------------------- | --------- |
| Primary (dark navy)    | `bg-primary-container`       | `#131b2e` |
| Primary fixed (light)  | `bg-primary-fixed`           | `#dae2fd` |
| Brand accent (orange)  | `bg-secondary-container`     | `#fea619` |
| Secondary fixed dim    | `bg-secondary-fixed-dim`     | `#ffb95f` |
| Background / surface   | `bg-surface`                 | `#f8f9ff` |
| Surface container low  | `bg-surface-container-low`   | `#eff4ff` |
| Surface container high | `bg-surface-container-high`  | `#dce9ff` |
| Body text              | `text-on-surface`            | `#0b1c30` |
| Muted body text        | `text-on-surface-variant`    | `#45464d` |
| Borders (default)      | `border-outline-variant`     | `#c6c6cd` |
| Borders (strong)       | `border-outline`             | `#76777d` |
| Error                  | `text-error` / `bg-error`    | `#ba1a1a` |

### Typography

| Token class            | Family               | Use                                 |
| ---------------------- | -------------------- | ----------------------------------- |
| `font-headline-lg`     | Hanken Grotesk 700   | Section H2 / hero H1                |
| `font-headline-md`     | Hanken Grotesk 600   | Modal titles, large sub-headlines   |
| `font-headline-sm`     | Hanken Grotesk 600   | Card titles                         |
| `font-body-lg`         | Inter 400            | Lead paragraphs                     |
| `font-body-md`         | Inter 400 (implicit) | Default body                        |
| `font-label-caps`      | Inter 600            | All caps button labels and eyebrows |
| `font-mono-data`       | JetBrains Mono 500   | Numeric data only                   |

Pair the family class with the matching size class of the same name (`font-headline-lg text-headline-lg`, etc).

### Spacing & layout

- Page container: `mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop`
- Section vertical rhythm: `py-24` (use `pt-32 pb-20` for the hero only, to clear the fixed nav).
- Grid gap: `gap-gutter` (16px) for card grids, `gap-12` / `gap-16` for two-column layouts.

## 2. Component inventory

```
src/components/
├── layout/
│   ├── TopNav.tsx          Fixed top nav. Right-side CTA uses ContactSalesButton.
│   └── Footer.tsx          6-column footer.
├── sections/
│   ├── Hero.tsx            Two-col hero; right side is <HeroPackAnimation />.
│   ├── ProblemSection.tsx  3-card problem grid on surface-container-low.
│   ├── SolutionSection.tsx 2-col workflow with 3 numbered steps + image.
│   ├── FeatureShowcase.tsx 3 tabbed feature items + right-column screenshot.
│   ├── FeaturesGrid.tsx    8-card capability grid on primary-container (dark).
│   ├── EUArticle.tsx       Long-form article card.
│   ├── BenefitsCards.tsx   4-card centered benefits grid.
│   ├── Integrations.tsx    Pill cloud of ERP names.
│   └── FinalCTA.tsx        Full-bleed orange CTA, opens modal.
├── animations/
│   └── HeroPackAnimation.tsx  Pure-CSS isometric 3D pack scene (no JS).
├── modals/
│   ├── ContactSalesProvider.tsx  React context (open/close/isOpen).
│   └── ContactSalesModal.tsx     Radix Dialog + form + thank-you state.
└── ui/
    ├── Button.tsx            Variants: primary | secondary | outline | dark. Sizes: md | lg | xl.
    └── ContactSalesButton.tsx Thin wrapper around <Button> that calls useContactSales().open().
```

`src/app/page.tsx` is a thin composition file; never inline section markup there.

## 3. Section composition pattern

Every full-width section follows the same shape:

```tsx
export function MySection() {
  return (
    <section className="bg-… py-24">
      <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        {/* optional eyebrow */}
        <span className="text-label-caps font-bold text-secondary-container">EYEBROW</span>
        <h2 className="mt-2 font-headline-lg text-headline-lg text-on-surface">Section title</h2>
        {/* grid or content */}
      </div>
    </section>
  );
}
```

Alternating section backgrounds: `bg-surface` (default) → `bg-surface-container-low` → `bg-primary-container` (dark) → `bg-surface-container` (light). Keep that visual rhythm when adding new sections.

## 4. Modal / CTA rule (hard)

Every CTA that should open the Contact Sales dialog **must** use `<ContactSalesButton>` from `src/components/ui/ContactSalesButton.tsx`. The button is wired to the `ContactSalesProvider` mounted once in `src/app/layout.tsx`.

- Wrong: `<button onClick={() => setOpen(true)}>Book a Demo</button>`
- Wrong: `<Button onClick={openModal}>Contact Sales</Button>`
- Right: `<ContactSalesButton variant="primary" size="lg">BOOK A DEMO</ContactSalesButton>`

For non-modal CTAs (e.g. "See how it works", "Learn more"), use `<Button>` directly.

## 5. Animation rule

- All keyframes live in [`src/app/globals.css`](../../../src/app/globals.css) under `@layer components`, prefixed (e.g. `hero-iso-*`).
- All visual transitions, transforms, and opacity changes are CSS — no animation libraries (no GSAP, Framer Motion, Lottie).
- React may parameterize an animation via inline CSS custom properties (`style={{ "--ix": "10px" } as CSSProperties}`) and `animationDelay`, and may re-key a wrapper with `key={iter}` on a fixed interval to restart a loop and rotate the values shown inside it. The hero (`HeroPackAnimation.tsx`) is the canonical example.
- Always include a `@media (prefers-reduced-motion: reduce)` block that disables the animation, clears the JS interval, and snaps to the resting state.

## 6. Assets

- All static images in `public/images/`. Reference via `next/image`.
- Logo: `/images/logo.png`. Dashboard screenshot used by `FeatureShowcase` and `SolutionSection`: `/images/dashboard.png`.

## 7. When in doubt

1. Find the closest existing component that does something similar.
2. Copy its container + spacing + typography classes.
3. Only deviate when the user explicitly asks.
