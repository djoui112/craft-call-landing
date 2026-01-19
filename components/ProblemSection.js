'use client'
import { motion } from 'framer-motion'
import { DollarSign, PhoneOff, UserX } from 'lucide-react'
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

const problems = [
  {
    icon: DollarSign,
    headline: 'Every missed call costs $1,200 in lost revenue',
    description: 'That emergency water heater replacement? Gone to your competitor who picked up.',
  },
  {
    icon: PhoneOff,
    headline: '85% of callers won\'t call back',
    description: 'When homeowners have an emergency, they call the first person who answers. Not the best person.',
  },
  {
    icon: UserX,
    headline: 'Receptionists cost $50,000/year',
    description: 'Plus benefits, training, sick days, and they still can\'t work 24/7.',
  },
]

export default function ProblemSection() {
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
          You're Bleeding Money While You Work
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition duration-300">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-red-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {problem.headline}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
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
