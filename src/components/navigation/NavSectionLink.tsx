"use client";

import Link from "next/link";
import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";
import type { SectionPath } from "@/lib/sections";

type NavSectionLinkProps = {
  href: `/${SectionPath}`;
  label: string;
  className?: string;
};

export function NavSectionLink({ href, label, className }: NavSectionLinkProps) {
  const sectionId = href.slice(1);

  useEffect(() => {
    function onPopState() {
      const path = window.location.pathname.slice(1);
      if (path) {
        scrollToSection(path);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    scrollToSection(sectionId);

    if (window.location.pathname !== href) {
      window.history.pushState(null, "", href);
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}
