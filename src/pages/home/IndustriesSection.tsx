import { useState } from 'react'
import { Building2, GraduationCap, ShoppingCart, HeartPulse, Factory, Briefcase, Rocket, Globe, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const industries = [
  {
    id: 'startups', icon: Rocket, label: 'Startups',
    desc: 'Speed, clarity, and control from day one.',
    details: 'Track burn rate, manage investor reporting, monitor fund utilization, and maintain financial discipline as you scale from seed to Series B and beyond.',
    stats: [{ l: 'Fund Tracking', v: 'Real-time' }, { l: 'Burn Rate', v: 'Live' }, { l: 'Reporting', v: 'Auto' }],
    gradient: 'from-brand-blue to-brand-bright',
    bg: 'bg-brand-blue/5',
  },
  {
    id: 'enterprises', icon: Building2, label: 'Enterprises',
    desc: 'Centralized visibility across every unit.',
    details: 'Consolidate multi-entity financials, enforce approval hierarchies, and maintain complete audit trails across departments and business units.',
    stats: [{ l: 'Entities', v: 'Multi' }, { l: 'Consolidation', v: 'Auto' }, { l: 'Compliance', v: 'Built-in' }],
    gradient: 'from-brand-navy to-brand-blue',
    bg: 'bg-brand-navy/5',
  },
  {
    id: 'healthcare', icon: HeartPulse, label: 'Healthcare',
    desc: 'Precision financials for critical operations.',
    details: 'Manage vendor payments, insurance reconciliation, expense tracking, and compliance records across hospitals, clinics, and healthcare networks.',
    stats: [{ l: 'Reconciliation', v: 'Automated' }, { l: 'Vendors', v: 'Tracked' }, { l: 'Compliance', v: 'Audit-ready' }],
    gradient: 'from-brand-teal to-[#09a880]',
    bg: 'bg-brand-teal/5',
  },
  {
    id: 'education', icon: GraduationCap, label: 'Education',
    desc: 'Streamlined finances for institutions.',
    details: 'Track fee collections, manage grants and scholarships, process payroll, and monitor departmental budgets across educational campuses.',
    stats: [{ l: 'Fee Collection', v: 'Tracked' }, { l: 'Grants', v: 'Managed' }, { l: 'Payroll', v: 'Automated' }],
    gradient: 'from-brand-cyan to-[#09a8a8]',
    bg: 'bg-brand-cyan/5',
  },
  {
    id: 'retail', icon: ShoppingCart, label: 'Retail',
    desc: 'Every sale, every settlement, tracked.',
    details: 'Reconcile multi-channel sales, manage vendor settlements, track inventory costs, and maintain cash flow visibility across store locations.',
    stats: [{ l: 'Channels', v: 'Unified' }, { l: 'Settlements', v: 'Auto' }, { l: 'Cash Flow', v: 'Live' }],
    gradient: 'from-brand-blue to-brand-cyan',
    bg: 'bg-brand-blue/5',
  },
  {
    id: 'manufacturing', icon: Factory, label: 'Manufacturing',
    desc: 'Cost precision from raw material to finished product.',
    details: 'Track procurement costs, manage supplier payments, analyze production expenses, and maintain accurate inventory valuations.',
    stats: [{ l: 'Procurement', v: 'Tracked' }, { l: 'Suppliers', v: 'Managed' }, { l: 'Cost Analysis', v: 'Deep' }],
    gradient: 'from-brand-navy to-[#0a1e4a]',
    bg: 'bg-brand-navy/5',
  },
  {
    id: 'professional', icon: Briefcase, label: 'Professional Services',
    desc: 'Project-based billing made effortless.',
    details: 'Track project budgets, manage client invoicing, process time-based billing, and monitor team utilization across engagements.',
    stats: [{ l: 'Projects', v: 'Budgeted' }, { l: 'Invoicing', v: 'Automated' }, { l: 'Utilization', v: 'Visible' }],
    gradient: 'from-brand-teal to-brand-blue',
    bg: 'bg-brand-teal/5',
  },
  {
    id: 'technology', icon: Globe, label: 'Technology',
    desc: 'SaaS metrics meet financial operations.',
    details: 'Manage subscription revenue, track cloud infrastructure costs, recognize revenue accurately, and monitor R&D expenditures.',
    stats: [{ l: 'Subscriptions', v: 'Tracked' }, { l: 'Cloud Costs', v: 'Visible' }, { l: 'Revenue', v: 'Recognized' }],
    gradient: 'from-brand-cyan to-brand-teal',
    bg: 'bg-brand-cyan/5',
  },
]

export default function IndustriesSection() {
  const [active, setActive] = useState('startups')
  const current = industries.find((ind) => ind.id === active)!

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Industries"
          title="Built for Different Financial Operations"
          description="MetaLedger adapts to the financial workflows of diverse industries."
        />

        <AnimatedSection>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 mb-12">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`group flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-center transition-all duration-300 ${
                  active === ind.id
                    ? 'bg-gradient-to-br from-brand-blue to-brand-bright text-white shadow-glow scale-105'
                    : 'bg-white text-muted hover:bg-brand-blue/5 hover:text-dark border border-gray-100 hover:border-brand-blue/20'
                }`}
              >
                <ind.icon size={18} className={`transition-all ${active === ind.id ? 'text-white' : 'text-brand-blue group-hover:scale-110'}`} />
                <span className="text-[10px] font-semibold leading-tight">{ind.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-premium">
            <div className="grid lg:grid-cols-5">
              <div className={`relative p-8 lg:p-10 ${current.bg} lg:col-span-2`}>
                <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${current.gradient}`} />
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${current.gradient} text-white shadow-lg`}>
                  <current.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark">{current.label}</h3>
                <p className="mt-2 text-sm font-medium text-brand-blue">{current.desc}</p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {current.stats.map((stat) => (
                    <div key={stat.l} className="rounded-xl bg-white/80 p-3 text-center backdrop-blur-sm">
                      <p className="text-[10px] text-muted">{stat.l}</p>
                      <p className="mt-1 text-xs font-bold text-dark">{stat.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10 lg:col-span-3">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-blue">How MetaLedger Helps</h4>
                <p className="text-sm leading-relaxed text-muted">{current.details}</p>

                <div className="mt-8 flex gap-3">
                  <a href="/solutions" className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${current.gradient} px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:shadow-glow hover:scale-105`}>
                    Explore Solution <ArrowRight size={12} />
                  </a>
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-xs font-semibold text-dark transition-all hover:bg-off hover:border-gray-300">
                    Talk to Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
