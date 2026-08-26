export default function ApprovalMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-premium sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-dark">Approval Workflow</h3>
        <div className="flex gap-2">
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold text-brand-blue">2 Pending</span>
          <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[10px] font-semibold text-brand-teal">1 Approved</span>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2">
        {['Created', 'Submitted', 'Reviewed', 'Approved', 'Recorded'].map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold transition-all ${
              i < 3 ? 'bg-gradient-to-br from-brand-blue to-brand-bright text-white shadow-glow' : i === 3 ? 'bg-gradient-to-br from-brand-teal to-[#09a880] text-white shadow-glow-teal' : 'bg-off text-muted'
            }`}>
              {i + 1}
            </div>
            <span className={`whitespace-nowrap text-[10px] font-semibold ${i < 3 ? 'text-dark' : 'text-muted'}`}>{step}</span>
            {i < 4 && <div className={`h-[2px] w-6 rounded-full ${i < 3 ? 'bg-brand-blue' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {[
          { title: 'Vendor Payment — ₹2,45,000', submitted: 'Priya Sharma', stage: 'Review', stageColor: 'bg-brand-cyan/10 text-brand-cyan', urgency: 'High' },
          { title: 'Marketing Budget — ₹1,80,000', submitted: 'Rajesh Kumar', stage: 'Submitted', stageColor: 'bg-brand-blue/10 text-brand-blue', urgency: 'Medium' },
          { title: 'IT Infrastructure — ₹5,20,000', submitted: 'Amit Patel', stage: 'Approved', stageColor: 'bg-brand-teal/10 text-brand-teal', urgency: 'High' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-gray-100 bg-off/30 p-4 transition-all hover:bg-off hover:shadow-card">
            <div className="flex items-center gap-3">
              <div className={`flex h-2 w-2 rounded-full ${item.urgency === 'High' ? 'bg-amber-400' : 'bg-brand-blue'}`} />
              <div>
                <p className="text-xs font-semibold text-dark">{item.title}</p>
                <p className="mt-0.5 text-[10px] text-muted">Submitted by {item.submitted}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${item.stageColor}`}>{item.stage}</span>
              <span className={`text-[10px] font-semibold ${item.urgency === 'High' ? 'text-amber-600' : 'text-muted'}`}>{item.urgency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
