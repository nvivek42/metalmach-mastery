import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Features from '../components/Features'
import Infra from '../components/Infra'
import CTA from '../components/CTA'
import Metrics from '../components/Metrics'
import About from '@/components/About'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Infra />
      <Metrics />
      <Features />      
      <CTA />
    </main>
  )
}