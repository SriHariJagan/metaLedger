import { Workflow, Bell, Shield, Clock, AlertTriangle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const flow = ['Transaction Created', 'Validation', 'Rule Check', 'Approval', 'Ledger Entry', 'Notification']
const features = [
  { icon: Workflow, title: 'Automated Workflows', desc: 'Route transactions through structured approval paths automatically.' },
  { icon: Bell, title: 'Smart Notifications', desc: 'Alert the right people when action is required.' },
  { icon: Shield, title: 'Approval Rules', desc: 'Define thresholds and conditions for automated approvals.' },
  { icon: Clock, title: 'Scheduled Processes', desc: 'Run recurring financial operations on autopilot.' },
  { icon: AlertTriangle, title: 'Exception Handling', desc: 'Flag unusual transactions for review.' },
]

export default function AutomationSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-wide mx-auto relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <AnimatedSection>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
                Automation
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
                Automate the Work
                <br />
                <span className="gradient-text">Behind the Numbers</span>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Reduce repetitive financial operations through structured digital workflows that save time and reduce errors.
              </p>
            </AnimatedSection>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <AnimatedSection key={f.title} delay={0.1 + i * 0.08}>
                  <div className="group rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-teal/20">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal transition-all duration-500 group-hover:bg-brand-teal group-hover:text-white group-hover:shadow-glow-teal">
                      <f.icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-dark">{f.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 blur-xl" />
              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-card">
                <h4 className="mb-6 text-sm font-bold text-dark">Automation Flow</h4>
                <div className="relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-teal" />
                  <div className="space-y-4">
                    {flow.map((step, i) => (
                      <div key={step} className="relative flex items-center gap-4 pl-2">
                        <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white shadow-lg transition-all ${
                          i < 5 ? 'bg-gradient-to-br from-brand-blue to-brand-bright' : 'bg-gradient-to-br from-brand-teal to-[#09a880]'
                        }`}>
                          {i + 1}
                        </div>
                        <div className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          i === flow.length - 1
                            ? 'bg-brand-teal/10 text-brand-teal border border-brand-teal/20'
                            : 'bg-off text-dark hover:bg-brand-blue/5'
                        }`}>
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
