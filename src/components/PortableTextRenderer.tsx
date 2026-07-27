import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

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
  },
}

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="prose prose-neutral max-w-none">
      <PortableText value={value} components={components} />
    </div>
  )
}
