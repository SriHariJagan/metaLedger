export default function LedgerMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-premium">
      <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-off to-white px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <h3 className="text-sm font-semibold text-dark">Digital Ledger</h3>
        </div>
        <div className="flex gap-2">
          <span className="rounded-lg bg-brand-blue/10 px-3 py-1.5 text-[10px] font-semibold text-brand-blue">All Accounts</span>
          <span className="rounded-lg bg-off px-3 py-1.5 text-[10px] font-medium text-muted">Filter</span>
          <span className="rounded-lg bg-off px-3 py-1.5 text-[10px] font-medium text-muted">Export</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gradient-to-r from-off/80 to-white">
              <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Account</th>
              <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Transaction</th>
              <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Debit</th>
              <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Credit</th>
              <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Balance</th>
              <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { account: 'Operating Account', txn: 'Client Invoice #1042', debit: '', credit: '+₹85,000', balance: '₹4,85,000', status: 'Cleared', sc: 'bg-brand-teal/10 text-brand-teal' },
              { account: 'Operating Account', txn: 'Office Lease', debit: '-₹24,500', credit: '', balance: '₹3,10,000', status: 'Cleared', sc: 'bg-brand-teal/10 text-brand-teal' },
              { account: 'Savings Account', txn: 'Interest Credit', debit: '', credit: '+₹12,400', balance: '₹8,12,400', status: 'Pending', sc: 'bg-amber-50 text-amber-600' },
              { account: 'Petty Cash', txn: 'Office Supplies', debit: '-₹8,200', credit: '', balance: '₹41,800', status: 'Cleared', sc: 'bg-brand-teal/10 text-brand-teal' },
              { account: 'Operating Account', txn: 'Vendor Payment', debit: '-₹45,000', credit: '', balance: '₹2,65,000', status: 'Processing', sc: 'bg-brand-blue/10 text-brand-blue' },
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-50 transition-colors hover:bg-off/30">
                <td className="px-5 py-3.5 font-medium text-dark">{row.account}</td>
                <td className="px-5 py-3.5 text-muted">{row.txn}</td>
                <td className="px-5 py-3.5 font-semibold text-red-500">{row.debit || '—'}</td>
                <td className="px-5 py-3.5 font-semibold text-brand-teal">{row.credit || '—'}</td>
                <td className="px-5 py-3.5 font-bold text-dark">{row.balance}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${row.sc}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
