// schemas/about.ts
// Singleton document for the About page: bio, photo, resume, and the
// work-experience timeline. There should only ever be one of these —
// see the note on pinning it as a singleton in the Studio structure.

import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short intro line, e.g. "Interaction designer based in ..."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 6,
      description: 'The main "who you are" paragraph(s)',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'experience',
      title: 'Work experience',
      type: 'array',
      description: 'Ordered newest to oldest — drag entries to reorder',
      of: [defineArrayMember({ type: 'experienceEntry' })],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About page' }
    },
  },
})
