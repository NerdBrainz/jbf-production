import React from 'react'

export default async function JournalEntryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Journal Entry: {params.slug}</h1>
        <p className="mt-4 text-lg text-muted-foreground">Optimized for storytelling format</p>
      </div>
    </div>
  )
}
