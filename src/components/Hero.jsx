import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0605] via-[#0b060580] to-transparent pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white max-w-2xl animate-in">
          <p className="uppercase tracking-widest text-amber-300/90 text-xs md:text-sm">Ancient wisdom, modern guidance</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Spiritual Astrology & Sacred Puja Services
          </h1>
          <p className="mt-4 text-amber-50/90 text-sm md:text-base">
            Personalized consultations, authentic rituals, and daily horoscope guidance. Book trusted priests and astrologers for home and temple ceremonies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#puja" className="bg-gradient-to-tr from-orange-500 to-amber-400 text-[#1a0d0a] font-semibold px-5 py-2.5 rounded-md shadow hover:shadow-lg transition-shadow">Book a Puja</a>
            <a href="#services" className="border border-amber-300/40 text-amber-100 px-5 py-2.5 rounded-md hover:bg-white/10">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
