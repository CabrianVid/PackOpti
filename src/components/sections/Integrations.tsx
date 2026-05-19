const INTEGRATIONS = [
  "SAP S/4HANA",
  "ORACLE NETSUITE",
  "MICROSOFT DYNAMICS 365",
  "ODOO",
  "SAGE",
  "CUSTOM REST API",
];

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-28 mx-auto max-w-max-width px-margin-mobile py-24 md:px-margin-desktop">
      <div className="mb-12 text-center">
        <h2 className="font-headline-md mb-8 text-headline-md uppercase tracking-widest text-on-surface-variant">
          Designed to connect with your existing systems.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {INTEGRATIONS.map((name) => (
            <span
              key={name}
              className="font-label-caps text-label-caps cursor-default border border-outline-variant px-6 py-3 font-bold transition-all hover:border-secondary-container"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
