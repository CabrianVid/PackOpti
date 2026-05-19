"use client";

import Image from "next/image";
import { useState, useRef, type KeyboardEvent } from "react";
import clsx from "clsx";
import { ContactSalesButton } from "@/components/ui/ContactSalesButton";

type Feature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const FEATURES: Feature[] = [
  {
    id: "instructions",
    title: "Generate cost-optimal packing instructions for every order.",
    description:
      "A flexible cartonization engine that turns each incoming order into a clear, cost-optimal pack plan in milliseconds — accounting for carrier rates, material costs, and operator constraints.",
    image: "/images/plan.png",
  },
  {
    id: "lineup",
    title: "Choose the best carrier from every available option.",
    description:
      "Compare all connected carrier services and route each shipment to the right option based on price, delivery promise, parcel profile, and business rules.",
    image: "/images/carriers.png",
  },
  {
    id: "performance",
    title: "Optimize container usage across your full in-house inventory.",
    description:
      "Map all containers used in your firm and let the program recommend the optimal container for every order, reducing wasted space and standardizing pack quality.",
    image: "/images/containers.png",
  },
];

export function FeatureShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = FEATURES[activeIdx];

  function handleKey(e: KeyboardEvent<HTMLButtonElement>, idx: number) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % FEATURES.length;
      setActiveIdx(next);
      buttonRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = (idx - 1 + FEATURES.length) % FEATURES.length;
      setActiveIdx(next);
      buttonRefs.current[next]?.focus();
    }
  }

  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <span className="text-label-caps font-bold text-secondary-container">THE PLATFORM</span>
          <h2 className="font-headline-lg mt-2 max-w-3xl text-headline-lg text-on-surface">
            One control deck for every packing decision.
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
          <div className="space-y-4" role="tablist" aria-orientation="vertical">
            {FEATURES.map((f, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={f.id}
                  className={clsx(
                    "border bg-surface transition-all",
                    isActive
                      ? "border-secondary-container shadow-md"
                      : "border-outline-variant hover:border-on-surface-variant",
                  )}
                >
                  <button
                    ref={(el) => {
                      buttonRefs.current[idx] = el;
                    }}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`feature-panel-${f.id}`}
                    id={`feature-tab-${f.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIdx(idx)}
                    onKeyDown={(e) => handleKey(e, idx)}
                    className={clsx(
                      "block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container",
                      isActive ? "px-7 pb-2 pt-7" : "px-7 py-5",
                    )}
                  >
                    {isActive ? (
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {f.title}
                      </h3>
                    ) : (
                      <h3 className="text-headline-sm font-bold text-on-surface-variant">
                        {f.title}
                      </h3>
                    )}
                  </button>
                  {isActive ? (
                    <div className="space-y-5 px-7 pb-7 pt-3">
                      <p className="text-on-surface-variant">{f.description}</p>
                      <ContactSalesButton variant="primary" size="md">
                        CONTACT SALES
                      </ContactSalesButton>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div
            id={`feature-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`feature-tab-${active.id}`}
            className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm"
          >
            <Image
              src={active.image}
              alt={`Screenshot illustrating: ${active.title}`}
              width={1600}
              height={1000}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
