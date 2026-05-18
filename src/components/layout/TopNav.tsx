import Image from "next/image";
import { ContactSalesButton } from "@/components/ui/ContactSalesButton";

export function TopNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant bg-surface/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-max-width items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="OptiBox Logo"
            width={48}
            height={48}
            priority
          />
          <span className="font-headline-md text-headline-md font-bold text-secondary-container">
            OptiBox
          </span>
        </div>
        <div className="hidden gap-8 md:flex">
          <a
            href="#"
            className="font-label-caps text-label-caps border-b-2 border-secondary-container pb-1 font-bold text-secondary-container"
          >
            Platform
          </a>
          <a
            href="#"
            className="font-label-caps text-label-caps font-medium text-on-surface-variant transition-colors duration-200 hover:text-secondary-container"
          >
            Solutions
          </a>
          <a
            href="#"
            className="font-label-caps text-label-caps font-medium text-on-surface-variant transition-colors duration-200 hover:text-secondary-container"
          >
            Resources
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-label-caps text-label-caps hidden px-4 py-2 font-medium text-on-surface transition-colors hover:text-secondary-container md:block">
            Login
          </button>
          <ContactSalesButton variant="secondary" size="md">
            Book a Demo
          </ContactSalesButton>
        </div>
      </div>
    </nav>
  );
}
