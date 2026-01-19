'use client'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import EmailCapture from './EmailCapture'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function CTASection() {

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Stop Missing Calls. Start Growing Your Business.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 mb-12"
        >
          Join 500+ contractors who never miss a revenue opportunity again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto space-y-6"
        >
          {/* Email Form */}
          <div id="waitlist-form">
            <EmailCapture buttonText="Get Early Access" />
            <p className="text-sm text-gray-600 mt-4">
              Join the waitlist for early bird pricing and priority onboarding
            </p>
          </div>

          {/* Demo CTA */}
          <div className="pt-4">
            <Button
              variant="outline"
              size="large"
              href={process.env.NEXT_PUBLIC_BOOKING_URL || 'https://cal.com/craft-call'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Book a 15-Minute Demo
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              See Craft Call in action - we'll call your phone live
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
