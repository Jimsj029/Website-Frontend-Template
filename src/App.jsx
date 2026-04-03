import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import { siteContent } from './data/siteContent'
import './App.css'

function App() {
  return (
    <>
      <Navbar brand={siteContent.brand} navLinks={siteContent.navLinks} />
      <main>
        <Hero hero={siteContent.hero} />
        <Marquee items={siteContent.marquee} />
        <Services services={siteContent.services} />
        <About about={siteContent.about} />
        <CallToAction cta={siteContent.cta} />
      </main>
      <Footer footer={siteContent.footer} />
    </>
  )
}

export default App