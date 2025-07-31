import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_default'

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

// Email template parameters interface
export interface EmailParams {
  to_email: string
  from_name: string
  from_email: string
  company: string
  role: string
  website?: string
  company_size: string
  revenue: string
  budget: string
  services: string
  message?: string
  subject: string
}

// Send email using EmailJS
export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    console.log('Sending email with params:', params)

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: 'hello@orchesagency.com',
        from_name: params.from_name,
        from_email: params.from_email,
        company: params.company,
        role: params.role,
        website: params.website || 'Not provided',
        company_size: params.company_size,
        revenue: params.revenue,
        budget: params.budget,
        services: params.services,
        message: params.message || 'No additional message provided',
        subject: `New Business Inquiry from ${params.company} - Orches AI Agency Website`,
        reply_to: params.from_email
      }
    )

    console.log('Email sent successfully:', response)
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

// Format services for better readability
export const formatServices = (services: string): string => {
  const serviceMap: { [key: string]: string } = {
    'identifying': 'Identifying AI opportunities',
    'automation': 'AI Automation & Development',
    'content-creation': 'AI Content Creation',
    'marketing': 'AI Marketing Solutions',
    'educating': 'Team Training & Support',
    'developing': 'Custom AI Solutions'
  }

  return serviceMap[services] || services
}
