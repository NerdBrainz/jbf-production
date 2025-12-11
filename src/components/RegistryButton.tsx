'use client'

interface RegistryButtonProps {
  country: string
  registryName: string
  url: string
}

export const RegistryButton = ({ country, registryName, url }: RegistryButtonProps) => {
  const handleClick = async () => {
    // 1. Open the link immediately
    window.open(url, '_blank')

    // 2. Log the data securely via server action or API
    await fetch('/api/track-click', {
      method: 'POST',
      body: JSON.stringify({ country, registryName }),
    })
  }

  return <button onClick={handleClick}>Register in {country}</button>
}
