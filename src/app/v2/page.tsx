import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ProductShowcase from '@/components/product-showcase'
import MultiBotDemoTabs from '@/components/multi-bot-demo-tabs'
import Team from '@/components/team'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <MultiBotDemoTabs />
      <Team />
    </main>
  )
}
