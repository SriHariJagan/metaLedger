import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const cards = [
  { label: 'Financial Health', value: '87%', sub: 'Overall score', gradient: 'from-brand-teal to-brand-cyan' },
  { label: 'Transaction Volume', value: '2,847', sub: 'This month', gradient: 'from-brand-blue to-brand-bright' },
  { label: 'Pending Items', value: '23', sub: 'Awaiting action', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { label: 'Cash Flow', value: '₹18.4L', sub: 'Net positive', gradient: 'from-brand-teal to-brand-blue' },
  { label: 'Revenue', value: '₹24.8L', sub: 'Current period', gradient: 'from-brand-blue to-brand-navy' },
  { label: 'Expenses', value: '₹16.2L', sub: 'Current period', gradient: 'from-brand-cyan to-brand-teal' },
]

export default function ExecutiveSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-brand-cyan/5 blur-[80px]" />
      </div>

      <div className="container-wide mx-auto relative">
        <SectionHeading
          eyebrow="Executive View"
          title="One View of Your Financial Operations"
          description="A comprehensive dashboard that brings together every aspect of your financial health."
        />

        <AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <div key={card.label} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted">{card.label}</span>
                    <span className="text-[10px] text-muted">{card.sub}</span>
                  </div>
                  <p className="text-3xl font-bold text-dark">{card.value}</p>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className={`h-full rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-1000`} style={{ width: `${55 + i * 8}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-card">
              <h4 className="mb-4 text-sm font-bold text-dark">Revenue Trend</h4>
              <svg viewBox="0 0 400 120" className="w-full">
                <defs>
                  <linearGradient id="execGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0756F2" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0756F2" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 C40,65 80,30 120,50 C160,70 200,20 240,35 C280,50 320,15 360,30 L400,22" fill="none" stroke="#0756F2" strokeWidth="3" strokeLinecap="round" />
                <path d="M0,80 C40,65 80,30 120,50 C160,70 200,20 240,35 C280,50 320,15 360,30 L400,22 L400,120 L0,120 Z" fill="url(#execGrad)" />
                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                  const x = (i / 6) * 400
                  const y = [80, 50, 70, 35, 50, 30, 22][i]
                  return <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="#0756F2" strokeWidth="2" />
                })}
              </svg>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-card">
              <h4 className="mb-4 text-sm font-bold text-dark">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { txn: 'Client Payment #1042', amount: '+₹2,45,000', time: '2 min ago', status: 'completed' },
                  { txn: 'Vendor Settlement #0891', amount: '-₹84,200', time: '15 min ago', status: 'pending' },
                  { txn: 'Expense Approval #0234', amount: '-₹12,500', time: '1 hr ago', status: 'processing' },
                  { txn: 'Revenue Recognition', amount: '+₹1,56,800', time: '3 hrs ago', status: 'completed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-off/80 px-4 py-3 transition-all hover:bg-off">
                    <div>
                      <p className="text-xs font-medium text-dark">{item.txn}</p>
                      <p className="text-[10px] text-muted">{item.time}</p>
                    </div>
                    <span className={`text-sm font-bold ${item.amount.startsWith('+') ? 'text-brand-teal' : 'text-red-500'}`}>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
