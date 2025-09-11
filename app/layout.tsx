import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { PerformanceMonitor } from "@/components/PerformanceMonitor"
import { Suspense } from "react"
import "./globals.css"

// Optimized font loading with display swap
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: "Y-SoC - Youth Season of Code",
  description: "You Code, You Create, You Collaborate - Join the global youth open-source community",
  generator: "Next.js",
  keywords: ["open source", "youth", "coding", "collaboration", "programming"],
  authors: [{ name: "Y-SoC Team" }],
  creator: "Y-SoC",
  publisher: "Y-SoC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://y-soc.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Y-SoC - Youth Season of Code",
    description: "You Code, You Create, You Collaborate - Join the global youth open-source community",
    url: 'https://y-soc.dev',
    siteName: 'Y-SoC',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Y-SoC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Y-SoC - Youth Season of Code",
    description: "You Code, You Create, You Collaborate - Join the global youth open-source community",
    images: ['/logo.png'],
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
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prefetch important routes */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/timeline" />
        <link rel="prefetch" href="/team" />
        <link rel="prefetch" href="/mentors" />
        <link rel="prefetch" href="/sponsors" />
        <link rel="prefetch" href="/contact" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="text-2xl font-mono font-bold text-primary">
                  &lt;/&gt;
                </span>
              </div>
              <p className="text-muted-foreground text-sm">Loading Y-SoC...</p>
            </div>
          </div>
        }>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
          <PerformanceMonitor />
        </Suspense>
      </body>
    </html>
  )
}
