import Image from "next/image";
import Link from "next/link";
import { NavSectionLink } from "@/components/navigation/NavSectionLink";
import { ContactSalesButton } from "@/components/ui/ContactSalesButton";
import { NAV_LINKS } from "@/lib/sections";

const navLinkClass =
  "font-label-caps text-label-caps font-medium text-on-surface-variant transition-colors duration-200 hover:text-secondary-container";

export function TopNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant bg-surface/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-max-width items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <Link href="/" className="inline-flex items-center" aria-label="PackOpti home">
          <Image
            src="/images/OptiB.png"
            alt="PackOpti"
            width={240}
            height={72}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavSectionLink key={link.href} href={link.href} label={link.label} className={navLinkClass} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ContactSalesButton variant="secondary" size="md">
            Book a Demo
          </ContactSalesButton>
        </div>
      </div>
    </nav>
  );
}
