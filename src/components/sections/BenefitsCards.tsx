type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  {
    value: "~15%",
    label: "lower shipping spend",
  },
  {
    value: "~13%",
    label: "reduced corrugated usage",
  },
  {
    value: "~22%",
    label: "less air shipped",
  },
];

function DotField() {
  const dots: Array<{ cx: number; cy: number; r: number; o: number }> = [];
  for (let row = 0; row < 18; row += 1) {
    for (let col = 0; col < 22; col += 1) {
      const cx = 40 + col * 18;
      const cy = 30 + row * 16;
      const dx = cx - 220;
      const dy = cy - 150;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 168) continue;
      dots.push({
        cx,
        cy,
        r: dist < 120 ? 2.2 : 1.6,
        o: dist < 90 ? 0.55 : dist < 140 ? 0.35 : 0.18,
      });
    }
  }

  return (
    <svg
      className="absolute -right-8 top-1/2 h-[320px] w-[440px] -translate-y-1/2 text-primary-container md:h-[380px] md:w-[520px]"
      viewBox="0 0 440 320"
      fill="none"
      aria-hidden
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="currentColor"
          opacity={dot.o}
        />
      ))}
    </svg>
  );
}

export function BenefitsCards() {
  return (
    <section id="results" className="relative scroll-mt-28 overflow-hidden bg-surface-container-low py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,28,48,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,28,48,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 72% 50%, black 0%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 72% 50%, black 0%, transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(254,166,25,0.07) 1px, transparent 1px), linear-gradient(150deg, rgba(254,166,25,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 80% 45%, black 0%, transparent 58%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 80% 45%, black 0%, transparent 58%)",
        }}
      />

      <DotField />

      <div className="relative z-10 mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="text-label-caps font-bold text-secondary-container">
            BY THE NUMBERS
          </span>
          <h2 className="font-headline-lg mt-3 text-[2.2rem] leading-tight text-on-surface md:text-[3rem]">
            Lower cost. Less waste. Better packing decisions.
          </h2>
          <p className="mt-5 max-w-xl text-body-lg text-on-surface-variant">
            OptiBox turns every order into a measurable packing outcome, reducing
            spend, less material, and fewer oversized parcels leaving your dock.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex gap-5">
              <div
                className="w-1 shrink-0 rounded-full bg-secondary-container"
                aria-hidden
              />
              <div>
                <p className="font-mono-data text-[2.75rem] leading-none tracking-tight text-on-surface md:text-[3.25rem]">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-[12rem] text-on-surface-variant">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
