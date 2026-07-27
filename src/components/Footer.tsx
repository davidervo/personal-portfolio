const email = "hello@example.com";
const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-16 pt-20">
      <div className="grid grid-cols-1 gap-8 border-t border-neutral-200 pt-10 sm:grid-cols-2">
        <div>
          <p className="text-neutral-900">Reach out to connect</p>
          <p className="text-neutral-900">or collaborate</p>
          <a
            href={`mailto:${email}`}
            className="mt-1 inline-block text-neutral-500 hover:text-neutral-900"
          >
            {email}
          </a>
        </div>
        <ul className="space-y-1 sm:text-right">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-medium text-neutral-900 hover:text-neutral-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} Your Name
      </p>
    </footer>
  );
}
