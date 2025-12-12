import React from 'react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Jada Bascom Foundation
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-primary">
            Events
          </Link>
          <Link href="/news" className="text-sm font-medium hover:text-primary">
            News
          </Link>
          <Link href="/heroes" className="text-sm font-medium hover:text-primary">
            Heroes
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  )
}
