import { LanguageProvider } from '@/contexts/LanguageContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orches AI Agency - AI Automation Solutions for Indonesian Businesses',
  description: 'Transform your business with AI automation. We help Indonesian companies implement cutting-edge AI solutions to increase efficiency, reduce costs, and drive growth.',
  keywords: 'AI automation, artificial intelligence, business automation, Indonesia, digital transformation, AI solutions',
  authors: [{ name: 'Orches AI Agency' }],
  creator: 'Orches AI Agency',
  publisher: 'Orches AI Agency',
  openGraph: {
    title: 'Orches AI Agency - AI Automation Solutions',
    description: 'Transform your business with AI automation solutions tailored for Indonesian companies.',
    url: 'https://orchesagency.com',
    siteName: 'Orches AI Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orches AI Agency - AI Automation Solutions',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orches AI Agency - AI Automation Solutions',
    description: 'Transform your business with AI automation solutions tailored for Indonesian companies.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
