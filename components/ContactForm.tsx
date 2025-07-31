'use client'

import { submitInquiry } from '@/app/actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Submitting...
        </div>
      ) : (
        'Send inquiry'
      )}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitInquiry, undefined)

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

            <form action={formAction} className="space-y-6">
              {/* General Error */}
              {state?.errors?.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      {state.errors.general.map((error, index) => (
                        <p key={index} className="text-red-800 text-sm">{error}</p>
                      ))}
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
                  className={`form-input ${state?.errors?.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {state?.errors?.name && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.name[0]}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="What is your email?"
                  required
                  className={`form-input ${state?.errors?.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {state?.errors?.email && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.email[0]}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="What is your role in the company?"
                  required
                  className={`form-input ${state?.errors?.role ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {state?.errors?.role && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.role[0]}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  required
                  className={`form-input ${state?.errors?.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {state?.errors?.company && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.company[0]}</p>
                )}
              </div>

              {/* Website */}
              <div>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="Company Website"
                  className="form-input"
                />
              </div>

              {/* Company Size */}
              <div>
                <select
                  id="company-size"
                  name="company-size"
                  required
                  className={`form-select ${state?.errors?.['company-size'] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select company size</option>
                  <option value="less-than-20">Less than 20</option>
                  <option value="20-50">20-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-500">100-500</option>
                  <option value="more-than-500">More than 500</option>
                </select>
                {state?.errors?.['company-size'] && (
                  <p className="mt-2 text-sm text-red-600">{state.errors['company-size'][0]}</p>
                )}
              </div>

              {/* Revenue */}
              <div>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  className={`form-select ${state?.errors?.revenue ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select revenue range (yearly)</option>
                  <option value="less-than-100k">Less than Rp. 100.000.000</option>
                  <option value="100k-500k">Rp. 100.000.000 - Rp. 500.000.000</option>
                  <option value="500k-1m">Rp. 500.000.000 - Rp. 1.000.000.000</option>
                  <option value="1m-2m">Rp. 1.000.000.000 - Rp. 2.000.000.000</option>
                  <option value="more-than-2m">More than Rp. 2.000.000.000</option>
                </select>
                {state?.errors?.revenue && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.revenue[0]}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <select
                  id="budget"
                  name="budget"
                  required
                  className={`form-select ${state?.errors?.budget ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select budget range</option>
                  <option value="less-than-10k">Less than Rp. 5.000.000</option>
                  <option value="10k-50k">Rp. 5.000.000 - Rp. 20.000.000</option>
                  <option value="50k-100k">Rp. 20.000.000 - Rp. 50.000.000</option>
                  <option value="more-than-100k">More than Rp. 50.000.000</option>
                </select>
                {state?.errors?.budget && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.budget[0]}</p>
                )}
              </div>

              {/* Services */}
              <div>
                <select
                  id="services"
                  name="services"
                  required
                  className={`form-select ${state?.errors?.services ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                >
                  <option value="">What services are you interested in?</option>
                  <option value="identifying">Identifying AI opportunities</option>
                  <option value="automation">AI Automation & Development</option>
                  <option value="content-creation">AI Content Creation</option>
                  <option value="marketing">AI Marketing Solutions</option>
                  <option value="educating">Team Training & Support</option>
                  <option value="developing">Custom AI Solutions</option>
                </select>
                {state?.errors?.services && (
                  <p className="mt-2 text-sm text-red-600">{state.errors.services[0]}</p>
                )}
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
              <SubmitButton />
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
                  +62 811 7782 446
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
