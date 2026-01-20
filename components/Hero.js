'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/Button'
import EmailCapture from './EmailCapture'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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

export default function Hero() {

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Stop Losing $1,200 Every Time You Miss a Call
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Your AI receptionist answers 24/7, books appointments, and qualifies leads - while you focus on the work that pays.
            </motion.p>

            {/* Stat Callout */}
            <motion.div
              variants={fadeInUp}
              className="border-l-4 border-accent bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-700 font-medium">
                HVAC and plumbing contractors miss <span className="font-bold text-primary">27%</span> of incoming calls.{' '}
                <span className="font-bold text-primary">85%</span> of those callers never call back.
              </p>
            </motion.div>

            {/* Email Form */}
            <motion.div
              variants={fadeInUp}
              id="waitlist-form"
              className="space-y-4"
            >
              <EmailCapture />

              {/* Secondary CTA */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="large"
                  href={process.env.NEXT_PUBLIC_BOOKING_URL || 'https://cal.com/achref-merzougui-k97hmk/craft-call'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Book a Demo
                </Button>
                <p className="text-sm text-gray-600 mt-2">
                  See Craft Call in action - we'll call your phone live
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format"
              alt="Contractor using phone while working on job site"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* 
              Image Options (replace src URL above):
              
              Contractor on phone (current):
              https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format
              
              HVAC technician working:
              https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format
              https://images.unsplash.com/photo-1621905251181-0161679bba86?w=800&h=600&fit=crop&auto=format
              
              Plumber working:
              https://images.unsplash.com/photo-1621905251181-0161679bba86?w=800&h=600&fit=crop&auto=format
              https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&auto=format
              
              Search Unsplash: https://unsplash.com/s/photos/hvac-technician
              Search Unsplash: https://unsplash.com/s/photos/plumber-working
              Search Unsplash: https://unsplash.com/s/photos/contractor-phone
            */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
