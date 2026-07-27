// schemas/experienceEntry.ts
// Reusable object type for a single role in the About page work-experience
// timeline. Not a standalone document — it only ever lives inside the
// `about` document's `experience` array.

import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'experienceEntry',
  title: 'Experience entry',
  type: 'object',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start year',
      type: 'string',
      description: 'e.g. "2022"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End year',
      type: 'string',
      description: 'e.g. "2025". Leave blank if this is your current role — the site will show "Present".',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'What you actually did in this role',
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Selected projects',
      type: 'array',
      description: 'Case studies from this era worth linking to. Teaser-only projects can be referenced too — the page just won\'t link them yet.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      company: 'company',
      role: 'role',
      start: 'startDate',
      end: 'endDate',
    },
    prepare({ company, role, start, end }) {
      return {
        title: `${role} — ${company}`,
        subtitle: `${start} – ${end || 'Present'}`,
      }
    },
  },
})
