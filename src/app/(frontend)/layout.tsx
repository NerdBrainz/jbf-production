import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Jada Bascom Foundation — Coming Soon',
  description:
    'The Jada Bascom Foundation is preparing a new digital home focused on support, research, and community.',
  openGraph: {
    title: 'Jada Bascom Foundation — Coming Soon',
    description: 'Hope, research, and community—our new site is on the way.',
    url: 'https://jadabascom.org',
    siteName: 'Jada Bascom Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jada Bascom Foundation — Coming Soon',
    description: 'Hope, research, and community—our new site is on the way.',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
