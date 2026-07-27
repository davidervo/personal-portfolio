import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Large, mixed-weight hero statement — base text in a lighter neutral,
 * emphasized words in bold black. Static markup for now (no CMS rich text
 * wired up), styling matches the guglieri.com reference.
 */
export default function HeroHeading({ children }: Props) {
  return (
    <h1 className="max-w-3xl text-4xl font-normal leading-tight tracking-tight text-neutral-500 sm:text-5xl">
      {children}
    </h1>
  );
}
