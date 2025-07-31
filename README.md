# Orches AI Agency - Next.js Version

A modern, responsive website for Orches AI Agency built with Next.js 15, TypeScript, and TailwindCSS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Server Actions** for form handling
- **Responsive Design** with mobile-first approach
- **Email Integration** via mailto links
- **Modern React Patterns** (useActionState, useFormStatus)
- **SEO Optimized** with proper meta tags
- **Accessibility** focused components

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Form Handling**: Server Actions
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
nextjs-version/
├── app/
│   ├── actions.ts          # Server Actions for form handling
│   ├── globals.css         # Global styles with TailwindCSS
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Footer component
├── package.json
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Key Components

### Header
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Modern design with backdrop blur

### Hero
- Gradient background with animated elements
- Call-to-action buttons
- Statistics showcase
- Scroll indicator

### Services
- Grid layout showcasing 6 AI services
- Hover effects and animations
- Feature lists for each service
- Responsive design

### Contact Form
- Server Actions for form processing
- Real-time validation with error messages
- Loading states with useFormStatus
- Email template generation
- WhatsApp integration

### Footer
- Company information
- Service links
- Contact details
- Social media links

## 📧 Form Functionality

The contact form uses Next.js Server Actions to:

1. **Validate** form data on the server
2. **Generate** professional email templates
3. **Create** mailto links with pre-filled content
4. **Handle** form states and error messages
5. **Provide** loading indicators

### Email Template

When submitted, the form generates a professional email to `hello@orchesagency.com` with:

- Contact information
- Company details
- Service interests
- Custom message
- Professional formatting

## 🎯 Modern React Patterns

- **Server Components** for static content
- **Client Components** for interactivity
- **Server Actions** for form processing
- **useActionState** for form state management
- **useFormStatus** for loading states
- **TypeScript** for type safety

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 🔧 Customization

### Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content
Update content in the respective component files:
- `components/Hero.tsx` - Hero section content
- `components/Services.tsx` - Services information
- `components/ContactForm.tsx` - Form fields and options

### Styling
Modify styles using TailwindCSS classes or add custom CSS in `app/globals.css`.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🔍 SEO

- Optimized meta tags
- Open Graph tags
- Twitter Card tags
- Structured data ready
- Fast loading times

## 📄 License

This project is proprietary to Orches AI Agency.

## 🤝 Support

For support, email hello@orchesagency.com or contact via WhatsApp: +62 811 7782 446
