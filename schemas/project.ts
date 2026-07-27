// schemas/project.ts
// Sanity schema for portfolio case studies.
// Core fields are required and enough to publish a lightweight highlight today.
// Story fields (stats, body, testimonial) are optional — fill them in when
// you write the full case study later, on the same document.

import { defineType, defineField, defineArrayMember } from 'sanity'

// Shared by the body's `block`/`image` entries and by the two-column
// layout's column content, so columns can hold the same normal
// paragraphs/images the rest of the body does (just not nested columns).
const bodyContentMembers = [
  defineArrayMember({ type: 'block' }),
  defineArrayMember({
    type: 'image',
    options: { hotspot: true },
    fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
  }),
]

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core' },
    { name: 'media', title: 'Media' },
    { name: 'story', title: 'Case study' },
    { name: 'access', title: 'Access' },
  ],
  fields: [
    // ---------- Core / scannable info ----------
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'core',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'core',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client / company',
      type: 'string',
      group: 'core',
      description: 'Use "Confidential" or an anonymized name for NDA work',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'core',
      description: 'One line for grid cards, e.g. "Cut checkout drop-off by 24%"',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'core',
      description: 'Used on cards and as the meta description',
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: 'role',
      title: 'Your role(s)',
      type: 'array',
      group: 'core',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'disciplines',
      title: 'Disciplines',
      type: 'array',
      group: 'core',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          'Product design',
          'Service design',
          'Brand design',
          'Design systems',
          '0→1',
        ],
      },
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      group: 'core',
      description: 'e.g. Fintech, Healthcare, B2B SaaS',
    }),
    defineField({
      name: 'year',
      title: 'Year(s)',
      type: 'string',
      group: 'core',
      description: 'e.g. "2023" or "2022–2023"',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      group: 'core',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
      group: 'core',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      group: 'core',
      description: 'Lower numbers appear first. Leave blank to sort by year.',
    }),

    // ---------- Media ----------
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
    }),

    // ---------- Case study (optional, add later) ----------
    defineField({
      name: 'stats',
      title: 'Impact stats',
      type: 'array',
      group: 'story',
      description: 'Quick scannable numbers, e.g. "24%" / "Reduction in drop-off"',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Case study body',
      type: 'array',
      group: 'story',
      description: 'The full story. Leave empty for now, write it later — same document.',
      of: [
        ...bodyContentMembers,
        defineArrayMember({
          type: 'object',
          name: 'pullQuote',
          title: 'Pull quote',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text' }),
            defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
          ],
          preview: {
            select: { title: 'quote' },
          },
        }),
        defineArrayMember({
          type: 'object',
          name: 'twoColumn',
          title: 'Two columns',
          description: 'Side-by-side columns — mix text and images freely in each',
          fields: [
            defineField({
              name: 'left',
              title: 'Left column',
              type: 'array',
              of: bodyContentMembers,
            }),
            defineField({
              name: 'right',
              title: 'Right column',
              type: 'array',
              of: bodyContentMembers,
            }),
          ],
          preview: {
            prepare() {
              return { title: 'Two columns' }
            },
          },
        }),
        defineArrayMember({
          type: 'object',
          name: 'imageGrid',
          title: 'Image grid',
          fields: [
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'string',
              options: {
                list: [
                  { title: '2 columns', value: '2' },
                  { title: '3 columns', value: '3' },
                ],
                layout: 'radio',
              },
              initialValue: '2',
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
                    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: { media: 'images.0', columns: 'columns' },
            prepare({ media, columns }) {
              return { title: `Image grid (${columns ?? '2'} columns)`, media }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      group: 'story',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'roleAndCompany', title: 'Role & company', type: 'string' }),
      ],
    }),

    // ---------- Access control ----------
    defineField({
      name: 'visibility',
      title: 'Visibility',
      type: 'string',
      group: 'access',
      options: {
        list: [
          { title: 'Public', value: 'public' },
          { title: 'Password protected', value: 'protected' },
          { title: 'Available on request', value: 'onRequest' },
        ],
        layout: 'radio',
      },
      initialValue: 'public',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'password',
      title: 'Override password',
      type: 'string',
      group: 'access',
      description:
        'Leave blank to use the sitewide password (set as an env var in Astro). Only used when visibility is "Password protected."',
      hidden: ({ document }) => document?.visibility !== 'protected',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
  },
})
