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
  title: 'CraftCall — AI Receptionist for Dental & Medical Clinics',
  description:
    'CraftCall answers every call, books every appointment, and replies to WhatsApp — 24 hours a day. Built for dental and medical clinics. Free 2-week pilot.',
  keywords: [
    'dental clinic AI receptionist',
    'medical office phone answering',
    'dental appointment booking AI',
    'after hours dental calls',
    'HIPAA friendly AI receptionist',
    'dental practice phone automation',
  ],
  openGraph: {
    title: 'CraftCall — AI Receptionist for Dental & Medical Clinics',
    description:
      'Your clinic is losing patients while you sleep. CraftCall answers every call, books appointments, and handles WhatsApp — 24/7.',
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
    title: 'CraftCall — AI Receptionist for Dental & Medical Clinics',
    description:
      'Answer every patient call. Book every appointment. Free 2-week pilot for dental clinics.',
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
