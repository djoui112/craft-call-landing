'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'Will customers know they\'re talking to AI?',
    answer:
      'Most don\'t — and most don\'t care, as long as their question gets answered and their job gets booked. We can also tell callers upfront if you prefer.',
  },
  {
    question: 'We already have a dispatcher / office manager answering calls.',
    answer:
      'Good. They\'ll finally be able to focus on scheduling and running jobs instead of being chained to the phone. CraftCall handles overflow, after-hours, and WhatsApp so they can do their actual job.',
  },
  {
    question: 'What about customer data and privacy?',
    answer:
      'Everything is encrypted. We don\'t store any customer data beyond what\'s needed to complete the booking.',
  },
  {
    question: 'How fast is setup?',
    answer:
      '48 hours. We configure everything — you just forward your calls.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
          What contractors ask us
        </h2>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex justify-between items-center w-full py-5 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  <span
                    className={`text-teal text-xl shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
