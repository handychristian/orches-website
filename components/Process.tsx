'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Process() {
  const { t } = useLanguage()

  const processSteps = [
    {
      number: "1",
      titleKey: "process.step1.title",
      subtitleKey: "process.step1.subtitle",
      descriptionKey: "process.step1.description",
      featureGroups: [
        {
          titleKey: "process.step1.analysis.title",
          featureKeys: [
            "process.step1.analysis.item1",
            "process.step1.analysis.item2"
          ]
        },
        {
          titleKey: "process.step1.discovery.title",
          featureKeys: [
            "process.step1.discovery.item1",
            "process.step1.discovery.item2"
          ]
        }
      ]
    },
    {
      number: "2",
      titleKey: "process.step2.title",
      descriptionKey: "process.step2.description",
      featureKeys: [
        "process.step2.item1",
        "process.step2.item2",
        "process.step2.item3",
        "process.step2.item4"
      ]
    },
    {
      number: "3",
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
      featureKeys: [
        "process.step3.item1",
        "process.step3.item2",
        "process.step3.item3",
        "process.step3.item4"
      ]
    },
    {
      number: "4",
      titleKey: "process.step4.title",
      descriptionKey: "process.step4.description",
      featureKeys: [
        "process.step4.item1",
        "process.step4.item2",
        "process.step4.item3",
        "process.step4.item4"
      ]
    }
  ]

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            {t('process.title').split('Implementation Process').map((part, index) =>
              index === 0 ? <span key={index}>{part}</span> : <span key={index}><span className="gradient-text">Implementation Process</span>{part}</span>
            )}
          </h2>
          <p className="text-xl text-dark-600 leading-relaxed">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Step Header */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {t(step.titleKey)}
                  </h3>
                  {step.subtitleKey && (
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t(step.subtitleKey)}
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>

                  {/* Features List - Enhanced for Discovery Call */}
                  {step.featureGroups ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {step.featureGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-lg font-semibold text-dark-900 mb-3">
                            {t(group.titleKey)}
                          </h4>
                          <ul className="space-y-2">
                            {group.featureKeys.map((featureKey, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-dark-600 text-sm">{t(featureKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.featureKeys.map((featureKey, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-600">{t(featureKey)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < processSteps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-gradient-to-b from-primary-600 to-primary-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
