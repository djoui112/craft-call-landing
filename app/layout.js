import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://craft-call.com'),
  title: 'CraftCall — AI Receptionist for HVAC & Home Service Contractors',
  description:
    'CraftCall answers every call, books every job, and replies to WhatsApp — 24 hours a day. Built for HVAC, plumbing, and electrical contractors. Free 2-week pilot.',
  keywords: [
    'HVAC AI receptionist',
    'contractor phone answering service',
    'AI dispatcher for HVAC',
    'after hours HVAC calls',
    'missed call AI for contractors',
    'plumbing electrical phone automation',
  ],
  openGraph: {
    title: 'CraftCall — AI Receptionist for HVAC & Home Service Contractors',
    description:
      "You're losing jobs to voicemail while you're on a service call. CraftCall answers every call, books the job, and handles WhatsApp — 24/7.",
    url: 'https://craft-call.com',
    siteName: 'CraftCall',
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
    title: 'CraftCall — AI Receptionist for HVAC & Home Service Contractors',
    description:
      'Answer every job call. Book every appointment. Free 2-week pilot for HVAC contractors.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
