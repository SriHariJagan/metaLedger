import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const platform = [
  { label: 'Ledger Management', to: '/solutions' },
  { label: 'Transactions', to: '/solutions' },
  { label: 'Reconciliation', to: '/solutions' },
  { label: 'Expenses', to: '/solutions' },
  { label: 'Reporting', to: '/solutions' },
  { label: 'Analytics', to: '/solutions' },
]

const company = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const solutions = [
  { label: 'Financial Operations', to: '/solutions' },
  { label: 'Automation', to: '/solutions' },
  { label: 'Analytics', to: '/solutions' },
  { label: 'Security', to: '/solutions' },
  { label: 'Integrations', to: '/solutions' },
]

const resources = [
  { label: 'Documentation', to: '#' },
  { label: 'Help Center', to: '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A2D73 0%, #040a1a 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-wide mx-auto relative px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-5 inline-block group">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img src="/logo.png" alt="MetaLedger" className="relative h-14 w-auto brightness-0 invert opacity-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(7,86,242,0.4)]" />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Connected financial operations. Clearer decisions.
            </p>
            <div className="mt-6 flex gap-3">
              {['LinkedIn', 'X', 'Instagram'].map((s) => (
                <a key={s} href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-xs font-medium text-white/40 transition-all hover:bg-brand-blue hover:text-white hover:shadow-glow" aria-label={s}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Platform', items: platform },
            { title: 'Company', items: company },
            { title: 'Solutions', items: solutions },
            { title: 'Resources', items: resources },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/30">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="group flex items-center gap-1.5 text-sm text-white/50 transition-all hover:text-white">
                      {item.label}
                      <ArrowUpRight size={10} className="opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; 2026 MetaLedger. All rights reserved.
            </p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms', 'Cookie Policy'].map((l) => (
                <a key={l} href="#" className="text-xs text-white/30 transition-colors hover:text-white/60">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
