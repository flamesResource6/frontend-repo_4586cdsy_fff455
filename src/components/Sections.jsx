export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#110806] text-amber-50/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Divya Jyotish</h2>
            <p className="mt-4 leading-relaxed">We blend traditional Vedic wisdom with a modern, respectful approach. Our network of experienced astrologers and certified priests offers consultations and rituals with authenticity, care, and transparency.</p>
            <ul className="mt-6 space-y-2 text-amber-200/90">
              <li>• Personalized astrology guidance</li>
              <li>• Home, temple, and online pujas</li>
              <li>• Transparent pricing and timings</li>
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#1c0f0c] to-[#0e0908] border border-white/10 p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <Stat value="15+" label="Years Experience" />
              <Stat value="10k+" label="Pujas Performed" />
              <Stat value="4.9★" label="Client Rating" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
      <div className="text-xs md:text-sm text-amber-200/80 mt-1">{label}</div>
    </div>
  )
}

export function Services() {
  const items = [
    { title: 'Astrology Consultation', desc: 'Birth chart analysis, career, relationships, and remedies.' },
    { title: 'Puja & Rituals', desc: 'Griha Pravesh, Satyanarayan, Rudrabhishek, Navagraha, and more.' },
    { title: 'Vastu Guidance', desc: 'Harmonize your space with traditional Vastu principles.' },
  ]
  return (
    <section id="services" className="py-16 md:py-24 bg-[#0c0706] text-amber-50/90">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-xl bg-gradient-to-br from-[#1a0d0a] to-[#120907] border border-white/10 hover:border-amber-300/40 transition-all hover:-translate-y-1">
              <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 mb-4 opacity-90 group-hover:opacity-100" />
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-amber-200/90">{it.desc}</p>
              <a href="#puja" className="mt-4 inline-block text-amber-200 hover:text-white">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PujaBooking() {
  return (
    <section id="puja" className="py-16 md:py-24 bg-[#110806] text-amber-50/90">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book a Puja</h2>
        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Full Name" />
          <input required type="tel" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Phone" />
          <input required type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Email" />
          <select className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white">
            <option className="text-black">Griha Pravesh</option>
            <option className="text-black">Satyanarayan Puja</option>
            <option className="text-black">Rudrabhishek</option>
            <option className="text-black">Navagraha Shanti</option>
          </select>
          <input type="date" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" />
          <textarea rows={4} className="sm:col-span-2 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Address / Notes" />
          <button type="button" className="sm:col-span-2 bg-gradient-to-tr from-orange-500 to-amber-400 text-[#1a0d0a] font-semibold px-5 py-3 rounded-md shadow hover:shadow-lg transition-shadow">Request Booking</button>
        </form>
      </div>
    </section>
  )
}

export function Horoscope() {
  const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
  return (
    <section id="horoscope" className="py-16 md:py-24 bg-[#0c0706] text-amber-50/90">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Daily Horoscope</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {signs.map(s => (
            <button key={s} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-amber-300/40 hover:-translate-y-0.5 transition-all">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 mb-2" />
              <div className="text-sm text-white font-medium">{s}</div>
              <div className="text-xs text-amber-200/80">Tap to view</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#110806] text-amber-50/90">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p>Call: +91 98765 43210</p>
            <p>Email: blessings@divyajyotish.in</p>
            <p>Address: 108, Sacred Avenue, Varanasi</p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-amber-300/40">Facebook</a>
              <a href="#" className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-amber-300/40">Instagram</a>
              <a href="#" className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-amber-300/40">YouTube</a>
            </div>
          </div>
          <form className="grid gap-3">
            <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Your Name" />
            <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Email" />
            <textarea rows={4} className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-amber-200/50" placeholder="Message" />
            <button type="button" className="bg-gradient-to-tr from-orange-500 to-amber-400 text-[#1a0d0a] font-semibold px-5 py-3 rounded-md shadow hover:shadow-lg transition-shadow">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0b0605] text-amber-200/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Divya Jyotish. All rights reserved.</p>
        <div className="text-sm">Crafted with devotion • Om Gan Ganapataye Namah</div>
      </div>
    </footer>
  )
}
