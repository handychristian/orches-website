'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  role: string
  company: string
  website?: string
  'company-size': string
  revenue: string
  budget: string
  services: string
  message?: string
}

export default function ContactFormWithEmailJS() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

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
    const emailBody = `New Business Inquiry from ${emailData.company}

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

---
This inquiry was submitted via the Orches AI Agency website contact form.`

    try {
      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/xdkogqpb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'hello@orchesagency.com',
          subject: `New Business Inquiry from ${emailData.company} - Orches AI Agency Website`,
          message: emailBody,
          _replyto: emailData.email,
          _subject: `New Business Inquiry from ${emailData.company} - Orches AI Agency Website`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send your inquiry. Please try again or contact us directly.')
    } finally {
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
              The best AI systems are built side by side.
            </h2>
            <p className="text-2xl font-light mb-2">
              Let's Partner Up
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-dark-900">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Tell us where you're at
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-medium">Thank you for your inquiry!</p>
                    <p className="text-green-700 text-sm mt-1">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-red-800 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What is your name?"
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
                  placeholder="What is your email?"
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
                  placeholder="What is your role in the company?"
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
                  placeholder="Company Name"
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
                  placeholder="Company Website (optional)"
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
                  <option value="">Company Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
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
                  <option value="">Annual Revenue</option>
                  <option value="under-1m">Under $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-50m">$10M - $50M</option>
                  <option value="50m+">$50M+</option>
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
                  <option value="">Budget Range</option>
                  <option value="under-10k">Under $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
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
                  <option value="">What services are you interested in?</option>
                  <option value="identifying">Identifying AI opportunities</option>
                  <option value="automation">AI Automation & Development</option>
                  <option value="content-creation">AI Content Creation</option>
                  <option value="marketing">AI Marketing Solutions</option>
                  <option value="educating">Team Training & Support</option>
                  <option value="developing">Custom AI Solutions</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
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
                    Sending...
                  </div>
                ) : (
                  'Send inquiry'
                )}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-dark-600 mb-4">Prefer to schedule directly?</p>
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
