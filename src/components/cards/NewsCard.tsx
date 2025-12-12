import React from 'react'
import Link from 'next/link'

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  author?: string
}

export function NewsCard({ title, excerpt, date, slug, author }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
        <time className="text-sm text-primary">{date}</time>
        <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
        {author && <p className="mt-4 text-sm font-medium">By {author}</p>}
      </article>
    </Link>
  )
}
