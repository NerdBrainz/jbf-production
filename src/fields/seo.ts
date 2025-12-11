import { Field } from 'payload'

export const seo: Field = {
  name: 'meta',
  label: 'SEO & Metadata',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Meta Title',
      minLength: 20,
      maxLength: 60, // Google truncates after ~60 chars
      admin: {
        description: 'The blue link text in Google results. Keep under 60 chars.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Meta Description',
      minLength: 50,
      maxLength: 160, // Google truncates after ~160 chars
      admin: {
        description: 'The grey text under the link. Keep under 160 chars.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Must match your Media collection slug
      label: 'OG Image (Social Share)',
      admin: {
        description:
          'Image shown when shared on Slack/LinkedIn/Twitter. Recommended size: 1200x630.',
      },
    },
  ],
}
