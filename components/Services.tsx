'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  const services = [
    {
      icon: "🔍",
      titleKey: "service1.title",
      descriptionKey: "service1.description",
      featureKeys: [
        "service1.feature1",
        "service1.feature2",
        "service1.feature3",
        "service1.feature4"
      ],
      ctaKey: "service1.cta",
      status: "available"
    },
    {
      icon: "🛠️",
      titleKey: "service2.title",
      descriptionKey: "service2.description",
      featureKeys: [
        "service2.feature1",
        "service2.feature2",
        "service2.feature3",
        "service2.feature4"
      ],
      ctaKey: "service2.cta",
      status: "available"
    },
    {
      icon: "🎨",
      titleKey: "service3.title",
      descriptionKey: "service3.description",
      featureKeys: [
        "service3.feature1",
        "service3.feature2",
        "service3.feature3",
        "service3.feature4"
      ],
      ctaKey: "service3.cta",
      status: "coming-soon",
      launchDate: "Late Q3 2025",
      messageKey: "service3.message"
    },
    {
      icon: "📈",
      titleKey: "service4.title",
      descriptionKey: "service4.description",
      featureKeys: [
        "service4.feature1",
        "service4.feature2",
        "service4.feature3",
        "service4.feature4"
      ],
      ctaKey: "service4.cta",
      status: "coming-soon",
      launchDate: "Late Q3 2025",
      messageKey: "service4.message"
    },
    {
      icon: "🎓",
      titleKey: "service5.title",
      descriptionKey: "service5.description",
      featureKeys: [
        "service5.feature1",
        "service5.feature2",
        "service5.feature3",
        "service5.feature4"
      ],
      ctaKey: "service5.cta",
      status: "coming-soon",
      launchDate: "Q4 2025",
      messageKey: "service5.message"
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            {t('services.title').split('AI Solutions & Services').map((part, index) =>
              index === 0 ? <span key={index}>{part}</span> : <span key={index}><span className="gradient-text">AI Solutions & Services</span>{part}</span>
            )}
          </h2>
          <p className="text-xl text-dark-600 leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl border p-8 card-hover group ${service.status === 'coming-soon'
                ? 'border-gray-300 bg-gradient-to-br from-gray-50 to-white'
                : 'border-gray-200'
                }`}
            >
              {/* Coming Soon Badge */}
              {service.status === 'coming-soon' && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Coming {service.launchDate}
                </div>
              )}

              {/* Icon */}
              <div className={`text-4xl mb-6 ${service.status === 'coming-soon' ? 'opacity-80' : ''}`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 ${service.status === 'coming-soon' ? 'text-dark-700' : 'text-dark-900'
                }`}>
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className={`mb-6 leading-relaxed ${service.status === 'coming-soon' ? 'text-dark-500' : 'text-dark-600'
                }`}>
                {t(service.descriptionKey)}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.featureKeys.map((featureKey, featureIndex) => (
                  <li key={featureIndex} className={`flex items-start ${service.status === 'coming-soon' ? 'text-dark-500' : 'text-dark-600'
                    }`}>
                    <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${service.status === 'coming-soon' ? 'text-primary-400' : 'text-primary-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(featureKey)}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div>
                {service.status === 'coming-soon' ? (
                  <div className="space-y-3">
                    <a href="#book-call" className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-dark-600 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:from-gray-200 hover:to-gray-300 transition-all duration-200 cursor-pointer inline-block text-center">
                      {t(service.ctaKey)}
                    </a>
                    <p className="text-sm text-dark-400 text-center">
                      {service.messageKey && t(service.messageKey)}
                    </p>
                  </div>
                ) : (
                  <a href="#book-call" className="btn-primary">
                    {t(service.ctaKey)}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
