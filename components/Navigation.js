'use client'
import { useState, useEffect } from 'react'
import { Button } from './ui/Button'
import Logo from './Logo'
import { BOOKING_URL } from '@/lib/constants'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm border-b border-gray-100' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="shrink-0">
            <Logo />
          </a>
          <Button
            variant="primary"
            size="small"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block"
          >
            See it live →
          </Button>
        </div>
      </div>
    </nav>
  )
}
