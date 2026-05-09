import { AudienceProvider } from './components/promet/audience-context'
import { Navbar } from './components/promet/navbar'
import { HeroSplit } from './components/promet/hero-split'
import { TrustBand } from './components/promet/trust-band'
import { Clients } from './components/promet/clients'
import { ServicesB2C } from './components/promet/services-b2c'
import { ServicesB2B } from './components/promet/services-b2b'

import { Process } from './components/promet/process'
import { Guarantee } from './components/promet/guarantee'
import { Testimonials } from './components/promet/testimonials'
import { FAQ } from './components/promet/faq'
import { Contact } from './components/promet/contact'
import { Footer } from './components/promet/footer'
import { WhatsAppFAB, MobileStickyCTA } from './components/promet/floating'

function App() {
  return (
    <AudienceProvider>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HeroSplit />
        <TrustBand />
        <Clients />
        <ServicesB2C />
        <ServicesB2B />
        <Process />
        <Guarantee />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <MobileStickyCTA />
    </AudienceProvider>
  )
}

export default App
