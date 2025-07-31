'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

export default function SimpleContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Create email content
    const emailData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      company: formData.get('company') as string,
      website: formData.get('website') as string || 'Not provided',
      'company-size': formData.get('company-size') as string,
      revenue: formData.get('revenue') as string,
      budget: formData.get('budget') as string,
      services: formData.get('services') as string,
      message: formData.get('message') as string || 'No additional message provided',
    }

    // Create professional email body
    const subject = `New Business Inquiry from ${emailData.company} - Orches AI Agency Website`
    const emailBody = `Dear Charles,

I hope this email finds you well. I am writing to inquire about AI automation services from Orches AI Agency.

CONTACT INFORMATION:
Name: ${emailData.name}
Email: ${emailData.email}
Role: ${emailData.role}
Company: ${emailData.company}
Website: ${emailData.website}

COMPANY DETAILS:
Company Size: ${emailData['company-size']}
Annual Revenue: ${emailData.revenue}
Budget Range: ${emailData.budget}

SERVICES OF INTEREST:
${emailData.services}

ADDITIONAL MESSAGE:
${emailData.message}

I would appreciate the opportunity to discuss how Orches AI Agency can help our business with AI automation solutions. Please let me know your availability for a discovery call.

Thank you for your time and consideration.

Best regards,
${emailData.name}
${emailData.role}
${emailData.company}

---
This inquiry was submitted via the Orches AI Agency website contact form.`

    // Create mailto URL
    const mailtoUrl = `mailto:hello@orchesagency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    try {
      // Open email client
      window.location.href = mailtoUrl

      // Show success message after a short delay
      setTimeout(() => {
        setSubmitStatus('success')
        form.reset()
        setIsSubmitting(false)
      }, 1000)
    } catch (error) {
      console.error('Error opening email client:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="book-call" className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-2xl font-light mb-2">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-dark-900">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {t('contact.formTitle')}
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-medium">{t('contact.successTitle')}</p>
                    <p className="text-green-700 text-sm mt-1">{t('contact.successMessage')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-800 text-sm">{t('contact.errorMessage')}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact.namePlaceholder')}
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  className="form-input"
                />
              </div>

              {/* Role */}
              <div>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder={t('contact.rolePlaceholder')}
                  required
                  className="form-input"
                />
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder={t('contact.companyPlaceholder')}
                  required
                  className="form-input"
                />
              </div>

              {/* Website */}
              <div>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder={t('contact.websitePlaceholder')}
                  className="form-input"
                />
              </div>

              {/* Company Size */}
              <div>
                <select
                  id="company-size"
                  name="company-size"
                  required
                  className="form-select"
                >
                  <option value="">{t('contact.companySizePlaceholder')}</option>
                  <option value="1-10">{t('contact.companySize1')}</option>
                  <option value="11-50">{t('contact.companySize2')}</option>
                  <option value="51-200">{t('contact.companySize3')}</option>
                  <option value="201-500">{t('contact.companySize4')}</option>
                  <option value="500+">{t('contact.companySize5')}</option>
                </select>
              </div>

              {/* Revenue */}
              <div>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  className="form-select"
                >
                  <option value="">{t('contact.revenuePlaceholder')}</option>
                  <option value="under-500m">{t('contact.revenue1')}</option>
                  <option value="500m-2.5b">{t('contact.revenue2')}</option>
                  <option value="2.5b-15b">{t('contact.revenue3')}</option>
                  <option value="15b-50b">{t('contact.revenue4')}</option>
                  <option value="50b+">{t('contact.revenue5')}</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="form-select"
                >
                  <option value="">{t('contact.budgetPlaceholder')}</option>
                  <option value="under-50m">{t('contact.budget1')}</option>
                  <option value="50m-150m">{t('contact.budget2')}</option>
                  <option value="150m-300m">{t('contact.budget3')}</option>
                  <option value="300m-750m">{t('contact.budget4')}</option>
                  <option value="750m+">{t('contact.budget5')}</option>
                </select>
              </div>

              {/* Services */}
              <div>
                <select
                  id="services"
                  name="services"
                  required
                  className="form-select"
                >
                  <option value="">{t('contact.servicesPlaceholder')}</option>
                  <option value="Identifying AI opportunities">{t('contact.service1')}</option>
                  <option value="AI Automation & Development">{t('contact.service2')}</option>
                  <option value="AI Content Creation">{t('contact.service3')}</option>
                  <option value="AI Marketing Solutions">{t('contact.service4')}</option>
                  <option value="Team Training & Support">{t('contact.service5')}</option>
                  <option value="Custom AI Solutions">{t('contact.service6')}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  rows={4}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.submittingText')}
                  </div>
                ) : (
                  t('contact.submitButton')
                )}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-dark-600 mb-4">{t('contact.directContact')}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@orchesagency.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  hello@orchesagency.com
                </a>
                <span className="hidden sm:inline text-gray-400">|</span>
                <a
                  href="https://wa.me/628117782446?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20AI%20automation%20dari%20Orches%20AI%20Agency.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20detail%20mengenai%20solusi%20yang%20tersedia%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  WhatsApp: +62 811 7782 446
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
