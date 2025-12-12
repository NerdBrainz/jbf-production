import React from 'react'

interface HeroBlockProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function HeroBlock({ title, subtitle, children }: HeroBlockProps) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-5xl font-bold lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-xl text-muted-foreground">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
