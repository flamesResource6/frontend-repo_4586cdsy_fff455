import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, PujaBooking, Horoscope, Contact, Footer } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0605]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <PujaBooking />
        <Horoscope />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
