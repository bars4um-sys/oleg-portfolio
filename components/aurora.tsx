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
}: {
  blobs?: Blob[]
  seed?: number
  neuroOpacity?: number
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <NeuroTexture seed={seed} opacity={neuroOpacity} />
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
