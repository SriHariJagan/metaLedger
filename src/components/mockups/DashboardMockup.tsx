export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-premium">
      <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-off to-white px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <h3 className="text-sm font-semibold text-dark">Financial Overview</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[10px] font-semibold text-brand-teal">Live</span>
          <span className="text-xs text-muted">Last updated: Just now</span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Total Balance', value: '₹48,62,450', color: 'text-dark', icon: '💰', bg: 'from-brand-blue/10 to-brand-bright/5' },
            { label: 'Incoming', value: '₹12,84,200', color: 'text-brand-teal', icon: '↑', bg: 'from-brand-teal/10 to-brand-cyan/5' },
            { label: 'Outgoing', value: '₹7,42,600', color: 'text-red-500', icon: '↓', bg: 'from-red-50 to-red-100/50' },
            { label: 'Pending', value: '₹1,24,500', color: 'text-brand-cyan', icon: '◷', bg: 'from-brand-cyan/10 to-brand-blue/5' },
          ].map((item) => (
            <div key={item.label} className={`group rounded-xl bg-gradient-to-br ${item.bg} p-4 transition-all hover:shadow-card`}>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium text-muted">{item.label}</p>
                <span className="text-sm">{item.icon}</span>
              </div>
              <p className={`mt-1.5 text-lg font-bold ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-5 rounded-xl bg-gradient-to-r from-off to-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-dark">Cash Flow Trend</p>
            <div className="flex gap-1">
              {['7D', '30D', '90D'].map((p, i) => (
                <span key={p} className={`rounded-lg px-2.5 py-1 text-[10px] font-medium ${i === 1 ? 'bg-brand-blue text-white' : 'text-muted hover:text-dark'}`}>{p}</span>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 400 90" className="w-full">
            <defs>
              <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0756F2" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0756F2" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroChartGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0BBFBF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0BBFBF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,65 C30,58 60,25 100,40 C140,55 180,18 220,28 C260,38 300,12 340,22 C370,29 390,18 400,15" fill="none" stroke="#0756F2" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0,65 C30,58 60,25 100,40 C140,55 180,18 220,28 C260,38 300,12 340,22 C370,29 390,18 400,15 L400,90 L0,90 Z" fill="url(#heroChartGrad)" />
            <path d="M0,72 C40,65 80,45 120,55 C160,65 200,38 240,45 C280,52 320,32 360,40 L400,35" fill="none" stroke="#0BBFBF" strokeWidth="2" strokeDasharray="6,4" strokeLinecap="round" />
            <path d="M0,72 C40,65 80,45 120,55 C160,65 200,38 240,45 C280,52 320,32 360,40 L400,35 L400,90 L0,90 Z" fill="url(#heroChartGrad2)" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              const x = (i / 6) * 400
              const y = [65, 40, 28, 22, 15, 20, 15][i]
              return <circle key={i} cx={x} cy={y} r="3.5" fill="white" stroke="#0756F2" strokeWidth="2" />
            })}
          </svg>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100">
          <div className="grid grid-cols-4 gap-2 border-b border-gray-100 bg-gradient-to-r from-off/80 to-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
            <span>Transaction</span>
            <span>Amount</span>
            <span>Status</span>
            <span>Date</span>
          </div>
          {[
            { name: 'Client Payment', amount: '+₹2,45,000', status: 'Completed', date: 'Today', color: 'bg-brand-teal/10 text-brand-teal' },
            { name: 'Vendor Settlement', amount: '-₹84,200', status: 'Pending', date: 'Today', color: 'bg-amber-50 text-amber-600' },
            { name: 'Salary Disbursal', amount: '-₹3,20,000', status: 'Processing', date: 'Yesterday', color: 'bg-brand-blue/10 text-brand-blue' },
            { name: 'Invoice Receipt', amount: '+₹1,56,800', status: 'Completed', date: 'Yesterday', color: 'bg-brand-teal/10 text-brand-teal' },
          ].map((tx, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 border-b border-gray-50 px-4 py-3 text-xs last:border-0 transition-colors hover:bg-off/50">
              <span className="font-medium text-dark">{tx.name}</span>
              <span className={`font-semibold ${tx.amount.startsWith('+') ? 'text-brand-teal' : 'text-red-500'}`}>{tx.amount}</span>
              <span className={`inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${tx.color}`}>{tx.status}</span>
              <span className="text-muted">{tx.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
