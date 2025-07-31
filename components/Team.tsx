'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Team() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      nameKey: "team.handy.name",
      titleKey: "team.handy.role",
      image: "/assets/handy-christian.png",
      fallbackImage: "/assets/logo.png",
      descriptionKey: "team.handy.description",
      expertiseKeys: ["team.handy.skill1", "team.handy.skill2", "team.handy.skill3"]
    },
    {
      nameKey: "team.charles.name",
      titleKey: "team.charles.role",
      image: "/assets/charles-tan.png",
      fallbackImage: "/assets/logo.png",
      descriptionKey: "team.charles.description",
      expertiseKeys: ["team.charles.skill1", "team.charles.skill2", "team.charles.skill3"]
    }
  ]

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            {t('team.title').split('Team').map((part, index) =>
              index === 0 ? <span key={index}>{part}</span> : <span key={index}><span className="gradient-text">Team</span>{part}</span>
            )}
          </h2>
          <p className="text-xl text-dark-600 leading-relaxed">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Member Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 mx-auto md:mx-0">
                    <img
                      src={member.image}
                      alt={`${t(member.nameKey)} - ${t(member.titleKey)}`}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = member.fallbackImage;
                      }}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {t(member.nameKey)}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    {t(member.titleKey)}
                  </p>
                  <p className="text-dark-600 leading-relaxed mb-6">
                    {t(member.descriptionKey)}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.expertiseKeys.map((skillKey, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {t(skillKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Team Members Text */}
        <div className="text-center mt-10 mb-16">
          <p className="text-xl text-dark-600 font-medium">
            {t('team.additional') || "And 4 more Engineers"}
          </p>
        </div>

        {/* Use Cases Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-8 text-center">
            {t('team.usecases.title') || "Our Internal Use Cases"}
          </h3>
          <p className="text-lg text-dark-600 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
            {t('team.usecases.subtitle') || "Real-world AI solutions we've built for our own team"}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Use Case 1 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">1</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case1.title') || "Script Generation + Supabase"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case1.description') || "Core engine content kamu"}</p>
            </div>
            
            {/* Use Case 2 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">2</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case2.title') || "Daily Log Bot + Supabase"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case2.description') || "Transfer knowledge + data RAG"}</p>
            </div>
            
            {/* Use Case 3 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">3</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case3.title') || "Deployment Tracker"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case3.description') || "Professionalism & scale"}</p>
            </div>
            
            {/* Use Case 4 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">4</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case4.title') || "Lead Tracker Otomatis"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case4.description') || "Growth engine"}</p>
            </div>
            
            {/* Use Case 5 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">5</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case5.title') || "Content Scheduler"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case5.description') || "Multi-platform scale"}</p>
            </div>
            
            {/* Use Case 6 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">6</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case6.title') || "Feedback Pipeline"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case6.description') || "Product-market fit"}</p>
            </div>
            
            {/* Use Case 7 */}
            <div className="bg-gray-50 rounded-xl p-6 card-hover md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-primary-600 mr-3">7</span>
                <h4 className="text-xl font-semibold text-dark-900">{t('team.usecases.case7.title') || "Performance Summary Bot"}</h4>
              </div>
              <p className="text-dark-600">{t('team.usecases.case7.description') || "Motivasi + culture builder"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
