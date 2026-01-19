'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Does it sound like a robot?',
    answer: 'No. Our AI is trained on natural conversation and sounds professional and human. Customers often don\'t realize they\'re talking to AI.',
  },
  {
    question: 'What if the AI doesn\'t know how to answer something?',
    answer: 'For complex questions, we gather information and send you an SMS immediately so you can call back. Nothing falls through the cracks.',
  },
  {
    question: 'How do you know if it\'s an emergency vs. a quote?',
    answer: 'We ask qualifying questions based on your industry. "Is this an emergency?" "When do you need service?" Then we route accordingly.',
  },
  {
    question: 'Can I customize what the AI says?',
    answer: 'Absolutely. Your business greeting, common questions, pricing ranges - all customizable to match your business.',
  },
  {
    question: 'What if I\'m already on the phone?',
    answer: 'Craft Call handles the call, books the appointment, sends you a summary. You return the call when you\'re free, or they\'re already on your calendar.',
  },
  {
    question: 'How fast can I get set up?',
    answer: 'Most contractors are up and running in under 24 hours. We handle the technical setup - you just tell us about your business.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Questions? We've Got Answers.
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-6 text-left hover:text-primary transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 pb-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
