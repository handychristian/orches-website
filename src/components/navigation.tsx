'use client'

import { useState, useEffect } from 'react'
import { Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

const navigationItems = [
  { label: 'Problem', href: '#problem' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if we're in the demo section
      const demoSection = document.getElementById('demo-section')
      const demoSectionEnd = document.getElementById('demo-section-end')

      let inDemoSection = false
      if (demoSection && demoSectionEnd) {
        const demoStart = demoSection.offsetTop
        const demoEnd = demoSectionEnd.offsetTop + demoSectionEnd.offsetHeight
        inDemoSection = currentScrollY >= demoStart - 100 && currentScrollY < demoEnd
      }

      // If in demo section, force hide navigation
      if (inDemoSection) {
        setVisible(false)
      } else {
        // Normal auto-hide behavior
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold
          setVisible(false)
        } else {
          // Scrolling up
          setVisible(true)
        }
      }

      setScrolled(currentScrollY > 0)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200/50'
          : 'bg-white'
      } ${
        visible ? 'top-0' : '-top-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clean & Minimal */}
          <a href="#" onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }} className="flex items-center gap-0.5 cursor-pointer">
            <div className="bg-white rounded-full p-2.5">
              <Image
                src="/assets/logo.png"
                alt="OrchesAI Logo"
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
            </div>
            <span className="text-[22px] font-medium text-black tracking-tight">
              OrchesAI
            </span>
          </a>

          {/* Desktop Navigation - Clean Apple Style */}
          <div className="hidden md:flex items-center gap-7">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="text-[15px] text-gray-800 hover:text-black transition-colors duration-200 font-normal"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions - Search + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-800" />
            </button>
            <Button
              size="sm"
              asChild
              className="bg-[#0071E3] hover:bg-[#0051D5] text-white px-4 py-1.5 rounded-full text-[14px] font-normal transition-colors h-8"
            >
              <a href="https://wa.me/6285161912446" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden p-2">
                <Menu className="h-5 w-5 text-black" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full bg-white p-6">
              <div className="flex flex-col h-full">
                {/* Logo Section - Centered */}
                <div className="flex justify-center items-center gap-2 pb-8 border-b border-gray-100">
                  <div className="bg-white rounded-full p-2">
                    <Image
                      src="/assets/logo.png"
                      alt="OrchesAI Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <span className="text-[20px] font-semibold text-black tracking-tight">
                    OrchesAI
                  </span>
                </div>

                {/* Navigation Items - Better Spacing */}
                <nav className="flex flex-col gap-2 py-6 flex-1">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[18px] font-medium text-gray-900 hover:text-[#0071E3] py-4 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsMobileMenuOpen(false)
                        const element = document.querySelector(item.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* CTA Button - Sticky Bottom */}
                <div className="pt-4 border-t border-gray-100">
                  <Button asChild className="w-full bg-[#0071E3] hover:bg-[#0051D5] text-white rounded-full h-12 text-[16px] font-medium">
                    <a href="https://wa.me/6285161912446" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}