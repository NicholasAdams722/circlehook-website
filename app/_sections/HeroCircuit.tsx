type Trace = {
  d: string;
  end: { x: number; y: number };
  color: string;
};

const palette = {
  accent: "#D9E04C", // brand chartreuse
  cyan: "#7DD3FC", // sky cyan
  mint: "#86EFAC", // soft mint
  cream: "#F5F1E8", // warm cream
};

// All traces originate near the visual center (600, 400) of a 1200x800 viewBox,
// turning at right angles like real PCB traces. Endpoints get a "node" dot
// that lights up when the trace finishes drawing.
const traces: Trace[] = [
  { d: "M 600 400 V 320 H 720 V 200", end: { x: 720, y: 200 }, color: palette.accent },
  { d: "M 600 400 H 700 V 280 H 820", end: { x: 820, y: 280 }, color: palette.cyan },
  { d: "M 600 400 H 780 V 340 H 1000", end: { x: 1000, y: 340 }, color: palette.accent },
  { d: "M 600 400 H 740 V 420 H 1080", end: { x: 1080, y: 420 }, color: palette.mint },
  { d: "M 600 400 H 700 V 500 H 880 V 580", end: { x: 880, y: 580 }, color: palette.accent },
  { d: "M 600 400 V 520 H 480 V 640", end: { x: 480, y: 640 }, color: palette.cream },
  { d: "M 600 400 H 500 V 540 H 320", end: { x: 320, y: 540 }, color: palette.accent },
  { d: "M 600 400 H 460 V 460 H 220", end: { x: 220, y: 460 }, color: palette.cyan },
  { d: "M 600 400 H 440 V 380 H 180", end: { x: 180, y: 380 }, color: palette.accent },
  { d: "M 600 400 H 480 V 300 H 280 V 220", end: { x: 280, y: 220 }, color: palette.mint },
  { d: "M 600 400 V 320 H 500 V 220", end: { x: 500, y: 220 }, color: palette.accent },
  { d: "M 600 400 V 360 H 660 V 240 H 880", end: { x: 880, y: 240 }, color: palette.cream },
];

const TOTAL_DURATION_S = 6;
const STAGGER_MS = 450;

export function HeroCircuit() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.55] [mask-image:radial-gradient(circle_at_center,black_0%,black_45%,transparent_85%)]"
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
