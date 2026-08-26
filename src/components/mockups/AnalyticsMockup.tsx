export default function AnalyticsMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-premium sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-dark">Financial Analytics</h3>
        <div className="flex gap-1">
          {['7D', '30D', '90D', '1Y'].map((period, i) => (
            <button key={period} className={`rounded-lg px-3 py-1.5 text-[10px] font-semibold transition-all ${
              i === 1 ? 'bg-brand-blue text-white shadow-glow' : 'bg-off text-muted hover:text-dark hover:bg-gray-100'
            }`}>{period}</button>
          ))}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4">
        {[
          { label: 'Revenue', value: '₹24.8L', change: '+12.4%', up: true, gradient: 'from-brand-blue/10 to-brand-bright/5' },
          { label: 'Expenses', value: '₹16.2L', change: '+5.2%', up: false, gradient: 'from-red-50 to-red-100/50' },
          { label: 'Net Income', value: '₹8.6L', change: '+24.1%', up: true, gradient: 'from-brand-teal/10 to-brand-cyan/5' },
        ].map((item) => (
          <div key={item.label} className={`rounded-xl bg-gradient-to-br ${item.gradient} p-4 transition-all hover:shadow-card`}>
            <p className="text-[10px] font-medium text-muted">{item.label}</p>
            <p className="mt-1 text-lg font-bold text-dark">{item.value}</p>
            <p className={`mt-0.5 text-[10px] font-semibold ${item.up ? 'text-brand-teal' : 'text-red-500'}`}>{item.change}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-gray-100 bg-off/30 p-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-muted">Revenue vs Expenses</p>
          <svg viewBox="0 0 220 90" className="w-full">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <g key={i}>
                <rect x={i * 30 + 5} y={90 - (25 + Math.sin(i * 0.9) * 18)} width="10" height={25 + Math.sin(i * 0.9) * 18} rx="3" fill="#0756F2" opacity="0.85" />
                <rect x={i * 30 + 17} y={90 - (18 + Math.cos(i * 0.7) * 12)} width="10" height={18 + Math.cos(i * 0.7) * 12} rx="3" fill="#0BBFBF" opacity="0.65" />
              </g>
            ))}
          </svg>
          <div className="mt-3 flex gap-5">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-blue" /> Revenue
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand-cyan" /> Expenses
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-off/30 p-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-muted">Cash Flow Trend</p>
          <svg viewBox="0 0 220 90" className="w-full">
            <defs>
              <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0BBF9E" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0BBF9E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,55 C30,48 60,28 90,35 C120,42 150,18 180,25 C200,30 220,20 220,22" fill="none" stroke="#0BBF9E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0,55 C30,48 60,28 90,35 C120,42 150,18 180,25 C200,30 220,20 220,22 L220,90 L0,90 Z" fill="url(#analyticsGrad)" />
            {[0, 1, 2, 3, 4].map((i) => {
              const x = (i / 4) * 220
              const y = [55, 35, 25, 22, 22][i]
              return <circle key={i} cx={x} cy={y} r="3" fill="white" stroke="#0BBF9E" strokeWidth="2" />
            })}
          </svg>
        </div>
      </div>
    </div>
  )
}
