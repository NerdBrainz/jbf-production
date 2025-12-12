import React from 'react'
import './styles.css'
import { ThemeToggle } from '@/components/ThemeToggle'

const highlights = [
  {
    title: 'Patient-centered support',
    detail: 'Resources, counseling, and stories that put families first.',
    description:
      'The patient is at the heart of everything we do. Our goal is to provide support and resources to help them navigate their journey and give them a shoulder to lean on.',
  },
  {
    title: 'Collaboration and community outreach',
    detail: 'Funding and partnerships aimed at accelerating better outcomes.',
    description:
      'The Jada Bascom Foundation is dedicated to fostering collaboration and community outreach to accelerate better outcomes in bone marrow and stem cell donation worldwide.',
  },
  {
    title: 'Community you can feel',
    detail: 'Events, registry insights, and ways to get involved—wherever you are.',
    description:
      'Our goal is to save lives by expanding sign-ups to worlds marrow registries and creating a community of giving that can be felt around the world.',
  },
]

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="pointer-events-none absolute -left-10 top-10 h-80 w-80 rounded-full violet-glow" />
      <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full violet-glow" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-10 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-pink-500 text-xl font-bold text-slate-950 shadow-lg shadow-purple-500/20">
            JB
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
              Jada Bascom Foundation
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Hope, research, and community.
            </p>
          </div>
        </div>
        <div className="pill hidden items-center gap-2 rounded-full px-4 py-2 text-sm text-[hsl(var(--foreground))] backdrop-blur-sm sm:flex">
          <span className="h-2 w-2 rounded-full bg-purple-300 animate-pulse" />
          Coming soon
        </div>
        <ThemeToggle />
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-16 lg:px-8 lg:pb-24">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))] shadow-lg shadow-purple-500/15">
              A new digital home is on the way
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              Building a brighter path for bone marrow support and research.
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] sm:text-xl">
              The Jada Bascom Foundation is relaunching with a renewed focus on connecting people to
              their marrow and stem cell registries, supporting families, and sharing the impact of
              every match.
            </p>
            <a
              href="https://www.nmdp.org/get-involved/join-the-registry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/40 transition hover:scale-105 hover:shadow-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span>Join the National Marrow Donor Program </span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-4 text-sm text-[hsl(var(--card-foreground))] shadow-inner">
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                Our priority
              </p>
              <p className="mt-2 text-base font-semibold text-[hsl(var(--card-foreground))]">
                Connecting people to their national marrow and stem cell registries so matches can
                happen faster.
              </p>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                We are publishing a guided directory for the U.S., Canada, UK, EU, and beyond. Until
                the new site launches, use your country&apos;s official registry to join and stay
                listed as a donor.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-2xl p-6">
                <p className="text-sm text-[hsl(var(--primary))]">What to expect</p>
                <p className="mt-3 text-lg font-semibold text-[hsl(var(--card-foreground))]">
                  Stories, registry insights, and ways to take action—designed for families and
                  partners.
                </p>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <p className="text-sm text-[hsl(var(--primary))]">Timeline</p>
                <p className="mt-3 text-lg font-semibold text-[hsl(var(--foreground))]">
                  The refreshed experience is targeted for early 2026. Until then, use your
                  country&apos;s official registry to join as a donor.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel relative rounded-3xl p-8 shadow-2xl lg:p-10">
            <div
              className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-400/20 to-purple-900/10 blur-3xl"
              aria-hidden
            />
            <div className="flex items-center justify-between text-sm text-[hsl(var(--card-foreground))]">
              <span>Foundation at a glance</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--card))] px-3 py-1 text-xs">
                A culture of giving
              </span>
            </div>
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between rounded-2xl bg-[hsl(var(--card))] px-4 py-3 shadow-inner">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                    Programs
                  </p>
                  <p className="text-lg font-semibold text-[hsl(var(--card-foreground))]">
                    Community donor drives, patient support, and an expanding network to massively
                    increase bone marrow and stem cell donor registration world wide.
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[hsl(var(--card-foreground))]">
                  Donate
                </span>
              </div>
              <div className="rounded-2xl bg-[hsl(var(--card))] p-4 shadow-inner">
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                  What we are building
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--foreground))]">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    Modern giving and volunteering flows
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    Guides for patients, caregivers, and clinicians
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    Data-informed registry storytelling
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-4 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                    Already ready?
                  </p>
                  <p className="text-base font-semibold text-[hsl(var(--foreground))]">
                    Go to your national registry (e.g., Be The Match in the U.S., Canadian Blood
                    Services, DKMS, NHSBT) and enroll as a marrow or stem cell donor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="glass-panel flex flex-col gap-3 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                {item.title}
              </p>
              <p className="text-lg font-semibold text-[hsl(var(--card-foreground))]">
                {item.detail}
              </p>
              <div className="h-px bg-gradient-to-r from-purple-400/70 via-white/10 to-transparent" />
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-pink-400/5 to-slate-900 px-6 py-8 shadow-xl lg:px-10">
          <div className="max-w-4xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
              Our story
            </p>
            <p className="text-lg text-[hsl(var(--foreground))]">
              Founded in 2009 by Jeana Moore when her granddaughter Jada faced Acute Myeloid
              Leukemia, the Jada Bascom Foundation exists because a matching bone marrow donor gave
              Jada a second chance. Today she is in remission and thriving, and this foundation is
              our way of giving back.
            </p>
            <p className="text-lg text-[hsl(var(--foreground))]">
              We organize donor registration drives across the Inland Northwest and work with
              partners worldwide to grow marrow and stem cell registries like Be The Match. Jeana is
              a volunteer ambassador for the National Donor Marrow Program and leads Steps To Marrow
              to help families find their match.
            </p>
            <p className="text-lg text-[hsl(var(--foreground))]">
              As a nonprofit 501(c)(3), our mission is simple:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[hsl(var(--foreground))]">
              <li>Increase awareness of the urgent need for bone marrow and stem cell donors.</li>
              <li>Recruit donors to join national and international registries.</li>
              <li>Support potential donors with the cost of tissue typing.</li>
            </ul>
            <p className="text-lg font-semibold text-[hsl(var(--foreground))]">
              If you are healthy and eligible, please join your country&apos;s official registry
              today and stay listed—you could be the match someone is waiting for. Find the{' '}
              <span className="underline">hero</span> in you.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.nmdp.org/get-involved/join-the-registry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Join the NMDP Registry
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
