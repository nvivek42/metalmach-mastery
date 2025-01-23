import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import About from '../components/About'
import Contact from '../components/Contact'
import Features from '../components/Features'
import VirtualTour from '../components/VirtualTour'
import MaterialCalculator from '../components/MaterialCalculator'
import CTA from '../components/CTA'
import Infra from '../components/Infra'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Infra />
      <Industries />
      
      <Features />
      {/* <VirtualTour /> */}
      {/* <About /> */}
      <CTA />
      {/* <Contact /> */}
    </>
  )
}