import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <>{children} </>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
  },
}

export default function HeroHeading({ value }: { value: PortableTextBlock[] }) {
  return (
    <h1 className="max-w-3xl text-4xl font-normal leading-tight tracking-tight text-neutral-500 sm:text-5xl">
      <PortableText value={value} components={components} />
    </h1>
  )
}
