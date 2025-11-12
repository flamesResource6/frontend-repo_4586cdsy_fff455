import { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-sm md:text-base text-amber-50/90 hover:text-white transition-colors px-3 py-2 rounded-md"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1a0d0a]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 shadow ring-2 ring-white/20" />
            <span className="text-white font-semibold tracking-wide">Divya Jyotish</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-amber-50/90 hover:text-white px-3 py-2 rounded-md"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>
              {(servicesOpen) && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute mt-2 w-56 rounded-lg bg-[#1f110d] border border-white/10 shadow-xl p-2"
                >
                  <a href="#services" className="block px-3 py-2 text-amber-50/90 hover:text-white hover:bg-white/5 rounded-md">Astrology Consultation</a>
                  <a href="#puja" className="block px-3 py-2 text-amber-50/90 hover:text-white hover:bg-white/5 rounded-md">Puja & Rituals</a>
                  <a href="#horoscope" className="block px-3 py-2 text-amber-50/90 hover:text-white hover:bg-white/5 rounded-md">Horoscope</a>
                </div>
              )}
            </div>
            <NavItem href="#puja">Puja Booking</NavItem>
            <NavItem href="#horoscope">Horoscope</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-1">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <details className="group">
                <summary className="list-none flex items-center gap-1 text-amber-50/90 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                  Services <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="ml-2 mt-1 grid">
                  <a href="#services" className="px-3 py-2 text-amber-50/90 hover:text-white hover:bg-white/5 rounded-md">Astrology Consultation</a>
                  <a href="#puja" className="px-3 py-2 text-amber-50/90 hover:text-white hover:bg-white/5 rounded-md">Puja & Rituals</a>
                  <a href="#horoscope" className="px-3 py-2 text-amber-50/90 hover:text-white hover:bg-white/5 rounded-md">Horoscope</a>
                </div>
              </details>
              <NavItem href="#puja">Puja Booking</NavItem>
              <NavItem href="#horoscope">Horoscope</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
