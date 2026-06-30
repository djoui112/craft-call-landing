import { Button } from './ui/Button'
import { BOOKING_URL } from '@/lib/constants'

const includes = [
  'Unlimited calls',
  'All channels',
  'Full setup',
  'Dedicated support',
]

export default function PricingSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-12">
          It pays for itself in week one.
        </h2>

        <div className="border border-navy/20 rounded-lg p-8 sm:p-10 text-left">
          <p className="text-sm font-medium text-teal uppercase tracking-wide mb-2">
            Pilot Plan — Free for 2 weeks
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-navy mb-1">
            Then $299<span className="text-lg font-normal text-gray-500">/month</span>
          </p>
          <p className="text-gray-600 mt-4 mb-6">
            Includes: Everything.
          </p>
          <ul className="space-y-2 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-teal">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            size="large"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center"
          >
            Start your free pilot →
          </Button>
        </div>

        <p className="mt-10 text-lg sm:text-xl font-semibold text-navy leading-relaxed">
          One new patient = $2,000 lifetime value.
          <br />
          One month of CraftCall = $299.
          <br />
          <span className="text-gray-600 font-normal">The math isn&apos;t complicated.</span>
        </p>
      </div>
    </section>
  )
}
