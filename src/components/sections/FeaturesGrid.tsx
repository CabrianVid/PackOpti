type Capability = {
  icon: string;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: "inventory_2",
    title: "Cartonization",
    body: "Advanced logic to select the smallest possible box from your available inventory.",
  },
  {
    icon: "view_in_ar",
    title: "3D Instructions",
    body: "Clear visual guides for operators to reduce mistakes and training time.",
  },
  {
    icon: "price_check",
    title: "Carrier Comparison",
    body: "Real-time shipping rate calculation based on optimized dimensions.",
  },
  {
    icon: "call_split",
    title: "Multi-parcel Splitting",
    body: "Intelligently split large orders into multiple shipments for lowest total cost.",
  },
  {
    icon: "calculate",
    title: "Cost Calculation",
    body: "Track exact packaging material and labor costs per shipped unit.",
  },
  {
    icon: "square_foot",
    title: "Box Recommendations",
    body: "Data-driven suggestions for adding or removing box sizes in your fleet.",
  },
  {
    icon: "integration_instructions",
    title: "ERP Integration",
    body: "Native connectors for major ERPs and a robust REST API for custom stacks.",
  },
  {
    icon: "eco",
    title: "Sustainability Reporting",
    body: "Measure CO2 reduction through reduced volume and material savings.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-primary-container py-24 text-on-primary-fixed">
      <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        <div className="mb-16">
          <span className="text-label-caps font-bold text-secondary-container">CAPABILITIES</span>
          <h2 className="font-headline-lg mt-2 text-headline-lg">
            Built for real warehouse operations.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="border border-on-primary-fixed-variant bg-surface-container-highest/5 p-6 transition-all hover:bg-surface-container-highest/10"
            >
              <span className="material-symbols-outlined mb-4 text-secondary-container">
                {c.icon}
              </span>
              <h4 className="font-headline-sm mb-2 text-white">{c.title}</h4>
              <p className="text-body-md text-on-primary-container">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
