import { useInView } from '@/hooks/useAnimations'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
}

export default function StaggerChildren({ children, className = '' }: StaggerChildrenProps) {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
