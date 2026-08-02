import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dasith Randula | Software Engineering Undergraduate',
  description:
    'Portfolio of Dasith Randula — Flutter Developer, Full-Stack Developer, AI & IoT Enthusiast building intelligent digital solutions.',
  keywords: [
    'Dasith Randula',
    'Flutter Developer',
    'Full Stack Developer',
    'AI Developer',
    'Software Engineer',
    'Sri Lanka',
  ],
  authors: [{ name: 'Dasith Randula' }],
  openGraph: {
    title: 'Dasith Randula | Software Engineering Undergraduate',
    description: 'Building intelligent digital solutions through software engineering, AI, mobile apps, cloud, and IoT.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFF' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
