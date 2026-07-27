import type { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
  className?: string;
}

/**
 * Label-left / content-right pattern used throughout guglieri.com (Info,
 * Work Experience, etc.) — reused across About/Services for a consistent
 * structural device.
 */
export default function Section({ label, children, className = "" }: Props) {
  return (
    <section className={`grid grid-cols-1 gap-6 sm:grid-cols-[8rem_1fr] sm:gap-10 ${className}`}>
      <h2 className="text-sm text-neutral-500">{label}</h2>
      <div>{children}</div>
    </section>
  );
}
