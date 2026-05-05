import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

/* ─── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://mtrwenzorigolfresort.com'),

  title: {
    default: 'Mt. Rwenzori Golf Resort & Spa | Luxury Mountain Retreat, Uganda',
    template: '%s | Mt. Rwenzori Golf Resort & Spa',
  },

  description:
    'Experience unmatched luxury at Mt. Rwenzori Golf Resort & Spa in Uganda. A serene mountain retreat featuring a 9-hole championship golf course, world-class spa, full English breakfast, and breathtaking Rwenzori peak views.',

  keywords: [
    'Mt Rwenzori Golf Resort',
    'luxury golf resort Uganda',
    'mountain spa retreat Uganda',
    'Rwenzori accommodation',
    'golf spa Kasese Uganda',
    'luxury lodge Rwenzori Mountains',
    'Uganda mountain resort',
    'championship golf Uganda',
  ],

  authors: [{ name: 'Mt. Rwenzori Golf Resort & Spa' }],
  creator: 'Mt. Rwenzori Golf Resort & Spa',
  publisher: 'Mt. Rwenzori Golf Resort & Spa',

  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://mtrwenzorigolfresort.com',
    siteName: 'Mt. Rwenzori Golf Resort & Spa',
    title: 'Mt. Rwenzori Golf Resort & Spa | Luxury Mountain Retreat, Uganda',
    description:
      'A serene mountain retreat in the heart of the Rwenzori Mountains — championship golf, premium spa, luxury accommodation, and unforgettable views.',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Mt. Rwenzori Golf Resort & Spa — aerial mountain view',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mt. Rwenzori Golf Resort & Spa | Uganda',
    description:
      'Championship golf, world-class spa, and luxury mountain accommodation in the heart of Uganda.',
    images: ['/images/og-cover.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  sizes: '32x32', media: '(prefers-color-scheme: dark)'  },
      { url: '/icon.svg',             type: 'image/svg+xml'                                   },
      { url: '/favicon.ico',          sizes: 'any'                                            },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: 'https://mtrwenzorigolfresort.com',
  },

  category: 'travel',
}

/* ─── Viewport ──────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f6f1' },
    { media: '(prefers-color-scheme: dark)',  color: '#2c3d2e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

/* ─── Structured Data (JSON-LD) ─────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  name: 'Mt. Rwenzori Golf Resort & Spa',
  description:
    'Luxury mountain resort featuring a 9-hole golf course, premium spa, and accommodation in the Rwenzori Mountains, Uganda.',
  url: 'https://mtrwenzorigolfresort.com',
  telephone: '+256746077473',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kasese',
    addressCountry: 'UG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.1836,
    longitude: 30.0815,
  },
  image: 'https://mtrwenzorigolfresort.com/images/og-cover.jpg',
  priceRange: '$60–$150',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '9-Hole Golf Course', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Spa & Wellness',     value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant',          value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi',           value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Mountain Views',      value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Firepit Terrace',     value: true },
  ],
  hasMap: 'https://maps.google.com/?q=Mt+Rwenzori+Golf+Resort',
  sameAs: [
    'https://facebook.com',
    'https://instagram.com',
    'https://tiktok.com/@mtrwenzori',
  ],
}

/* ─── Layout ────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* DNS prefetch for external assets */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body
        className="antialiased"
        style={{
          fontFamily: 'var(--font-sans), system-ui, sans-serif',
          background: '#f9f6f1',
          color: '#1a1f1b',
        }}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}