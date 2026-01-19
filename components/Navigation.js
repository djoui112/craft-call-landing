'use client'
import { useState, useEffect } from 'react'
import { Button } from './ui/Button'
import { scrollToElement } from '@/lib/utils'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = (e) => {
    e.preventDefault()
    scrollToElement('waitlist-form')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="text-2xl font-bold text-primary">
            Craft Call
          </div>
          <Button
            variant="primary"
            size="medium"
            onClick={handleCTAClick}
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  )
}
