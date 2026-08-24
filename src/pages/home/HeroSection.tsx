import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import DashboardMockup from '@/components/mockups/DashboardMockup'

function FloatingOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[80px] ${className}`} />
}

function GridOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
    </div>
  )
}

function MetricPill({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
      <span className="text-xs font-medium text-white/70">{label}</span>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
      <GridOverlay />

      <FloatingOrb className="top-20 -right-20 h-[700px] w-[700px] bg-brand-blue/25" />
      <FloatingOrb className="-bottom-20 -left-20 h-[600px] w-[600px] bg-brand-cyan/15" />
      <FloatingOrb className="top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-brand-teal/8" />
      <FloatingOrb className="top-[20%] left-[30%] h-[300px] w-[300px] bg-brand-bright/10" />

      <div className="absolute inset-0">
        <div className="absolute top-[15%] right-[10%] h-px w-[200px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
        <div className="absolute top-[45%] left-[5%] h-px w-[150px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
        <div className="absolute bottom-[25%] right-[20%] h-px w-[180px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
      </div>

      <div className="container-wide mx-auto relative grid gap-12 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-2 lg:pt-16 lg:pb-24 lg:px-8">
        <div className="flex flex-col justify-center">
          <AnimatedSection>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Digital Financial Intelligence</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Manage Every
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-teal bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">Transaction.</span>
                <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 3" stroke="url(#underline)" strokeWidth="3" strokeLinecap="round" />
                  <defs><linearGradient id="underline" x1="0" y1="0" x2="200" y2="0"><stop stopColor="#0BBFBF" /><stop offset="1" stopColor="#0BBF9E" /></linearGradient></defs>
                </svg>
              </span>
              <br />
              Understand Every
              <br />
              <span className="text-white/90">Number.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              MetaLedger brings financial records, transactions, reconciliation, reporting, and financial visibility together in one connected digital platform.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary !bg-white !text-brand-navy hover:!bg-white/90 !px-9 !py-4 !text-sm group">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link to="/solutions" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 hover:!border-white/30 !px-9 !py-4 !text-sm group">
                <Play size={14} className="fill-current" />
                <span>Watch Overview</span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 flex flex-wrap gap-3">
              <MetricPill label="Active Transactions" value="2,847" delay={500} />
              <MetricPill label="Reconciled Today" value="99.4%" delay={700} />
              <MetricPill label="Uptime" value="99.99%" delay={900} />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="relative lg:ml-8">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-brand-cyan/10 to-brand-teal/20 blur-2xl" />
          <div className="relative">
            <DashboardMockup />
          </div>

          <div className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-glow-cyan">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal/20">
                <span className="text-brand-teal text-sm">↑</span>
              </div>
              <div>
                <p className="text-[10px] text-white/50">Today&apos;s Growth</p>
                <p className="text-sm font-bold text-white">+12.4%</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-glow">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/20">
                <span className="text-brand-blue text-sm">✓</span>
              </div>
              <div>
                <p className="text-[10px] text-white/50">Reconciliation</p>
                <p className="text-sm font-bold text-white">All Matched</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full text-white">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
