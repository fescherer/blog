import React from 'react'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import Script from 'next/script'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieMessage } from '@/components/CookieMessage'
import { themes } from '@/themes/serverSideThemes'
import { ownerMetaData } from '@/utils/ownerConfigs'
import { generateRss } from '@/utils/generateRSS'
import LoadingBar from '@/components/LoadingBar'

const APP_DEFAULT_TITLE = 'My Awesome PWA App'

export const metadata: Metadata = {
  title: ownerMetaData.title,
  description: ownerMetaData.description,
  metadataBase: new URL(ownerMetaData.url),

  verification: {
    google: 'google',
    yandex: 'fe8b4fba9e9ba684',
    yahoo: 'yahoo',
    other: {
      me: ['felipescherer25@gmail.com'],
    },
  },

  openGraph: {
    title: ownerMetaData.title,
    description: ownerMetaData.description,
    url: ownerMetaData.url,
    siteName: ownerMetaData.url,
    images: [ownerMetaData.image],
    locale: 'en',
    type: 'website',
  },

  authors: [{ name: 'Felipe Scherer', url: 'https://github.com/fescherer.com' }],

  twitter: {
    card: 'app',
    title: ownerMetaData.title,
    description: ownerMetaData.description,
    siteId: '1467726470533754880',
    creator: '@fescherer',
    creatorId: '1467726470533754880',
    images: ownerMetaData.image,
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },

  generator: 'Next.js',

  alternates: {
    canonical: ownerMetaData.url,
    languages: {
      'en-US': ownerMetaData.url,
    },
  },

  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#359967' },
  //   { media: '(prefers-color-scheme: dark)', color: '#51C28A' },
  // ],

  icons: {
    icon: '/favicon.svg',
    shortcut:
      '/favicon.svg',
    apple:
      '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.svg',
    },
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await generateRss()

  const cookieTheme = cookies().get('data-theme')
  const theme = themes.includes(cookieTheme?.value ?? '') ? cookieTheme?.value : ''

  return (

    <html lang="en" className="flex min-h-screen scroll-smooth" data-theme={theme} style={{ colorScheme: theme }}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body className="flex w-full flex-col gap-8 bg-bg-background font-satoshi text-bg-on-background">
        <LoadingBar>
          <main className="m-auto flex w-full max-w-screen-lg flex-1 pt-24 sm:px-4">
            {children}
            {typeof window !== 'undefined' && <CookieMessage />}
          </main>

          <Footer />
          <Header />
        </LoadingBar>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4BVC96WBH7" />

        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4BVC96WBH7');
        `}
        </Script>

      </body>
    </html>
  )
}
