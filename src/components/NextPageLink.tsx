"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNextPage } from "@/lib/nav";

export default function NextPageLink() {
  const pathname = usePathname();
  const next = getNextPage(pathname);

  if (!next) return null;

  return (
    <Link
      href={next.href}
      className="group -mx-6 mt-20 flex items-baseline justify-between border-t border-neutral-200 px-6 py-12 text-neutral-900 transition-colors hover:bg-neutral-50"
    >
      <span className="text-2xl font-medium text-neutral-400">Next</span>
      <span className="flex items-center gap-3 text-3xl font-medium tracking-tight">
        {next.label}
        <span
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </Link>
  );
}
