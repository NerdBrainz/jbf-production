import type { CollectionConfig } from 'payload'
import { seo } from '../fields/seo'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        { name: 'startDateTime', type: 'date', required: true },
        { name: 'endDateTime', type: 'date' },
      ],
    },
    {
      name: 'location',
      type: 'text', // e.g., "Seattle, WA" or "Zoom"
    },
    {
      name: 'link',
      type: 'text',
      label: 'Registration/External Link',
    },
    seo,
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
