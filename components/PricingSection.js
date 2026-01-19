'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { scrollToElement } from '@/lib/utils'

const features = [
  '500 minutes of AI call handling (~150-200 calls)',
  '24/7 AI answering',
  'Appointment booking',
  'SMS notifications',
  'Custom business greeting',
  'Calendar integration',
]

export default function PricingSection() {
  const handleCTAClick = (e) => {
    e.preventDefault()
    scrollToElement('waitlist-form')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold mb-12"
        >
          Simple Pricing That Makes Sense
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white text-gray-900 p-12 rounded-2xl shadow-2xl"
        >
          <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Early Access Pricing
          </div>
          
          <div className="mb-8">
            <div className="text-5xl font-bold mb-2">Starting at $99/month</div>
          </div>

          <div className="space-y-4 text-left max-w-md mx-auto mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mb-6 text-center">
            <p className="text-gray-700 font-semibold mb-2">
              Additional minutes: <span className="text-primary">$0.20/minute</span>
            </p>
            <p className="text-sm text-gray-600">
              Final pricing tiers coming soon - join waitlist for early access discount
            </p>
          </div>

          <Button
            variant="primary"
            size="large"
            onClick={handleCTAClick}
            className="w-full sm:w-auto"
          >
            Get Early Access
          </Button>
        </motion.div>

        {/* Value Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-6 max-w-md mx-auto"
        >
          <p className="text-lg">
            <span className="font-semibold">Traditional receptionist:</span> $50,000/year.{' '}
            <span className="font-semibold">Craft Call:</span> $1,200/year.{' '}
            <span className="font-bold">You do the math.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
