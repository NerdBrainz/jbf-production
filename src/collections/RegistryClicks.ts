import type { CollectionConfig } from 'payload'

export const RegistryClicks: CollectionConfig = {
  slug: 'registry-clicks',
  admin: {
    useAsTitle: 'country',
    group: 'Analytics',
    description: 'Read-only log of clicks to registries.',
  },
  access: {
    read: ({ req: { user } }) => (user as any)?.role === 'admin', // Only admin can see data
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
