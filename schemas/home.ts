// schemas/home.ts
// Singleton document for the Home page hero. Featured work is not stored
// here — it's pulled live from `project` documents with `featured: true`,
// so there's nothing to keep in sync when the work list changes.

import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero heading',
      description:
        'Short hero statement, e.g. "I design interfaces people actually enjoy using." Bold the word(s) you want emphasized.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [{ title: 'Bold', value: 'strong' }],
            annotations: [],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero subheading',
      type: 'text',
      rows: 2,
      description: 'One line under the hero, e.g. a summary of experience and focus.',
    }),
    defineField({
      name: 'featuredSectionTitle',
      title: 'Featured work section title',
      type: 'string',
      initialValue: 'Selected work',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home page' }
    },
  },
})
