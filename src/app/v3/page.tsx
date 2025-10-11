import Navigation from '@/components/navigation'
import HeroV2 from '@/components/hero-v2'
import PainPoints from '@/components/pain-points'
import HowItWorks from '@/components/how-it-works'
import MultiBotDemoTabs from '@/components/multi-bot-demo-tabs'
import FAQ from '@/components/faq'

export default function HomeV3() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroV2 />
      <PainPoints />
      <HowItWorks />
      <MultiBotDemoTabs />
      <FAQ />
    </main>
  )
}
