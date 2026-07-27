// Fixed top-level page order, used for both the nav and the sequential
// "next" link at the bottom of each page (borrowed pattern from guglieri.com).
export const pages = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

// Nav items for launch — Work, About, Services, Writing, Contact.
// Home is reachable via the site name in the header, not listed again in nav.
export const navItems = pages.filter((page) => page.label !== "Home");

export function getNextPage(currentPath: string) {
  const index = pages.findIndex((page) => page.href === currentPath);
  if (index === -1) return undefined;
  return pages[(index + 1) % pages.length];
}
