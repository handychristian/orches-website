import Navigation from '@/components/navigation'
import HeroV4 from '@/components/hero-v4'
import TrustBadges from '@/components/trust-badges'
import IntegrationProblemCompact from '@/components/integration-problem-compact'
import HowItWorksCompact from '@/components/how-it-works-compact'
import MultiBotDemoTabs from '@/components/multi-bot-demo-tabs'
import ObjectionFAQ from '@/components/objection-faq'
import PricingSimple from '@/components/pricing-simple'
import FAQV4 from '@/components/faq-v4'

export default function HomeV4() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroV4 />
      <TrustBadges />
      <IntegrationProblemCompact />
      <HowItWorksCompact />
      <MultiBotDemoTabs />
      <ObjectionFAQ />
      <PricingSimple />
      <FAQV4 />
    </main>
  )
}
