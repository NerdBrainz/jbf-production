import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    {
      name: 'announcementBanner',
      type: 'group',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Banner?',
        },
        {
          name: 'message',
          type: 'text',
          label: 'Banner Message',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL (Optional)',
        },
      ],
    },
    {
      name: 'fundraising',
      type: 'group',
      fields: [
        {
          name: 'givebutterCode',
          type: 'text',
          label: 'GiveButter Campaign Code',
          admin: { description: 'The code used to embed the widget.' },
        },
      ],
    },
  ],
}
