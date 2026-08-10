/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — hostable on GitHub Pages.
  output: 'export',
  // Directory-style routes (e.g. /scenario/index.html) play nicely with static hosts.
  trailingSlash: true,
  // basePath is auto-set from NEXT_PUBLIC_BASE_PATH by the GitHub Pages workflow
  // (derived from the repository name). Empty/undefined → serve from root.
  basePath: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
