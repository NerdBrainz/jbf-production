import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Jada Bascom Foundation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Hope, research, and community.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-primary">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/steps-to-marrow" className="hover:text-primary">
                  Steps to Marrow
                </Link>
              </li>
              <li>
                <Link href="/registry-analytics" className="hover:text-primary">
                  Registry Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jada Bascom Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
