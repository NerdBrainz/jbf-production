import React from 'react'
import Script from 'next/script'
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
      <head>
        <Script
          id="tailwind-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: {
                      500: '#f97316',
                      600: '#ea580c',
                      700: '#c2410c',
                    },
                  },
                },
              },
            }` as string,
          }}
        />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
