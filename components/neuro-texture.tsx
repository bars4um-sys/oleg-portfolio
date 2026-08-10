type NeuroTextureProps = {
  className?: string
  /** number of nodes; more = denser web */
  nodes?: number
  /** how many nearest neighbours each node links to */
  links?: number
  /** deterministic seed so SSR and client match */
  seed?: number
  opacity?: number
}

// Small deterministic PRNG (mulberry32) — stable across server/client renders.
function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const SIZE = 1000

export function NeuroTexture({
  className = "",
  nodes = 46,
  links = 3,
  seed = 7,
  opacity = 0.5,
}: NeuroTextureProps) {
  const rand = mulberry32(seed)

  // Scatter points across the viewBox.
  const points = Array.from({ length: nodes }, () => ({
    x: rand() * SIZE,
    y: rand() * SIZE,
    r: 0.9 + rand() * 2.2,
  }))

  // Connect each node to its nearest neighbours to form an organic mesh.
  const edges: Array<{ a: number; b: number; d: number }> = []
  const seen = new Set<string>()
  for (let i = 0; i < points.length; i++) {
    const dists = points
      .map((p, j) => ({ j, d: Math.hypot(p.x - points[i].x, p.y - points[i].y) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, links)
    for (const { j, d } of dists) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (seen.has(key)) continue
      seen.add(key)
      edges.push({ a: i, b: j, d })
    }
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg
        className="neuro-drift h-full w-full"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="neuro-fade" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="neuro-mask">
            <rect width={SIZE} height={SIZE} fill="url(#neuro-fade)" />
          </mask>
        </defs>

        <g mask="url(#neuro-mask)" stroke="var(--primary)">
          {edges.map((e, i) => (
            <line
              key={i}
              x1={points[e.a].x}
              y1={points[e.a].y}
              x2={points[e.b].x}
              y2={points[e.b].y}
              strokeWidth={0.6}
              strokeOpacity={Math.max(0.08, 0.5 - e.d / SIZE)}
            />
          ))}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill="var(--primary)"
              fillOpacity={0.55}
              stroke="none"
              style={{
                animation: `neuro-pulse ${5 + (i % 5)}s ease-in-out ${(i % 7) * -0.6}s infinite`,
                transformOrigin: `${p.x}px ${p.y}px`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
