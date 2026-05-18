import { HeroPackAnimation } from "@/components/animations/HeroPackAnimation";
import { ContactSalesButton } from "@/components/ui/ContactSalesButton";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="mx-auto max-w-max-width px-margin-mobile pb-20 pt-32 md:px-margin-desktop">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-secondary-container" />
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              NEXT-GEN WAREHOUSE OPTIMIZATION
            </span>
          </div>
          <h1 className="font-headline-lg text-6xl leading-tight text-on-surface md:text-7xl">
            Pack smarter.
            <br />
            Ship cheaper.
            <br />
            Waste less.
          </h1>
          <p className="font-body-lg max-w-xl text-body-lg text-on-surface-variant">
            Seamlessly connect your ERP and WMS to calculate the most efficient packing
            configurations in real-time. Eliminate void fill, reduce dimensional weight costs, and
            automate decision-making at the station.
          </p>
          <div className="flex flex-wrap gap-4">
            <ContactSalesButton variant="primary" size="lg">
              BOOK A DEMO
            </ContactSalesButton>
            <Button variant="outline" size="lg">
              SEE HOW IT WORKS
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <HeroPackAnimation />
        </div>
      </div>
    </section>
  );
}
