import { NeuroTexture } from "@/components/neuro-texture"

type Blob = {
  className: string
  color: string
  size: string
  delay?: string
  duration?: string
  /** overrides the default `.aurora` blur (70px) for a tighter bloom */
  blur?: string
}

type NeuroIntensity = "hero" | "cases" | "minimal" | "light" | "process" | "cta"

const DEFAULT_BLOBS: Blob[] = [
  {
    className: "-left-24 top-0",
    color: "rgba(255, 181, 72, 0.22)",
    size: "34rem",
    delay: "0s",
    duration: "20s",
  },
  {
    className: "right-[-6rem] top-40",
    color: "rgba(255, 208, 120, 0.14)",
    size: "28rem",
    delay: "-6s",
    duration: "24s",
  },
]

export function Aurora({
  blobs = DEFAULT_BLOBS,
  seed = 7,
  neuroOpacity,
  neuroRegion = "inset-0",
  intensity = "cases",
  staticBlobs = false,
}: {
  blobs?: Blob[]
  seed?: number
  neuroOpacity?: number
  /**
   * Positioning/clip region for the thin-line neuro-mesh ONLY (the gold blobs
   * stay full-bleed). Defaults to the full section. Pass e.g.
   * "top-0 bottom-0 left-0 right-1/3" to keep the mesh off the right side.
   */
  neuroRegion?: string
  intensity?: NeuroIntensity
  staticBlobs?: boolean
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute ${neuroRegion}`}>
        <NeuroTexture seed={seed} opacity={neuroOpacity} intensity={intensity} />
      </div>
      {blobs.map((b, i) => (
        <span
          key={i}
          className={`aurora ${staticBlobs ? "aurora-static" : ""} ${b.className}`}
          style={{
            width: b.size,
            height: b.size,
            background: b.color,
            animationDelay: b.delay,
            animationDuration: b.duration,
            ...(b.blur ? { filter: `blur(${b.blur})` } : {}),
          }}
        />
      ))}
    </div>
  )
}
