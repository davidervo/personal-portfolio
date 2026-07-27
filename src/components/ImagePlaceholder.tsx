interface Props {
  className?: string;
  label?: string;
}

/**
 * Flat placeholder standing in for real photography until content is wired
 * up — keeps the design review focused on layout/type/spacing, not stock
 * imagery. Swap for real images once Prismic media fields exist.
 */
export default function ImagePlaceholder({ className = "", label }: Props) {
  return (
    <div
      className={`flex items-center justify-center bg-neutral-100 text-xs text-neutral-400 ${className}`}
    >
      {label}
    </div>
  );
}
