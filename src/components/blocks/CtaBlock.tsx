import React from 'react'
import Link from 'next/link'

interface CtaBlockProps {
  title: string
  description?: string
  primaryLink?: { href: string; text: string }
  secondaryLink?: { href: string; text: string }
}

export function CtaBlock({ title, description, primaryLink, secondaryLink }: CtaBlockProps) {
  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {primaryLink && (
            <Link
              href={primaryLink.href}
              className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {primaryLink.text}
            </Link>
          )}
          {secondaryLink && (
            <Link
              href={secondaryLink.href}
              className="rounded-full border border-border bg-background px-8 py-3 font-semibold hover:bg-accent"
            >
              {secondaryLink.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
