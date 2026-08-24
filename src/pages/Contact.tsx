import { useState, type FormEvent } from 'react'
import { Send, Mail, MessageSquare, Users, HelpCircle, ChevronDown, CheckCircle, Building2, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'

const contactOptions = [
  { icon: Mail, title: 'Sales', desc: 'Discuss how MetaLedger can support your financial operations.', gradient: 'from-brand-blue to-brand-bright' },
  { icon: MessageSquare, title: 'Product', desc: 'Share feedback, feature requests, or product questions.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { icon: Users, title: 'Partnerships', desc: 'Explore partnership and integration opportunities.', gradient: 'from-brand-teal to-[#09a880]' },
  { icon: HelpCircle, title: 'General Enquiries', desc: 'Any other questions or information requests.', gradient: 'from-brand-navy to-brand-blue' },
]

const faqs = [
  { q: 'What is MetaLedger?', a: 'MetaLedger is a digital financial operations platform that helps organizations manage financial records, transactions, reconciliation, reporting, and financial visibility through a connected digital experience.' },
  { q: 'Who is MetaLedger designed for?', a: 'MetaLedger is designed for organizations of all sizes — from startups to enterprises — that need better visibility, control, and efficiency in their financial operations.' },
  { q: 'What financial operations can MetaLedger support?', a: 'MetaLedger supports ledger management, transaction tracking, reconciliation, expense management, approvals, reporting, and analytics as part of a connected financial workflow.' },
  { q: 'Can MetaLedger integrate with existing systems?', a: 'MetaLedger is designed to connect with common business systems including accounting platforms, banking systems, ERP, CRM, payroll, and payment platforms.' },
  { q: 'Does MetaLedger support multiple users?', a: 'Yes. MetaLedger supports role-based access, approval hierarchies, and multi-user workflows designed for team-based financial operations.' },
  { q: 'How does MetaLedger approach security?', a: 'MetaLedger is built with role-based access controls, activity tracking, approval workflows, and structured data handling practices designed around responsible financial data management.' },
]

const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+']
const solutions = ['Ledger Management', 'Transaction Management', 'Reconciliation', 'Expense Management', 'Reporting', 'Analytics', 'Full Platform']

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <main>
      <section className="relative min-h-[70vh] overflow-hidden pt-28 pb-24" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-[500px] w-[500px] rounded-full bg-brand-blue/15 blur-[120px]" />
          <div className="absolute bottom-20 left-20 h-[400px] w-[400px] rounded-full bg-brand-cyan/10 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="container-wide mx-auto relative text-center">
          <AnimatedSection>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Get In Touch
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Let's Talk About Better<br />
              <span className="gradient-text">Financial Operations</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
              Whether you're exploring MetaLedger, discussing a partnership, or looking for more information, we'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading title="How Can We Help?" description="Choose the department that best fits your inquiry." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((opt, i) => (
              <AnimatedSection key={opt.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 text-center transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${opt.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <opt.icon size={24} />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-dark">{opt.title}</h3>
                    <p className="text-xs leading-relaxed text-muted">{opt.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-off">
        <div className="container-wide mx-auto">
          <SectionHeading title="Send Us a Message" description="Fill out the form below and we'll get back to you as soon as possible." />
          <AnimatedSection>
            <div className="mx-auto max-w-2xl">
              {formState === 'success' ? (
                <div className="relative overflow-hidden rounded-2xl border border-brand-teal/20 bg-lteal p-10 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-cyan/5" />
                  <div className="relative">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal to-[#09a880] text-white shadow-glow-teal">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-dark">Message Sent Successfully</h3>
                    <p className="mt-2 text-sm text-muted">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button onClick={() => setFormState('idle')} className="mt-6 text-sm font-semibold text-brand-blue hover:underline">
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-dark">Full Name *</label>
                      <input type="text" id="name" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-dark">Work Email *</label>
                      <input type="email" id="email" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-dark">Phone</label>
                      <input type="tel" id="phone" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-dark">Company</label>
                      <input type="text" id="company" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow" placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="size" className="mb-1.5 block text-xs font-semibold text-dark">Company Size</label>
                      <select id="size" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow">
                        <option value="">Select size</option>
                        {companySizes.map((s) => <option key={s} value={s}>{s} employees</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="solution" className="mb-1.5 block text-xs font-semibold text-dark">Interested Solution</label>
                      <select id="solution" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow">
                        <option value="">Select solution</option>
                        {solutions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-dark">Message *</label>
                    <textarea id="message" required rows={4} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark transition-all focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:shadow-glow" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" disabled={formState === 'loading'} className="btn-primary w-full !py-4 disabled:opacity-60">
                    {formState === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">Send Message <Send size={14} /></span>
                    )}
                  </button>
                  {formState === 'error' && <p className="text-xs text-red-500">Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading title="Why Contact Us?" description="We're here to help you explore how MetaLedger can support your financial operations." />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Explore MetaLedger', desc: 'Learn about the platform, features, and how it works for your industry.', icon: Building2, gradient: 'from-brand-blue to-brand-bright' },
              { title: 'Discuss Your Requirements', desc: 'Share your specific financial operation challenges and goals.', icon: MessageSquare, gradient: 'from-brand-cyan to-[#09a8a8]' },
              { title: 'Explore Partnerships', desc: 'Discuss integration, reseller, or strategic partnership opportunities.', icon: Users, gradient: 'from-brand-teal to-[#09a880]' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-all duration-500 group-hover:shadow-glow group-hover:scale-110`}>
                      <item.icon size={20} />
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-dark">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-off">
        <div className="container-wide mx-auto">
          <SectionHeading title="Frequently Asked Questions" description="Find answers to common questions about MetaLedger." />
          <AnimatedSection>
            <div className="mx-auto max-w-3xl space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-card">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left">
                    <span className="text-sm font-semibold text-dark">{faq.q}</span>
                    <ChevronDown size={16} className={`shrink-0 text-muted transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden py-24" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 35%, #0756F2 65%, #0a2050 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="container-wide mx-auto relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's Build Better Financial<br />
              <span className="gradient-text">Systems Together</span>
            </h2>
            <div className="mt-10">
              <a href="#top" onClick={() => window.scrollTo({ top: 0 })} className="btn-primary !bg-white !text-brand-navy hover:!bg-white/90 !px-10 !py-4 !text-base group">
                <span>Get Started</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
