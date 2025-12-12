import React from 'react'

export default async function NewsArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Article: {params.slug}</h1>
        <p className="mt-4 text-lg text-muted-foreground">The Article (Rich Text, Author, SEO)</p>
      </div>
    </div>
  )
}
