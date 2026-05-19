type Point = [number, number];

type Parcel = {
  className: string;
  viewBox: string;
  palette: {
    top: string;
    front: string;
    right: string;
    tape: string;
  };
  faces: {
    top: Point[];
    front: Point[];
    right: Point[];
  };
  topTape: Point[];
  frontTape: Point[];
};

function buildFrontTape(
  origin: Point,
  uAxis: Point,
  vAxis: Point,
  uStart = 0.38,
  uEnd = 0.58,
): Point[] {
  const tl: Point = [
    origin[0] + uStart * uAxis[0],
    origin[1] + uStart * uAxis[1],
  ];
  const tr: Point = [
    origin[0] + uEnd * uAxis[0],
    origin[1] + uEnd * uAxis[1],
  ];
  const br: Point = [tr[0] + vAxis[0], tr[1] + vAxis[1]];
  const bl: Point = [tl[0] + vAxis[0], tl[1] + vAxis[1]];
  return [tl, tr, br, bl];
}

function buildTopTape(
  origin: Point,
  uAxis: Point,
  vAxis: Point,
  vStart = 0.42,
  vEnd = 0.58,
): Point[] {
  const tl: Point = [
    origin[0] + vStart * vAxis[0],
    origin[1] + vStart * vAxis[1],
  ];
  const bl: Point = [
    origin[0] + vEnd * vAxis[0],
    origin[1] + vEnd * vAxis[1],
  ];
  const tr: Point = [tl[0] + uAxis[0], tl[1] + uAxis[1]];
  const br: Point = [bl[0] + uAxis[0], bl[1] + uAxis[1]];
  return [tl, tr, br, bl];
}

const PARCEL_1_TOP_ORIGIN: Point = [60, 88];
const PARCEL_1_TOP_U: Point = [70, -38];
const PARCEL_1_TOP_V: Point = [70, 38];
const PARCEL_1_FRONT_ORIGIN: Point = [60, 88];
const PARCEL_1_FRONT_U: Point = [70, 38];
const PARCEL_1_FRONT_V: Point = [0, 82];

const PARCEL_2_TOP_ORIGIN: Point = [42, 72];
const PARCEL_2_TOP_U: Point = [62, -34];
const PARCEL_2_TOP_V: Point = [62, 34];
const PARCEL_2_FRONT_ORIGIN: Point = [42, 72];
const PARCEL_2_FRONT_U: Point = [62, 34];
const PARCEL_2_FRONT_V: Point = [0, 70];

const PARCEL_3_TOP_ORIGIN: Point = [36, 66];
const PARCEL_3_TOP_U: Point = [60, -30];
const PARCEL_3_TOP_V: Point = [60, 30];
const PARCEL_3_FRONT_ORIGIN: Point = [36, 66];
const PARCEL_3_FRONT_U: Point = [60, 30];
const PARCEL_3_FRONT_V: Point = [0, 66];

const PARCELS: Parcel[] = [
  {
    className:
      "absolute right-[2%] top-[6%] h-[300px] w-[300px] md:h-[360px] md:w-[360px]",
    viewBox: "0 0 260 260",
    palette: {
      top: "#e6ecff",
      front: "#aab8de",
      right: "#5b6a96",
      tape: "#fea619",
    },
    faces: {
      top: [
        [60, 88],
        [130, 50],
        [200, 88],
        [130, 126],
      ],
      front: [
        [60, 88],
        [130, 126],
        [130, 208],
        [60, 170],
      ],
      right: [
        [200, 88],
        [130, 126],
        [130, 208],
        [200, 170],
      ],
    },
    topTape: buildTopTape(PARCEL_1_TOP_ORIGIN, PARCEL_1_TOP_U, PARCEL_1_TOP_V),
    frontTape: buildFrontTape(
      PARCEL_1_FRONT_ORIGIN,
      PARCEL_1_FRONT_U,
      PARCEL_1_FRONT_V,
    ),
  },
  {
    className:
      "hidden md:block absolute right-[28%] top-[40%] h-[230px] w-[230px] lg:right-[26%] lg:h-[250px] lg:w-[250px]",
    viewBox: "0 0 220 220",
    palette: {
      top: "#dae2fd",
      front: "#8ea0cd",
      right: "#3e4a70",
      tape: "#fea619",
    },
    faces: {
      top: [
        [42, 72],
        [104, 38],
        [166, 72],
        [104, 106],
      ],
      front: [
        [42, 72],
        [104, 106],
        [104, 176],
        [42, 142],
      ],
      right: [
        [166, 72],
        [104, 106],
        [104, 176],
        [166, 142],
      ],
    },
    topTape: buildTopTape(PARCEL_2_TOP_ORIGIN, PARCEL_2_TOP_U, PARCEL_2_TOP_V),
    frontTape: buildFrontTape(
      PARCEL_2_FRONT_ORIGIN,
      PARCEL_2_FRONT_U,
      PARCEL_2_FRONT_V,
    ),
  },
  {
    className:
      "absolute right-[36%] bottom-[8%] h-[200px] w-[200px] md:right-[40%] md:bottom-[6%] md:h-[220px] md:w-[220px]",
    viewBox: "0 0 200 200",
    palette: {
      top: "#eef2ff",
      front: "#b3c0e3",
      right: "#65729b",
      tape: "#fea619",
    },
    faces: {
      top: [
        [36, 66],
        [96, 36],
        [156, 66],
        [96, 96],
      ],
      front: [
        [36, 66],
        [96, 96],
        [96, 162],
        [36, 132],
      ],
      right: [
        [156, 66],
        [96, 96],
        [96, 162],
        [156, 132],
      ],
    },
    topTape: buildTopTape(PARCEL_3_TOP_ORIGIN, PARCEL_3_TOP_U, PARCEL_3_TOP_V),
    frontTape: buildFrontTape(
      PARCEL_3_FRONT_ORIGIN,
      PARCEL_3_FRONT_U,
      PARCEL_3_FRONT_V,
    ),
  },
];

function pointsAttr(pts: Point[]) {
  return pts.map((p) => p.join(",")).join(" ");
}

function PackageArt({ parcel }: { parcel: Parcel }) {
  const { palette, faces, topTape, frontTape } = parcel;
  const outline = "rgba(11, 28, 48, 0.6)";

  return (
    <svg
      className={parcel.className}
      viewBox={parcel.viewBox}
      fill="none"
      aria-hidden
    >
      <polygon points={pointsAttr(faces.right)} fill={palette.right} />
      <polygon points={pointsAttr(faces.front)} fill={palette.front} />
      <polygon points={pointsAttr(faces.top)} fill={palette.top} />

      <polygon
        points={pointsAttr(faces.top)}
        fill="none"
        stroke={outline}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <polygon
        points={pointsAttr(faces.front)}
        fill="none"
        stroke={outline}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <polygon
        points={pointsAttr(faces.right)}
        fill="none"
        stroke={outline}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <polygon points={pointsAttr(frontTape)} fill={palette.tape} opacity="0.95" />
      <polygon points={pointsAttr(topTape)} fill={palette.tape} />
    </svg>
  );
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-primary-container py-28 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(218,226,253,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(218,226,253,0.45) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 78% 50%, black 0%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 78% 50%, black 0%, transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        aria-hidden
      >
        {PARCELS.map((p, i) => (
          <PackageArt key={i} parcel={p} />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-primary-container via-primary-container/85 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <span className="text-label-caps font-bold text-secondary-container">
            ELEVATE YOUR OPERATIONS
          </span>
          <h2 className="font-headline-lg mt-4 text-[2.4rem] leading-[1.05] tracking-tight text-primary-fixed md:text-[3.6rem]">
            Smarter packing cuts costs, reduces material use, and lowers
            environmental impact.
          </h2>
        </div>
      </div>
    </section>
  );
}
