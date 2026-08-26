import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, CheckCircle, Shield, Eye, Zap, Users, Building2, Database, Landmark, Wallet, CreditCard, PieChart, Sliders, GraduationCap, ShoppingCart, HeartPulse, Factory, Briefcase, Globe, Rocket, AlertCircle, Lock, Activity, TrendingUp } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import LedgerMockup from '@/components/mockups/LedgerMockup'
import ReconciliationMockup from '@/components/mockups/ReconciliationMockup'
import AnalyticsMockup from '@/components/mockups/AnalyticsMockup'
import ApprovalMockup from '@/components/mockups/ApprovalMockup'
import CTASection from '@/components/CTASection'

const industries = [
  { icon: HeartPulse, label: 'Healthcare', challenge: 'Complex vendor payments, insurance reconciliation, and regulatory tracking.', solution: 'Structured reconciliation, expense tracking, and audit trails.', gradient: 'from-brand-teal to-[#09a880]' },
  { icon: ShoppingCart, label: 'Retail', challenge: 'Multi-channel sales, vendor settlements, and inventory costs.', solution: 'Transaction management, reconciliation, and cash flow visibility.', gradient: 'from-brand-blue to-brand-bright' },
  { icon: GraduationCap, label: 'Education', challenge: 'Fee collection, grant management, and budget monitoring.', solution: 'Account management, reporting, and approval workflows.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { icon: Globe, label: 'Technology', challenge: 'Subscription revenue, cloud costs, and R&D expenditures.', solution: 'Revenue recognition, expense management, and analytics.', gradient: 'from-brand-navy to-brand-blue' },
  { icon: Factory, label: 'Manufacturing', challenge: 'Procurement costs, supplier payments, and cost accounting.', solution: 'Vendor management, reconciliation, and financial reporting.', gradient: 'from-brand-blue to-brand-navy' },
  { icon: Briefcase, label: 'Professional Services', challenge: 'Project billing, client payments, and expense tracking.', solution: 'Project accounting, invoicing workflows, and reporting.', gradient: 'from-brand-teal to-brand-blue' },
  { icon: Rocket, label: 'Startups', challenge: 'Fund tracking, burn rate, and investor reporting.', solution: 'Real-time dashboards, expense management, and financial visibility.', gradient: 'from-brand-bright to-brand-cyan' },
  { icon: Building2, label: 'Enterprises', challenge: 'Multi-entity operations, consolidation, and compliance.', solution: 'Centralized ledger, approval hierarchies, and audit trails.', gradient: 'from-brand-navy to-[#0a1e4a]' },
]

export default function Solutions() {
  return (
    <main>
      <section className="relative min-h-[80vh] overflow-hidden pt-28 pb-24 flex items-center" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-brand-blue/15 blur-[120px]" />
          <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-brand-cyan/10 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container-wide mx-auto relative text-center">
          <AnimatedSection>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Our Solutions
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Solutions Designed Around<br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-teal bg-clip-text text-transparent">the Way Financial Operations Work</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
              From transaction management to reconciliation and reporting, MetaLedger helps organizations build connected financial workflows.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#ledger" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-navy transition-all hover:shadow-glow hover:scale-105">
                Explore Solutions <ArrowRight size={14} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
                Talk to Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" id="ledger">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <AnimatedSection>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">01 — Core</div>
                <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Digital Ledger<br/>Management</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">The foundation of every financial operation. Maintain structured records across accounts with complete audit trails.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Account records', 'Transaction history', 'Debit & credit tracking', 'Balance tracking', 'Ledger organization', 'Financial activity'].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 rounded-xl bg-off/80 px-4 py-3 text-sm text-dark">
                      <CheckCircle size={14} className="shrink-0 text-brand-teal" /> {f}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2}><LedgerMockup /></AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off" id="transactions">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-premium">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-dark">Transaction Dashboard</h3>
                  <div className="flex gap-1.5">
                    <span className="rounded-lg bg-brand-teal/10 px-2.5 py-1 text-[10px] font-semibold text-brand-teal">Live</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Client Payment #1042', amount: '+₹2,45,000', status: 'Completed', date: 'Today', sc: 'bg-brand-teal/10 text-brand-teal' },
                    { name: 'Vendor Settlement #0891', amount: '-₹84,200', status: 'Pending', date: 'Today', sc: 'bg-amber-50 text-amber-600' },
                    { name: 'Salary Disbursal', amount: '-₹3,20,000', status: 'Processing', date: 'Yesterday', sc: 'bg-brand-blue/10 text-brand-blue' },
                    { name: 'Invoice Receipt #1156', amount: '+₹1,56,800', status: 'Completed', date: 'Yesterday', sc: 'bg-brand-teal/10 text-brand-teal' },
                    { name: 'Office Lease', amount: '-₹45,000', status: 'Completed', date: '2 days ago', sc: 'bg-brand-teal/10 text-brand-teal' },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-off/50 px-4 py-3 text-xs transition-all hover:bg-off hover:shadow-sm">
                      <span className="font-medium text-dark">{tx.name}</span>
                      <div className="flex items-center gap-3">
                        <span className={tx.amount.startsWith('+') ? 'font-semibold text-brand-teal' : 'font-semibold text-red-500'}>{tx.amount}</span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${tx.sc}`}>{tx.status}</span>
                        <span className="text-muted">{tx.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <div className="order-1 lg:order-2">
              <AnimatedSection>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan">02 — Core</div>
                <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Every Transaction.<br/>One Clear View.</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">Track every incoming, outgoing, pending, and completed transaction in one centralized view with real-time status.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Transaction tracking', 'Status updates', 'Categories', 'References', 'History', 'Search & filter'].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 rounded-xl bg-off/80 px-4 py-3 text-sm text-dark">
                      <CheckCircle size={14} className="shrink-0 text-brand-teal" /> {f}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="reconciliation">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">03 — Core</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Reconcile Faster.<br/>Resolve Exceptions Earlier.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted">Automated matching between internal and external records with intelligent exception handling.</p>
          </div>
          <AnimatedSection><ReconciliationMockup /></AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-off" id="expenses">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-premium">
                <h3 className="mb-4 text-sm font-semibold text-dark">Expense Breakdown</h3>
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[{ l: 'Total', v: '₹8,42,000' }, { l: 'Approved', v: '₹6,12,000' }, { l: 'Pending', v: '₹2,30,000' }].map((item) => (
                    <div key={item.l} className="rounded-xl bg-off p-3.5 text-center">
                      <p className="text-[10px] text-muted">{item.l}</p>
                      <p className="mt-1 text-sm font-bold text-dark">{item.v}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {[{ cat: 'Travel', amt: '₹2,45,000', pct: 29 }, { cat: 'Software', amt: '₹1,80,000', pct: 21 }, { cat: 'Marketing', amt: '₹1,56,000', pct: 19 }, { cat: 'Operations', amt: '₹1,32,000', pct: 16 }, { cat: 'Misc', amt: '₹1,29,000', pct: 15 }].map((item) => (
                    <div key={item.cat} className="rounded-xl bg-off/50 px-4 py-3 transition-all hover:bg-off">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-dark">{item.cat}</span>
                        <span className="text-muted">{item.amt}</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-teal">04 — Core</div>
                <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Bring Spending<br/>Into Focus</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">Monitor expenses across categories, manage approval workflows, and gain complete visibility into spending patterns.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Expense tracking', 'Categories', 'Approval workflows', 'Spending visibility', 'Reporting'].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 rounded-xl bg-off/80 px-4 py-3 text-sm text-dark">
                      <CheckCircle size={14} className="shrink-0 text-brand-teal" /> {f}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="accounts">
        <div className="container-wide mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <AnimatedSection>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-navy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-navy">05 — Core</div>
                <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Organize Every<br/>Financial Account</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">A comprehensive view of all financial accounts with activity tracking and balance monitoring.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Account overview', 'Activity tracking', 'Balances', 'Transaction history', 'Account reporting'].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 rounded-xl bg-off/80 px-4 py-3 text-sm text-dark">
                      <CheckCircle size={14} className="shrink-0 text-brand-teal" /> {f}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2}>
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-premium">
                <h3 className="mb-4 text-sm font-semibold text-dark">Accounts</h3>
                <div className="space-y-3">
                  {[{ name: 'Operating Account', balance: '₹4,85,000', txns: 42, trend: '+12%', gradient: 'from-brand-blue to-brand-bright' }, { name: 'Savings Account', balance: '₹8,12,400', txns: 18, trend: '+5%', gradient: 'from-brand-teal to-[#09a880]' }, { name: 'Petty Cash', balance: '₹41,800', txns: 67, trend: '-3%', gradient: 'from-brand-cyan to-[#09a8a8]' }, { name: 'Vendor Account', balance: '₹2,65,000', txns: 23, trend: '+8%', gradient: 'from-brand-navy to-brand-blue' }].map((acc) => (
                    <div key={acc.name} className="flex items-center justify-between rounded-xl bg-off/50 px-5 py-4 transition-all hover:bg-off hover:shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-10 rounded-full bg-gradient-to-r ${acc.gradient}`} />
                        <div>
                          <p className="text-xs font-semibold text-dark">{acc.name}</p>
                          <p className="mt-0.5 text-[10px] text-muted">{acc.txns} transactions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-dark">{acc.balance}</p>
                        <p className={`mt-0.5 text-[10px] font-semibold ${acc.trend.startsWith('+') ? 'text-brand-teal' : 'text-red-500'}`}>{acc.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off" id="approvals">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">06 — Controls</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Put the Right Controls<br/>Around Every Decision</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted">Structured approval workflows with role-based controls and multi-level hierarchies.</p>
          </div>
          <AnimatedSection><ApprovalMockup /></AnimatedSection>
        </div>
      </section>

      <section className="section-padding" id="reporting">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan">07 — Reporting</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Financial Reporting<br/>Without the Complexity</h2>
          </div>
          <AnimatedSection>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Financial Summary', desc: 'Complete overview of financial health and position.', icon: BarChart3, gradient: 'from-brand-blue to-brand-bright' },
                { title: 'Transaction Report', desc: 'Detailed breakdown of all transaction activity.', icon: Activity, gradient: 'from-brand-cyan to-[#09a8a8]' },
                { title: 'Expense Report', desc: 'Categorized view of all organizational expenses.', icon: TrendingUp, gradient: 'from-brand-teal to-[#09a880]' },
                { title: 'Account Report', desc: 'Account-level financial activity and summaries.', icon: Building2, gradient: 'from-brand-navy to-brand-blue' },
                { title: 'Reconciliation Report', desc: 'Matching status and exception analysis.', icon: CheckCircle, gradient: 'from-brand-blue to-brand-cyan' },
                { title: 'Activity Report', desc: 'Timeline of all financial operations and changes.', icon: Eye, gradient: 'from-brand-navy to-[#0a1e4a]' },
              ].map((report) => (
                <div key={report.title} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${report.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <report.icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-dark">{report.title}</h4>
                    <p className="mt-1 text-xs text-muted">{report.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-off" id="analytics">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-teal">08 — Analytics</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Understand the Story<br/>Behind the Numbers</h2>
          </div>
          <AnimatedSection><AnalyticsMockup /></AnimatedSection>
        </div>
      </section>

      <section className="section-padding" id="automation">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">09 — Automation</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Automate Repetitive<br/>Financial Work</h2>
          </div>
          <AnimatedSection>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Transaction Automation', desc: 'Auto-categorize, route, and process transactions based on rules.', gradient: 'from-brand-blue to-brand-bright' },
                { title: 'Approval Automation', desc: 'Route approvals based on amount, type, and hierarchy.', gradient: 'from-brand-cyan to-[#09a8a8]' },
                { title: 'Notification Automation', desc: 'Alert stakeholders at every stage of the workflow.', gradient: 'from-brand-teal to-[#09a880]' },
                { title: 'Reconciliation Automation', desc: 'Match records automatically and flag exceptions.', gradient: 'from-brand-navy to-brand-blue' },
                { title: 'Reporting Automation', desc: 'Generate and distribute reports on schedule.', gradient: 'from-brand-blue to-brand-cyan' },
              ].map((item) => (
                <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <Zap size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-dark">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-off" id="security">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-navy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-navy">10 — Security</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Security and Control<br/>at Every Layer</h2>
          </div>
          <AnimatedSection>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: 'Role-Based Access', desc: 'Control access based on roles.', gradient: 'from-brand-blue to-brand-bright' },
                { icon: Sliders, title: 'Permissions', desc: 'Granular permission settings.', gradient: 'from-brand-navy to-brand-blue' },
                { icon: Eye, title: 'Activity Tracking', desc: 'Visibility into all actions.', gradient: 'from-brand-cyan to-[#09a8a8]' },
                { icon: Shield, title: 'Controlled Workflows', desc: 'Enforce structured processes.', gradient: 'from-brand-teal to-[#09a880]' },
                { icon: AlertCircle, title: 'Audit Visibility', desc: 'Easy review and auditing.', gradient: 'from-brand-navy to-[#0a1e4a]' },
                { icon: Lock, title: 'Secure Handling', desc: 'Responsible data management.', gradient: 'from-brand-blue to-brand-cyan' },
              ].map((card) => (
                <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <card.icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-dark">{card.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" id="integrations">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan">11 — Integrations</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Connect the Systems<br/>Behind Your Business</h2>
          </div>
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Database, label: 'ERP', gradient: 'from-brand-blue to-brand-bright' },
                { icon: BarChart3, label: 'Accounting', gradient: 'from-brand-cyan to-[#09a8a8]' },
                { icon: Landmark, label: 'Banking', gradient: 'from-brand-navy to-brand-blue' },
                { icon: Users, label: 'HR', gradient: 'from-brand-teal to-[#09a880]' },
                { icon: Wallet, label: 'Payroll', gradient: 'from-brand-bright to-brand-cyan' },
                { icon: Users, label: 'CRM', gradient: 'from-brand-blue to-brand-navy' },
                { icon: CreditCard, label: 'Payments', gradient: 'from-brand-cyan to-brand-teal' },
                { icon: PieChart, label: 'Analytics', gradient: 'from-brand-navy to-[#0a1e4a]' },
              ].map((item) => (
                <div key={item.label} className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                    <item.icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-dark">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-off" id="industries">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">12 — Industries</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Industry Solutions</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <AnimatedSection key={ind.label}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ind.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <ind.icon size={20} />
                    </div>
                    <h4 className="mb-2 text-sm font-bold text-dark">{ind.label}</h4>
                    <p className="mb-2 text-[11px] text-muted"><span className="font-semibold text-dark">Challenge:</span> {ind.challenge}</p>
                    <p className="text-[11px] text-muted"><span className="font-semibold text-brand-blue">Solution:</span> {ind.solution}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="scalability">
        <div className="container-wide mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-teal">13 — Scalability</div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">Designed to Grow<br/>With Your Business</h2>
          </div>
          <AnimatedSection>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { level: 'Small Business', desc: 'Essential ledger and transaction management.', items: ['Basic ledger', 'Tracking', 'Reporting'], gradient: 'from-brand-blue to-brand-bright', num: '01' },
                  { level: 'Growing Org', desc: 'Add reconciliation, expenses, approvals.', items: ['Multi-account', 'Reconciliation', 'Approvals'], gradient: 'from-brand-bright to-brand-cyan', num: '02' },
                  { level: 'Multi-Team', desc: 'Role-based access and department reporting.', items: ['RBAC', 'Dept reports', 'Analytics'], gradient: 'from-brand-cyan to-brand-teal', num: '03' },
                  { level: 'Enterprise', desc: 'Multi-entity, custom workflows, full security.', items: ['Multi-entity', 'Custom flows', 'Enterprise'], gradient: 'from-brand-teal to-[#09a880]', num: '04' },
                ].map((stage) => (
                  <div key={stage.level} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stage.gradient} text-xs font-bold text-white`}>{stage.num}</div>
                    <h4 className="text-base font-bold text-dark">{stage.level}</h4>
                    <p className="mt-1 text-xs text-muted">{stage.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {stage.items.map((item) => (
                        <span key={item} className="rounded-md bg-brand-blue/5 px-2 py-1 text-[10px] font-medium text-brand-blue">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection title="Ready to Build a More Connected Financial Operation?" primaryLabel="Get Started" secondaryLabel="Talk to Our Team" />
    </main>
  )
}
