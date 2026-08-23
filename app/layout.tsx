import type { Metadata, Viewport } from 'next'
import {
  Cormorant_Garamond,
  Fraunces,
  Geist,
  IBM_Plex_Mono,
  Inter,
  Newsreader,
  Noto_Serif_SC,
} from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

/*
 * Case 03 «Мир кунфу» fonts. The browser only downloads the font files where
 * the variables are actually used (.theme-kunfu scope), so the home page is
 * unaffected.
 */
const kunfuDisplay = Fraunces({
  subsets: ['latin', 'cyrillic-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display-kunfu',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-body',
  display: 'swap',
})

// Used only for the decorative 功夫 watermark glyphs in the kunfu case —
// the other fonts have no CJK coverage and would render "tofu" boxes.
const notoSerifSC = Noto_Serif_SC({
  subsets: ['chinese-simplified'],
  weight: ['400'],
  variable: '--font-cjk',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bars4um-sys.github.io'
const ogImage = `${siteUrl}${basePath}/og-preview.jpg`

export const metadata: Metadata = {
  title: 'Олег Чумаченко — Веб-дизайн и упаковка экспертных продуктов',
  description:
    'Превращаю сложные материалы и программы в сайты, которые дочитывают до конца и покупают. Посадочные страницы, презентации и материалы курсов для экспертов и бизнеса.',
  openGraph: {
    type: 'website',
    siteName: 'Олег Чумаченко',
    title: 'Олег Чумаченко — Веб-дизайн и упаковка экспертных продуктов',
    description:
      'Превращаю сложные материалы и программы в сайты, которые дочитывают до конца и покупают. Посадочные страницы, презентации и материалы курсов для экспертов и бизнеса.',
    url: `${siteUrl}${basePath}/`,
    locale: 'ru_RU',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Олег Чумаченко — Веб-дизайн и упаковка экспертных продуктов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Олег Чумаченко — Веб-дизайн и упаковка экспертных продуктов',
    description:
      'Превращаю сложные материалы и программы в сайты, которые дочитывают до конца и покупают. Посадочные страницы, презентации и материалы курсов для экспертов и бизнеса.',
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: `${basePath}/icon-light-32x32.png`, media: '(prefers-color-scheme: light)' },
      { url: `${basePath}/icon-dark-32x32.png`, media: '(prefers-color-scheme: dark)' },
      { url: `${basePath}/icon.svg`, type: 'image/svg+xml' },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121316',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} ${fraunces.variable} ${newsreader.variable} ${plexMono.variable} ${kunfuDisplay.variable} ${geist.variable} ${notoSerifSC.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
