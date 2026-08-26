import { Shield, Users, Activity, Lock, Eye } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const cards = [
  { icon: Users, title: 'Role-Based Access', desc: 'Control access based on responsibilities and organizational structure.', gradient: 'from-brand-blue to-brand-bright' },
  { icon: Shield, title: 'Approval Controls', desc: 'Create structured financial approval workflows with multiple levels.', gradient: 'from-brand-navy to-brand-blue' },
  { icon: Activity, title: 'Activity Tracking', desc: 'Maintain visibility into all important financial actions and changes.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { icon: Lock, title: 'Data Protection', desc: 'Design financial workflows around secure data handling practices.', gradient: 'from-brand-navy to-[#0a1e4a]' },
  { icon: Eye, title: 'Audit Visibility', desc: 'Make financial activity easier to review, audit, and report on.', gradient: 'from-brand-teal to-[#09a880]' },
]

export default function SecuritySection() {
  return (
    <section className="relative section-padding bg-off overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-navy/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-brand-blue/5 blur-[80px]" />
      </div>

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Security"
          title="Built Around Trust and Control"
          description="Financial information requires strong controls, clear access, and responsible handling."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy/10 to-brand-blue/10 text-brand-navy transition-all duration-500 group-hover:from-brand-navy group-hover:to-brand-blue group-hover:text-white group-hover:shadow-glow">
                    <card.icon size={24} />
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
