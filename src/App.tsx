import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCallButton from './components/FloatingCallButton'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
