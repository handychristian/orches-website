'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  const { t } = useLanguage();
  // Carousel images for the hero section
  const carouselImages = [
    '/assets/hero-automation.png',
    '/assets/ai-workflow-1.png',
    '/assets/ai-workflow-2.png',
    '/assets/ai-workflow-3.png',
    '/assets/ai-workflow-4.png',
    '/assets/ai-workflow-5.png'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 animate-slide-up leading-tight">
              {t('hero.title').split('AI').map((part, index) =>
                index === 0 ? <span key={index}>{part}</span> : <span key={index}><span className="gradient-text">AI</span>{part}</span>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-dark-600 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <img src="/assets/n8n-logo.png" alt="N8N" className="h-8 w-auto" onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'block';
                  }} />
                  <span className="text-2xl font-bold text-primary-600 hidden">N8N</span>
                </div>
                <div className="text-sm text-dark-600">{t('hero.platformExpert')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600 mb-2">AI</div>
                <div className="text-sm text-dark-600">{t('hero.aiIntegration')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-600 mb-2">Priority</div>
                <div className="text-sm text-dark-600">{t('hero.support247')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link href="#book-call" className="btn-primary text-lg px-8 py-4">
                {t('hero.getInTouch')}
              </Link>
              <Link href="#services" className="btn-secondary text-lg px-8 py-4">
                {t('hero.learnMore')}
              </Link>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <ImageCarousel
              images={carouselImages}
              alt="AI Automation Workflow"
              autoPlay={true}
              interval={4000}
              className="max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex">
        <Link href="#problem-solution" className="flex flex-col items-center text-dark-400 hover:text-primary-600 transition-colors duration-200">
          <span className="text-xs md:text-sm mb-2">{t('hero.scrollToExplore')}</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
