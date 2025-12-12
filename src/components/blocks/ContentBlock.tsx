import React from 'react'

interface ContentBlockProps {
  children: React.ReactNode
  className?: string
}

export function ContentBlock({ children, className = '' }: ContentBlockProps) {
  return (
    <section
      className={`prose prose-lg mx-auto max-w-4xl px-6 py-12 dark:prose-invert ${className}`}
    >
      {children}
    </section>
  )
}
