import Navigation from '@/components/navigation'
import HeroV4 from '@/components/hero-v4'
import TrustBadges from '@/components/trust-badges'
import IntegrationProblemCompact from '@/components/integration-problem-compact'
import IntegrationLogos from '@/components/integration-logos'
import HowItWorksCompact from '@/components/how-it-works-compact'
import MultiBotDemoTabs from '@/components/multi-bot-demo-tabs'
import ZeroRiskPromise from '@/components/zero-risk-promise'
import PricingSimple from '@/components/pricing-simple'
import FAQV4 from '@/components/faq-v4'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroV4 />
      <TrustBadges />
      <IntegrationProblemCompact />
      <HowItWorksCompact />
      <MultiBotDemoTabs />
      <IntegrationLogos />
      <ZeroRiskPromise />
      <PricingSimple />
      <FAQV4 />
    </main>
  )
}
