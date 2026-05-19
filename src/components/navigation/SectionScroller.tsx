"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

type SectionScrollerProps = {
  sectionId: string;
};

export function SectionScroller({ sectionId }: SectionScrollerProps) {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [sectionId]);

  return null;
}
