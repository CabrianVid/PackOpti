export const SECTION_PATHS = [
  "platform",
  "how-it-works",
  "ppwr",
  "results",
  "integrations",
  "demo",
  "legal-disclaimer",
] as const;

export type SectionPath = (typeof SECTION_PATHS)[number];

export function isSectionPath(value: string): value is SectionPath {
  return SECTION_PATHS.includes(value as SectionPath);
}

export const NAV_LINKS: ReadonlyArray<{ label: string; href: `/${SectionPath}` }> = [
  { label: "Platform", href: "/platform" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "PPWR", href: "/ppwr" },
];
