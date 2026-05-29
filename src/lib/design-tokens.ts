/**
 * PackOpti design tokens (single source of truth for non-Tailwind consumers).
 *
 * Tailwind already exposes these via `tailwind.config.ts`. Use this module
 * only when you need a token value in TypeScript code (e.g. inline styles in
 * the hero animation, SVG fill colors, dynamic theming).
 */

export const colors = {
  primary: "#000000",
  primaryContainer: "#131b2e",
  primaryFixed: "#dae2fd",
  primaryFixedDim: "#bec6e0",

  secondary: "#855300",
  secondaryContainer: "#fea619",
  secondaryFixed: "#ffddb8",
  secondaryFixedDim: "#ffb95f",

  surface: "#f8f9ff",
  surfaceContainer: "#e5eeff",
  surfaceContainerLow: "#eff4ff",
  surfaceContainerHigh: "#dce9ff",
  surfaceContainerHighest: "#d3e4fe",

  onSurface: "#0b1c30",
  onSurfaceVariant: "#45464d",
  onPrimaryContainer: "#7c839b",

  outline: "#76777d",
  outlineVariant: "#c6c6cd",

  error: "#ba1a1a",
} as const;

export const spacing = {
  marginMobile: "16px",
  marginDesktop: "32px",
  gutter: "16px",
  maxWidth: "1440px",
} as const;

export const fonts = {
  body: "var(--font-inter), Inter, sans-serif",
  headline: "var(--font-hanken), Hanken Grotesk, sans-serif",
  mono: "var(--font-jetbrains), JetBrains Mono, monospace",
} as const;
