type Problem = {
  icon: string;
  title: string;
  body: string;
};

const PROBLEMS: Problem[] = [
  {
    icon: "straighten",
    title: "Oversized parcels",
    body: "Shipping air is the most expensive mistake in logistics. Dimensional weight pricing penalizes volume over weight.",
  },
  {
    icon: "delete_sweep",
    title: "Empty space & waste",
    body: "Excessive dunnage and oversized boxes drive up material costs and environmental impact unnecessarily.",
  },
  {
    icon: "psychology_alt",
    title: "Manual inconsistencies",
    body: "Leaving packing decisions to individual operators leads to inconsistent results and lack of data oversight.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg mb-4 text-headline-lg text-on-surface">
            Every unnecessary centimeter costs money.
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Inefficient packaging doesn&apos;t just waste space—it compounds costs across your
            entire supply chain.
          </p>
        </div>
        <div className="grid gap-gutter md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="group border border-outline-variant bg-surface p-8 transition-colors hover:border-secondary-container"
            >
              <span className="material-symbols-outlined mb-6 text-4xl text-outline group-hover:text-secondary-container">
                {p.icon}
              </span>
              <h3 className="font-headline-sm mb-4 text-headline-sm text-on-surface">{p.title}</h3>
              <p className="text-on-surface-variant">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
