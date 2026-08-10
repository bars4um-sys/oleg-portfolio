import { NeuroTexture } from "@/components/neuro-texture"

type Blob = {
  className: string
  color: string
  size: string
  delay?: string
  duration?: string
}

const DEFAULT_BLOBS: Blob[] = [
  {
    className: "-left-24 top-0",
    color: "rgba(230, 199, 154, 0.22)",
    size: "34rem",
    delay: "0s",
    duration: "20s",
  },
  {
    className: "right-[-6rem] top-40",
    color: "rgba(201, 160, 106, 0.16)",
    size: "28rem",
    delay: "-6s",
    duration: "24s",
  },
]

export function Aurora({
  blobs = DEFAULT_BLOBS,
  seed = 7,
  neuroOpacity = 0.45,
  neuroRegion = "inset-0",
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
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute ${neuroRegion}`}>
        <NeuroTexture seed={seed} opacity={neuroOpacity} />
      </div>
      {blobs.map((b, i) => (
        <span
          key={i}
          className={`aurora ${b.className}`}
          style={{
            width: b.size,
            height: b.size,
            background: b.color,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  )
}
