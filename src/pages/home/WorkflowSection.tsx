import { useEffect, useState } from 'react'
import { Activity, CheckCircle, BarChart3, TrendingUp, Zap, Eye, Shield } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const steps = [
  { icon: Activity, label: 'Transaction', desc: 'Capture financial activity as it happens' },
  { icon: CheckCircle, label: 'Validation', desc: 'Verify accuracy and completeness' },
  { icon: BarChart3, label: 'Recording', desc: 'Enter data into structured ledger systems' },
  { icon: TrendingUp, label: 'Reconciliation', desc: 'Match and verify across data sources' },
  { icon: Zap, label: 'Reporting', desc: 'Generate structured financial summaries' },
  { icon: Eye, label: 'Insight', desc: 'Discover trends and exceptions' },
  { icon: Shield, label: 'Decision', desc: 'Act with organized financial intelligence' },
]

export default function WorkflowSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((s) => (s + 1) % 7), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="How It Works"
          title="From Transaction to Insight"
          description="A structured financial workflow that transforms raw transactions into actionable business intelligence."
        />

        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-teal lg:left-1/2" />

              <div className="space-y-6 lg:space-y-0">
                {steps.map((step, i) => {
                  const isActive = i === active
                  const isLeft = i % 2 === 0

                  return (
                    <AnimatedSection key={step.label} delay={i * 0.08}>
                      <div className="relative flex items-center lg:justify-center lg:min-h-[80px]">
                        <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 transition-all duration-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2 ${
                          isActive
                            ? 'border-brand-blue bg-gradient-to-br from-brand-blue to-brand-bright text-white shadow-glow scale-110'
                            : 'border-gray-200 bg-white text-muted'
                        }`}>
                          <step.icon size={18} />
                          {isActive && (
                            <div className="absolute -inset-1 rounded-xl border border-brand-blue/20 animate-ping opacity-30" />
                          )}
                        </div>

                        <div className={`ml-6 flex-1 rounded-xl border p-4 transition-all duration-500 lg:absolute lg:w-[calc(50%-3rem)] ${
                          isActive
                            ? 'border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 shadow-glow'
                            : 'border-gray-100 bg-white hover:shadow-card'
                        } ${isLeft ? 'lg:right-[calc(50%+3rem)] lg:text-right' : 'lg:left-[calc(50%+3rem)]'}`}>
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${
                            isActive ? 'text-brand-blue' : 'text-gray-300'
                          }`}>Step {i + 1}</span>
                          <h4 className={`mt-0.5 text-base font-bold transition-colors duration-500 ${
                            isActive ? 'text-brand-blue' : 'text-dark'
                          }`}>{step.label}</h4>
                          <p className="mt-0.5 text-xs text-muted">{step.desc}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  )
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
