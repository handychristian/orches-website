'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/assets/logo.png"
                alt="Orches AI Agency Logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  // Show fallback text logo
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg items-center justify-center hidden">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-dark-800">Orches AI Agency</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-dark-600 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="#services"
              className="text-dark-600 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              {t('nav.services')}
            </Link>
            <Link
              href="#about"
              className="text-dark-600 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="#process"
              className="text-dark-600 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              {t('nav.process')}
            </Link>
            <Link
              href="#contact"
              className="text-dark-600 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              {t('nav.contact')}
            </Link>
            <Link
              href="#book-call"
              className="btn-primary"
            >
              {t('nav.bookCall')}
            </Link>
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <div className="md:hidden">
              <LanguageToggle />
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="#home"
                className="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="#process"
                className="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.process')}
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="pt-2">
                <Link
                  href="#book-call"
                  className="block w-full text-center btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.bookCall')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
