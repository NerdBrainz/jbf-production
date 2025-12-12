import React from 'react'

export default async function HeroPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Hero: {params.slug}</h1>
        <p className="mt-4 text-lg text-muted-foreground">Full story page for featured hero</p>
      </div>
    </div>
  )
}
