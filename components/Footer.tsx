'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer id="contact" className="bg-dark-900 text-white">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/assets/logo.png"
                  alt="Orches AI Agency"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-xl font-bold">Orches AI Agency</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.aiAutomation')}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.aiContent')}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.aiMarketing')}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.teamTraining')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.company')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.ourTeam')}
                  </Link>
                </li>
                <li>
                  <Link href="#book-call" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {t('footer.bookCall')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">{t('footer.email')}</p>
                  <a href="mailto:hello@orchesagency.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                    hello@orchesagency.com
                  </a>
                </div>
                <div>
                  <p className="text-white font-semibold">{t('footer.phone')}</p>
                  <a href="tel:+628117782446" className="text-gray-300 hover:text-white transition-colors duration-200">
                    +62 811 7782 446
                  </a>
                </div>
                <div>
                  <p className="text-white font-semibold">{t('footer.location')}</p>
                  <span className="text-gray-300">Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
