'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AITransformation() {
  const { t } = useLanguage()
  return (
    <section id="problem-solution" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            {t('problemSolution.title').split('AI Transformation Journey').map((part, index) =>
              index === 0 ? <span key={index}>{part}</span> : <span key={index}><span className="gradient-text">AI Transformation Journey</span>{part}</span>
            )}
          </h2>
          <p className="text-xl text-dark-600 leading-relaxed">
            {t('problemSolution.subtitle')}
          </p>
        </div>

        {/* Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
              01
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">{t('problemSolution.step1.title')}</h3>
            <p className="text-dark-600 leading-relaxed">
              {t('problemSolution.step1.description')}
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
              02
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">{t('problemSolution.step2.title')}</h3>
            <p className="text-dark-600 leading-relaxed">
              {t('problemSolution.step2.description')}
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
              03
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">{t('problemSolution.step3.title')}</h3>
            <p className="text-dark-600 leading-relaxed">
              {t('problemSolution.step3.description')}
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-12">
            {t('problemSolution.results.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('problemSolution.results.proven')}</div>
              <p className="text-dark-600 leading-relaxed">
                {t('problemSolution.results.provenDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('problemSolution.results.expert')}</div>
              <p className="text-dark-600 leading-relaxed">
                {t('problemSolution.results.expertDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('problemSolution.results.dedicated')}</div>
              <p className="text-dark-600 leading-relaxed">
                {t('problemSolution.results.dedicatedDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
