import Image from "next/image";
import Link from "next/link";

const footerLinkClass = "transition-colors hover:text-secondary-container";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto grid w-full max-w-max-width grid-cols-2 gap-gutter px-margin-mobile py-12 md:grid-cols-4 md:px-margin-desktop lg:grid-cols-6">
        <div className="col-span-2 space-y-4">
          <Link href="/" className="inline-flex items-center" aria-label="OptiBox home">
            <Image
              src="/images/OptiB.png"
              alt="OptiBox"
              width={140}
              height={34}
              className="h-7 w-auto"
            />
          </Link>
          <p className="pr-8 text-on-surface-variant">
            Engineered for Industrial Precision. The leading platform for automated cartonization
            and logistics optimization.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Platform</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <Link href="/platform" className={footerLinkClass}>
                3D Optimizer
              </Link>
            </li>
            <li>
              <Link href="/integrations" className={footerLinkClass}>
                API Docs
              </Link>
            </li>
            <li>
              <Link href="/integrations" className={footerLinkClass}>
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Solutions</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <Link href="/platform" className={footerLinkClass}>
                E-commerce
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className={footerLinkClass}>
                Manufacturing
              </Link>
            </li>
            <li>
              <Link href="/integrations" className={footerLinkClass}>
                3PL Logistics
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Resources</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <Link href="/ppwr" className={footerLinkClass}>
                EU Regulations
              </Link>
            </li>
            <li>
              <Link href="/results" className={footerLinkClass}>
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-6 text-center">
        <p className="font-label-caps px-margin-mobile text-[10px] text-outline">
          © 2025 OptiBox Logistics Systems. Engineered for Industrial Precision.
        </p>
      </div>
    </footer>
  );
}
