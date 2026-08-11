import type { Metadata, Viewport } from 'next'
import {
  Cormorant_Garamond,
  Fraunces,
  IBM_Plex_Mono,
  Inter,
  Newsreader,
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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bars4um-sys.github.io'
const ogImage = `${siteUrl}${basePath}/og-preview.jpg`

export const metadata: Metadata = {
  title: 'Олег Чумаченко — Веб-дизайнер & Продуктовый верстальщик',
  description:
    'Превращаю сухие программы и тексты в кинематографичные лендинги, которые читают до конца и покупают. Упаковка экспертных продуктов и редизайн лендингов для онлайн-школ.',
  openGraph: {
    type: 'website',
    siteName: 'Олег Чумаченко',
    title: 'Олег Чумаченко — Веб-дизайнер & Продуктовый верстальщик',
    description:
      'Превращаю сухие программы и тексты в кинематографичные лендинги, которые читают до конца и покупают. Упаковка экспертных продуктов и редизайн лендингов для онлайн-школ.',
    url: `${siteUrl}${basePath}/`,
    locale: 'ru_RU',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Олег Чумаченко — Веб-дизайнер и продуктовый верстальщик',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Олег Чумаченко — Веб-дизайнер & Продуктовый верстальщик',
    description:
      'Превращаю сухие программы и тексты в кинематографичные лендинги, которые читают до конца и покупают. Упаковка экспертных продуктов и редизайн лендингов для онлайн-школ.',
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
      className={`${cormorant.variable} ${inter.variable} ${fraunces.variable} ${newsreader.variable} ${plexMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
