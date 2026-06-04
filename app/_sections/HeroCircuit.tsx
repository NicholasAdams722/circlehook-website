type Trace = {
  d: string;
  end: { x: number; y: number };
  color: string;
};

const palette = {
  electric: "#22D3EE", // bright electric cyan
  blue: "#60A5FA", // medium blue
  sky: "#7DD3FC", // light sky blue
  white: "#FFFFFF", // pure white
};

// Traces originate outside the hero text block (text block roughly at
// x:200-660, y:200-600 in viewBox). A 40px "moat" of empty space sits
// between the text and any trace origin so circuits never start on top
// of text. Traces then radiate outward in all 4 directions.
const traces: Trace[] = [
  // TOP - origins at y=160 (40px above text), going up
  { d: "M 280 160 V 60", end: { x: 280, y: 60 }, color: palette.electric },
  { d: "M 420 160 V 100 H 540 V 30", end: { x: 540, y: 30 }, color: palette.sky },
  { d: "M 560 160 V 80 H 700 V 20", end: { x: 700, y: 20 }, color: palette.blue },

  // RIGHT - origins at x=700 (40px right of text), going right
  { d: "M 700 220 H 820 V 140 H 980", end: { x: 980, y: 140 }, color: palette.electric },
  { d: "M 700 300 H 800 V 260 H 1080", end: { x: 1080, y: 260 }, color: palette.white },
  { d: "M 700 380 H 780 V 340 H 1180", end: { x: 1180, y: 340 }, color: palette.sky },
  { d: "M 700 460 H 820 V 480 H 1100", end: { x: 1100, y: 480 }, color: palette.electric },
  { d: "M 700 540 H 780 V 580 H 960", end: { x: 960, y: 580 }, color: palette.blue },
  { d: "M 700 580 H 740 V 720 H 1020", end: { x: 1020, y: 720 }, color: palette.sky },

  // BOTTOM - origins at y=640 (40px below text), going down
  { d: "M 280 640 V 720 H 380 V 780", end: { x: 380, y: 780 }, color: palette.electric },
  { d: "M 440 640 V 700 H 320 V 780", end: { x: 320, y: 780 }, color: palette.white },

  // LEFT - origins at x=160 (40px left of text), going left
  { d: "M 160 480 H 60 V 580", end: { x: 60, y: 580 }, color: palette.blue },
];

const TOTAL_DURATION_S = 6;
const STAGGER_MS = 450;

export function HeroCircuit() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.5]"
      >
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <g
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {traces.map((trace, i) => {
              const delay = (i * STAGGER_MS) / 1000;
              return (
                <g key={i}>
                  <path
                    d={trace.d}
                    stroke={trace.color}
                    pathLength={1}
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: 1,
                      opacity: 0,
                      animation: `circuit-trace ${TOTAL_DURATION_S}s ease-out ${delay}s infinite`,
                    }}
                    className="motion-reduce:[animation:none] motion-reduce:opacity-[0.15]"
                  />
                  <circle
                    cx={trace.end.x}
                    cy={trace.end.y}
                    r="3.5"
                    fill={trace.color}
                    style={{
                      opacity: 0,
                      animation: `circuit-node ${TOTAL_DURATION_S}s ease-out ${delay}s infinite`,
                    }}
                    className="motion-reduce:[animation:none] motion-reduce:opacity-[0.25]"
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background from-45% to-transparent to-85% md:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background from-50% to-transparent to-85% md:block"
      />
    </>
  );
}
