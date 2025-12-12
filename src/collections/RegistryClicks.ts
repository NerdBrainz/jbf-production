import type { Access, CollectionConfig } from 'payload'

type MaybeUser = { role?: string } | undefined

const isAdmin: Access = ({ req: { user } }) => {
  const typedUser = user as MaybeUser
  return typedUser?.role === 'admin'
}

export const RegistryClicks: CollectionConfig = {
  slug: 'registry-clicks',
  admin: {
    useAsTitle: 'country',
    group: 'Analytics',
    description: 'Read-only log of clicks to registries.',
  },
  access: {
    read: isAdmin, // Only admin can see data
    create: () => true, // Public API allows creation (tracking)
    update: () => false, // Immutable
    delete: () => false, // Immutable
  },
  fields: [
    {
      name: 'country',
      type: 'text', // Store ISO code e.g., "US", "UK", "DE"
      required: true,
    },
    {
      name: 'registryName',
      type: 'text', // e.g., "Be The Match", "DKMS"
    },
    // Payload adds 'createdAt' automatically, which gives you the timestamp
  ],
}
