import { AlertCircle, Target, Eye, Gem, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react'
import CTASection from '@/components/CTASection'
import AnimatedSection from '@/components/AnimatedSection'
import { FoundersSection } from '@/components/sections/about/FoundersSection'
import { Link } from 'react-router-dom'

const problems = [
  { icon: '📊', text: 'Growing transaction volumes across multiple channels' },
  { icon: '🔗', text: 'Fragmented systems that don\'t communicate with each other' },
  { icon: '⏱️', text: 'Manual reconciliation consuming hours of valuable time' },
  { icon: '🔍', text: 'Limited visibility into real-time financial status' },
  { icon: '⏳', text: 'Operational delays in approvals and processing' },
  { icon: '❌', text: 'Data inconsistencies across multiple records' },
  { icon: '📋', text: 'Complex approval hierarchies without clear workflows' },
]

const values = [
  { icon: Gem, title: 'Trust', desc: 'Build reliable financial systems that organizations can depend on.', gradient: 'from-brand-blue to-brand-bright', number: '01' },
  { icon: Eye, title: 'Clarity', desc: 'Make complex financial information easy to understand and act on.', gradient: 'from-brand-cyan to-[#09a8a8]', number: '02' },
  { icon: CheckCircle, title: 'Precision', desc: 'Maintain accuracy and consistency in every financial detail.', gradient: 'from-brand-teal to-[#09a880]', number: '03' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously improve how financial operations work through technology.', gradient: 'from-brand-navy to-brand-blue', number: '04' },
  { icon: Target, title: 'Responsibility', desc: 'Handle financial data with care, accountability, and transparency.', gradient: 'from-brand-blue to-brand-cyan', number: '05' },
]

const thinking = [
  { label: 'Capture', desc: 'Gather financial data from all sources — transactions, invoices, payments — into one unified platform.', color: 'bg-brand-blue', num: '01' },
  { label: 'Connect', desc: 'Link related transactions, records, and workflows together to create a complete financial picture.', color: 'bg-brand-bright', num: '02' },
  { label: 'Validate', desc: 'Ensure accuracy through automated checks, matching rules, and exception flagging.', color: 'bg-brand-cyan', num: '03' },
  { label: 'Understand', desc: 'Transform raw data into meaningful insights through analytics, dashboards, and reporting.', color: 'bg-brand-teal', num: '04' },
  { label: 'Improve', desc: 'Use intelligence to optimize financial operations, reduce errors, and increase efficiency.', color: 'bg-[#09a880]', num: '05' },
]

export default function About() {
  return (
    <main>
      <section className="relative min-h-[80vh] overflow-hidden pt-28 pb-24 flex items-center" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-brand-blue/15 blur-[120px]" />
          <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-brand-cyan/10 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="container-wide mx-auto relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                Our Story
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building the Future of<br />
                <span className="bg-gradient-to-r from-brand-cyan to-brand-teal bg-clip-text text-transparent">Financial Operations</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">
                MetaLedger is focused on making financial operations simpler, more connected, and more transparent through modern technology.
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/solutions" className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-navy transition-all hover:shadow-glow hover:scale-105">
                  See What We Build <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
                  Talk to Us
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '99.9%', l: 'Accuracy', c: 'text-brand-teal' },
                  { v: '2,847', l: 'Daily Transactions', c: 'text-brand-cyan' },
                  { v: '50+', l: 'Enterprise Clients', c: 'text-white' },
                  { v: '99.99%', l: 'Uptime', c: 'text-brand-teal' },
                ].map((stat) => (
                  <div key={stat.l} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className={`text-2xl font-bold ${stat.c}`}>{stat.v}</p>
                    <p className="mt-1 text-xs text-white/50">{stat.l}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-500">
                <AlertCircle size={12} /> The Challenge
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Financial Operations Are Becoming More Complex
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                As organizations grow, their financial operations become increasingly complex. Multiple systems, manual processes, and limited visibility create real challenges.
              </p>
              <Link to="/solutions" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg hover:scale-105">
                See Our Solutions <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-card">
                <div className="space-y-4">
                  {problems.map((p, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl bg-off/80 p-4 transition-all hover:bg-off hover:shadow-sm">
                      <span className="text-lg">{p.icon}</span>
                      <span className="text-sm text-dark">{p.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[120px]" />
        </div>
        <div className="container-wide mx-auto relative text-center">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
              Our Purpose
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-4xl mx-auto">
              Make Financial Information Easier to Understand and Act On
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50">
              We believe every organization deserves clear, connected, and reliable financial operations. MetaLedger exists to make that a reality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 transition-all hover:shadow-card-hover">
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-brand-blue to-brand-bright" />
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-bright text-white shadow-glow">
                  <Target size={30} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-dark">Our Mission</h3>
                <p className="text-sm leading-relaxed text-muted">
                  To simplify financial operations by connecting records, transactions, workflows, and insights in one intelligent digital experience.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 transition-all hover:shadow-card-hover">
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-brand-cyan to-brand-teal" />
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-teal text-white shadow-glow-cyan">
                  <Eye size={30} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-dark">Our Vision</h3>
                <p className="text-sm leading-relaxed text-muted">
                  A future where every organization can understand its financial operations clearly and make decisions with confidence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Values
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">What We Stand For</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <span className="absolute top-4 right-4 text-3xl font-black text-gray-100 transition-colors group-hover:text-brand-blue/10">{v.number}</span>
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                    <v.icon size={24} />
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-dark">{v.title}</h3>
                  <p className="text-xs leading-relaxed text-muted">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-teal">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">How We Think</h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {thinking.map((step, i) => (
                <AnimatedSection key={step.label} delay={i * 0.1}>
                  <div className="group relative rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                    <div className={`mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full ${step.color} text-xs font-bold text-white`}>
                      {step.num}
                    </div>
                    <h4 className="mb-2 text-sm font-bold text-dark">{step.label}</h4>
                    <p className="text-[11px] leading-relaxed text-muted">{step.desc}</p>
                    {i < thinking.length - 1 && (
                      <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gray-300 lg:block">→</div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container-wide mx-auto relative text-center">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
              Looking Ahead
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Future of Financial Operations<br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-teal bg-clip-text text-transparent">Is Connected</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50">
              We see a future where financial operations are digital, automated, real-time, intelligent, secure, and fully connected.
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-6">
              {['Digital', 'Automated', 'Real-time', 'Intelligent', 'Secure', 'Connected'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <span className="text-xs font-semibold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FoundersSection />

      <CTASection
        title="Let's Build Better Financial Operations"
        primaryLabel="Talk to MetaLedger"
        secondaryLabel="Explore Solutions"
      />
    </main>
  )
}
