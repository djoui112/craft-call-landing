import { Button } from './ui/Button'
import { BOOKING_URL } from '@/lib/constants'

function PhoneAnimation() {
  return (
    <div className="relative w-28 h-28 mx-auto mt-12 sm:mt-16" aria-hidden="true">
      <div className="absolute inset-0 flex items-center justify-center animate-pulse-ring">
        <div className="w-24 h-24 rounded-full border-2 border-teal/30" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center animate-phone-ring">
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0B1D3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center animate-show-check">
        <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.15] tracking-tight">
          Your clinic is losing patients while you sleep.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          CraftCall answers every call, books every appointment, and replies to
          every WhatsApp — 24 hours a day. So you don&apos;t have to.
        </p>

        <div className="mt-10">
          <Button
            variant="primary"
            size="large"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            See it answer a call live →
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Free 2-week pilot · No contract · Setup in 48h
          </p>
        </div>

        <PhoneAnimation />
      </div>
    </section>
  )
}
