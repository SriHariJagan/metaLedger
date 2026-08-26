import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const showBg = scrolled || !isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showBg
            ? 'bg-white/85 shadow-[0_1px_3px_rgba(7,86,242,0.06),0_8px_32px_rgba(7,86,242,0.04)] backdrop-blur-2xl border-b border-brand-blue/5'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group" aria-label="MetaLedger Home">
            <div className="relative">
              <img src="/logo.png" alt="MetaLedger" className="h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? showBg ? 'text-brand-blue font-semibold' : 'text-white font-semibold'
                    : showBg ? 'text-dark/60 hover:text-dark hover:bg-brand-blue/5' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className={`absolute bottom-0.5 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full ${
                    showBg
                      ? 'bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_2px_8px_rgba(7,86,242,0.3)]'
                      : 'bg-white shadow-[0_2px_8px_rgba(255,255,255,0.3)]'
                  }`} />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/contact" className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              showBg ? 'text-brand-blue hover:bg-brand-blue/5' : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}>
              Talk to Us
            </Link>
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs !rounded-xl group">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-xl p-2.5 transition-all md:hidden ${
              showBg ? 'text-dark hover:bg-off' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-[80px] z-50 transition-all duration-300 md:hidden ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-premium backdrop-blur-xl">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'bg-gradient-to-r from-brand-blue/10 to-brand-cyan/5 text-brand-blue font-semibold'
                    : 'text-dark/60 hover:bg-off hover:text-dark'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-4">
              <Link to="/contact" className="btn-secondary !text-xs !py-2.5">
                Talk to Us
              </Link>
              <Link to="/contact" className="btn-primary !text-xs !py-2.5">
                <span className="relative z-10 flex items-center gap-2">Get Started <ArrowRight size={14} /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
