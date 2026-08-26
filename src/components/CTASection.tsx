interface CTASectionProps {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTASection({
  eyebrow = 'GET STARTED',
  title,
  description,
  primaryLabel = 'Get Started',
  primaryTo = '/contact',
  secondaryLabel = 'Talk to Our Team',
  secondaryTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden section-padding" style={{ background: 'linear-gradient(160deg, #040a1a 0%, #0A2D73 30%, #0756F2 60%, #0a2050 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-cyan/12 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-brand-teal/8 blur-[80px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-wide mx-auto relative text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={primaryTo} className="btn-primary !bg-white !text-brand-navy hover:!bg-white/90 !px-10 !py-4 !text-base group">
            <span className="relative z-10">{primaryLabel}</span>
          </a>
          <a href={secondaryTo} className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 hover:!border-white/30 !px-10 !py-4 !text-base">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
