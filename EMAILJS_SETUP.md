# EmailJS Setup Guide

## 🚀 Quick Setup Instructions

Follow these steps to configure EmailJS for automatic email sending:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and connect your account
   - **Outlook**: Select Outlook and connect your account
   - **Other**: Configure SMTP settings
4. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
{{subject}}
```

**Content:**
```
Dear Charles,

You have received a new business inquiry from your website.

CONTACT INFORMATION:
Name: {{from_name}}
Email: {{from_email}}
Role: {{role}}
Company: {{company}}
Website: {{website}}

COMPANY DETAILS:
Company Size: {{company_size}}
Annual Revenue: {{revenue}}
Budget Range: {{budget}}

SERVICES OF INTEREST:
{{services}}

ADDITIONAL MESSAGE:
{{message}}

Best regards,
{{from_name}}
{{role}}
{{company}}

---
This inquiry was submitted via the Orches AI Agency website contact form.
```

4. Set **To Email** to: `hello@orchesagency.com`
5. Set **Reply To** to: `{{reply_to}}`
6. Save and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz`)

### 5. Update Environment Variables
Edit the `.env.local` file in your project root:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz
```

Replace the values with your actual EmailJS credentials.

### 6. Test the Form
1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```
2. Go to your website's contact form
3. Fill out and submit the form
4. Check `hello@orchesagency.com` for the email

## 🔧 Troubleshooting

### Form submits but no email received:
1. Check browser console for errors
2. Verify EmailJS credentials in `.env.local`
3. Ensure EmailJS service is connected to the correct email account
4. Check spam folder

### "Service not found" error:
- Double-check the Service ID in `.env.local`
- Ensure the service is active in EmailJS dashboard

### "Template not found" error:
- Verify the Template ID in `.env.local`
- Make sure the template is published in EmailJS

### Rate limiting:
- EmailJS free plan allows 200 emails/month
- Upgrade to paid plan if needed

## 📧 Email Template Variables

The form sends these variables to the email template:
- `{{subject}}` - Email subject line
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{role}}` - Customer's role
- `{{company}}` - Company name
- `{{website}}` - Company website
- `{{company_size}}` - Company size
- `{{revenue}}` - Annual revenue
- `{{budget}}` - Budget range
- `{{services}}` - Services of interest
- `{{message}}` - Additional message
- `{{reply_to}}` - Customer's email for replies

## 🎯 Success!

Once configured, every form submission will automatically send a professional email to `hello@orchesagency.com` with all the customer details formatted nicely.

The customer will see a success message, and you'll receive the inquiry immediately!
