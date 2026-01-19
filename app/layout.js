import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://craft-call.com'),
  title: 'Craft Call - AI Phone Answering for HVAC & Plumbing Contractors',
  description: 'Stop losing $1,200 per missed call. 24/7 AI receptionist that answers calls, books appointments, and qualifies leads. Starting at $99/month.',
  openGraph: {
    title: 'Craft Call - Never Miss Another Call',
    description: 'AI phone answering for contractors. Answer every call, book every appointment, 24/7.',
    url: 'https://craft-call.com',
    siteName: 'Craft Call',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craft Call - AI Phone Answering for Contractors',
    description: 'Stop losing $1,200 per missed call. 24/7 AI receptionist starting at $99/month.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
