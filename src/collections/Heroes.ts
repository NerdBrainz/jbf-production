import type { CollectionConfig } from 'payload'

export const Heroes: CollectionConfig = {
  slug: 'heroes',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Marrow Donor', value: 'marrow' },
        { label: 'Stem Cell Donor', value: 'stem-cell' },
        { label: 'Financial Supporter', value: 'monetary' },
        { label: 'Advocate', value: 'advocate' },
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'story',
      type: 'textarea',
      label: 'Short Bio / Story',
    },
  ],
}
