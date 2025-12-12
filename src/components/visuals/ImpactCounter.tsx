'use client'

import React from 'react'

interface ImpactCounterProps {
  label: string
  value: number
  suffix?: string
}

export function ImpactCounter({ label, value, suffix = '' }: ImpactCounterProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
