import type { Access, CollectionConfig } from 'payload'
import { seo } from '@/fields/seo' // Your SEO field group

type MaybeUser = { id?: string | number; role?: string } | undefined

const isAuthorOrAdmin: Access = ({ req: { user } }) => {
  const typedUser = user as MaybeUser

  if (typedUser?.role === 'admin') {
    return true
  }

  return { author: { equals: typedUser?.id } }
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  access: {
    read: () => true, // Everyone can read
    // Guests can only update their own posts
    update: isAuthorOrAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Steps to Marrow (Jeana’s Journal)', value: 'steps-to-marrow' },
        { label: 'Foundation News', value: 'news' },
        { label: 'Educational', value: 'education' },
      ],
      required: true,
      defaultValue: 'news',
      admin: { position: 'sidebar' },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      defaultValue: ({ req }) => req.user?.id,
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    seo, // SEO Field
    {
      name: 'content',
      type: 'richText', // The main body
    },
  ],
}
