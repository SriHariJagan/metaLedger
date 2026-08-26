export default function ReconciliationMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-premium sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-dark">Reconciliation Engine</h3>
        <div className="flex gap-2">
          <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[10px] font-semibold text-brand-teal">3 Matched</span>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold text-amber-600">1 Review</span>
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold text-brand-blue">0 Failed</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-off/50 p-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">Internal Ledger</p>
          <div className="space-y-2.5">
            {[
              { amount: '₹45,200', label: 'Invoice #2041', color: 'text-dark' },
              { amount: '₹18,400', label: 'Expense #0892', color: 'text-dark' },
              { amount: '₹32,600', label: 'Payment #1156', color: 'text-dark' },
              { amount: '₹8,900', label: 'Receipt #0423', color: 'text-dark' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-white px-3.5 py-2.5 text-xs shadow-sm transition-all hover:shadow-card">
                <span className={`font-semibold ${item.color}`}>{item.amount}</span>
                <span className="text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Matching Engine</p>
          <div className="relative h-28 w-28">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#0756F2" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.2" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="#0BBFBF" strokeWidth="1.5" opacity="0.3" />
              <circle cx="50" cy="50" r="22" fill="#0756F2" opacity="0.08" />
              <circle cx="50" cy="50" r="12" fill="#0756F2" opacity="0.15" />
              <text x="50" y="48" textAnchor="middle" className="fill-brand-blue text-[9px] font-bold">AUTO</text>
              <text x="50" y="58" textAnchor="middle" className="fill-brand-blue text-[7px] font-medium">MATCH</text>
            </svg>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-blue" />
            </div>
          </div>
          <p className="text-[10px] text-muted">Intelligent pattern matching</p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-off/50 p-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">External Records</p>
          <div className="space-y-2.5">
            {[
              { amount: '₹45,200', status: 'Matched', color: 'bg-brand-teal/10 text-brand-teal' },
              { amount: '₹17,900', status: 'Review', color: 'bg-amber-50 text-amber-600' },
              { amount: '₹32,600', status: 'Matched', color: 'bg-brand-teal/10 text-brand-teal' },
              { amount: '₹8,900', status: 'Matched', color: 'bg-brand-teal/10 text-brand-teal' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-white px-3.5 py-2.5 text-xs shadow-sm transition-all hover:shadow-card">
                <span className="font-semibold text-dark">{item.amount}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
