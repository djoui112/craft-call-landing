# Craft Call Landing Page

A high-converting, single-page landing page for Craft Call - an AI phone answering service designed specifically for HVAC and plumbing contractors.

## Features

- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Performance Optimized**: Fast loading with Next.js Image optimization
- **Form Handling**: React Hook Form with validation
- **Animations**: Smooth Framer Motion animations
- **SEO Ready**: Proper metadata and semantic HTML
- **Accessible**: WCAG AA compliant with proper ARIA labels

## Tech Stack

- Next.js 14+ (App Router)
- JavaScript (no TypeScript)
- Tailwind CSS
- React Hook Form
- Framer Motion
- Lucide React (icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Waitlist API endpoint (if using external service)
NEXT_PUBLIC_WAITLIST_API_URL=

# Analytics (optional)
NEXT_PUBLIC_GA_ID=

# Cal.com booking link
NEXT_PUBLIC_BOOKING_URL=https://cal.com/achref-merzougui-k97hmk/craft-call
```

## Project Structure

```
craft-call-landing/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page component
│   ├── globals.css        # Global styles
│   └── api/
│       └── waitlist/
│           └── route.js   # Waitlist API endpoint
├── components/
│   ├── Navigation.js      # Sticky navigation
│   ├── Hero.js            # Hero section with form
│   ├── ProblemSection.js  # Problem statement
│   ├── SolutionSection.js # How it works
│   ├── FeaturesSection.js # Feature grid
│   ├── SocialProofSection.js # Testimonials
│   ├── PricingSection.js  # Pricing card
│   ├── FAQSection.js      # FAQ accordion
│   ├── CTASection.js      # Final CTA
│   ├── Footer.js          # Footer
│   └── ui/
│       ├── Button.js      # Reusable button
│       ├── Input.js       # Form input
│       └── Card.js        # Card wrapper
├── lib/
│   └── utils.js          # Utility functions
└── public/
    └── images/           # Static images
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy automatically on push to main

The project is configured for zero-configuration deployment on Vercel.

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    DEFAULT: '#1e40af',
    dark: '#1e3a8a',
    light: '#3b82f6',
  },
  accent: {
    DEFAULT: '#f97316',
    dark: '#ea580c',
    light: '#fb923c',
  },
}
```

### Content

All content is in component files. Edit the respective component to update:
- Headlines and copy
- Testimonials
- Features
- FAQ questions and answers
- Pricing information

## API Integration

The waitlist API endpoint (`/api/waitlist`) currently logs emails to the console. To integrate with a service:

1. Update `app/api/waitlist/route.js`
2. Add your email service (Mailchimp, ConvertKit, etc.)
3. Store emails in your database

## Performance

- Images optimized with Next.js Image component
- Code splitting automatic with Next.js
- Font optimization with next/font/google
- Lazy loading for below-the-fold content

## Accessibility

- Proper heading hierarchy
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus visible states
- WCAG AA color contrast

## License

© 2025 Craft Call. All rights reserved.
