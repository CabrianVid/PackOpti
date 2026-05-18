type Benefit = {
  icon: string;
  title: string;
  body: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: "trending_down",
    title: "Reduce shipping costs",
    body: "Save up to 15% on carrier fees by minimizing dimensional weight.",
  },
  {
    icon: "layers",
    title: "Reduce material",
    body: "Lower cardboard and dunnage consumption by choosing the right fit.",
  },
  {
    icon: "rule",
    title: "Standardize instructions",
    body: "Ensure every operator packs every order to the same high standard.",
  },
  {
    icon: "analytics",
    title: "Improve visibility",
    body: "Get full data transparency on your packing performance and costs.",
  },
];

export function BenefitsCards() {
  return (
    <section className="bg-surface-container py-24">
      <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg mb-4 text-headline-lg text-on-surface">
            Lower cost. Less waste. Better packing decisions.
          </h2>
        </div>
        <div className="grid gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="border border-outline-variant bg-surface p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-high">
                <span className="material-symbols-outlined text-secondary-container">{b.icon}</span>
              </div>
              <h4 className="font-headline-sm mb-2">{b.title}</h4>
              <p className="text-body-md text-on-surface-variant">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
