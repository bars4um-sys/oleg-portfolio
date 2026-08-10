import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prepend build-time basePath (NEXT_PUBLIC_BASE_PATH) to an asset path.
// next/image and plain <img> do NOT auto-apply basePath under static export,
// so image srcs must be prefixed manually for sub-path hosting (GitHub Pages).
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path}`
}
