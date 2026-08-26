import { BarChart3, Activity, CheckCircle, Building2, TrendingUp, Shield, Eye } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const richCards = [
  {
    title: 'Transaction Management',
    desc: 'Track incoming, outgoing, pending, and completed transactions in real time.',
    icon: Activity,
    gradient: 'from-brand-blue to-brand-bright',
    header: 'Today',
    trend: '+12.4%',
    progress: 84,
    stats: [{ l: 'Completed', v: '2,120' }, { l: 'Pending', v: '487' }, { l: 'Failed', v: '240' }],
    chart: [40, 55, 65, 50, 70, 85, 75, 90, 82, 95],
    color: '#0C70F2',
  },
  {
    title: 'Reconciliation',
    desc: 'Match records and identify discrepancies automatically.',
    icon: CheckCircle,
    gradient: 'from-brand-cyan to-[#09a8a8]',
    header: 'Matched',
    trend: 'On track',
    progress: 99.4,
    stats: [{ l: 'Matched', v: '8,421' }, { l: 'Exceptions', v: '14' }, { l: 'Resolved', v: '12' }],
    chart: [60, 70, 75, 80, 85, 90, 92, 95, 97, 99],
    color: '#0BBFBF',
  },
  {
    title: 'Accounts Management',
    desc: 'Organize financial accounts and monitor activity across entities.',
    icon: Building2,
    gradient: 'from-brand-teal to-[#09a880]',
    header: 'Accounts',
    trend: 'Active',
    progress: 68,
    stats: [{ l: 'Active', v: '4' }, { l: 'Transactions', v: '18' }, { l: 'Balance', v: '₹8.1L' }],
    chart: [35, 42, 48, 55, 50, 60, 58, 68, 72, 68],
    color: '#0BBF9E',
  },
]

const moreTools = [
  { title: 'Expense Management', desc: 'Monitor expenses, categories, and spending patterns across teams.', icon: TrendingUp, value: '₹8.4L', trend: '-3.2%' },
  { title: 'Financial Reporting', desc: 'Generate structured financial reports and exportable statements on demand.', icon: BarChart3, value: '6 Types', trend: 'Reports' },
  { title: 'Approvals', desc: 'Create controlled approval workflows with role-based hierarchies.', icon: Shield, value: '2', trend: 'Pending' },
  { title: 'Audit Trail', desc: 'Maintain complete visibility into every important financial activity.', icon: Eye, value: '12.8K', trend: 'Events' },
]

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - (v / max) * 80
    return `${x},${y}`
  }).join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad2-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`0,100 ${points} 100,100`} fill={`url(#grad2-${color})`} />
    </svg>
  )
}

export default function PlatformSection() {
  return (
    <section className="relative section-padding bg-off overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[80px]" />
        <div className="absolute bottom-20 right-20 h-[250px] w-[250px] rounded-full bg-brand-cyan/5 blur-[80px]" />
      </div>

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Platform"
          title="Everything You Need to Manage Financial Operations"
          description="A comprehensive suite of tools designed to work together seamlessly."
        />

        <AnimatedSection>
          <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-card-hover">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-cyan/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative grid gap-0 lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-bright text-white shadow-glow transition-all duration-500 group-hover:shadow-glow-lg group-hover:scale-105">
                  <BarChart3 size={26} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark">Ledger Management</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">Maintain structured financial records across accounts and transactions with complete audit trails.</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">Account Balance</span>
                    <span className="text-xs font-bold text-brand-teal">+12.4%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-blue via-brand-bright to-brand-cyan" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ l: 'Total', v: '₹48.6L' }, { l: 'In', v: '₹12.8L' }, { l: 'Out', v: '₹7.4L' }].map((item) => (
                      <div key={item.l} className="rounded-xl bg-off/80 p-3 text-center backdrop-blur-sm">
                        <p className="text-[10px] text-muted">{item.l}</p>
                        <p className="mt-0.5 text-sm font-bold text-dark">{item.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 bg-off/30 p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
                  <span className="text-xs font-semibold text-dark">Live Activity</span>
                </div>
                <div className="h-20 w-full">
                  <MiniChart data={[30, 45, 35, 60, 50, 72, 65, 80, 75, 85]} color="#0756F2" />
                </div>
                <div className="mt-4 space-y-2">
                  {[{ t: 'Client Payment #1042', a: '+₹2,45,000', c: 'text-brand-teal' }, { t: 'Vendor Settlement #0891', a: '-₹84,200', c: 'text-red-500' }, { t: 'Invoice Receipt #1156', a: '+₹1,56,800', c: 'text-brand-teal' }].map((tx) => (
                    <div key={tx.t} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs">
                      <span className="font-medium text-dark">{tx.t}</span>
                      <span className={`font-semibold ${tx.c}`}>{tx.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {richCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={0.1 + i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-cyan/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-105`}>
                      <card.icon size={20} />
                    </div>
                    <span className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-[10px] font-semibold text-brand-teal">{card.trend}</span>
                  </div>
                  <h3 className="mb-1 text-base font-bold text-dark">{card.title}</h3>
                  <p className="text-xs leading-relaxed text-muted">{card.desc}</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted">{card.header}</span>
                      <span className="text-[10px] font-bold text-brand-teal">{card.trend}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-bright to-brand-cyan transition-all duration-1000" style={{ width: `${card.progress}%` }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {card.stats.map((s) => (
                        <div key={s.l} className="rounded-lg bg-off/80 p-2 text-center">
                          <p className="text-[9px] text-muted">{s.l}</p>
                          <p className="mt-0.5 text-xs font-bold text-dark">{s.v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-14 w-full">
                      <MiniChart data={card.chart} color={card.color} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moreTools.map((tool, i) => (
            <AnimatedSection key={tool.title} delay={0.4 + i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue transition-all duration-500 group-hover:from-brand-blue group-hover:to-brand-bright group-hover:text-white group-hover:shadow-glow">
                      <tool.icon size={18} />
                    </div>
                    <span className="rounded-full bg-brand-teal/10 px-2 py-0.5 text-[10px] font-semibold text-brand-teal">{tool.trend}</span>
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-dark">{tool.title}</h3>
                  <p className="text-[11px] leading-relaxed text-muted">{tool.desc}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-xl font-bold text-dark">{tool.value}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
