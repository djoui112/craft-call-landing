'use client'
import { motion } from 'framer-motion'
import { Clock, GitBranch, Calendar, ListChecks, MessageSquare, Volume2 } from 'lucide-react'
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
      staggerChildren: 0.1
    }
  }
}

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Nights, weekends, holidays - we\'re always on',
  },
  {
    icon: GitBranch,
    title: 'Smart Call Routing',
    description: 'Emergencies get flagged. Quotes get scheduled. Spam gets filtered.',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Syncs with your calendar automatically. No double-bookings.',
  },
  {
    icon: ListChecks,
    title: 'Lead Qualification',
    description: 'We ask the right questions so you know exactly what to expect',
  },
  {
    icon: MessageSquare,
    title: 'Instant SMS Summaries',
    description: 'Every call summarized and sent to your phone in under 60 seconds',
  },
  {
    icon: Volume2,
    title: 'Your Business Voice',
    description: 'Customized greeting with your business name and messaging',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Everything You Need. Nothing You Don't.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition duration-300">
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
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
