import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container
