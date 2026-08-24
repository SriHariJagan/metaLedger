import { CheckCircle, Eye, Lock, Shield } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { useCountUp, useInView } from '@/hooks/useAnimations'

const pillars = [
  { num: '01', icon: CheckCircle, title: 'Accuracy', desc: 'Keep financial records structured and consistent across every transaction.', color: 'from-brand-blue to-brand-bright', iconBg: 'bg-brand-blue/10 group-hover:bg-brand-blue', iconColor: 'text-brand-blue group-hover:text-white' },
  { num: '02', icon: Eye, title: 'Visibility', desc: 'Understand financial activity in real time with complete transparency.', color: 'from-brand-cyan to-[#09a8a8]', iconBg: 'bg-brand-cyan/10 group-hover:bg-brand-cyan', iconColor: 'text-brand-cyan group-hover:text-white' },
  { num: '03', icon: Lock, title: 'Control', desc: 'Create clear workflows and approval processes that scale.', color: 'from-brand-teal to-[#09a880]', iconBg: 'bg-brand-teal/10 group-hover:bg-brand-teal', iconColor: 'text-brand-teal group-hover:text-white' },
  { num: '04', icon: Shield, title: 'Confidence', desc: 'Make decisions with organized, reliable financial information.', color: 'from-brand-navy to-brand-blue', iconBg: 'bg-brand-navy/10 group-hover:bg-brand-navy', iconColor: 'text-brand-navy group-hover:text-white' },
]

function StatCounter({ end, suffix, label }: { end: number; suffix?: string; label: string }) {
  const { ref, isInView } = useInView()
  const count = useCountUp(end, 2000, 0, isInView)

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-dark sm:text-4xl">
        {count}{suffix}
      </p>
      <p className="mt-1 text-xs font-medium text-muted">{label}</p>
    </div>
  )
}

export default function TrustSection() {
  return (
    <section className="relative section-padding bg-off overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-cyan/5 blur-[80px]" />
      </div>

      <div className="container-wide mx-auto relative">
        <AnimatedSection>
          <div className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatCounter end={99} suffix="%" label="Accuracy Rate" />
            <StatCounter end={2847} label="Daily Transactions" />
            <StatCounter end={100} suffix="%" label="Uptime SLA" />
            <StatCounter end={50} suffix="+" label="Enterprise Clients" />
          </div>
        </AnimatedSection>

        <SectionHeading
          eyebrow="Why MetaLedger"
          title="Financial Data Should Be Clear."
          description="Organizations need a reliable view of where money moves, how transactions are recorded, and what their financial data is telling them."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:shadow-card-hover hover:border-transparent hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-gray-100 transition-all duration-500 group-hover:text-brand-blue/10 group-hover:scale-110">{pillar.num}</span>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg} transition-all duration-500`}>
                      <pillar.icon size={22} className={`${pillar.iconColor} transition-colors duration-500`} />
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-dark">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{pillar.desc}</p>

                  <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
