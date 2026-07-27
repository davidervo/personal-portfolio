import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

// Column content only supports plain paragraphs/images (no nested columns),
// so it gets its own smaller components map rather than reusing `components`.
const columnComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(700).url()}
        alt={value.alt ?? ''}
        className="w-full rounded-lg"
        loading="lazy"
      />
    ),
  },
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(1200).url()}
        alt={value.alt ?? ''}
        className="my-8 w-full rounded-lg"
        loading="lazy"
      />
    ),
    pullQuote: ({ value }) => (
      <blockquote className="my-8 border-l-2 border-neutral-300 pl-6 text-xl text-neutral-800">
        <p>{value.quote}</p>
        {value.attribution && (
          <cite className="mt-2 block text-sm not-italic text-neutral-500">
            {value.attribution}
          </cite>
        )}
      </blockquote>
    ),
    twoColumn: ({ value }) => (
      <div className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <PortableText value={value.left ?? []} components={columnComponents} />
        </div>
        <div className="space-y-4">
          <PortableText value={value.right ?? []} components={columnComponents} />
        </div>
      </div>
    ),
    imageGrid: ({ value }) => {
      const columns = value.columns === '3' ? 3 : 2
      const width = columns === 3 ? 500 : 700
      return (
        <div
          className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          style={columns === 3 ? { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' } : undefined}
        >
          {(value.images ?? []).map((image: { alt?: string; caption?: string }, index: number) => (
            <figure key={index}>
              <img
                src={urlFor(image).width(width).url()}
                alt={image.alt ?? ''}
                className="w-full rounded-lg"
                loading="lazy"
              />
              {image.caption && (
                <figcaption className="mt-2 text-sm text-neutral-500">{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )
    },
  },
}

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="prose prose-neutral max-w-none">
      <PortableText value={value} components={components} />
    </div>
  )
}
