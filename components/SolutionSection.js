'use client'
import { motion } from 'framer-motion'
import { Phone, Bot, Calendar, MessageSquare } from 'lucide-react'
import { Card } from './ui/Card'

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

const steps = [
  {
    number: '1',
    icon: Phone,
    headline: 'A call comes in',
    description: 'Customer calls your business number while you\'re under a sink or up on a roof',
  },
  {
    number: '2',
    icon: Bot,
    headline: 'AI answers professionally',
    description: 'Craft Call picks up in 2 rings, greets them with your business name, sounds human',
  },
  {
    number: '3',
    icon: Calendar,
    headline: 'Lead gets qualified & booked',
    description: 'Emergency? We collect details. Quote request? We book them in your calendar. Wrong number? We handle it.',
  },
  {
    number: '4',
    icon: MessageSquare,
    headline: 'You get instant notification',
    description: 'SMS summary hits your phone: who called, what they need, when they\'re booked',
  },
]

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          Craft Call Answers Every Call. Books Every Appointment. Never Takes a Day Off.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 text-center mb-12"
        >
          Here's how it works:
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.headline}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
