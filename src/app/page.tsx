'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import HeroV4 from '@/components/hero-v4'
import TrustBadges from '@/components/trust-badges'
import IntegrationProblemCompact from '@/components/integration-problem-compact'
import AutomationAssessment from '@/components/automation-assessment'
import IntegrationLogos from '@/components/integration-logos'
import LazySection from '@/components/loading/lazy-section'
import { InteractiveSkeleton } from '@/components/loading/component-skeleton'
// Changed from dynamic imports to regular imports to fix nested scroll issue
import EducationBridge from '@/components/education-bridge'
import ZeroRiskPromise from '@/components/zero-risk-promise'
import PricingSimple from '@/components/pricing-simple'
import FAQV4 from '@/components/faq-v4'

// Lazy load only the heavy interactive demo
const MultiBotDemoTabs = dynamic(() => import('@/components/multi-bot-demo-tabs'), {
  loading: () => <InteractiveSkeleton />,
  ssr: false
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroV4 />
      <TrustBadges />
      <IntegrationProblemCompact />
      <AutomationAssessment />

      {/* Lazy loaded interactive demo section */}
      <LazySection fallback={<InteractiveSkeleton />}>
        <MultiBotDemoTabs />
      </LazySection>

      <IntegrationLogos />

      {/* Removed LazySection wrappers - they caused layout shifts and nested scroll */}
      <ZeroRiskPromise />
      <PricingSimple />
      <EducationBridge />
      <FAQV4 />
    </main>
  )
}
