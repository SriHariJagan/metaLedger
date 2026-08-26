interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${light ? 'bg-white/10 text-white/70' : 'bg-brand-blue/5 text-brand-blue'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/60' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
