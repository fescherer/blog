import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieMessage } from '@/components/CookieMessage'
import { themes } from '@/themes/serverSideThemes'

const metaConst = {
  title: 'Felipe Scherer\'s blog',
  description: 'A blog made with passion of tecnlogy, design and gaming. Feel free to contribute on Github\'s page',
  url: 'https://blog.felipescherer.com',
}

export const metadata: Metadata = {
  title: metaConst.title,
  description: metaConst.description,
  metadataBase: new URL(metaConst.url),

  verification: {
    google: 'google',
    yandex: 'fe8b4fba9e9ba684',
    yahoo: 'yahoo',
    other: {
      me: ['felipescherer25@gmail.com'],
    },
  },

  openGraph: {
    title: metaConst.title,
    description: metaConst.description,
    url: metaConst.url,
    siteName: metaConst.url,
    images: [
      {
        url: '/thumb.png',
        alt: 'Logo of Felipe Scherer',
        width: 1300,
        height: 630,
      },
    ],
    locale: 'en',
    type: 'website',
  },

  authors: [
    { name: 'Felipe Scherer', url: 'https://github.com/fescherer.com' },
  ],

  twitter: {
    card: 'app',
    title: metaConst.title,
    description: metaConst.description,
    siteId: '1467726470533754880',
    creator: '@fescherer',
    creatorId: '1467726470533754880',
    images: {
      url: '/thumb.png',
      alt: 'Logo of Felipe Scherer',
    },
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
    canonical: metaConst.url,
    languages: {
      'en-US': metaConst.url,
    },
  },

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#359967' },
    { media: '(prefers-color-scheme: dark)', color: '#51C28A' },
  ],

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieTheme = cookies().get('data-theme')
  const theme = themes.includes(cookieTheme?.value ?? '') ? cookieTheme?.value : ''

  return (
    <html lang="en" className='flex min-h-screen scroll-smooth' data-theme={theme}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="flex w-full flex-col gap-8 bg-background font-switzer text-text">
        <Header />
        <main className="m-auto flex w-full max-w-screen-2xl flex-1 px-4 pt-24">
          {children}
          {typeof window !== 'undefined' && <CookieMessage />}
        </main>
        <Footer />
      </body>
    </html>
  )
}
