import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
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
        <Services services={siteContent.services} />
        <About about={siteContent.about} />
        <Testimonials testimonials={siteContent.testimonials} />
        <CallToAction cta={siteContent.cta} />
      </main>
      <Footer footer={siteContent.footer} />
    </>
  )
}

export default App
