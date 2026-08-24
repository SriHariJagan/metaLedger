import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import ReconciliationMockup from '@/components/mockups/ReconciliationMockup'

export default function ReconciliationSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Reconciliation"
          title="Know When the Numbers Match"
          description="Automated matching with intelligent exception handling keeps your financial data accurate and reliable."
        />

        <AnimatedSection>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-teal/5 blur-xl" />
            <ReconciliationMockup />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
