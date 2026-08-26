import { TrendingUp, Activity, BarChart3 } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import AnalyticsMockup from '@/components/mockups/AnalyticsMockup'

const insights = [
  { num: '01', title: 'See Trends', desc: 'Understand how financial activity changes over time with visual analytics.', icon: TrendingUp, gradient: 'from-brand-blue to-brand-bright' },
  { num: '02', title: 'Identify Exceptions', desc: 'Surface unusual or unresolved transactions before they become issues.', icon: Activity, gradient: 'from-brand-cyan to-[#09a8a8]' },
  { num: '03', title: 'Make Better Decisions', desc: 'Turn organized financial information into actionable business insights.', icon: BarChart3, gradient: 'from-brand-teal to-[#09a880]' },
]

export default function IntelligenceSection() {
  return (
    <section className="relative section-padding bg-off overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[100px]" />
      </div>

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Intelligence"
          title="Turn Financial Data Into Business Intelligence"
          description="Discover trends, identify exceptions, and make better decisions with organized financial analytics."
        />

        <AnimatedSection>
          <div className="relative mb-12">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-teal/5 blur-xl" />
            <AnalyticsMockup />
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-3">
          {insights.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-3xl font-black text-gray-100 transition-all duration-500 group-hover:text-brand-blue/10">{card.num}</span>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <card.icon size={20} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-dark">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{card.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
