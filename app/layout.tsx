import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/lib/locale"
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Deni Setiawan | Full-Stack Developer',
  description: 'Full-Stack Developer & IT Lead based in Surabaya, Indonesia. Experienced in building end-to-end systems with Go, Next.js, PostgreSQL, Redis, Docker, and OCI.',
  keywords: ['Deni Setiawan', 'Full-Stack Developer', 'IT Lead', 'Software Engineer', 'Go', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'Portfolio'],
  authors: [{ name: 'Deni Setiawan' }],
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Deni Setiawan's Portfolio",
    description: "Full-Stack Developer & IT Lead based in Surabaya, Indonesia.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Deni Setiawan's Portfolio",
    description: "Full-Stack Developer & IT Lead based in Surabaya, Indonesia.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
