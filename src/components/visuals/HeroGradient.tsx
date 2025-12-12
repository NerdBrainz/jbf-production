import React from 'react'

export function HeroGradient() {
  return (
    <>
      <div className="pointer-events-none absolute -left-10 top-10 h-80 w-80 rounded-full violet-glow" />
      <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full violet-glow" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
    </>
  )
}
