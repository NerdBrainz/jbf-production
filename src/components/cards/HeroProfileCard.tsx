import React from 'react'
import Link from 'next/link'

interface HeroProfileCardProps {
  name: string
  type: string
  quote?: string
  slug: string
  image?: string
}

export function HeroProfileCard({ name, type, quote, slug }: HeroProfileCardProps) {
  return (
    <Link href={`/heroes/${slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
          {name.charAt(0)}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary">{name}</h3>
        <p className="mt-1 text-sm text-primary">{type}</p>
        {quote && <p className="mt-3 text-sm italic text-muted-foreground">&quot;{quote}&quot;</p>}
      </div>
    </Link>
  )
}
