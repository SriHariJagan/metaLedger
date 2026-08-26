import { Link2, Eye, Sliders, TrendingUp, Lightbulb } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const reasons = [
  { num: '01', icon: Link2, title: 'Connected', desc: 'Bring financial operations together in one connected platform.', gradient: 'from-brand-blue to-brand-bright' },
  { num: '02', icon: Eye, title: 'Visible', desc: 'Know what is happening across your financial activity in real time.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { num: '03', icon: Sliders, title: 'Controlled', desc: 'Create structured workflows and approval processes that scale.', gradient: 'from-brand-teal to-[#09a880]' },
  { num: '04', icon: TrendingUp, title: 'Scalable', desc: 'Design financial operations for growing organizations.', gradient: 'from-brand-navy to-brand-blue' },
  { num: '05', icon: Lightbulb, title: 'Intelligent', desc: 'Turn financial data into useful insights for better decisions.', gradient: 'from-brand-blue to-brand-cyan' },
]

export default function WhySection() {
  return (
    <section className="relative section-padding bg-off overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[100px]" />
      </div>

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Why MetaLedger"
          title="Why MetaLedger?"
          description="Five reasons organizations choose MetaLedger for their financial operations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-3xl font-black text-gray-100 transition-all duration-500 group-hover:text-brand-blue/10 group-hover:scale-110">{r.num}</span>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${r.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <r.icon size={20} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-dark">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{r.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
