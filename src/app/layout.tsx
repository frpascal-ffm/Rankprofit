import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/src/components/Navbar'
import { Footer } from '@/src/components/Footer'
import { CustomCursor } from '@/src/components/CustomCursor'
import { ScrollProgress } from '@/src/components/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Niro Media | Online Marketing Agentur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30 overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />

        {/* Noise Overlay - local data URI, no network request */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />

        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-glow opacity-60" />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
