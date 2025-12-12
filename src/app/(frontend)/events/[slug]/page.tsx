import React from 'react'

export default async function EventPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Event: {params.slug}</h1>
        <p className="mt-4 text-lg text-muted-foreground">Specific Event Details (Maps, RSVP)</p>
      </div>
    </div>
  )
}
