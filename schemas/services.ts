// schemas/services.ts
// Singleton document for the Services ("work with me") page. Simple v1:
// an intro, a list of offerings, and a single call-to-action — confirm
// before finalizing, per the project brief.

import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services page',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      description: 'The "work with me" pitch at the top of the page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'offering',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        }),
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Call-to-action label',
      type: 'string',
      initialValue: 'Get in touch',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Call-to-action link',
      type: 'string',
      initialValue: '/contact',
      description: 'Relative path (e.g. /contact) or a full URL',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Services page' }
    },
  },
})
