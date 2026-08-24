import { Building2, Landmark, Users, Wallet, Database, CreditCard, PieChart } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const integrations = [
  { icon: Database, label: 'Accounting Systems', color: 'from-brand-blue to-brand-bright' },
  { icon: Landmark, label: 'Banking Systems', color: 'from-brand-navy to-brand-blue' },
  { icon: Users, label: 'HR Systems', color: 'from-brand-cyan to-[#09a8a8]' },
  { icon: Wallet, label: 'Payroll', color: 'from-brand-teal to-[#09a880]' },
  { icon: Building2, label: 'ERP', color: 'from-brand-blue to-brand-navy' },
  { icon: Users, label: 'CRM', color: 'from-brand-bright to-brand-cyan' },
  { icon: CreditCard, label: 'Payment Platforms', color: 'from-brand-cyan to-brand-teal' },
  { icon: PieChart, label: 'Business Intelligence', color: 'from-brand-navy to-[#0a1e4a]' },
]

export default function IntegrationsSection() {
  return (
    <section className="relative section-padding bg-off overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect Your Financial Ecosystem"
          description="MetaLedger sits at the center of your financial operations, connecting the systems you already use."
        />

        <AnimatedSection>
          <div className="relative mx-auto max-w-4xl">
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-brand-cyan/10 to-brand-teal/20 blur-xl animate-pulse-glow" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-blue to-brand-navy text-white shadow-glow-lg">
                  <div className="text-center">
                    <img src="/logo.png" alt="MetaLedger" className="mx-auto mb-2 h-10 w-10 brightness-0 invert" />
                    <span className="text-[11px] font-bold tracking-wider">MetaLedger</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {integrations.map((item, i) => (
                <AnimatedSection key={item.label} delay={0.1 + i * 0.06}>
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                        <item.icon size={20} />
                      </div>
                      <span className="text-xs font-semibold text-dark">{item.label}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
