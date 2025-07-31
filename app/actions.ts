'use server'


export interface InquiryFormData {
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

export interface ActionState {
  errors?: {
    name?: string[]
    email?: string[]
    role?: string[]
    company?: string[]
    'company-size'?: string[]
    revenue?: string[]
    budget?: string[]
    services?: string[]
    general?: string[]
  }
  success?: boolean
  message?: string
}

function validateFormData(formData: InquiryFormData): ActionState['errors'] {
  const errors: ActionState['errors'] = {}

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = ['Please enter your full name']
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = ['Please enter a valid email address']
  }

  // Role validation
  if (!formData.role || formData.role.trim().length < 2) {
    errors.role = ['Please enter your role in the company']
  }

  // Company validation
  if (!formData.company || formData.company.trim().length < 2) {
    errors.company = ['Please enter your company name']
  }

  // Company size validation
  if (!formData['company-size']) {
    errors['company-size'] = ['Please select your company size']
  }

  // Revenue validation
  if (!formData.revenue) {
    errors.revenue = ['Please select your revenue range']
  }

  // Budget validation
  if (!formData.budget) {
    errors.budget = ['Please select your budget range']
  }

  // Services validation
  if (!formData.services) {
    errors.services = ['Please select the services you are interested in']
  }

  return Object.keys(errors).length > 0 ? errors : undefined
}

function createEmailTemplate(formData: InquiryFormData): string {
  const subject = `New Business Inquiry from ${formData.company} - Orches AI Agency Website`

  const emailBody = `Dear Charles,

I hope this email finds you well. I am writing to inquire about AI automation services from Orches AI Agency.

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Role: ${formData.role}
Company: ${formData.company}
Website: ${formData.website || 'Not provided'}

COMPANY DETAILS:
Company Size: ${formData['company-size']}
Annual Revenue: ${formData.revenue}
Budget Range: ${formData.budget}

SERVICES OF INTEREST:
${formData.services}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message provided'}

I would appreciate the opportunity to discuss how Orches AI Agency can help our business with AI automation solutions. Please let me know your availability for a discovery call.

Thank you for your time and consideration.

Best regards,
${formData.name}
${formData.role}
${formData.company}

---
This inquiry was submitted via the Orches AI Agency website contact form.`

  return `mailto:hello@orchesagency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
}

export async function submitInquiry(
  prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  try {
    // Extract form data
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      company: formData.get('company') as string,
      website: formData.get('website') as string || undefined,
      'company-size': formData.get('company-size') as string,
      revenue: formData.get('revenue') as string,
      budget: formData.get('budget') as string,
      services: formData.get('services') as string,
      message: formData.get('message') as string || undefined,
    }

    // Validate form data
    const errors = validateFormData(data)
    if (errors) {
      return { errors }
    }

    // Return success - email will be sent on client side
    return {
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.'
    }

  } catch (error) {
    console.error('Form submission error:', error)
    return {
      errors: {
        general: ['An error occurred while submitting your inquiry. Please try again.']
      }
    }
  }
}
