import Navigation from '@/components/navigation'
import HeroV5 from '@/components/hero-v5'
import TrustBadges from '@/components/trust-badges'
import TheEnemy from '@/components/the-enemy'
import DayInLife from '@/components/day-in-life'
import IntegrationProblemCompact from '@/components/integration-problem-compact'
import HowItWorksCompact from '@/components/how-it-works-compact'
import MultiBotDemoTabs from '@/components/multi-bot-demo-tabs'
import ZeroRiskPromise from '@/components/zero-risk-promise'
import ObjectionFAQ from '@/components/objection-faq'
import PricingSimple from '@/components/pricing-simple'
import HonestCloser from '@/components/honest-closer'
import FAQV4 from '@/components/faq-v4'

export default function HomeV5() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroV5 />
      <TrustBadges />
      <TheEnemy />
      <DayInLife />
      <IntegrationProblemCompact />
      <HowItWorksCompact />
      <MultiBotDemoTabs />
      <ZeroRiskPromise />
      <ObjectionFAQ />
      <PricingSimple />
      <HonestCloser />
      <FAQV4 />
    </main>
  )
}
