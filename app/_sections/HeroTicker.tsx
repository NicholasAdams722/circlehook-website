type Segment = [x1: number, x2: number];

const rows: { y: number; segments: Segment[] }[] = [
  { y: 28, segments: [[0, 160], [200, 380], [420, 560], [600, 760], [800, 980], [1020, 1200]] },
  { y: 72, segments: [[40, 220], [260, 440], [480, 660], [700, 900], [940, 1180]] },
  { y: 118, segments: [[0, 100], [140, 320], [360, 540], [580, 760], [800, 1020], [1060, 1200]] },
  { y: 162, segments: [[60, 240], [280, 380], [420, 600], [640, 820], [860, 1040], [1080, 1200]] },
  { y: 208, segments: [[20, 200], [240, 360], [400, 580], [620, 800], [840, 1020]] },
  { y: 252, segments: [[0, 180], [220, 340], [380, 560], [600, 780], [820, 1000], [1040, 1200]] },
  { y: 298, segments: [[80, 260], [300, 420], [460, 640], [680, 860], [900, 1080]] },
  { y: 342, segments: [[20, 200], [240, 380], [420, 600], [640, 820], [860, 1040], [1080, 1200]] },
  { y: 388, segments: [[0, 160], [200, 320], [360, 540], [580, 720], [760, 940], [980, 1180]] },
  { y: 432, segments: [[40, 220], [260, 400], [440, 620], [660, 840], [880, 1060], [1100, 1200]] },
  { y: 478, segments: [[0, 140], [180, 360], [400, 520], [560, 740], [780, 960], [1000, 1180]] },
  { y: 522, segments: [[60, 220], [260, 440], [480, 660], [700, 880], [920, 1100]] },
  { y: 568, segments: [[0, 180], [220, 360], [400, 580], [620, 800], [840, 1020], [1060, 1200]] },
];

const ticks: { x: number; y: number }[] = [
  { x: 200, y: 28 },
  { x: 480, y: 118 },
  { x: 800, y: 208 },
  { x: 360, y: 342 },
  { x: 980, y: 388 },
  { x: 220, y: 478 },
  { x: 700, y: 522 },
  { x: 1060, y: 568 },
];

const linePalette = [
  "#F5F1E8", // cream (neutral)
  "#7DD3FC", // sky cyan
  "#E8DCC1", // brand butter
  "#86EFAC", // mint
  "#FDA4AF", // soft rose
  "#FCD34D", // amber
];

const tickPalette = ["#FCD34D", "#7DD3FC", "#FDA4AF", "#86EFAC"];

const flatSegments = rows.flatMap((row) =>
  row.segments.map(([x1, x2]) => ({ x1, x2, y: row.y }))
);

function TickerPattern() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
      aria-hidden="true"
    >
      <g strokeWidth="1" vectorEffect="non-scaling-stroke">
        {flatSegments.map((seg, i) => (
          <line
            key={i}
            x1={seg.x1}
            x2={seg.x2}
            y1={seg.y}
            y2={seg.y}
            stroke={linePalette[i % linePalette.length]}
          />
        ))}
        {ticks.map((tick, i) => (
          <rect
            key={`tick-${i}`}
            x={tick.x - 1}
            y={tick.y - 4}
            width={2}
            height={8}
            fill={tickPalette[i % tickPalette.length]}
          />
        ))}
      </g>
    </svg>
  );
}

export function HeroTicker() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.16] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex h-full w-[200%] motion-safe:animate-[ticker-drift_90s_linear_infinite]">
          <TickerPattern />
          <TickerPattern />
        </div>
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
