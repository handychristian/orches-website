'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import HeroV4 from '@/components/hero-v4'
import TrustBadges from '@/components/trust-badges'
import IntegrationProblemCompact from '@/components/integration-problem-compact'
import IntegrationLogos from '@/components/integration-logos'
import HowItWorksCompact from '@/components/how-it-works-compact'
import LazySection from '@/components/loading/lazy-section'
import { InteractiveSkeleton, SectionSkeleton } from '@/components/loading/component-skeleton'

// Lazy load heavy components
const MultiBotDemoTabs = dynamic(() => import('@/components/multi-bot-demo-tabs'), {
  loading: () => <InteractiveSkeleton />,
  ssr: false
})

const EducationBridge = dynamic(() => import('@/components/education-bridge'), {
  loading: () => <SectionSkeleton />
})

const ZeroRiskPromise = dynamic(() => import('@/components/zero-risk-promise'), {
  loading: () => <SectionSkeleton />
})

const PricingSimple = dynamic(() => import('@/components/pricing-simple'), {
  loading: () => <SectionSkeleton />
})

const FAQV4 = dynamic(() => import('@/components/faq-v4'), {
  loading: () => <SectionSkeleton />
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroV4 />
      <TrustBadges />
      <IntegrationProblemCompact />
      <HowItWorksCompact />

      {/* Lazy loaded interactive demo section */}
      <LazySection fallback={<InteractiveSkeleton />}>
        <MultiBotDemoTabs />
      </LazySection>

      <IntegrationLogos />

      {/* Lazy loaded sections below the fold */}
      <LazySection>
        <ZeroRiskPromise />
      </LazySection>

      <LazySection>
        <PricingSimple />
      </LazySection>

      <LazySection>
        <EducationBridge />
      </LazySection>

      <LazySection>
        <FAQV4 />
      </LazySection>
    </main>
  )
}
