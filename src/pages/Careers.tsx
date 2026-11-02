import { SEO } from '@/seo/SEO';
import { ArrowRight, Target, Award, GraduationCap, Lightbulb, Zap, Users, Code, Cpu, MessageSquare, Sparkles, Handshake, Eye } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import AnimatedSection from '@/components/AnimatedSection'

const whyMetaLedger = [
  { icon: Target, title: 'Purpose', desc: 'Work on technology that makes financial operations simpler for organizations.', gradient: 'from-brand-blue to-brand-bright' },
  { icon: Award, title: 'Ownership', desc: 'Take ownership of meaningful work that directly impacts the product.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { icon: GraduationCap, title: 'Learning', desc: 'Grow your skills in a fast-paced environment with mentorship and support.', gradient: 'from-brand-teal to-[#09a880]' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Explore new ideas and build creative solutions for complex problems.', gradient: 'from-brand-navy to-brand-blue' },
  { icon: Zap, title: 'Impact', desc: 'See the direct impact of your work on real financial operations.', gradient: 'from-brand-blue to-brand-cyan' },
]

const lifeAt = [
  { icon: Users, title: 'Collaboration', desc: 'Work closely with cross-functional teams to build great products.', gradient: 'from-brand-blue to-brand-bright' },
  { icon: Code, title: 'Innovation', desc: 'Explore new technologies and approaches to solve real problems.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { icon: GraduationCap, title: 'Learning', desc: 'Continuous learning through mentorship, reviews, and challenges.', gradient: 'from-brand-teal to-[#09a880]' },
  { icon: Cpu, title: 'Problem Solving', desc: 'Tackle complex technical and product challenges every day.', gradient: 'from-brand-navy to-brand-blue' },
  { icon: Sparkles, title: 'Technology', desc: 'Work with modern tools, frameworks, and infrastructure.', gradient: 'from-brand-blue to-brand-cyan' },
]

const hiringProcess = [
  { step: 'Application', desc: 'Submit your application with relevant details.' },
  { step: 'Review', desc: 'Our team reviews your application and background.' },
  { step: 'Interview', desc: 'Technical and cultural conversations with the team.' },
  { step: 'Assessment', desc: 'A practical assessment or discussion to evaluate fit.' },
  { step: 'Decision', desc: 'Final evaluation and internal decision process.' },
  { step: 'Offer', desc: 'Welcome to the team with a detailed offer.' },
]

const culture = [
  { icon: Lightbulb, title: 'Curiosity', desc: 'Ask questions, explore ideas, and challenge assumptions.', gradient: 'from-brand-blue to-brand-bright' },
  { icon: Award, title: 'Ownership', desc: 'Take responsibility for your work and its outcomes.', gradient: 'from-brand-cyan to-[#09a8a8]' },
  { icon: Handshake, title: 'Collaboration', desc: 'Work together to achieve shared goals.', gradient: 'from-brand-teal to-[#09a880]' },
  { icon: Eye, title: 'Precision', desc: 'Pay attention to details and maintain quality.', gradient: 'from-brand-navy to-brand-blue' },
  { icon: MessageSquare, title: 'Transparency', desc: 'Communicate openly and share information freely.', gradient: 'from-brand-blue to-brand-cyan' },
]

export default function Careers() {
  return (
    <main>
      <SEO />
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
              Careers
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Build the Future of<br />
              <span className="gradient-text">Financial Technology</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
              Join a team building technology that makes financial operations simpler, clearer, and more connected.
            </p>
            <div className="mt-10">
              <a href="#positions" className="btn-primary !bg-white !text-brand-navy hover:!bg-white/90 !px-10 !py-4 !text-base group">
                <span>View Open Positions</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading eyebrow="Why MetaLedger" title="Why Work With Us" description="We're building something meaningful. Here's what makes working at MetaLedger different." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyMetaLedger.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue transition-all duration-500 group-hover:from-brand-blue group-hover:to-brand-bright group-hover:text-white group-hover:shadow-glow">
                      <item.icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-dark">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-off">
        <div className="container-wide mx-auto">
          <SectionHeading eyebrow="Life at MetaLedger" title="What It's Like Here" description="A culture built around collaboration, innovation, and continuous growth." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lifeAt.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-teal/10 text-brand-cyan transition-all duration-500 group-hover:from-brand-cyan group-hover:to-[#09a8a8] group-hover:text-white group-hover:shadow-glow-cyan">
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

      <section className="section-padding" id="positions">
        <div className="container-wide mx-auto">
          <SectionHeading eyebrow="Open Positions" title="Join Our Team" description="We're always looking for talented people who are passionate about building great products." />
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 bg-off/50 p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5" />
                <p className="relative text-base text-muted">
                  No open positions at this time. We're always interested in hearing from talented people.
                </p>
                <p className="relative mt-2 text-sm text-muted">
                  Check back later or send us your resume for future opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-off">
        <div className="container-wide mx-auto">
          <SectionHeading eyebrow="Process" title="Our Hiring Process" description="A transparent and structured process designed to find the right fit." />
          <AnimatedSection>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {hiringProcess.map((item, i) => (
                  <div key={item.step} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-bright text-sm font-bold text-white shadow-glow">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-dark">{item.step}</h4>
                      <p className="mt-1 text-xs text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading eyebrow="Culture" title="Our Values in Action" description="The principles that guide how we work and build together." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {culture.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 text-brand-teal transition-all duration-500 group-hover:from-brand-teal group-hover:to-[#09a880] group-hover:text-white group-hover:shadow-glow-teal">
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

      <CTASection title="Don't See Your Role?" description="If you believe you can contribute to MetaLedger, we'd still love to hear from you." primaryLabel="Send Your Resume" secondaryLabel="Contact Us" />
    </main>
  )
}
