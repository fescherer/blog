import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieMessage } from '@/components/CookieMessage'
import { themes } from '@/themes/serverSideThemes'

export const metadata: Metadata = {
  title: 'Felipe Scherer\'s Blog',
  description: 'A blog of tecnology, design, coding and gaming. Here you will find how to learn to code.',
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
