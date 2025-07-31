import AITransformation from '@/components/AITransformation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Services from '@/components/Services'
import SimpleContactForm from '@/components/SimpleContactForm'
import Team from '@/components/Team'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AITransformation />
      <Services />
      <WhyChooseUs />
      <Team />
      <Process />
      <SimpleContactForm />
      <Footer />
    </main>
  )
}
