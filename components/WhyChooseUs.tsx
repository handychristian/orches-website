'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyChooseUs() {
  const { t } = useLanguage()

  const features = [
    {
      icon: "📊",
      titleKey: "whyChoose.proven.title",
      descriptionKey: "whyChoose.proven.description"
    },
    {
      icon: "🛠️",
      titleKey: "whyChoose.tools.title",
      descriptionKey: "whyChoose.tools.description"
    },
    {
      icon: "🤝",
      titleKey: "whyChoose.partnership.title",
      descriptionKey: "whyChoose.partnership.description"
    },
    {
      icon: "🇮🇩",
      titleKey: "whyChoose.indonesian.title",
      descriptionKey: "whyChoose.indonesian.description"
    },
    {
      icon: "⚡",
      titleKey: "whyChoose.rapid.title",
      descriptionKey: "whyChoose.rapid.description"
    },
    {
      icon: "📞",
      titleKey: "whyChoose.support.title",
      descriptionKey: "whyChoose.support.description"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            {t('whyChoose.title').split('Orches AI Agency').map((part, index) =>
              index === 0 ? <span key={index}>{part}</span> : <span key={index}><span className="gradient-text">Orches AI Agency</span>{part}</span>
            )}
          </h2>
          <p className="text-xl text-dark-600 leading-relaxed">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 card-hover text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                {t(feature.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-dark-600 leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
