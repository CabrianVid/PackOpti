export const NAV_SCROLL_OFFSET = 112;

export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
