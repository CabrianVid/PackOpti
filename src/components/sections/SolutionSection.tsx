import Image from "next/image";

const STEPS = [
  {
    n: 1,
    title: "Import Data",
    body: "Automated sync with your ERP/WMS to fetch item dimensions, weight, and order details.",
  },
  {
    n: 2,
    title: "Calculate Optimization",
    body: "Our algorithms simulate millions of combinations to find the perfect box and orientation.",
  },
  {
    n: 3,
    title: "Show Operator Instructions",
    body: "Step-by-step 3D visualizations guide packers to the optimized result in seconds.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,28,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,28,48,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 0%, transparent 72%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(254,166,25,0.08) 1px, transparent 1px), linear-gradient(150deg, rgba(254,166,25,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 30% 40%, black 0%, transparent 55%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 30% 40%, black 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-lg">
            <Image
              src="/images/plan.png"
              alt="3D Packing Workflow"
              width={1200}
              height={700}
              className="h-[520px] w-full object-cover object-center"
              priority={false}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-container/85 via-primary-container/30 to-transparent p-8">
              <div className="flex w-full gap-4">
                <div className="flex-1 rounded border border-outline-variant bg-surface p-4 text-center">
                  <span className="text-label-caps block font-bold text-outline">STEP 01</span>
                  <span className="font-headline-sm text-on-surface">IMPORT</span>
                </div>
                <div className="flex-1 rounded border border-primary-container/20 bg-secondary-container p-4 text-center">
                  <span className="text-label-caps block font-bold text-primary-container/60">
                    STEP 02
                  </span>
                  <span className="font-headline-sm text-primary-container">CALCULATE</span>
                </div>
                <div className="flex-1 rounded border border-outline-variant bg-surface p-4 text-center">
                  <span className="text-label-caps block font-bold text-outline">STEP 03</span>
                  <span className="font-headline-sm text-on-surface">OPERATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 space-y-8 lg:order-2">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            OptiBox calculates the best packing plan before the order reaches the packing table.
          </h2>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-container font-bold text-primary-container">
                  {s.n}
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-on-surface">{s.title}</h4>
                  <p className="text-on-surface-variant">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
