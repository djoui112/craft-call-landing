'use client'
import { motion } from 'framer-motion'
import { User, Users, Phone, Shield } from 'lucide-react'
import { Card } from './ui/Card'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const testimonials = [
  {
    quote: 'I was missing 3-4 calls every day while on jobs. That\'s $15,000 a month walking out the door. Craft Call paid for itself in week one.',
    name: 'Mike R.',
    title: 'HVAC Contractor, Phoenix AZ',
  },
  {
    quote: 'My phone would ring while I\'m shoulder-deep in a water heater install. Now Craft Call handles it, books them in my calendar, and I never miss a beat.',
    name: 'Sarah K.',
    title: 'Plumbing Business Owner, Denver CO',
  },
  {
    quote: 'Better than hiring a receptionist. Costs 80% less and works weekends. My wife isn\'t answering business calls at dinner anymore.',
    name: 'Tom D.',
    title: 'HVAC & Plumbing, Austin TX',
  },
]

const trustBadges = [
  { icon: Users, text: '500+ contractors served' },
  { icon: Phone, text: '10,000+ calls answered' },
  { icon: Shield, text: '99.8% uptime' },
]

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Trusted by Contractors Who Are Tired of Losing Calls
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-gray-50">
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <User className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-12"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="flex items-center gap-3">
                <Icon className="text-primary" size={24} />
                <span className="text-gray-700 font-medium">{badge.text}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
