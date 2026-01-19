import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Deni Setiawan | Backend Developer',
  description: 'Backend Developer based in Surabaya, Indonesia. Experienced in building backend APIs and web applications using Go, Python, Java, Next.js, and Flutter.',
  keywords: ['Deni Setiawan', 'Backend Developer', 'Software Engineer', 'Go', 'Python', 'Java', 'Next.js', 'Flutter', 'Portfolio'],
  authors: [{ name: 'Deni Setiawan' }],
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Deni Setiawan's Portfolio",
    description: "Backend Developer based in Surabaya, Indonesia. Experienced in building backend APIs and web applications.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Deni Setiawan's Portfolio",
    description: "Backend Developer based in Surabaya, Indonesia. Experienced in building backend APIs and web applications.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
