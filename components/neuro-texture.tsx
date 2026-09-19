"use client"

import { useEffect, useMemo, useState } from "react"

type NeuroIntensity = "hero" | "cases" | "minimal" | "light" | "process" | "cta"

type NeuroTextureProps = {
  className?: string
  /** number of nodes; more = denser web */
  nodes?: number
  /** how many nearest neighbours each node links to */
  links?: number
  /** deterministic seed so SSR and client match */
  seed?: number
  opacity?: number
  /** localized intensity preset (replaces opacity tuning per section) */
  intensity?: NeuroIntensity
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

const INTENSITY_CONFIG: Record<
  NeuroIntensity,
  { lineBase: number; nodeBase: number; activeLines: number; activeNodes: number }
> = {
  hero: { lineBase: 0.07, nodeBase: 0.18, activeLines: 2, activeNodes: 3 },
  cases: { lineBase: 0.06, nodeBase: 0.16, activeLines: 1, activeNodes: 2 },
  minimal: { lineBase: 0.05, nodeBase: 0.14, activeLines: 1, activeNodes: 1 },
  light: { lineBase: 0.04, nodeBase: 0.12, activeLines: 0, activeNodes: 0 },
  process: { lineBase: 0.07, nodeBase: 0.18, activeLines: 1, activeNodes: 2 },
  cta: { lineBase: 0.05, nodeBase: 0.14, activeLines: 0, activeNodes: 0 },
}

function pickRandomIndices(rand: () => number, total: number, count: number) {
  const set = new Set<number>()
  while (set.size < Math.min(count, total)) {
    set.add(Math.floor(rand() * total))
  }
  return set
}

export function NeuroTexture({
  className = "",
  nodes = 46,
  links = 3,
  seed = 7,
  opacity,
  intensity = "cases",
}: NeuroTextureProps) {
  const [pulseTick, setPulseTick] = useState(0)
  const config = INTENSITY_CONFIG[intensity]

  // Deterministic mesh generation — identical on server and client.
  const { points, edges } = useMemo(() => {
    const rand = mulberry32(seed)
    const points = Array.from({ length: nodes }, () => ({
      x: rand() * SIZE,
      y: rand() * SIZE,
      r: 0.9 + rand() * 2.2,
    }))

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
    return { points, edges }
  }, [seed, nodes, links])

  // Periodically refresh which lines/nodes pulse. The SVG structure stays intact;
  // only CSS class names on existing elements change.
  useEffect(() => {
    if (config.activeLines === 0 && config.activeNodes === 0) return
    const interval = setInterval(() => {
      setPulseTick((t) => t + 1)
    }, 10000)
    return () => clearInterval(interval)
  }, [config.activeLines, config.activeNodes])

  const activeEdges = useMemo(() => {
    const rand = mulberry32(seed + pulseTick)
    return pickRandomIndices(rand, edges.length, config.activeLines)
  }, [edges.length, config.activeLines, seed, pulseTick])

  const activeNodes = useMemo(() => {
    const rand = mulberry32(seed + 1000 + pulseTick)
    return pickRandomIndices(rand, points.length, config.activeNodes)
  }, [points.length, config.activeNodes, seed, pulseTick])

  const baseOpacity = opacity ?? 1

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity: baseOpacity }}
    >
      <svg
        className="neuro-drift h-full w-full"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id={`neuro-fade-${seed}`} cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={`neuro-mask-${seed}`}>
            <rect width={SIZE} height={SIZE} fill={`url(#neuro-fade-${seed})`} />
          </mask>
        </defs>

        <g mask={`url(#neuro-mask-${seed})`} stroke="var(--primary)">
          {edges.map((e, i) => {
            const isActive = activeEdges.has(i)
            const baseStroke = Math.max(config.lineBase, 0.5 - e.d / SIZE)
            return (
              <line
                key={`e-${i}`}
                x1={points[e.a].x}
                y1={points[e.a].y}
                x2={points[e.b].x}
                y2={points[e.b].y}
                className={`neuro-line ${isActive ? "neuro-line-active" : ""}`}
                strokeWidth={0.6}
                strokeOpacity={baseStroke}
                style={isActive ? { animationDelay: `${(i % 5) * 0.4}s` } : undefined}
              />
            )
          })}
          {points.map((p, i) => {
            const isActive = activeNodes.has(i)
            return (
              <circle
                key={`p-${i}`}
                cx={p.x}
                cy={p.y}
                r={p.r}
                fill="var(--primary)"
                fillOpacity={config.nodeBase}
                stroke="none"
                className={`neuro-node ${isActive ? "neuro-node-active" : ""}`}
                style={{
                  transformOrigin: `${p.x}px ${p.y}px`,
                  animationDelay: isActive ? `${(i % 7) * 0.3}s` : undefined,
                }}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}
