import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Features from '../components/Features'
import Infra from '../components/Infra'
import About from '../components/About'
import Contact from '../components/Contact'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Infra />
      <Industries />
      <Features />
      <About />
      <Contact />
      <CTA />
    </main>
  )
}