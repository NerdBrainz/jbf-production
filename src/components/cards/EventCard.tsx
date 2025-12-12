import React from 'react'
import Link from 'next/link'

interface EventCardProps {
  title: string
  date: string
  location: string
  slug: string
  image?: string
}

export function EventCard({ title, date, location, slug }: EventCardProps) {
  return (
    <Link href={`/events/${slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
        <div className="text-sm text-primary">{date}</div>
        <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{location}</p>
      </div>
    </Link>
  )
}
