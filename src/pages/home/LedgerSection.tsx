import AnimatedSection from '@/components/AnimatedSection'
import LedgerMockup from '@/components/mockups/LedgerMockup'

export default function LedgerSection() {
  return (
    <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-wide mx-auto relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <AnimatedSection>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                Digital Ledger
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                A Digital Ledger Built for
                <br />
                <span className="gradient-text">Modern Organizations</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">
                MetaLedger transforms traditional financial record keeping into a connected digital experience designed for visibility, control, and scalability.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <p className="text-[10px] text-white/40">Ledger Entries</p>
                  <p className="text-lg font-bold text-white">12,847</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <p className="text-[10px] text-white/40">Accuracy</p>
                  <p className="text-lg font-bold text-brand-teal">99.97%</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <p className="text-[10px] text-white/40">Real-time</p>
                  <p className="text-lg font-bold text-brand-cyan">Yes</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-blue/10 via-brand-cyan/5 to-brand-teal/10 blur-xl" />
              <div className="relative">
                <LedgerMockup />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
