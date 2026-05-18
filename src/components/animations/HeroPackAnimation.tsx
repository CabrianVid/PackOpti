"use client";

import { useState, type AnimationEvent, type CSSProperties } from "react";

const DROP_BASE_MS = 420;
const DROP_STAGGER_MS = 210;
const PRODUCT_DROP_MS = 820;
const LABEL_GAP_MS = 240;
const SEAL_GAP_MS = 720;
const SAVED_GAP_MS = 1180;
const SHIP_GAP_MS = 2260;
const SHIP_DURATION_MS = 1280;
const RESET_GAP_MS = 220;

type ProductColor = "orange" | "navy" | "blue" | "cream";

type Product = {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color: ProductColor;
};

type Pack = {
  id: string;
  products: Product[];
  volume: number;
  saved: number;
};

type ProductPalette = {
  top: string;
  front: string;
  right: string;
  left: string;
  bottom: string;
};

const COLORS: Record<ProductColor, ProductPalette> = {
  orange: {
    top: "#ffd78a",
    front: "#fea619",
    right: "#c97800",
    left: "#f0a22b",
    bottom: "#8d5208",
  },
  navy: {
    top: "#5e6f92",
    front: "#23304f",
    right: "#121a30",
    left: "#34425f",
    bottom: "#060b18",
  },
  blue: {
    top: "#ffffff",
    front: "#dce7ff",
    right: "#8ea2d4",
    left: "#c1d0f1",
    bottom: "#5f719e",
  },
  cream: {
    top: "#fff4dc",
    front: "#f6c68e",
    right: "#bd8344",
    left: "#f0d0a8",
    bottom: "#8f6334",
  },
};

const CARTON = {
  w: 264,
  d: 174,
  h: 124,
};

const PACKS = [
  {
    id: "full-height-grid",
    products: [
      { x: 0, y: 0, z: 0, w: 72, d: 66, h: CARTON.h, color: "navy" },
      { x: 72, y: 0, z: 0, w: 82, d: 66, h: CARTON.h, color: "cream" },
      { x: 154, y: 0, z: 0, w: 110, d: 66, h: CARTON.h, color: "orange" },
      { x: 0, y: 66, z: 0, w: 94, d: 54, h: CARTON.h, color: "blue" },
      { x: 94, y: 66, z: 0, w: 70, d: 54, h: CARTON.h, color: "orange" },
      { x: 164, y: 66, z: 0, w: 100, d: 54, h: CARTON.h, color: "navy" },
      { x: 0, y: 120, z: 0, w: 58, d: 54, h: CARTON.h, color: "cream" },
      { x: 58, y: 120, z: 0, w: 116, d: 54, h: CARTON.h, color: "blue" },
      { x: 174, y: 120, z: 0, w: 90, d: 54, h: CARTON.h, color: "orange" },
    ],
    volume: 98,
    saved: 7,
  },
  {
    id: "stacked-mixed-products",
    products: [
      { x: 0, y: 0, z: 0, w: 88, d: 68, h: 74, color: "cream" },
      { x: 0, y: 0, z: 74, w: 88, d: 68, h: 50, color: "orange" },
      { x: 88, y: 0, z: 0, w: 82, d: 68, h: CARTON.h, color: "navy" },
      { x: 170, y: 0, z: 0, w: 94, d: 68, h: 64, color: "blue" },
      { x: 170, y: 0, z: 64, w: 94, d: 68, h: 60, color: "orange" },
      { x: 0, y: 68, z: 0, w: 78, d: 106, h: CARTON.h, color: "blue" },
      { x: 78, y: 68, z: 0, w: 104, d: 62, h: 58, color: "orange" },
      { x: 78, y: 68, z: 58, w: 104, d: 62, h: 66, color: "cream" },
      { x: 182, y: 68, z: 0, w: 82, d: 106, h: CARTON.h, color: "navy" },
      { x: 78, y: 130, z: 0, w: 104, d: 44, h: CARTON.h, color: "cream" },
    ],
    volume: 96,
    saved: 7,
  },
] satisfies Pack[];

const MAX_PRODUCT_COUNT = Math.max(...PACKS.map((pack) => pack.products.length));

type IsoPoint = { x: number; y: number };

const ISO_ORIGIN = { x: 270, y: 222 };
const ISO_SCALE = { x: 0.78, y: 0.44, z: 0.88 };

function iso(x: number, y: number, z: number): IsoPoint {
  return {
    x: ISO_ORIGIN.x + (x - y) * ISO_SCALE.x,
    y: ISO_ORIGIN.y + (x + y) * ISO_SCALE.y - z * ISO_SCALE.z,
  };
}

function points(...items: IsoPoint[]) {
  return items.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

function cuboid(product: Product) {
  const { x, y, z, w, d, h } = product;

  const p000 = iso(x, y, z);
  const p100 = iso(x + w, y, z);
  const p110 = iso(x + w, y + d, z);
  const p010 = iso(x, y + d, z);
  const p001 = iso(x, y, z + h);
  const p101 = iso(x + w, y, z + h);
  const p111 = iso(x + w, y + d, z + h);
  const p011 = iso(x, y + d, z + h);

  return {
    top: points(p001, p101, p111, p011),
    right: points(p100, p110, p111, p101),
    front: points(p010, p110, p111, p011),
  };
}

const CARTON_POINTS = {
  floor: points(iso(0, 0, 0), iso(CARTON.w, 0, 0), iso(CARTON.w, CARTON.d, 0), iso(0, CARTON.d, 0)),
  back: points(iso(0, 0, 0), iso(CARTON.w, 0, 0), iso(CARTON.w, 0, CARTON.h), iso(0, 0, CARTON.h)),
  left: points(iso(0, 0, 0), iso(0, CARTON.d, 0), iso(0, CARTON.d, CARTON.h), iso(0, 0, CARTON.h)),
  right: points(iso(CARTON.w, 0, 0), iso(CARTON.w, CARTON.d, 0), iso(CARTON.w, CARTON.d, CARTON.h), iso(CARTON.w, 0, CARTON.h)),
  front: points(iso(0, CARTON.d, 0), iso(CARTON.w, CARTON.d, 0), iso(CARTON.w, CARTON.d, CARTON.h), iso(0, CARTON.d, CARTON.h)),
  lidLeft: points(iso(0, 0, CARTON.h), iso(CARTON.w / 2, 0, CARTON.h), iso(CARTON.w / 2, CARTON.d, CARTON.h), iso(0, CARTON.d, CARTON.h)),
  lidRight: points(iso(CARTON.w / 2, 0, CARTON.h), iso(CARTON.w, 0, CARTON.h), iso(CARTON.w, CARTON.d, CARTON.h), iso(CARTON.w / 2, CARTON.d, CARTON.h)),
  tape: points(
    iso(CARTON.w / 2 - 5, 0, CARTON.h + 3),
    iso(CARTON.w / 2 + 5, 0, CARTON.h + 3),
    iso(CARTON.w / 2 + 5, CARTON.d, CARTON.h + 3),
    iso(CARTON.w / 2 - 5, CARTON.d, CARTON.h + 3),
  ),
};

const CARTON_EDGES = [
  [iso(0, 0, 0), iso(CARTON.w, 0, 0)],
  [iso(CARTON.w, 0, 0), iso(CARTON.w, CARTON.d, 0)],
  [iso(CARTON.w, CARTON.d, 0), iso(0, CARTON.d, 0)],
  [iso(0, CARTON.d, 0), iso(0, 0, 0)],
  [iso(0, 0, CARTON.h), iso(CARTON.w, 0, CARTON.h)],
  [iso(CARTON.w, 0, CARTON.h), iso(CARTON.w, CARTON.d, CARTON.h)],
  [iso(CARTON.w, CARTON.d, CARTON.h), iso(0, CARTON.d, CARTON.h)],
  [iso(0, CARTON.d, CARTON.h), iso(0, 0, CARTON.h)],
  [iso(0, 0, 0), iso(0, 0, CARTON.h)],
  [iso(CARTON.w, 0, 0), iso(CARTON.w, 0, CARTON.h)],
  [iso(CARTON.w, CARTON.d, 0), iso(CARTON.w, CARTON.d, CARTON.h)],
  [iso(0, CARTON.d, 0), iso(0, CARTON.d, CARTON.h)],
] as const;

function packCompleteMs(productCount: number) {
  return DROP_BASE_MS + (productCount - 1) * DROP_STAGGER_MS + PRODUCT_DROP_MS;
}

export function HeroPackAnimation() {
  const [packIndex, setPackIndex] = useState(0);
  const activePack = PACKS[packIndex];
  const productCount = activePack.products.length;
  const packedAtMs = packCompleteMs(MAX_PRODUCT_COUNT);
  const labelDelay = packedAtMs + LABEL_GAP_MS;
  const sealDelay = packedAtMs + SEAL_GAP_MS;
  const savedDelay = packedAtMs + SAVED_GAP_MS;
  const shipDelay = packedAtMs + SHIP_GAP_MS;
  const cycleDuration = shipDelay + SHIP_DURATION_MS + RESET_GAP_MS;

  function handleCycleIteration(event: AnimationEvent<HTMLDivElement>) {
    if (event.animationName !== "hero-iso-ship-cycle") {
      return;
    }

    setPackIndex((currentPack) => (currentPack + 1) % PACKS.length);
  }

  return (
    <div
      className="hero-iso-stage"
      role="img"
      aria-label={`${productCount} products drop into one shipping carton, the carton is optimized with PPWR-ready volume use, and the packed parcel ships with ${activePack.saved} euros saved.`}
    >
      <div className="hero-iso-grid" aria-hidden />

      <div
        className="hero-iso-loop"
        style={
          {
            "--cycle-duration": `${cycleDuration}ms`,
            "--label-delay": `${labelDelay}ms`,
            "--seal-delay": `${sealDelay}ms`,
            "--saved-delay": `${savedDelay}ms`,
            "--ship-delay": `${shipDelay}ms`,
            "--ship-duration": `${SHIP_DURATION_MS}ms`,
          } as CSSProperties
        }
      >
        <div className="hero-iso-scene" aria-hidden onAnimationIteration={handleCycleIteration}>
          <svg className="hero-pack-svg" viewBox="0 0 560 430">
            <polygon className="hero-svg-floor" points={CARTON_POINTS.floor} />
            <polygon className="hero-svg-wall hero-svg-wall-back" points={CARTON_POINTS.back} />
            <polygon className="hero-svg-wall hero-svg-wall-left" points={CARTON_POINTS.left} />
            <polygon className="hero-svg-wall hero-svg-wall-right" points={CARTON_POINTS.right} />

            {activePack.products.map((product, index) => {
              const colors = COLORS[product.color];
              const faces = cuboid(product);

              return (
                <g
                  key={`${product.color}-${index}`}
                  className={`hero-svg-product product-${index}`}
                >
                  <polygon
                    className="hero-svg-product-face"
                    points={faces.right}
                    fill={colors.right}
                  />
                  <polygon
                    className="hero-svg-product-face"
                    points={faces.front}
                    fill={colors.front}
                  />
                  <polygon
                    className="hero-svg-product-face hero-svg-product-top"
                    points={faces.top}
                    fill={colors.top}
                  />
                </g>
              );
            })}

            <polygon className="hero-svg-wall hero-svg-wall-front" points={CARTON_POINTS.front} />
            <g className="hero-svg-cardboard-shell">
              <polygon className="hero-svg-shell-face hero-svg-shell-left" points={CARTON_POINTS.left} />
              <polygon className="hero-svg-shell-face hero-svg-shell-right" points={CARTON_POINTS.right} />
              <polygon className="hero-svg-shell-face hero-svg-shell-front" points={CARTON_POINTS.front} />
            </g>
            {CARTON_EDGES.map(([start, end], index) => (
              <line
                key={index}
                className="hero-svg-edge"
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
              />
            ))}

            <polygon className="hero-svg-lid hero-svg-lid-left" points={CARTON_POINTS.lidLeft} />
            <polygon className="hero-svg-lid hero-svg-lid-right" points={CARTON_POINTS.lidRight} />
            <polygon className="hero-svg-tape" points={CARTON_POINTS.tape} />
          </svg>
        </div>

        <span className="hero-iso-label label-products">
          {productCount} products packed
        </span>
        <span className="hero-iso-label label-volume">
          <span>{activePack.volume}% volume used</span>
          <span className="hero-iso-certificate">PPWR</span>
        </span>

        <div className="hero-iso-saved" aria-hidden>
          <span className="hero-iso-saved-icon">&#10003;</span>
          <span className="hero-iso-saved-text">
            <span className="hero-iso-saved-eyebrow">Shipping optimized</span>
            <span className="hero-iso-saved-value">&euro;{activePack.saved} saved</span>
          </span>
        </div>
      </div>
    </div>
  );
}
