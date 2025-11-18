import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Coverage from './components/Coverage'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Coverage />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
