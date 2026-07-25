const steps = [
  {
    label: 'A customer calls at 11pm',
    detail: 'Their AC just died, or a pipe just burst. They need someone out this week. You\'re on another job.',
  },
  {
    label: 'CraftCall answers in 2 rings',
    detail: 'Picks up with your business name. Asks what they need. Sounds like a real person.',
  },
  {
    label: 'Job booked. You get a text.',
    detail: 'The slot goes on your calendar. You wake up to a summary on your phone.',
  },
]

export default function SolutionSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
          Three things happen when a customer calls
        </h2>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-start gap-3">
          {steps.map((step, index) => (
            <div key={step.label} className="contents">
              <div className="flex-1">
                <p className="text-lg font-semibold text-navy mb-2">{step.label}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{step.detail}</p>
              </div>
              {index < steps.length - 1 && (
                <span className="text-teal text-2xl font-light shrink-0 pt-1 px-1" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.label}>
              <p className="text-lg font-semibold text-navy mb-2">{step.label}</p>
              <p className="text-gray-600 leading-relaxed text-sm">{step.detail}</p>
              {index < steps.length - 1 && (
                <p className="text-teal text-center mt-4 text-xl" aria-hidden="true">↓</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
