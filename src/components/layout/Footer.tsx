import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto grid w-full max-w-max-width grid-cols-2 gap-gutter px-margin-mobile py-12 md:grid-cols-4 md:px-margin-desktop lg:grid-cols-6">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="OptiBox Logo" width={24} height={24} />
            <span className="font-headline-sm text-headline-sm font-bold text-secondary-container">
              OptiBox
            </span>
          </div>
          <p className="pr-8 text-on-surface-variant">
            Engineered for Industrial Precision. The leading platform for automated cartonization
            and logistics optimization.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Platform</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                3D Optimizer
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                API Docs
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Solutions</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                E-commerce
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                3PL Logistics
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Resources</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                EU Regulations
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                Webinars
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-label-caps text-label-caps font-bold text-on-surface">Legal</h5>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-secondary-container">
                Legal Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-6 text-center">
        <p className="font-label-caps px-margin-mobile text-[10px] text-outline">
          © 2024 OptiBox Logistics Systems. Engineered for Industrial Precision.
        </p>
      </div>
    </footer>
  );
}
