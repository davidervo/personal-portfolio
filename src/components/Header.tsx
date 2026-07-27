"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-medium tracking-tight text-neutral-900">
            Your Name
          </span>
          <span className="text-xs text-neutral-500">Interaction designer</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm text-neutral-600">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`transition-colors hover:text-neutral-900 ${
                      isActive ? "font-medium text-neutral-900" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
